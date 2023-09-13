import { FunctionComponent } from "react";
import TopNavBar from "../components/TopNavBar";

const Projects: FunctionComponent = () => {
  return (
    <div className="relative bg-black w-full h-[1920px] overflow-hidden text-center text-56xl text-goldenrod font-avenir">
      <div className="absolute top-[-9px] left-[-12px] w-[1104px] overflow-hidden flex flex-col items-center justify-center gap-[103px]">
        <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
          <TopNavBar
            mSign1="/undefined2.png"
            dimensionCode="/vector.png"
            topNavBarPosition="absolute"
            topNavBarTop="unset"
            topNavBarLeft="unset"
            topNavBarWidth="unset"
            topNavBarAlignSelf="stretch"
            frameDivHeight="180px"
            mSign1Cursor="unset"
            vectorIconCursor="unset"
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
          <div className="self-stretch relative h-[84.67px]">
            <div className="absolute h-full w-full top-[0%] left-[0%] capitalize inline-block">
              Projects
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[462px] left-[-35px] w-[1150px] overflow-hidden flex flex-col items-center justify-start gap-[50px]">
        <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
            <div className="[align-self:start] h-[940px] ml-[174px]" />
            <div className="self-stretch relative [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0.29))] h-[228px] mt-[-209px]" />
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center">
          <div className="self-stretch h-[585px] overflow-hidden shrink-0 flex flex-col items-start justify-start bg-[url('/public/frame@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="relative w-[817px] h-[395px] object-cover"
              alt=""
              src="/metrocreativetechmemorableslogan.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
