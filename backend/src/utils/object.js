const pickBy = (object, fn) => {
  const obj = {};

  for (const [key, value] of Object.entries(object)) {
    const shouldInclude = fn && fn(value, key);

    if (shouldInclude) {
      Object.assign(obj, { [key]: value });
    }
  }

  return obj;
};

module.exports = { pickBy };