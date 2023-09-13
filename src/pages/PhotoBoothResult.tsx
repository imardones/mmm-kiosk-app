import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import SecondaryCtaRetakePhoto from "../components/SecondaryCtaRetakePhoto";
import TopNavBar from "../components/TopNavBar";
import Statecta from "../components/Statecta";

const PhotoBoothResult: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMSign1Click = useCallback(() => {
    navigate("/homewelcome");
  }, [navigate]);

  const onVectorImageClick = useCallback(() => {
    navigate("/homemenu");
  }, [navigate]);

  return (
    <div className="relative bg-black w-full h-[1920px] overflow-hidden">
      <section className="absolute top-[317px] left-[-3px] w-[1086px] h-[84.67px] overflow-hidden text-center text-56xl text-goldenrod font-avenir">
        <div className="absolute top-[0px] left-[6px] w-[1080px] h-[84.67px]">
          <h2 className="m-0 absolute h-full w-full top-[0%] left-[0%] text-inherit capitalize font-normal font-inherit inline-block">
            Smile!
          </h2>
        </div>
      </section>
      <section className="absolute top-[1741px] left-[-189.5px] w-[1459px] h-[180px] overflow-hidden">
        <Footer
          footerPosition="absolute"
          footerTop="0px"
          footerLeft="70.5px"
          footerHeight="180px"
          footerAlignSelf="unset"
          frameDivWidth="1372.5px"
          frameDivAlignSelf="unset"
        />
      </section>
      <section className="absolute top-[1426px] left-[109px] w-[862px] h-[110px] overflow-hidden text-center text-21xl text-white font-avenir">
        <div className="absolute top-[0px] left-[0px] font-light inline-block w-[847px]">
          Don't like how this came out? Touch here to retake your photo
        </div>
      </section>
      <SecondaryCtaRetakePhoto />
      <header className="absolute top-[0px] left-[-6px] w-[1086px] h-[180px] overflow-hidden">
        <TopNavBar
          mSign1="/m-sign-1.png"
          dimensionCode="/vector.png"
          topNavBarPosition="absolute"
          topNavBarTop="0px"
          topNavBarLeft="6px"
          topNavBarWidth="1080px"
          topNavBarAlignSelf="unset"
          frameDivHeight="180px"
          mSign1Cursor="pointer"
          vectorIconCursor="pointer"
          onMSign1Click={onMSign1Click}
          onVectorImageClick={onVectorImageClick}
        />
      </header>
      <section className="absolute top-[1225px] left-[84px] w-[912px] h-[189px] overflow-hidden">
        <Statecta
          text="Share Photo"
          statectaPosition="absolute"
          statectaTop="0px"
          statectaLeft="5px"
          statectaWidth="907px"
          statectaAlignSelf="unset"
          wELCOMELeft="299px"
        />
      </section>
      <section className="absolute top-[489px] left-[33px] w-[1014px] h-[653px] overflow-hidden">
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
      </section>
    </div>
  );
};

export default PhotoBoothResult;
