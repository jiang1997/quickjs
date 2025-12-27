import { assert } from "./assert.js";

let stack;

var iter = {
    next() {
        return { value: "."[this.i], done: !!this.i++ };
    },
    return() {
        stack = new Error().stack;
        return { value: undefined, done: true };
    },
    i: 0,
};

var iterable = { [Symbol.iterator]() { return iter } };

for (var _ of iterable) break

assert(stack && stack.includes("bug1266.js:18:25"));

