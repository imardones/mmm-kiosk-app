import { FunctionComponent } from "react";
import TopNavBar from "../components/TopNavBar";
import Statecta from "../components/Statecta";
import Footer from "../components/Footer";

const PhotoBoothSmile: FunctionComponent = () => {
  return (
    <div className="relative bg-black w-full h-[1920px] overflow-hidden text-center text-56xl text-goldenrod font-avenir">
      <div className="absolute top-[0px] left-[-61px] w-[1202px] overflow-hidden flex flex-col items-start justify-end gap-[137px]">
        <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
          <TopNavBar
            mSign1="/undefined2.png"
            dimensionCode="/undefined3.png"
            topNavBarPosition="unset"
            topNavBarTop="unset"
            topNavBarLeft="unset"
            topNavBarWidth="unset"
            topNavBarAlignSelf="stretch"
            frameDivHeight="180px"
            mSign1Cursor="unset"
            vectorIconCursor="unset"
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
          <div className="self-stretch relative h-[84.67px]">
            <div className="absolute h-full w-full top-[0%] left-[0%] capitalize inline-block">
              Smile!
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[489px] left-[-119px] w-[1388.5px] overflow-hidden flex flex-col items-start justify-start gap-[319px]">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[87px]">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[653px] shrink-0 object-cover"
            alt=""
            src="/undefined4.png"
          />
          <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
            <Statecta
              text="Take your pic!"
              statectaPosition="relative"
              statectaTop="unset"
              statectaLeft="unset"
              statectaWidth="unset"
              statectaAlignSelf="stretch"
              wELCOMELeft="274px"
            />
          </div>
        </div>
        <Footer
          footerPosition="unset"
          footerTop="unset"
          footerLeft="unset"
          footerHeight="unset"
          footerAlignSelf="stretch"
          frameDivWidth="unset"
          frameDivAlignSelf="stretch"
        />
      </div>
    </div>
  );
};

export default PhotoBoothSmile;
