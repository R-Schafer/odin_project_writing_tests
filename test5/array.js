module.exports = {
  ave: function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  },
  min: function (arr) {
    let sort = arr.sort(function (a, b) {
      return a - b;
    });
    return sort[0];
  },
  max: function (arr) {
    let sort = arr.sort(function (a, b) {
      return a - b;
    });
    return sort[arr.length - 1];
  },
  len: function (arr) {
    return arr.length;
  },
};
