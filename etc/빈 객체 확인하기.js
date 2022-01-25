function isEmptyObj(obj) {
  if (obj.constructor === Object && _.isEmpty(obj)) {
    return true;
  }
  return false;
}
