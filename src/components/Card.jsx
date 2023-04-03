import React from "react";
import { fakeUseState } from "../fakeHooks";

function Card({ color, cardName }) {
  const { setValue, value } = fakeUseState();
  // index의 return 값이 객체이므로 순서 바꿔도 상관없음
  const { setValue: setNum3, value: num3 } = fakeUseState();
  // 객체에서 클래스값을 불러오려면 이렇게 해줘야 함
  return <div className={`${color} w-40 h-60`}>{cardName}</div>;
}

export default Card;
