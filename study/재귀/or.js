function or(arr) {
  const head = arr[0];
  const tail = arr.slice(1);

  if (arr.length === 0) {
    return false;
  } else if (head === true) {
    return true;
  }

  return or(tail);
}

function or(arr) {
  if (arr.length === 0) return false;
  return arr[0] || or(arr.slice(1));
}
