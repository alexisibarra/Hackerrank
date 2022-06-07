import flattener from "../flattener";

describe("Flattener function", () => {
  describe("Common scenarios", () => {
    describe("One level nesting", () => {
      it("should return the flatten representation of the object", () => {
        const object = {
          g: {
            h: 3,
            i: 3,
            j: 3,
            k: 3,
          },
        };

        const flattenerResult = {
          "g.h": 3,
          "g.i": 3,
          "g.j": 3,
          "g.k": 3,
        };

        expect(flattener(object)).toStrictEqual(flattenerResult);
      });
    });

    describe("More complex nesting", () => {
      it("should return the flatten representation of the object", () => {
        const object = {
          a: {
            b: {
              c: {
                d: 1,
                e: "hello",
                f: {
                  g: [1, 2],
                },
              },
            },
          },
          g: {
            h: 3,
          },
        };

        const flattenerResult = {
          "a.b.c.d": 1,
          "a.b.c.e": "hello",
          "a.b.c.f.g.0": 1,
          "a.b.c.f.g.1": 2,
          "g.h": 3,
        };

        expect(flattener(object)).toStrictEqual(flattenerResult);
      });

      it("should return the flatten representation of the object", () => {
        const object = {
          a: {
            b: {
              c: {
                d: 1,
                e: "hello",
                f: {
                  g: [1, 2],
                },
              },
            },
            g: {
              h: 3,
            },
          },
        };

        const flattenerResult = {
          "a.b.c.d": 1,
          "a.b.c.e": "hello",
          "a.b.c.f.g.0": 1,
          "a.b.c.f.g.1": 2,
          "a.g.h": 3,
        };

        expect(flattener(object)).toStrictEqual(flattenerResult);
      });
    });
  });

  describe("Border cases", () => {
    describe("Empty Object", () => {
      it("should return the flatten representation of the object", () => {
        const object = {};

        const flattenerResult = {};

        expect(flattener(object)).toStrictEqual(flattenerResult);
      });
    });

    describe("Nested object with empty object at the end", () => {
      it("should return the flatten representation of the object", () => {
        const object = {
          a: {
            b: {
              c: {
                d: {},
              },
            },
          },
        };

        // Is this what we really want? Need more specification for the challenge
        const flattenerResult = {};

        expect(flattener(object)).toStrictEqual(flattenerResult);
      });
    });
  });
});
