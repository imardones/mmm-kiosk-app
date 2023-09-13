import { FunctionComponent } from "react";
import TopNavBar from "../components/TopNavBar";

const Map1: FunctionComponent = () => {
  return (
    <div className="relative bg-black w-full h-[1920px] overflow-hidden text-center text-56xl text-goldenrod font-avenir">
      <img
        className="absolute top-[1471px] left-[13px] w-[1055px] h-[585px] object-cover"
        alt=""
        src="/undefined1.png"
      />
      <div className="absolute top-[1193px] left-[35px] [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0.29))] w-[1080px] h-[228px]" />
      <img
        className="absolute top-[1471px] left-[13px] w-[817px] h-[395px] object-cover"
        alt=""
        src="/metrocreativetechmemorableslogan.png"
      />
      <img
        className="absolute top-[462px] left-[174px] w-[732px] h-[940px] object-cover"
        alt=""
        src="/undefined3.png"
      />
      <TopNavBar
        mSign1="/undefined2.png"
        dimensionCode="/vector.png"
        topNavBarPosition="absolute"
        topNavBarTop="0px"
        topNavBarLeft="1px"
        topNavBarWidth="1080px"
        topNavBarAlignSelf="unset"
        frameDivHeight="unset"
        mSign1Cursor="unset"
        vectorIconCursor="unset"
      />
      <div className="absolute top-[274px] left-[1px] w-[1080px] h-[84.67px]">
        <div className="absolute h-full w-full top-[0%] left-[0%] capitalize inline-block">
          Map
        </div>
      </div>
    </div>
  );
};

export default Map1;
