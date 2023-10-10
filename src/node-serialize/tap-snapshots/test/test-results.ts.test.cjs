/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/test-results.ts > TAP > test/test-results.ts > tap > count=0 1`] = `
undefined
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > count=10 1`] = `
undefined
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > failSkip > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: fails actually
|   { failSkip: true },
|   t => {
|     t.pass('fails actually', { skip: true })
| ------^
|     t.end()
|   } {
      "cause": Error: fails actually
|   { failSkip: true },
|   t => {
|     t.pass('fails actually', { skip: true })
| ------^
|     t.end()
|   } {
        "failedSkip": true,
      },
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "fails actually",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "failSkip",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > failSkip > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 1 subtest failed {
      "cause": "1 subtest failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "fails actually",
      ],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "failSkip",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > failTodo > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: fails actually
|   { failTodo: true },
|   t => {
|     t.pass('fails actually', { todo: true })
| ------^
|     t.end()
|   } {
      "cause": Error: fails actually
|   { failTodo: true },
|   t => {
|     t.pass('fails actually', { todo: true })
| ------^
|     t.end()
|   } {
        "failedTodo": true,
      },
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "fails actually",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "failTodo",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > failTodo > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 1 subtest failed {
      "cause": "1 subtest failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "fails actually",
      ],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "failTodo",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > a > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
  },
  "file": "{FILE}",
  "line": ##,
  "name": "a",
  "nesting": 1,
  "skip": true,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > a > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "a",
  "nesting": 1,
  "skip": true,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > b > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: b
| const { subtest: one } = tap.test('one', async t => {
|   const { subtest: a } = t.test('a', async () => {})
|   const { subtest: b } = t.test('b', async t => t.fail('b'))
| --------------------------------------------------^
|   const { subtest: fail } = t.test('fail', t => {
|     t.plan(3) {
      "cause": Error: b
| const { subtest: one } = tap.test('one', async t => {
|   const { subtest: a } = t.test('a', async () => {})
|   const { subtest: b } = t.test('b', async t => t.fail('b'))
| --------------------------------------------------^
|   const { subtest: fail } = t.test('fail', t => {
|     t.plan(3),
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "b",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "b",
  "nesting": 1,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > b > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 1 subtest failed {
      "cause": "1 subtest failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "b",
      ],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "b",
  "nesting": 1,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: b
| const { subtest: one } = tap.test('one', async t => {
|   const { subtest: a } = t.test('a', async () => {})
|   const { subtest: b } = t.test('b', async t => t.fail('b'))
| --------------------------------------------------^
|   const { subtest: fail } = t.test('fail', t => {
|     t.plan(3) {
      "cause": Error: b
| const { subtest: one } = tap.test('one', async t => {
|   const { subtest: a } = t.test('a', async () => {})
|   const { subtest: b } = t.test('b', async t => t.fail('b'))
| --------------------------------------------------^
|   const { subtest: fail } = t.test('fail', t => {
|     t.plan(3),
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "b",
        "fail",
        "mysteryFail",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "one",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 3 subtests failed {
      "cause": "3 subtests failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "b",
        "fail",
        "mysteryFail",
      ],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "one",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > fail > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: failure
|   const { subtest: fail } = t.test('fail', t => {
|     t.plan(3)
|     t.fail('failure')
| ------^
|     t.pass('passing')
|     t.fail('not ok') {
      "cause": Error: failure
|   const { subtest: fail } = t.test('fail', t => {
|     t.plan(3)
|     t.fail('failure')
| ------^
|     t.pass('passing')
|     t.fail('not ok'),
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "failure",
        "not ok",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "fail",
  "nesting": 1,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > fail > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 2 subtests failed {
      "cause": "2 subtests failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "failure",
        "not ok",
      ],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "fail",
  "nesting": 1,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > mysteryFail > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: Unknown test failure {
      "cause": Error: Unknown test failure,
      "code": "ERR_TEST_FAILURE",
      "failures": Array [],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "mysteryFail",
  "nesting": 1,
  "skip": true,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > mysteryFail > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 0 subtests failed {
      "cause": "0 subtests failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "mysteryFail",
  "nesting": 1,
  "skip": true,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > skip > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
  },
  "file": "{FILE}",
  "line": ##,
  "name": "skip",
  "nesting": 1,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > skip > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "skip",
  "nesting": 1,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > skipAll > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
  },
  "file": "{FILE}",
  "line": ##,
  "name": "skipAll",
  "nesting": 1,
  "skip": "skip all of it",
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > skipAll > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "skipAll",
  "nesting": 1,
  "skip": "skip all of it",
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > skipOpt > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
  },
  "file": "{FILE}",
  "line": ##,
  "name": "skipOpt",
  "nesting": 1,
  "skip": true,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > skipOpt > count=0 2`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
  },
  "file": "{FILE}",
  "line": ##,
  "name": "skipOpt",
  "nesting": 1,
  "skip": true,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > skipOpt > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "skipOpt",
  "nesting": 1,
  "skip": true,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > skipOpt > count=10 2`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "skipOpt",
  "nesting": 1,
  "skip": true,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > todo > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
  },
  "file": "{FILE}",
  "line": ##,
  "name": "todo",
  "nesting": 1,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > todo > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "todo",
  "nesting": 1,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > todoOpt > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
  },
  "file": "{FILE}",
  "line": ##,
  "name": "todoOpt",
  "nesting": 1,
  "skip": true,
  "testNumber": 2,
  "todo": true,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > todoOpt > count=0 2`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
  },
  "file": "{FILE}",
  "line": ##,
  "name": "todoOpt",
  "nesting": 1,
  "skip": true,
  "testNumber": 2,
  "todo": "message",
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > todoOpt > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "todoOpt",
  "nesting": 1,
  "skip": true,
  "testNumber": 2,
  "todo": true,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > one > todoOpt > count=10 2`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "todoOpt",
  "nesting": 1,
  "skip": true,
  "testNumber": 2,
  "todo": "message",
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > oneFail > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: nope
| )
| const { subtest: oneFail } = tap.test('oneFail', t => {
|   const { subtest: solo } = t.test('solo', async t => t.fail('nope'))
| --------------------------------------------------------^
|   if (!solo) {
|     throw new Error('failed to get subtest') {
      "cause": Error: nope
| )
| const { subtest: oneFail } = tap.test('oneFail', t => {
|   const { subtest: solo } = t.test('solo', async t => t.fail('nope'))
| --------------------------------------------------------^
|   if (!solo) {
|     throw new Error('failed to get subtest'),
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "solo",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "oneFail",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > oneFail > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 1 subtest failed {
      "cause": "1 subtest failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "solo",
      ],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "oneFail",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > oneFail > solo > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: nope
| )
| const { subtest: oneFail } = tap.test('oneFail', t => {
|   const { subtest: solo } = t.test('solo', async t => t.fail('nope'))
| --------------------------------------------------------^
|   if (!solo) {
|     throw new Error('failed to get subtest') {
      "cause": Error: nope
| )
| const { subtest: oneFail } = tap.test('oneFail', t => {
|   const { subtest: solo } = t.test('solo', async t => t.fail('nope'))
| --------------------------------------------------------^
|   if (!solo) {
|     throw new Error('failed to get subtest'),
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "nope",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "solo",
  "nesting": 1,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > oneFail > solo > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 1 subtest failed {
      "cause": "1 subtest failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "nope",
      ],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "solo",
  "nesting": 1,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > tre > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: thrown error
| )
| const { subtest: tre } = tap.test('tre', () => {
|   throw new Error('thrown error')
| --------^
| })
| const { subtest: failSkip } = tap.test( {
      "cause": Error: thrown error
| )
| const { subtest: tre } = tap.test('tre', () => {
|   throw new Error('thrown error')
| --------^
| })
| const { subtest: failSkip } = tap.test( {
        "tapCaught": "testFunctionThrow",
      },
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "thrown error",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "tre",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > tre > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 1 subtest failed {
      "cause": "1 subtest failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "thrown error",
      ],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "tre",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > two > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: failed promise
| 
| const { subtest: two } = tap.test('two', async () =>
|   Promise.reject(new Error('failed promise'))
| -----------------^
| )
| const { subtest: tre } = tap.test('tre', () => { {
      "cause": Error: failed promise
| 
| const { subtest: two } = tap.test('two', async () =>
|   Promise.reject(new Error('failed promise'))
| -----------------^
| )
| const { subtest: tre } = tap.test('tre', () => { {
        "tapCaught": "returnedPromiseRejection",
      },
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "failed promise",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "two",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > two > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 1 subtest failed {
      "cause": "1 subtest failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "failed promise",
      ],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "two",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > zro > count=0 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: test count(0) != plan(99)
[48;2;172;62;163m[38;2;255;229;241m--- expected                                                               [39m[49m[m
[48;2;58;117;0m[38;2;242;255;229m+++ actual                                                                 [39m[49m[m
[48;2;34;34;34m[38;2;117;158;239m@@ -1,1 +1,1 @@                                                            [39m[49m[m
[48;2;172;62;163m[38;2;255;229;241m-99                                                                        [39m[49m[m
[48;2;58;117;0m[38;2;242;255;229m+0                                                                         [39m[49m[m
| 
| const { subtest: zro } = tap.test('zro', t => {
|   t.plan(99)
| ----^
|   t.end()
| }) {
      "cause": Error: test count(0) != plan(99)
[48;2;172;62;163m[38;2;255;229;241m--- expected                                                               [39m[49m[m
[48;2;58;117;0m[38;2;242;255;229m+++ actual                                                                 [39m[49m[m
[48;2;34;34;34m[38;2;117;158;239m@@ -1,1 +1,1 @@                                                            [39m[49m[m
[48;2;172;62;163m[38;2;255;229;241m-99                                                                        [39m[49m[m
[48;2;58;117;0m[38;2;242;255;229m+0                                                                         [39m[49m[m
| 
| const { subtest: zro } = tap.test('zro', t => {
|   t.plan(99)
| ----^
|   t.end()
| }),
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "test count(0) != plan(99)",
      ],
      "failureType": "testCodeFailure",
    },
  },
  "file": "{FILE}",
  "line": ##,
  "name": "zro",
  "nesting": 0,
  "testNumber": 2,
}
`

exports[`test/test-results.ts > TAP > test/test-results.ts > tap > zro > count=10 1`] = `
Object {
  "column": ##,
  "details": Object {
    "duration_ms": ##,
    "error": Error: 1 subtest failed {
      "cause": "1 subtest failed",
      "code": "ERR_TEST_FAILURE",
      "failures": Array [
        "test count(0) != plan(99)",
      ],
      "failureType": "subtestsFailed",
    },
    "type": "suite",
  },
  "file": "{FILE}",
  "line": ##,
  "name": "zro",
  "nesting": 0,
  "testNumber": 2,
}
`
