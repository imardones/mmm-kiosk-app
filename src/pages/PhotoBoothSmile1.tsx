import { FunctionComponent } from "react";
import Footer from "../components/Footer";
import TopNavBar from "../components/TopNavBar";
import Statecta from "../components/Statecta";

const PhotoBoothSmile1: FunctionComponent = () => {
  return (
    <div className="relative bg-black w-full h-[1920px] overflow-hidden text-center text-56xl text-goldenrod font-avenir">
      <div className="absolute top-[317px] left-[-3px] w-[1086px] h-[84.67px] overflow-hidden">
        <div className="absolute top-[0px] left-[6px] w-[1080px] h-[84.67px]">
          <div className="absolute h-full w-full top-[0%] left-[0%] capitalize inline-block">
            Smile!
          </div>
        </div>
      </div>
      <div className="absolute top-[1740px] left-[-189.5px] w-[1459px] h-[180px] overflow-hidden">
        <Footer
          footerPosition="absolute"
          footerTop="0px"
          footerLeft="70.5px"
          footerHeight="180px"
          footerAlignSelf="unset"
          frameDivWidth="1372.5px"
          frameDivAlignSelf="unset"
        />
      </div>
      <div className="absolute top-[0px] left-[-6px] w-[1086px] h-[180px] overflow-hidden">
        <TopNavBar
          mSign1="/undefined2.png"
          dimensionCode="/undefined.png"
          topNavBarPosition="absolute"
          topNavBarTop="0px"
          topNavBarLeft="6px"
          topNavBarWidth="1080px"
          topNavBarAlignSelf="unset"
          frameDivHeight="180px"
          mSign1Cursor="unset"
          vectorIconCursor="unset"
        />
      </div>
      <div className="absolute top-[1225px] left-[84px] w-[912px] h-[189px] overflow-hidden">
        <Statecta
          text="Take your Pic!"
          statectaPosition="absolute"
          statectaTop="0px"
          statectaLeft="5px"
          statectaWidth="907px"
          statectaAlignSelf="unset"
          wELCOMELeft="274px"
        />
      </div>
      <div className="absolute top-[489px] left-[33px] w-[1014px] h-[653px] overflow-hidden">
        <div className="absolute top-[0px] left-[6px] box-border w-[1008px] h-[653px] overflow-hidden border-[23px] border-solid border-gold">
          <img
            className="absolute top-[581px] left-[917px] w-[62.15px] h-[62.15px] overflow-hidden object-cover"
            alt=""
            src="/bxscaretdowncircle.png"
          />
          <img
            className="absolute top-[29px] left-[23px] w-[962px] h-[595px] object-cover"
            alt=""
            src="/screen-shot-20230817-at-158-1.png"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoBoothSmile1;
