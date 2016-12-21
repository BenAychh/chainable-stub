const spy = require('sinon').spy;

const proxy = new Proxy({ __calls: [], __spies: {} }, {
  get(obj, key) {
    if (key in obj) {
      return obj[key];
    }
    obj.__calls.push(key);
    if (!obj.__spies[key]) {
      obj.__spies[key] = spy(); // eslint-disable-line
    }
    return (...args) => {
      obj.__spies[key](...args);
      return proxy;
    };
  },
});

module.exports = proxy;
