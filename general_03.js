const trump = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let trump_1 = trump[Math.floor(Math.random() * trump.length)];
let trump_2 = trump[Math.floor(Math.random() * trump.length)];
let trump_3 = trump[Math.floor(Math.random() * trump.length)];
let trump_4 = trump[Math.floor(Math.random() * trump.length)];
let trump_5 = trump[Math.floor(Math.random() * trump.length)];
let trump_6 = trump[Math.floor(Math.random() * trump.length)];

const trumpMark = ["club", "diamond", "heart", "spade"];
const trumpMark_1 = trumpMark[Math.floor(Math.random() * trumpMark.length)];
const trumpMark_2 = trumpMark[Math.floor(Math.random() * trumpMark.length)];
const trumpMark_3 = trumpMark[Math.floor(Math.random() * trumpMark.length)];
const trumpMark_4 = trumpMark[Math.floor(Math.random() * trumpMark.length)];
const trumpMark_5 = trumpMark[Math.floor(Math.random() * trumpMark.length)];
const trumpMark_6 = trumpMark[Math.floor(Math.random() * trumpMark.length)];

document.getElementById("addBtn").disabled = true;
document.getElementById("notAddBtn").disabled = true;

// スタートボタンをクリックした場合
function startBtnCheck() {
  document.getElementById("startBtn").disabled = true;
  document.getElementById("notAddBtn").disabled = false;
  document.getElementById("addBtn").disabled = false;
  document.getElementById("enemyImages1").src =
    "../img/card_" + trumpMark_1 + "_" + trump_1 + ".png";

  document.getElementById("enemyImages2").src =
    "../img/card_" + trumpMark_2 + "_" + trump_2 + ".png";

  document.getElementById("myImages1").src =
    "../img/card_" + trumpMark_4 + "_" + trump_4 + ".png";

  console.log("../img/card_" + trumpMark_4 + "_" + trump_4 + ".png");
  document.getElementById("myImages2").src =
    "../img/card_" + trumpMark_5 + "_" + trump_5 + ".png";

  console.log("../img/card_" + trumpMark_5 + "_" + trump_5 + ".png");
  // トランプの数字の計算

  let trumpNumber = [trump_1, trump_2, trump_3, trump_4, trump_5, trump_6];
  console.log(trumpNumber);

  for (let i = 0; i < trumpNumber.length; i++) {
    if (trumpNumber[i] == 1) {
      trumpNumber[i] = 11;
    } else if (trumpNumber[i] >= 11) {
      trumpNumber[i] = 10;
    } else {
      trumpNumber[i] = trumpNumber[i];
    }
    console.log(trumpNumber[i]);
  }
  // 相手がカードを引く条件

  // 追加ボタンをおした場合
  const myTotalAddNum = trumpNumber[3] + trumpNumber[4] + trumpNumber[5];
  const enemyTotalAddNum = trumpNumber[0] + trumpNumber[1] + trumpNumber[2];
  const enemyTotalAdd = trumpNumber[0] + trumpNumber[1];
  const addBtnAdd = document.getElementById("addBtn");
  const myCard = trumpNumber[4] + trumpNumber[5];
  const enemyCard = trumpNumber[0] + trumpNumber[1];
  addBtnAdd.addEventListener("click", addBtncheck, false);
  function addBtncheck() {
    if (enemyCard < myCard) {
      while (trumpNumber[0] + trumpNumber[1] + trumpNumber[2] > 21) {
        trumpNumber[2] = trump[Math.floor(Math.random() * trump.length)];
        trump_3 = trumpNumber[2];
        if (trumpNumber[2] >= 11) {
          trumpNumber[2] = 10;
        } else if (trumpNumber[2] == 1) {
          trumpNumber[2] = 11;
        }
        if (trumpNumber[0] + trumpNumber[1] + trumpNumber[2] <= 21) {
          break;
        }
        console.log(trump_3);
        console.log(trumpNumber[2]);
        console.log(trumpNumber[0] + trumpNumber[1] + trumpNumber[2]);
      }
      document.getElementById("enemyImages3").src =
        "../img/card_" + trumpMark_3 + "_" + trump_3 + ".png";
      console.log("../img/card_" + trumpMark_3 + "_" + trump_3 + ".png");
    } else if (myCard < enemyCard && enemyCard <= 16) {
      while (trumpNumber[0] + trumpNumber[1] + trumpNumber[2] > 21) {
        trumpNumber[2] = trump[Math.floor(Math.random() * trump.length)];
        trump_3 = trumpNumber[2];

        if (trumpNumber[2] >= 11) {
          trumpNumber[2] = 10;
        } else if (trumpNumber[2] == 1) {
          trumpNumber[2] = 11;
        }
        if (trumpNumber[0] + trumpNumber[1] + trumpNumber[2] <= 21) {
          break;
        }
        console.log(trump_3);
        console.log(trumpNumber[2]);
        console.log(trumpNumber[0] + trumpNumber[1] + trumpNumber[2]);
      }
      document.getElementById("enemyImages3").src =
        "../img/card_" + trumpMark_3 + "_" + trump_3 + ".png";
      console.log("../img/card_" + trumpMark_3 + "_" + trump_3 + ".png");
    }
    console.log(trumpNumber[0] + trumpNumber[1] + trumpNumber[2]);

    document.getElementById("addBtn").disabled = true;
    document.getElementById("notAddBtn").disabled = true;
    document.getElementById("myImages3").src =
      "../img/card_" + trumpMark_6 + "_" + trump_6 + ".png";
    console.log("../img/card_" + trumpMark_6 + "_" + trump_6 + ".png");

    if (trumpNumber[5] === 1) {
      trumpNumber[5] = 11;
    } else if (trumpNumber[5] >= 11) {
      trumpNumber[5] = 10;
    }

    console.log(trumpNumber[3] + trumpNumber[4] + trumpNumber[5]);
    // 合計値の記入
    document.getElementById("myTotal").innerHTML =
      "現在の合計値（自分）:" + myTotalAddNum;
    if (enemyCard < myCard) {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAddNum;
    } else if (myCard < enemyCard && enemyCard <= 16) {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAddNum;
    } else {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAdd;
    }
    // 勝ち負けの記述
    if (enemyCard < myCard) {
      if (myTotalAddNum > enemyTotalAddNum && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum < enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum == enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      }
    }
    if (myCard < enemyCard && enemyCard <= 16) {
      if (myTotalAddNum > enemyTotalAddNum && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum < enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum == enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      }
    }
    if (myCard == enemyCard || (enemyCard > 16 && myCard < enemyCard)) {
      if (myTotalAddNum > enemyTotalAdd && myTotalAddNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalAddNum < enemyTotalAdd) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalAddNum == enemyTotalAdd) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      }
    }
  }
  // 追加しないボタンを押した場合
  const notAddBtnAdd = document.getElementById("notAddBtn");

  notAddBtnAdd.addEventListener("click", notAddBtncheck, false);
  function notAddBtncheck() {
    if (enemyCard < myCard) {
      while (trumpNumber[0] + trumpNumber[1] + trumpNumber[2] > 21) {
        trumpNumber[2] = trump[Math.floor(Math.random() * trump.length)];
        trump_3 = trumpNumber[2];
        if (trumpNumber[2] > 10) {
          trumpNumber[2] = 10;
        } else if (trumpNumber[2] == 1) {
          trumpNumber[2] = 11;
        } else {
          trumpNumber[2] = trumpNumber[2];
        }
        if (trumpNumber[0] + trumpNumber[1] + trumpNumber[2] <= 21) {
          break;
        }
        console.log(trump_3);
        console.log(trumpNumber[2]);
        console.log(trumpNumber[0] + trumpNumber[1] + trumpNumber[2]);
      }
      document.getElementById("enemyImages3").src =
        "../img/card_" + trumpMark_3 + "_" + trump_3 + ".png";
      console.log("../img/card_" + trumpMark_3 + "_" + trump_3 + ".png");
    } else if (myCard < enemyCard && enemyCard <= 16) {
      while (trumpNumber[0] + trumpNumber[1] + trumpNumber[2] > 21) {
        trumpNumber[2] = trump[Math.floor(Math.random() * trump.length)];
        trump_3 = trumpNumber[2];
        if (trumpNumber[2] > 11) {
          trumpNumber[2] = 10;
        } else if (trumpNumber[2] == 1) {
          trumpNumber[2] = 11;
        }
        if (trumpNumber[0] + trumpNumber[1] + trumpNumber[2] <= 21) {
          break;
        }
        console.log(trump_3);
        console.log(trumpNumber[2]);
        console.log(trumpNumber[0] + trumpNumber[1] + trumpNumber[2]);
      }
      document.getElementById("enemyImages3").src =
        "../img/card_" + trumpMark_3 + "_" + trump_3 + ".png";
      console.log("../img/card_" + trumpMark_3 + "_" + trump_3 + ".png");
    }
    console.log(trumpNumber[0] + trumpNumber[1] + trumpNumber[2]);

    const enemyTotalAddNum = trumpNumber[0] + trumpNumber[1] + trumpNumber[2];
    const enemyTotalAdd = trumpNumber[0] + trumpNumber[1];
    const myTotalNum = trumpNumber[3] + trumpNumber[4];
    document.getElementById("addBtn").disabled = true;
    document.getElementById("notAddBtn").disabled = true;

    document.getElementById("myTotal").innerHTML =
      "現在の合計値（自分）:" + myTotalNum;
    if (enemyCard < myCard) {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAddNum;
    } else if (myCard < enemyCard && enemyCard <= 16) {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAddNum;
    } else {
      document.getElementById("enemyTotal").innerHTML =
        "現在の合計値（相手）:" + enemyTotalAdd;
    }
    if (enemyCard < myCard) {
      if (myTotalNum > enemyTotalAddNum && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum < enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum == enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      }
    }
    if (myCard < enemyCard && enemyCard <= 16) {
      if (myTotalNum > enemyTotalAddNum && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum < enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum == enemyTotalAddNum) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      }
    }
    if (myCard == enemyCard || (enemyCard > 16 && myCard < enemyCard)) {
      if (myTotalNum > enemyTotalAdd && myTotalNum < 22) {
        document.getElementById("myResult").innerHTML = "勝ち";
        document.getElementById("enemyResult").innerHTML = "負け";
      } else if (myTotalNum < enemyTotalAdd) {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      } else if (myTotalNum == enemyTotalAdd) {
        document.getElementById("myResult").innerHTML = "引き分け";
        document.getElementById("enemyResult").innerHTML = "引き分け";
      } else {
        document.getElementById("myResult").innerHTML = "負け";
        document.getElementById("enemyResult").innerHTML = "勝ち";
      }
    }
  }
}
function resetBtncheck() {}
