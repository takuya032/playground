const BOOL_RATE = [true, false, false, false];
const AMIDA_TABLE_COUNT = 25;
const MOST_UNDER_LINE = AMIDA_TABLE_COUNT - 1;

export const amidaTableArray = (participantsCount) => {
  let arrs = [];

  for(let ai=0; ai<AMIDA_TABLE_COUNT; ai++) {
    var arr = [];
    var nowBool = "";
    const rightLine = participantsCount - 1;

    for(var i=0; i<participantsCount; i++) {
      // 横並びで線ができるのと一番右と一番下に線ができるのを防ぐ
      if (nowBool || i == rightLine || ai == MOST_UNDER_LINE) {
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
