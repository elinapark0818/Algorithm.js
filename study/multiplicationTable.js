
// 2단부터 9단까지
for (let i=2; i<=9; i++) {
    console.log(i+'단');
for (let j=1; j<=9; j++) {
    console.log(i + '*' + j + '=' + (i*j));
    }
}

// 특정 구구단 출력하는 함수
function multiplicationTable(number) {
    for (let i=1; i<=9; i++) {
        console.log(number + '*' + i + '=' + (number * i));
    }
}
multiplicationTable(3)