const input = document.getElementById("input");
const trList = document.querySelectorAll("tbody tr");

let prevTr = null;
let prevText = null;

const send = () => {
    const value = input.value.trim();

    if (value === "" || isNaN(Number(value))) {
        alert("나이를 올바르게 입력하세요");
        return;
    }

    if (prevTr) {
        prevTr.style.background = "#fff";
        prevTr.firstElementChild.textContent = prevText;
    }

    trList.forEach((tr) => {
        const td = tr.firstElementChild;
        if (td.textContent === input.value) {
            prevTr = tr;
            prevText = input.value;

            tr.style.background = "#ffeb3b";
            td.textContent = "★" + input.value;
        }
    });
};
