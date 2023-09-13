import { FunctionComponent } from "react";
import PBFormSubmitBtn from "../components/PBFormSubmitBtn";
import AlaskaSection from "../components/AlaskaSection";
import Footer from "../components/Footer";
import Typeselect from "../components/Typeselect";
import TopNavBar from "../components/TopNavBar";

const PhotoBoothSelfieQuestion: FunctionComponent = () => {
  return (
    <div className="relative bg-black w-full h-[1920px] overflow-hidden text-left text-11xl text-gainsboro font-century-gothic">
      <div className="absolute top-[526px] left-[25px] w-[1031px] h-[149.13px] hidden">
        <div className="absolute top-[36px] left-[0px] w-[1031px] h-[113.13px]">
          <div className="absolute top-[0px] left-[0px] bg-white box-border w-[1031px] h-[113.13px] border-[2.8px] border-solid border-darkseagreen" />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[393.19px] h-9">
          <div className="absolute top-[0px] left-[0px] inline-block w-[393.19px] h-9">
            FIRST NAME *
          </div>
        </div>
      </div>
      <PBFormSubmitBtn />
      <div className="absolute top-[762px] left-[24px] w-[1031px] h-[149.13px] hidden">
        <div className="absolute top-[36px] left-[0px] w-[1031px] h-[113.13px]">
          <div className="absolute top-[0px] left-[0px] bg-white box-border w-[1031px] h-[113.13px] border-[2.8px] border-solid border-darkseagreen" />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[393.19px] h-9">
          <div className="absolute top-[0px] left-[0px] inline-block w-[393.19px] h-9">
            LAST NAME *
          </div>
        </div>
      </div>
      <div className="absolute top-[1008px] left-[24px] w-[1031px] h-[149.13px] hidden">
        <div className="absolute top-[36px] left-[0px] w-[1031px] h-[113.13px]">
          <div className="absolute top-[0px] left-[0px] bg-white box-border w-[1031px] h-[113.13px] border-[2.8px] border-solid border-darkseagreen" />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[393.19px] h-9">
          <div className="absolute top-[0px] left-[0px] inline-block w-[393.19px] h-9">
            LOCATION *
          </div>
        </div>
      </div>
      <AlaskaSection />
      <div className="absolute top-[1472px] left-[58px] w-[963px] h-20 hidden text-16xl text-silver font-avenir">
        <div className="absolute top-[0px] left-[0px] bg-white box-border w-[963px] h-20 border-[2.8px] border-solid border-darkseagreen" />
        <div className="absolute top-[12px] left-[14px] font-light inline-block w-[422.09px] h-[56.97px]">
          Arkansas
        </div>
      </div>
      <Footer
        footerPosition="absolute"
        footerTop="1737px"
        footerLeft="-119px"
        footerHeight="180px"
        footerAlignSelf="unset"
        frameDivWidth="1372.5px"
        frameDivAlignSelf="unset"
      />
      <Typeselect
        typeselectPosition="absolute"
        typeselectTop="526px"
        typeselectLeft="25px"
      />
      <Typeselect
        typeselectPosition="absolute"
        typeselectTop="762px"
        typeselectLeft="25px"
      />
      <div className="absolute top-[1008px] left-[24px] hidden flex-col items-start justify-start">
        <div className="relative w-[393.19px] h-9 z-[0]">
          <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
            LABEL *
          </div>
        </div>
        <div className="relative bg-white box-border w-[1031px] h-[113.13px] z-[1] border-[2.8px] border-solid border-darkseagreen" />
        <img
          className="absolute my-0 mx-[!important] top-[67px] left-[961px] w-[51.79px] h-[51.79px] object-cover hidden z-[2]"
          alt=""
          src="/undefined8.png"
        />
        <div className="absolute my-0 mx-[!important] top-[65px] left-[28px] text-16xl font-light font-avenir text-silver hidden w-[422.09px] h-[56.97px] shrink-0 z-[3]">
          LABEL *
        </div>
      </div>
      <Typeselect
        typeselectPosition="absolute"
        typeselectTop="977px"
        typeselectLeft="24px"
      />
      <section className="absolute top-[317px] left-[calc(50%_-_539px)] w-[1080px] h-[85px] text-center text-56xl text-goldenrod font-avenir">
        <h1 className="m-0 absolute h-full w-full top-[0%] left-[0%] text-inherit capitalize font-normal font-inherit inline-block">
          Selfie Question
        </h1>
      </section>
      <TopNavBar
        mSign1="/m-sign-1.png"
        dimensionCode="/undefined3.png"
        topNavBarPosition="absolute"
        topNavBarTop="0px"
        topNavBarLeft="0px"
        topNavBarWidth="1080px"
        topNavBarAlignSelf="unset"
        frameDivHeight="180px"
        mSign1Cursor="unset"
        vectorIconCursor="unset"
      />
    </div>
  );
};

export default PhotoBoothSelfieQuestion;
