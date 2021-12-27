localStorage.setItem(
  "proverbs",
  JSON.stringify([
    "좌절감으로 배움을 늦추지 마라",
    "Stay hungry, Stay foolish",
    "Memento Mori",
    "Carpe diem",
    "배움에는 끝이 없다",
  ])
);

export function getProverbs(filterBy = "") {
  const json = localStorage.getItem("proverbs");
  const proverbs = JSON.parse(json) || [];
  return proverbs.filter((prvb) =>
    prvb.toLowerCase().includes(filterBy.toLowerCase())
  );
}
