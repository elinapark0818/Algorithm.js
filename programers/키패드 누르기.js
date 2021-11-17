// 왼손 엄지손가락은 * 키패드부터 시작한다
// 오른손 엄지손가락은 # 키패드부터 시작한다
// 키패드의 정보를 2차원 배열화하여 위치를 key값으로 알 수 있도록 객체로 선언한다
// 위치의 차이값으로 거리를 구한다. 거리를 구하는 함수를 만들면 좋을 것 같다
// 키패드 개수만큼 반복하여 키패드의 위치를 임의의 변수에 담고, 위치에 따라 오른손 혹은 왼손으로 누를 지 정한다

// 2차원 배열로 위치를 구조화한다는 생각이 들지 않았다.
// 배열과 객체에 대한 이해가 부족한게 아닐까...?
// 거리를 구하는 함수를 따로 선언해서 사용할 생각을 하지 못했다.
// 함수를 이용해서 문제를 접근하는 생각이 필요하다.


function solution(numbers, hand) {
    let answer = '';

    const keypad = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],

        4: [1, 0],
        5: [1, 1],
        6: [1, 2],

        7: [2, 0],
        8: [2, 1],
        9: [2, 2],

        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2]
    };

    let leftThumb = keypad['*'];
    let rightThumb = keypad['#'];

    for (let i=0; i<numbers.length; i++) {
        const target = numbers[i];
        let isLeftThumb = false;

        if (target === 1 || target === 4 || target === 7) {
            isLeftThumb = true;
        } else if (target === 3 || target === 6 || target === 9) {
            isLeftThumb = false;
        } else {
            const leftDistance = distance(leftThumb, keypad[target]);
            const rightDistance = distance(rightThumb, keypad[target]);

            if (leftDistance === rightDistance) {
                if (hand === 'left') {
                    isLeftThumb = true;
                }
            } else if (leftDistance < rightDistance) {
                isLeftThumb = true;
            }
        }

        if (isLeftThumb) {
            leftThumb = keypad[target];
            answer += 'L';
        } else {
            rightThumb = keypad[target];
            answer += 'R';
        }
    }
    return answer;
}

function distance(start, target) {
    let sum = 0;

    sum += Math.max(start[0], target[0]) - Math.min(start[0], target[0]);
    sum += Math.max(start[1], target[1]) - Math.min(start[1], target[1]);
    return sum;
}