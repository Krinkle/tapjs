const Format = require('./format.js')

class Same extends Format {
  constructor (obj, options = {}) {
    super(obj, options)
    this.expect = options.expect

    if (!options || !options.hasOwnProperty('expect'))
      throw new TypeError('Same called without expected value')

    if (options.style === 'tight')
      throw new Error('"tight" style not appropriate for diffs')

    this.provisional = !!options.provisional

    this.expectPath = (this.parent ? this.parent.expectPath : [])
      .concat([this.expect])
    this.simpleMatch(this.expect)
  }

  simpleMatch () {
    this.simple = this.test()
    if (!this.simple)
      this.unmatch()
  }

  test () {
    const a = this.object
    const b = this.expect
    return (
      typeof a !== 'object' && typeof b !== 'object' && a == b ? true
        : a === b ? true
        : a === null || b === null ? a == b
        : a !== a ? b !== b
        : typeof a === 'symbol' || typeof b === 'symbol'
          ? typeof a === typeof b && a.toString() === b.toString()
        : typeof a !== 'object' || typeof b !== 'object' ? false
        : this.isSet() && !(new Format(b).isSet()) ? false
        : this.isMap() && !(new Format(b).isMap()) ? false
        : this.isArray() && !(new Format(b).isArray()) ? false
        : Buffer.isBuffer(a) && Buffer.isBuffer(b) ? a.equals(b)
        : a instanceof Date && b instanceof Date
          ? a.getTime() === b.getTime()
        : a instanceof RegExp && b instanceof RegExp ? this.regexpSame(a, b)
        : 'COMPLEX' // might still be a deeper mismatch, of course
    )
  }

  prefix (str, pref) {
    if (pref === '-' || pref === '+')
      this.unmatch()

    const tail = str.slice(-1) === '\n' ? '\n' : ''
    if (tail)
      str = str.slice(0, -1)
    return pref + str.split('\n').join(`\n${pref}`) + tail
  }

  prettyDiff (diff) {
    const difflines = diff.split('\n')
    const pretty = ['--- actual', '+++ expected']

    if (!this.options.cleanerDiffs)
      return pretty.concat(difflines).join('\n')

    // unsure on whether this is a good idea.
    const hunkn = []
    const hunkp = []
    for (let n = 0; n < difflines.length; n++) {
      switch (difflines[n].charAt(0)) {
        case ' ':
          if (hunkn.length) pretty.push.apply(pretty, hunkn)
          hunkn.length = 0
          if (hunkp.length) pretty.push.apply(pretty, hunkp)
          hunkp.length = 0
          pretty.push(difflines[n])
          continue
        case '-':
          hunkn.push(difflines[n])
          continue
        case '+':
          hunkp.push(difflines[n])
          continue
        default:
          throw new Error(`invalid diffline "${difflines[n]}"`)
      }
    }
    pretty.push.apply(pretty, hunkn)
    pretty.push.apply(pretty, hunkp)
    return pretty.join('\n')
  }

  // print as a plain old Format, because super.print() will end up
  // diving into the worker methods which are overridden by design.
  // This is for when we know what we want, and don't want to dig.
  simplePrint (obj, options = {}) {
    return new Format(obj, {
      ...this.options,
      ...options,
    }).print()
  }

  print () {
    const seen = this.seen()
    const seenExpect = seen ? this.seenExpect() : seen

    // handle top-level simple matches
    // if the're shallowly unequal, then just do the diff
    const out = !this.simple ? this.diff()
      : this.simple === true
        ?  this.prefix(this.simplePrint(this.object), ' ')
      : seen !== seenExpect ? this.diff()
      : seen ? super.print()
      : !this.parent ? this.collection()
      : `${this.printStart()}${this.collection()}${this.printEnd()}`

    return this.parent ? out : this.prettyDiff(out)
  }

  // if we make it into any of these, we know it's the same type
  // there's no need to ' ' out the starts if we're already going
  // to put the ' ' in front of the key, though.
  spaceIfNoPref (s) {
    return this.id ? s : this.spaceIfNoKey(s)
  }
  spaceIfNoKey (s) {
    return this.options.hasOwnProperty('key') &&
      !(this.parent.isArray() || this.parent.isSet()) ? s : ' ' + s
  }
  printKey (k) {
    return this.prefix(super.printKey(k), ' ')
  }

  seenExpect () {
    if (!this.expect || typeof this.expect !== 'object')
      return false

    for (let p = this.parent; p; p = p.parent) {
      if (p.expect === this.expect) {
        p.id = p.id || p.getId()
        return p
      }
    }
    return false
  }

  nodeId () {
    const s = super.nodeId()
    return s ? this.spaceIfNoKey(s) : ''
  }
  arrayEmpty () { return this.spaceIfNoPref(super.arrayEmpty()) }
  arrayHead () { return this.spaceIfNoPref(super.arrayHead()) }
  arrayTail () { return ' ' + super.arrayTail() }
  setEmpty () { return this.spaceIfNoPref(super.setEmpty()) }
  setHead () { return this.spaceIfNoPref(super.setHead()) }
  setTail () { return ' ' + super.setTail() }
  mapEmpty () { return this.spaceIfNoPref(super.mapEmpty()) }
  mapHead () { return this.spaceIfNoPref(super.mapHead()) }
  mapTail () { return ' ' + super.mapTail() }
  pojoEmpty () { return this.spaceIfNoPref(super.pojoEmpty()) }
  pojoHead () { return this.spaceIfNoPref(super.pojoHead()) }
  pojoTail () { return ' ' + super.pojoTail() }

  mapIsEmpty () {
    return super.mapIsEmpty() && this.expect.size === 0
  }
  setIsEmpty () {
    return super.setIsEmpty() && this.expect.size === 0
  }
  pojoIsEmpty () {
    return super.pojoIsEmpty() && Object.keys(this.expect).length === 0
  }
  arrayIsEmpty () {
    return super.arrayIsEmpty() && this.expect.length === 0
  }

  arrayBody () {
    // just need to handle extra/missing values
    if (this.object.length === this.expect.length)
      return super.arrayBody()

    const obj = Array.isArray(this.object)
      ? this.object : Array.from(this.object)

    const exp = Array.isArray(this.expect)
      ? this.expect : Array.from(this.expect)

    let out = ''
    let key = 0
    for (; key < obj.length && key < exp.length; key++) {
      out += this.arrayEntry(key, obj[key])
    }
    for (; key < obj.length; key++) {
      this.unmatch()
      out += this.prefix(this.simplePrint(obj[key], {
        level: this.level + 1,
        parent: this,
      }), '+')
    }
    for (; key < exp.length; key++) {
      this.unmatch()
      out += this.prefix(this.simplePrint(exp[key], {
        level: this.level + 1,
        parent: this,
      }), '-')
    }
    return out
  }

  setBody () {
    let out = ''
    const seen = new Set()
    for (const val of this.object) {
      if (this.expect.has(val)) {
        seen.add(val)
        out += this.setEntry(val)
        continue
      }

      let sawMatch = false
      for (const exp of this.expect) {
        if (seen.has(exp))
          continue

        const s = this.child(val, {
          expect: exp,
          provisional: true
        })
        const sp = s.print()
        if (s.match) {
          sawMatch = true
          seen.add(exp)
          out += sp
          break
        }
      }

      if (!sawMatch) {
        this.unmatch()
        out += this.prefix(this.simplePrint(val, {
          level: this.level + 1,
          parent: this,
        }), '+')
      }
    }

    // loop through missing keys
    for (const val of this.expect) {
      if (!seen.has(val)) {
        this.unmatch()
        out += this.prefix(this.simplePrint(val, {
          level: this.level + 1,
          parent: this,
          key: val
        }), '-')
      }
    }

    return out
  }

  mapEntry (key, val, expectKey) {
    return this.child(val, {key, expectKey}).print()
  }

  mapBody () {
    const objEnt = this.object.entries()
    let out = ''
    const seen = new Set()
    for (const [key, val] of objEnt) {
      if (this.expect.has(key)) {
        out += this.mapEntry(key, val, key)
        seen.add(key)
        continue
      }
      // try to find a matching key
      let sawMatch = false
      for (const [expkey, expval] of this.expect.entries()) {
        if (seen.has(expkey)) {
          continue
        }

        const s = this.child(key, {
          expect: expkey,
          provisional: true,
        })
        const sp = s.print()
        if (s.match) {
          sawMatch = true
          seen.add(expkey)
          out += this.mapEntry(key, val, expkey)
          break
        }
      }

      if (!sawMatch) {
        this.unmatch()
        out += this.prefix(this.simplePrint(val, {
          key,
          level: this.level + 1,
          parent: this,
        }), '+')
      }
    }

    // loop through missing keys
    for (const [key, val] of this.expect.entries()) {
      if (!seen.has(key)) {
        this.unmatch()
        out += this.prefix(this.simplePrint(val, {
          level: this.level + 1,
          parent: this,
          key,
        }), '-')
      }
    }
    return out
  }

  pojoBody () {
    const objEnt = Object.entries(this.object)
    const expEnt = Object.entries(this.expect)
    let out = ''
    for (const [key, val] of objEnt) {
      if (key in this.expect)
        out += this.pojoEntry(key, val)
      else {
        this.unmatch()
        out += this.prefix(this.simplePrint(this.object[key], {
          level: this.level + 1,
          parent: this,
          key,
        }), '+')
      }
    }
    for (const [key, val] of expEnt) {
      if (key in this.object)
        continue
      this.unmatch()
      out += this.prefix(this.simplePrint(this.expect[key], {
        level: this.level + 1,
        parent: this,
        key,
      }), '-')
    }
    return out
  }

  diff () {
    const expect = this.expect
    const obj = this.object
    const pexp = this.prefix(this.simplePrint(expect, {
      seen: this.seenExpect
    }), '-')
    const texp = pexp.slice(-1) === '\n' ? '' : '\n'
    const pobj = this.prefix(this.simplePrint(obj), '+')
    const tobj = pobj.slice(-1) === '\n' ? '' : '\n'
    return `${pexp}${texp}${pobj}${tobj}`
  }

  childExpect (key) {
    // if we get here, we know that both expect and actual
    // are collections of the same type.  Otherwise, they
    // would have gotten the simple printed diff
    return this.isSet() ? key
      : this.isMap() ? this.expect.get(key)
      : this.isArray() ? this.expect[key]
      : this.expect[key]
  }

  child (obj, options, cls) {
    const expectKey = Object.prototype.hasOwnProperty
      .call(options, 'expectKey') ? options.expectKey : options.key

    return super.child(obj, {
      expect: this.childExpect(expectKey),
      ...options,
    }, cls)
  }

  unmatch () {
    this.match = false
    if (!this.provisional)
      this.parent && this.parent.unmatch()
  }

  regexpSame (a, b) {
    return a.source === b.source &&
      a.global === b.global &&
      a.multiline === b.multiline &&
      a.lastIndex === b.lastIndex &&
      a.ignoreCase === b.ignoreCase
  }
}

module.exports = Same