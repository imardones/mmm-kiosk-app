import { FunctionComponent, memo } from "react";

const AlaskaSection: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[1157px] left-[50px] w-[981px] h-[401px] hidden text-left text-16xl text-silver font-avenir">
      <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[981px] h-[401px]" />
      <div className="absolute top-[24.24px] left-[9px] bg-white box-border w-[963px] h-[88.13px] border-[2.8px] border-solid border-cornflowerblue-100" />
      <div className="absolute top-[121.18px] left-[8px] w-[963px] h-[88.13px]">
        <div className="absolute top-[0px] left-[0px] bg-white box-border w-[963px] h-[88.13px] border-[2.8px] border-solid border-cornflowerblue-100" />
        <div className="absolute top-[17.82px] left-[14px] inline-block w-[422.09px] h-[56.97px]">
          <span className="font-light">Alaska</span>
          <span className="font-century-gothic">{` `}</span>
        </div>
      </div>
      <div className="absolute top-[218.13px] left-[8px] w-[963px] h-[88.13px] text-white">
        <div className="absolute top-[0px] left-[0px] bg-cornflowerblue-100 box-border w-[963px] h-[88.13px] border-[2.8px] border-solid border-cornflowerblue-100" />
        <div className="absolute top-[15.87px] left-[14px] font-medium inline-block w-[422.09px] h-[56.97px]">
          Arizona
        </div>
      </div>
    </div>
  );
});

export default AlaskaSection;
