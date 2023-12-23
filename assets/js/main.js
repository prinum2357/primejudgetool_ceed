import {card2bigInt, isPrime} from "./primeqk.js";
import { addTable } from "./table.js";

// judgeArea
function judgeArea(type, v1 = null, v2 = null) {
    const alert = document.getElementById("judge-result");
    const alertText = document.getElementById("judge-text");

    alert.classList.remove("alert-info");
    alert.classList.remove("alert-success");
    alert.classList.remove("alert-danger");
    alert.classList.remove("alert-warning");

    switch(type) {
        case "prime" :
            alert.classList.add("alert-success");
            alertText.innerHTML = v1 + "(" + v2 + ")" + "は素数です";
            break;

        case "notPrime" :
            alert.classList.add("alert-danger");
            alertText.innerHTML = v1+"("+v2+")"+"は素数ではありません";
            break;

        case "syntaxError" :
            alert.classList.add("alert-warning");
            alertText.innerHTML = "使用できる文字は 0-9ATJQKatjqk です";
            break;

        case "noInput" :
            alert.classList.add("alert-info");
            alertText.innerHTML = "ここに判定結果が出ます";
            break;
    }

    return null;
}

// validationCheck
function validationCheck(text) {
    const re = new RegExp(/^[0-9ATJQKatjqk]+$/);
    return re.test(text);
}

// mainInput
function judge() {

    // inputTextの取得
    const inputText = document.getElementById("maininput-text").value;

    // 入力チェック
    if(inputText == "") {
        judgeArea("noInput");

    } else {
        if(validationCheck(inputText)) {
            let number = card2bigInt(inputText);

            // 素数判定
            if(isPrime(number)) {
                judgeArea("prime", inputText, number);

            } else {
                judgeArea("notPrime", inputText, number);
            }

            addTable(inputText, number, isPrime(number));

        } else {
            judgeArea("syntaxError")
        }
    }

    return false;
}

const mainJudge = document.getElementById("maininput-button");
mainJudge.addEventListener('click', judge);

// userInput
function userInput(n) {
    let addText;
    switch(n) {
        case 1 :
            addText = document.getElementById("userinput1-text").value;
            break;

        case 2 :
            addText = document.getElementById("userinput2-text").value;
            break;

        case 3 :
            addText = document.getElementById("userinput3-text").value;
            break;
    }

    document.getElementById("maininput-text").value += addText;

    return null;
}

const userSubmit1 = document.getElementById("userinput1-submit");
userSubmit1.addEventListener('click', function() {userInput(1)}, false);

const userSubmit2 = document.getElementById("userinput2-submit");
userSubmit2.addEventListener('click', function() {userInput(2)}, false);

const userSubmit3 = document.getElementById("userinput3-submit");
userSubmit3.addEventListener('click', function() {userInput(3)}, false);

// hashtag copy
const hashtagCopyBotton = document.getElementById("hashtag-copy-button");
const hashtag = "#裏CEED3rd #素数大富豪 #語呂素数"
hashtagCopyBotton.addEventListener("click", () => {
    if (!navigator.clipboard) {
        alert("このブラウザは対応していません");
        return;
    }

    navigator.clipboard.writeText(hashtag).then(
        () => {
        alert("ハッシュタグをコピーしました");
        });
    }
);

// enterキーの無効化
document.onkeydown = function (e) {
    if (e.key === 'Enter') {
        return false;
    }
}
document.onkeyup = function (e) {
    if (e.key === 'Enter') {
        return false;
    }
}