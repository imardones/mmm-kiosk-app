import { FunctionComponent, memo } from "react";

const HomeWelcome: FunctionComponent = memo(() => {
  return (
    <main className="relative bg-black w-full h-[1920px] overflow-hidden flex flex-col py-[100px] px-0 box-border items-center justify-start gap-[178px]">
      <main className="w-[698px] h-[281px] overflow-hidden shrink-0 flex flex-col p-5 box-border items-center justify-between z-[0]">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[241px] shrink-0 object-cover"
          loading="eager"
          alt=""
          src={imageDimensions}
          style={logoBigIconStyle}
        />
      </main>
      <button
        className="cursor-pointer p-5 bg-cornflowerblue-200 box-border w-[907px] h-[178px] flex flex-col items-center justify-between z-[1] border-[4px] border-solid border-cornflowerblue-100"
        id="welcome"
        style={primaryNavBtnHomeStyle}
      >
        <div
          className="relative text-77xl capitalize font-light font-avenir text-white text-center"
          style={wELCOMEStyle}
        >
          {text}
        </div>
      </button>
      <section className="absolute my-0 mx-[!important] top-[1293px] left-[0px] w-[1080px] h-[626.86px] z-[2]">
        <div className="absolute top-[28px] left-[0px] w-[1080px] h-[598.86px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/pptxbg.png"
          />
        </div>
        <div className="absolute top-[0px] left-[132px] w-[817px] h-[395px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/metrocreativetechmemorableslogan.png"
          />
        </div>
      </section>
      <div className="relative rounded-[5px] box-border w-[203px] h-[340px] overflow-hidden shrink-0 z-[3] border-[1px] border-dashed border-blueviolet">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[41.18%] w-[80.3%] top-[5.88%] right-[9.85%] bottom-[52.94%] left-[9.85%] bg-[url('/public/property-1default@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        <img
          className="absolute h-[65.59%] w-[128.08%] top-[-6.18%] right-[-14.04%] bottom-[40.59%] left-[-14.04%] max-w-full overflow-hidden max-h-full object-cover hidden"
          alt=""
          src="/undefined5.png"
        />
      </div>
    </main>
  );
});

export default HomeWelcome;
