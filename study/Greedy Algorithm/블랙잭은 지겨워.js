function boringBlackjack(cards) {
  // TODO: 여기에 코드를 작성합니다.

  // 소수 구하기
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  //
  const blackjack = (cards) => {
    let count = 0;

    // 3장의 카드를 하나씩 확인 했을 때
    for (let i = 0; i < cards.length; i++)
      for (let j = i + 1; j < cards.length; j++)
        for (let k = j + 1; k < cards.length; k++)
          // 소수 일 경우
          if (isPrime(cards[i] + cards[j] + cards[k])) {
            // 카운트 증가
            count++;
          }
    // 카운트 리턴
    return count;
  };

  return blackjack(cards);
}
