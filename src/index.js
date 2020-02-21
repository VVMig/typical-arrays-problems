exports.min = function min(array) {
  if(array===undefined) {
    return 0;
  }
  return array.length > 0
      ? array.reduce((min, e) => (e < min ? e : min), array[0])
      : 0;
};

exports.max = function max(array) {
  if(array===undefined) {
    return 0;
  }
  return array.length > 0
      ? array.reduce((max, e) => (e > max ? e : max), array[0])
      : 0;
};

exports.avg = function avg(array) {
  if(array===undefined) {
    return 0;
  }
  return array.length > 0
      ? array.reduce((avg, e) => avg + e, 0) / array.length
      : 0;
};
