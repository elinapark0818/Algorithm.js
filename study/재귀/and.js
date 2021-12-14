function and(arr) {
  const head = arr[0];
  const tail = arr.slice(1);

  if (arr.length === 0) {
    return true;
  } else if (head === false) {
    return false;
  }

  return and(tail);
}

function and(arr) {
  if (arr.length === 0) return true;
  return arr[0] && and(arr.slice(1));
}
