// 영화관 나이별 할인 표가 있는 페이지가 있다.
// 사용자가 나이를 입력하면, 해당 나이에 맞는 할인 등급 행을 찾아서 강조해 주는 기능을 구현하라.

// 3. JavaScript 요구사항
// e-task.js에서 했던 패턴을 응용해서 작성한다.

// 주요 변수
const ageInput = document.getElementById("ageInput");
const rows = document.querySelectorAll("tbody tr");

// 이전에 선택된 행과 원래 텍스트를 저장할 변수 2개 (예: prevTr, prevText)
let prevTr = null;
let prevText = null;

// checkAge() 함수 동작

// const changeRow = (index) => {
//     prevTr = rows[index];
//     prevText = prevTr.firstElementChild.textContent;

//     prevTr.style.backgroundColor = "#ffeb3b";
//     prevTr.firstElementChild.textContent = "★" + prevText;
// };

// const checkAge = () => {
//     let check = false;

//     // 입력값이 비었거나 숫자가 아니면 alert("나이를 올바르게 입력하세요.") 후 함수 종료.
//     if (!ageInput.value || isNaN(Number(ageInput.value))) {
//         alert("나이를 올바르게 입력하세요.");
//         return;
//     }

//     // 이전에 강조된 행이 있다면
//     // 배경색을 원래대로 되돌린다.
//     // 첫 번째 td의 텍스트에서 붙였던 표시(예: "★")를 제거하고 원래 텍스트로 복원한다.
//     if (prevTr) {
//         prevTr.style.backgroundColor = "#fff";
//         prevTr.firstElementChild.textContent = prevText;
//     }

//     // 입력된 나이 값에 따라 어떤 행을 선택할지 조건문으로 판단한다.
//     // 0~12 → 어린이 행
//     // 13~18 → 청소년 행
//     // 19~64 → 성인 행
//     // 65 이상 → 노인 행
//     // 그 외 범위는 없다고 가정하거나, 예외 처리.

//     // 선택된 행의 배경색을 강조색으로 변경 (예: #ffeb3b).
//     // 첫 번째 td 앞에 "★"를 붙인다. (예: "★" + 원래텍스트)
//     // 선택된 행을 prevTr, prevText로 저장해 둔다.
//     for (const [index, age] of [65, 19, 13, 0].entries()) {
//         if (Number(ageInput.value) >= age) {
//             check = true;
//             changeRow(3 - index);
//             break;
//         }
//     }

//     // 나이 입력창은 비운다.
//     if (!check) {
//         ageInput.value = "";
//     }
// };

// ai 개선안
// const checkAge = () => {
//     const age = Number(ageInput.value);
//     // 자주 쓰이는 값은 변수에 저장
//     if (!ageInput.value || isNaN(age)) {
//         alert("나이를 올바르게 입력하세요.");
//         return;
//     }

//     if (prevTr) {
//         prevTr.style.backgroundColor = "#fff";
//         prevTr.firstElementChild.textContent = prevText;
//     }

//     let selectedIndex = -1;
//     // 조건에 따라 selectedIndex 변수에 값 저장(rows의 index가 될 값)
//     // 초기값을 -1로 설정, 유효성 검사에서 활용
//     if (age >= 65) selectedIndex = 3;
//     else if (age >= 19) selectedIndex = 2;
//     else if (age >= 13) selectedIndex = 1;
//     else if (age >= 0) selectedIndex = 0;
//     // 이 경우 for-of문보단 조건문을 명시적으로 사용하여 가독성을 높이는 것이 더 좋음

//     if (selectedIndex !== -1) {
//         prevTr = rows[selectedIndex];
//         prevText = prevTr.firstElementChild.textContent;

//         prevTr.style.backgroundColor = "#ffeb3b";
//         prevTr.firstElementChild.textContent = "★" + prevText;
//     }
//     // 한 곳에서만 사용되므로 함수를 별도로 분리하는 것은 오히려 코드를 복잡하게 만듦

//     ageInput.value = "";
// };
