function insertDash(str) {
  return str.replace(/[13579](?=[13579])/g, "$&-");
}
