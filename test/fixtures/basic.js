module.exports =
[ [ 'line', '1..6\n' ],
  [ 'plan', { start: 1, end: 6 } ],
  [ 'line', 'not ok\n' ],
  [ 'line', 'ok\n' ],
  [ 'assert', { ok: false, id: 1 } ],
  [ 'line', 'not ok\n' ],
  [ 'assert', { ok: true, id: 2 } ],
  [ 'line', 'ok\n' ],
  [ 'assert', { ok: false, id: 3 } ],
  [ 'line', 'ok\n' ],
  [ 'assert', { ok: true, id: 4 } ],
  [ 'assert', { ok: true, id: 5 } ],
  [ 'complete',
    { ok: false,
      count: 5,
      pass: 3,
      fail: 2,
      plan: { start: 1, end: 6 },
      failures: [ { ok: false, id: 1 }, { ok: false, id: 3 } ] } ] ]
