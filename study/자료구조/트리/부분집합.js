const powerSet = function (str) {
  const result = [];

  const dfs = (start = 0, arr = []) => {
    result.push(arr);

    if (arr.length === str) return;

    for (let i = start; i < str.length; i++) {
      dfs(i + 1, [...arr, str[i]]);
    }
  };
  dfs();

  return result;
};
