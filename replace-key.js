const replaceKey = ({ obj, old_key, new_key }) => {
  if (obj === null || typeof obj !== "object") throw new Error(`[replace-key] obj is not an object"`);
  if (!(old_key in obj)) throw new Error(`[replace-key] "${old_key}" is not a key of obj`);
  obj[new_key] = obj[old_key];
  delete obj[old_key];
  return obj;
}

if (typeof module === "object") module.exports = replaceKey;
if (typeof window === "object") window.replaceKey = replaceKey;
if (typeof self === "object") self.replaceKey = replaceKey;
