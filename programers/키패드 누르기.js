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

// 다른 풀이

function solution(numbers, hand) {
    // hand는 'left' 또는 'right' 이다.  왼손잡이 or 오른손잡이
    hand = hand[0] === 'r' ? 'R' : 'L'
    // 1 은 키패드 '0' 
    // 4 는 키패드 '1', '2', '3' 
    // 3 은 키패드 '4', '5', '6'
    // 2 는 키패드 '7', '8', '9'
    let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
    // 처음 손가락의 위치
    let thumb = { L:[1, 1], R :[1, 1] }
    // map()과 화살표 함수를 사용해서 위방향으로만 움직일 때
    // 정규식 test()를 사용해서 true 일 경우
    // 왼손엄지와 가까운 키패드 '1', '4', '7' 은 'L'을 리턴하게 한다
    // 오른손엄지와 가까운 키패드 '3', '6', '9' 는 'R'을 리턴하게 한다
    return numbers.map(i => {
        if (/[147]/.test(i)) {
            thumb.L = [ position[i], 1 ]
            return 'L'
        }
        if (/[369]/.test(i)) {
            thumb.R = [ position[i], 1 ]
            return 'R'
        }
        // 왼손엄지에서부터의 거리와 오른손 엄지에서부터의 거리를
        // Math.abs()를 사용해서 절대값으로 구한다.
        let distanceLeft = Math.abs(position[i] - thumb.L[0]) + thumb.L[1]
        let distanceRight = Math.abs(position[i] - thumb.R[0]) + thumb.R[1]
        // 거리가 같을 경우 왼손잡이인지 오른손잡이인지 확인해서 리턴하게 한다
        if (distanceLeft === distanceRight) {
            thumb[hand] = [position[i], 0]
            return hand
        }
        // distanceLeft 가 distanceRight 보다 작은 경우, 'L'을 리턴한다
        // distanceRight 가 distanceLeft 보다 작은 경우, 'R'을 리턴한다
        if ( distanceLeft < distanceRight ) {
            thumb.L = [position[i], 0]
            return 'L'
        } else {
            thumb.R = [position[i], 0]
            return 'R'
        }
    // join()을 사용해서 배열을 합친다.
    }).join("");
}

// 정규식 test() 메소드
// 주어진 문자열이 정규식에 만족하는 지 판별하고, 그 여부는 Boolean 값으로 반환한다
// 만족하면 true, 아니면 false를 반환한다