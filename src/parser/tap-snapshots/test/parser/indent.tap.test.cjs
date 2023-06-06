/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts > TAP > indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# nesting\\n",
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "line",
    "# Subtest: first\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok 1 - true is ok # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "first > true is ok",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.234,
          "todo": false,
        },
      ],
      Array [
        "line",
        "ok 2 - doag is also okay # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "first > doag is also okay",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.234,
          "todo": false,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 2.589,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - true is ok # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "first > true is ok",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.234,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "first > true is ok",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.234,
      "todo": false,
    },
  ],
  Array [
    "line",
    "    ok 2 - doag is also okay # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "first > doag is also okay",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.234,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "first > doag is also okay",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.234,
      "todo": false,
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=2.589ms\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 2.589,
      "todo": false,
    },
  ],
  Array [
    "line",
    "# Subtest: second\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "line",
        "ok 1 - no plan # time=1.001ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "second > no plan",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.001,
          "todo": false,
        },
      ],
      Array [
        "line",
        "# Subtest: this passes\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "line",
            "not ok granddaughter # SKIP for no raisin\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "second > this passes > granddaughter",
              "id": 0,
              "name": "granddaughter",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": "for no raisin",
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "line",
            "ok grandson # time=1.001s\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap\\n",
          ],
          Array [
            "line",
            "  it: is yaml\\n",
          ],
          Array [
            "line",
            "  ...\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second > this passes > grandson",
              "id": 0,
              "name": "grandson",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 1001,
              "todo": false,
            },
          ],
          Array [
            "line",
            "not ok grandchild # TODO\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap or yaml\\n",
          ],
          Array [
            "line",
            "  it: is garbage\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "second > this passes > grandchild",
              "id": 0,
              "name": "grandchild",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 2,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "skips": Array [],
              "time": 1200,
              "todo": 1,
              "todos": Array [],
            },
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "    not ok granddaughter # SKIP for no raisin\\n",
      ],
      Array [
        "line",
        "    ok grandson # time=1.001s\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap\\n",
      ],
      Array [
        "line",
        "      it: is yaml\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "    not ok grandchild # TODO\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap or yaml\\n",
      ],
      Array [
        "line",
        "      it: is garbage\\n",
      ],
      Array [
        "line",
        "ok 2 - this passes # time=1.200s\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "second > this passes",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1200,
          "todo": false,
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 1.2,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - no plan # time=1.001ms\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second > no plan",
      "id": 1,
      "name": "no plan",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.001,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second > no plan",
      "id": 1,
      "name": "no plan",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.001,
      "todo": false,
    },
  ],
  Array [
    "line",
    "    # Subtest: this passes\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "        not ok granddaughter # SKIP for no raisin\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second > this passes > granddaughter",
      "id": 0,
      "name": "granddaughter",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": "for no raisin",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "skip",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second > this passes > granddaughter",
      "id": 0,
      "name": "granddaughter",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": "for no raisin",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        ok grandson # time=1.001s\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap\\n",
  ],
  Array [
    "line",
    "          it: is yaml\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": Object {
        "it": "is yaml",
        "ok": 1,
        "this": "is not tap",
      },
      "fullname": "second > this passes > grandson",
      "id": 0,
      "name": "grandson",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1001,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": Object {
        "it": "is yaml",
        "ok": 1,
        "this": "is not tap",
      },
      "fullname": "second > this passes > grandson",
      "id": 0,
      "name": "grandson",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1001,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        not ok grandchild # TODO\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap or yaml\\n",
  ],
  Array [
    "line",
    "          it: is garbage\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second > this passes > grandchild",
      "id": 0,
      "name": "grandchild",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second > this passes > grandchild",
      "id": 0,
      "name": "grandchild",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "line",
    "    ok 2 - this passes # time=1.200s\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 2 - second # time=1.200ms\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second",
      "id": 2,
      "name": "second",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.2,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`

exports[`test/parser.ts > TAP > indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# nesting\\n",
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "line",
    "# Subtest: first\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok 1 - true is ok # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "first > true is ok",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.234,
          "todo": false,
        },
      ],
      Array [
        "line",
        "ok 2 - doag is also okay # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "first > doag is also okay",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.234,
          "todo": false,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 2.589,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - true is ok # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "first > true is ok",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.234,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "first > true is ok",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.234,
      "todo": false,
    },
  ],
  Array [
    "line",
    "    ok 2 - doag is also okay # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "first > doag is also okay",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.234,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "first > doag is also okay",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.234,
      "todo": false,
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=2.589ms\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "first",
      "id": 1,
      "name": "first",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 2.589,
      "todo": false,
    },
  ],
  Array [
    "line",
    "# Subtest: second\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "line",
        "ok 1 - no plan # time=1.001ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "second > no plan",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1.001,
          "todo": false,
        },
      ],
      Array [
        "line",
        "# Subtest: this passes\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "line",
            "not ok granddaughter # SKIP for no raisin\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "second > this passes > granddaughter",
              "id": 0,
              "name": "granddaughter",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": "for no raisin",
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "line",
            "ok grandson # time=1.001s\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap\\n",
          ],
          Array [
            "line",
            "  it: is yaml\\n",
          ],
          Array [
            "line",
            "  ...\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second > this passes > grandson",
              "id": 0,
              "name": "grandson",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 1001,
              "todo": false,
            },
          ],
          Array [
            "line",
            "not ok grandchild # TODO\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap or yaml\\n",
          ],
          Array [
            "line",
            "  it: is garbage\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "second > this passes > grandchild",
              "id": 0,
              "name": "grandchild",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": true,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 2,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "skips": Array [],
              "time": 1200,
              "todo": 1,
              "todos": Array [],
            },
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "    not ok granddaughter # SKIP for no raisin\\n",
      ],
      Array [
        "line",
        "    ok grandson # time=1.001s\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap\\n",
      ],
      Array [
        "line",
        "      it: is yaml\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "    not ok grandchild # TODO\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap or yaml\\n",
      ],
      Array [
        "line",
        "      it: is garbage\\n",
      ],
      Array [
        "line",
        "ok 2 - this passes # time=1.200s\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "second > this passes",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 1200,
          "todo": false,
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 1.2,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - no plan # time=1.001ms\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second > no plan",
      "id": 1,
      "name": "no plan",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.001,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second > no plan",
      "id": 1,
      "name": "no plan",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.001,
      "todo": false,
    },
  ],
  Array [
    "line",
    "    # Subtest: this passes\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "        not ok granddaughter # SKIP for no raisin\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second > this passes > granddaughter",
      "id": 0,
      "name": "granddaughter",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": "for no raisin",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "skip",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second > this passes > granddaughter",
      "id": 0,
      "name": "granddaughter",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": "for no raisin",
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        ok grandson # time=1.001s\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap\\n",
  ],
  Array [
    "line",
    "          it: is yaml\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": Object {
        "it": "is yaml",
        "ok": 1,
        "this": "is not tap",
      },
      "fullname": "second > this passes > grandson",
      "id": 0,
      "name": "grandson",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1001,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": Object {
        "it": "is yaml",
        "ok": 1,
        "this": "is not tap",
      },
      "fullname": "second > this passes > grandson",
      "id": 0,
      "name": "grandson",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1001,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        not ok grandchild # TODO\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap or yaml\\n",
  ],
  Array [
    "line",
    "          it: is garbage\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second > this passes > grandchild",
      "id": 0,
      "name": "grandchild",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second > this passes > grandchild",
      "id": 0,
      "name": "grandchild",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": true,
    },
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "line",
    "    ok 2 - this passes # time=1.200s\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 2 - second # time=1.200ms\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second",
      "id": 2,
      "name": "second",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 1.2,
      "todo": false,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`