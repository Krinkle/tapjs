/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/base.ts > TAP > basic instantiation > context after main 1`] = `
Null Object {}
`

exports[`test/base.ts > TAP > basic instantiation > context before main 1`] = `
Null Object {}
`

exports[`test/base.ts > TAP > basic instantiation > must match snapshot 1`] = `
FinalResults {
  "bailout": false,
  "count": 12,
  "fail": 6,
  "failures": Array [
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > failed test",
      "id": 6,
      "name": "failed test",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "fullname": "(unnamed test) > failed skipped test",
      "id": 6,
      "name": "failed skipped test",
      "plan": null,
      "previous": Result {
        "buffered": false,
        "closingTestPoint": false,
        "diag": null,
        "fullname": "(unnamed test) > failed test",
        "id": 6,
        "name": "failed test",
        "ok": false,
        "plan": null,
        "previous": null,
        "skip": false,
        "tapError": null,
        "time": null,
        "todo": false,
      },
      "skip": true,
      "tapError": "test point id 6 appears multiple times",
      "time": null,
      "todo": false,
    },
  ],
  "ok": false,
  "pass": 7,
  "passes": undefined,
  "plan": FinalPlan {
    "comment": "",
    "end": 12,
    "skipAll": false,
    "skipReason": "",
    "start": 1,
  },
  "skip": 6,
  "skips": Array [
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > skipped test",
      "id": 2,
      "name": "skipped test",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > skipped with message",
      "id": 3,
      "name": "skipped with message",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "with a message",
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > failed skipped test",
      "id": 6,
      "name": "failed skipped test",
      "ok": false,
      "plan": null,
      "previous": Result {
        "buffered": false,
        "closingTestPoint": false,
        "diag": null,
        "fullname": "(unnamed test) > failed test",
        "id": 6,
        "name": "failed test",
        "ok": false,
        "plan": null,
        "previous": null,
        "skip": false,
        "tapError": null,
        "time": null,
        "todo": false,
      },
      "skip": true,
      "tapError": "test point id 6 appears multiple times",
      "time": null,
      "todo": false,
    },
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > failed skipped with message",
      "id": 8,
      "name": "failed skipped with message",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": "with a message",
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > skip for filter",
      "id": 11,
      "name": "skip for filter",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "filter: blarg",
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > skip for grep",
      "id": 12,
      "name": "skip for grep",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "filter: only",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  "time": null,
  "todo": 4,
  "todos": Array [
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > todo test",
      "id": 4,
      "name": "todo test",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > todo test with message",
      "id": 5,
      "name": "todo test with message",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "with a message",
    },
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > failed todo test",
      "id": 9,
      "name": "failed todo test",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > failed todo test with message",
      "id": 10,
      "name": "failed todo test with message",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "with a message",
    },
  ],
}
`

exports[`test/base.ts > TAP > basic instantiation > must match snapshot 2`] = `
Lists {
  "fail": Array [
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > failed test",
      "id": 6,
      "name": "failed test",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  "pass": Array [],
  "skip": Array [
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > skipped test",
      "id": 2,
      "name": "skipped test",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > skipped with message",
      "id": 3,
      "name": "skipped with message",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "with a message",
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "fullname": "(unnamed test) > failed skipped test",
      "id": 6,
      "name": "failed skipped test",
      "plan": null,
      "previous": Result {
        "buffered": false,
        "closingTestPoint": false,
        "diag": null,
        "fullname": "(unnamed test) > failed test",
        "id": 6,
        "name": "failed test",
        "ok": false,
        "plan": null,
        "previous": null,
        "skip": false,
        "tapError": null,
        "time": null,
        "todo": false,
      },
      "skip": true,
      "tapError": "test point id 6 appears multiple times",
      "time": null,
      "todo": false,
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > failed skipped with message",
      "id": 8,
      "name": "failed skipped with message",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": "with a message",
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > skip for filter",
      "id": 11,
      "name": "skip for filter",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "filter: blarg",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  "todo": Array [
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > todo test",
      "id": 4,
      "name": "todo test",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > todo test with message",
      "id": 5,
      "name": "todo test with message",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "with a message",
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > failed todo test",
      "id": 9,
      "name": "failed todo test",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "(unnamed test) > failed todo test with message",
      "id": 10,
      "name": "failed todo test with message",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "with a message",
    },
  ],
}
`

exports[`test/base.ts > TAP > basic instantiation > must match snapshot 3`] = `
Counts {
  "complete": 0,
  "fail": 1,
  "pass": 1,
  "skip": 6,
  "todo": 4,
  "total": 12,
}
`

exports[`test/base.ts > TAP > prevent write after end > must match snapshot 1`] = `
TAP version 14
# Subtest: ok
    1..0
ok 1 - ok # time={TIME}

1..1

`

exports[`test/base.ts > TAP > track passes in lists if passes:true in options > must match snapshot 1`] = `
FinalResults {
  "bailout": false,
  "count": 8,
  "fail": 0,
  "failures": Array [],
  "ok": true,
  "pass": 8,
  "passes": Array [
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > this is fine",
      "id": 1,
      "name": "this is fine",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > another normal pass",
      "id": 8,
      "name": "another normal pass",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  "plan": FinalPlan {
    "comment": "",
    "end": 8,
    "skipAll": false,
    "skipReason": "",
    "start": 1,
  },
  "skip": 4,
  "skips": Array [
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > skipped test",
      "id": 2,
      "name": "skipped test",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > skipped with message",
      "id": 3,
      "name": "skipped with message",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "with a message",
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > skip for filter",
      "id": 6,
      "name": "skip for filter",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "filter: blarg",
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > skip for grep",
      "id": 7,
      "name": "skip for grep",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "filter: only",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  "time": null,
  "todo": 2,
  "todos": Array [
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > todo test",
      "id": 4,
      "name": "todo test",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
    Object {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > todo test with message",
      "id": 5,
      "name": "todo test with message",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "with a message",
    },
  ],
}
`

exports[`test/base.ts > TAP > track passes in lists if passes:true in options > must match snapshot 2`] = `
Lists {
  "fail": Array [],
  "pass": Array [
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > this is fine",
      "id": 1,
      "name": "this is fine",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > another normal pass",
      "id": 8,
      "name": "another normal pass",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  "skip": Array [
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > skipped test",
      "id": 2,
      "name": "skipped test",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": true,
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > skipped with message",
      "id": 3,
      "name": "skipped with message",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "with a message",
      "tapError": null,
      "time": null,
      "todo": false,
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > skip for filter",
      "id": 6,
      "name": "skip for filter",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": "filter: blarg",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  "todo": Array [
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > todo test",
      "id": 4,
      "name": "todo test",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "passer > todo test with message",
      "id": 5,
      "name": "todo test with message",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": "with a message",
    },
  ],
}
`

exports[`test/base.ts > TAP > track passes in lists if passes:true in options > must match snapshot 3`] = `
Counts {
  "complete": 0,
  "fail": 0,
  "pass": 2,
  "skip": 4,
  "todo": 2,
  "total": 8,
}
`
