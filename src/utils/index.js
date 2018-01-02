const BOOL_RATE = [true, false, false, false, false];
const AMIDA_TABLE_COUNT = 25;
const FIRST_LINE = 0;
const UNDER_LINE = AMIDA_TABLE_COUNT - 1;

export const amidaTableArray = (participantsCount) => {
  let arrs = [];

  for(let ai=0; ai<AMIDA_TABLE_COUNT; ai++) {
    var arr = [];
    var nowBool = "";
    const rightLine = participantsCount - 1;

    for(var i=0; i<participantsCount; i++) {
      // 横並びで線ができるのと一番右と上下に線ができるのを防ぐ
      if (nowBool || i == rightLine || ai == FIRST_LINE || ai == UNDER_LINE) {
        nowBool = false;
      } else {
        nowBool = BOOL_RATE[Math.floor(Math.random() * BOOL_RATE.length)];
      }
      arr.push(nowBool);
    }

    arrs.push(arr);
  }
  return arrs;
}

export const randomGoals = (goals) => {
  let newGoals = goals;
  let i = newGoals.length;

  while(i){
    var j = Math.floor(Math.random()*i);
    var t = newGoals[--i];
    newGoals[i] = newGoals[j];
    newGoals[j] = t;
  }

  return newGoals;
}

export const passageToGoal = (amidaTable, participantPosition) => {
  let pp = participantPosition;
  let passage = [];
  amidaTable.forEach((val, i) => {
    if (pp == 0) {
      if (val[pp]) {
        pp++;
      }
    } else {
      if (val[pp]) {
        pp++;
      } else if (val[pp - 1]) {
        pp--;
      }
    }
    passage.push(pp);
  });
  return passage;
}

export const changeRed = (passage) => {
  let ele = document.getElementById('amida_lines');
  let before_val = passage[0];
  const changeVarticalLine = (target_ele) => {
    target_ele.classList.add("vertical-red-line");
  };
  const changeBottomLine = (target_ele) => {
    target_ele.classList.add("bottom-red-line");
  };

  passage.forEach((val, index) => {
    let taget_tr_ele = ele.children[index];
    if (before_val == val) {
      changeVarticalLine(taget_tr_ele.children[val]);
    } else if (before_val < val) {
      changeVarticalLine(taget_tr_ele.children[before_val]);
      changeBottomLine(taget_tr_ele.children[before_val]);
    } else if (before_val > val) {
      changeVarticalLine(taget_tr_ele.children[before_val]);
      changeBottomLine(taget_tr_ele.children[val]);
    }
    before_val = val;
  });
}

export const removeAllRed = () => {
  let verticalEles = document.getElementsByClassName("vertical-red-line");
  let bottomEles   = document.getElementsByClassName("bottom-red-line");
  let verticalDeleteCount = verticalEles.length;
  let bottomDeleteCount = bottomEles.length;

  if (verticalEles.length > 0) {
    for(let vi=0; vi < verticalDeleteCount; vi++) {
      verticalEles[0].classList.remove("vertical-red-line");
    }
  }
  if (bottomEles.length > 0) {
    for(let bi=0; bi < bottomDeleteCount; bi++) {
      bottomEles[0].classList.remove("bottom-red-line");
    }
  }
}

export const AllRedColumns = (amidaTable, participantsCount) => {
}
