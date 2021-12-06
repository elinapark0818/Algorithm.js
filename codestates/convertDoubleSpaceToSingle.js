function convertDoubleSpaceToSingle(str) {
  let arr = str.split("  ");
  let result = arr.join(" ");
  return result;
}
