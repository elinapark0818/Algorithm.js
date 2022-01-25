function isEmptyObj(obj) {
  if (obj.constructor === Object && _.isEmpty(obj)) {
    return true;
  }
  return false;
}

function isEmptyArr(arr) {
  if (Array.isArray(arr) && arr.length === 0) {
    return true;
  }

  return false;
}
