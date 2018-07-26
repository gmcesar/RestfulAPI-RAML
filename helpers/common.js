const commonPatterns = {
  isEmptyObject: isEmptyObject
};

function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

module.exports = commonPatterns;
