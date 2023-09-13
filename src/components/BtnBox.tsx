import { FunctionComponent, memo } from "react";

const BtnBox: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-cornflowerblue-200 box-border w-[907px] h-[189px] border-[4px] border-solid border-cornflowerblue-100" />
  );
});

export default BtnBox;
