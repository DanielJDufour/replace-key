const test = require("flug");
const replaceKey = require("./replace-key");

test("throwing error if key not found", ({ eq }) => {
  let message;
  try {
    replaceKey({ obj: {}, old_key: 'a', new_key: 'b' });
  } catch (error) {
    message = error.toString();
  }
  eq(message, `Error: [replace-key] "a" is not a key of obj`);
});

test("throwing error if key not found", ({ eq }) => {
  let message;
  try {
    replaceKey({ obj: null, old_key: 'a', new_key: 'b' });
  } catch (error) {
    message = error.toString();
  }
  eq(message, `Error: [replace-key] obj is not an object"`);
});

test("replace in place", ({ eq }) => {
  const obj = { a: 1 };
  replaceKey({ obj, old_key: 'a', new_key: 'b' });
  eq(obj, { b: 1 });
});

test("replace returns the modified obj", ({ eq }) => {
  const obj = replaceKey({ obj: { a: 1 }, old_key: 'a', new_key: 'b' });
  eq(obj, { b: 1 });
});