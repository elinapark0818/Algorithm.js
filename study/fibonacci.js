// 피보나치 수 : F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 점화식.

// 피보나치 수열 구하기

function Fibonacci(num) {
    let result = [0, 1]; // 0번째 피보나치 수는 0이고, 1번째 피보나치는 1이다.
    for (let i=2; i<=num; i++) { 
        // 2번째 피보나치 수부터는! 반복문으로 구하자.
        result.push(result[i-2] + result[i-1]); // n-2번째 피보나치 수와 n-1번째 피보나치 수를 합한 결과다.
    }
    return result
}

Fibonacci(10)

// 재귀함수 피보나치 수열의 합 구하기

function Fibonacci1(n) {
    if(n <= 1) {
        return 1;
    }else {
        return Fibonacci1(n-2) + Fibonacci1(n-1);
    }
}
Fibonacci1(10)

// 하드코딩 for문으로 피보나치 수열의 합 구하기

function Fibonacci2(n) {
    let minus2 = 1;
    let minus1 = 1;
    let result_ = 0;

    for(let i=1; i<n; i++) {
        result_ = minus2 + minus1;
        minus2 = minus1;
        minus1 = result_;
    }
    return result_;
}
Fibonacci2(10)

// 반복문 사용하지 않고, n번째 피보나치 수 구하기

function Fibonacci3(n) {
    let arr = [0, 1]; // 0번째 피보나치 수는 0이고, 1번째 피보나치는 1이니까 미리 선언
    let calculation = (n) => {
        if (arr[n] !== undefined) {
            return arr[n]; // 0이나 1을 입력할 경우 동일하므로 리턴 ㄱㄱ
        }
        arr[n] = calculation(n-2) + calculation(n-1); // 그렇지 않을 경우 n-2번째 피보나치 수와 n-1번째 피보나치 수를 합한 결과다.
        return arr[n];
    };
    return calculation(n);
}
Fibonacci3(10)