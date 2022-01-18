function boringBlackjack(cards) {
  // TODO: 여기에 코드를 작성합니다.
  function p(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  function endGame(cards) {
    let count = 0;
    for (let i = 0; i < cards.length; i++)
      for (let j = i + 1; j < cards.length; j++)
        for (let k = j + 1; k < cards.length; k++)
          if (p(cards[i] + cards[j] + cards[k])) count++;
    return count;
  }

  return endGame(cards);
}
