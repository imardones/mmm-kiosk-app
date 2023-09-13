import { FunctionComponent, memo } from "react";
import SendPhotoInput from "./SendPhotoInput";
import BtnCloseIcon from "./BtnCloseIcon";
import SendPhotoFormSubmit from "./SendPhotoFormSubmit";
import Footer from "./Footer";

type PhotoBoothShareType = {
  onClose?: () => void;
};

const PhotoBoothShare: FunctionComponent<PhotoBoothShareType> = memo(
  ({ onClose }) => {
    return (
      <div className="bg-black w-[1080px] h-[1920px] overflow-hidden max-w-full max-h-full text-center text-21xl text-cornflowerblue-100 font-avenir">
        <img
          className="absolute top-[0px] left-[0px] w-[1372.5px] h-[193.17px] object-cover"
          alt=""
          src="/undefined4.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray w-[1080px] h-[1920px] text-[60.31px]">
          <div className="absolute top-[518px] left-[72px] bg-white w-[951px] h-[999px] overflow-hidden">
            <div className="absolute top-[205px] left-[65px] inline-block w-[821.38px] h-[168.87px]">
              Send by email or text below
            </div>
            <SendPhotoInput
              emailInputLabel="Enter Phone Number"
              propTop="517px"
              propLeft="65px"
            />
            <SendPhotoInput emailInputLabel="Enter Email" />
            <SendPhotoInput
              emailInputLabel="Enter Email"
              propTop="387px"
              propLeft="56px"
            />
            <BtnCloseIcon />
            <SendPhotoFormSubmit />
          </div>
        </div>
        <div className="absolute top-[333px] left-[213px] w-[654px] h-[84.67px] overflow-hidden text-56xl text-goldenrod">
          <div className="absolute top-[0px] left-[0px] capitalize inline-block w-[591px] h-[84.67px]">
            Smile!
          </div>
        </div>
        <div className="absolute top-[1426px] left-[109px] w-[862px] h-[110px] overflow-hidden text-white">
          <div className="absolute top-[0px] left-[0px] font-light inline-block w-[847px]">
            Don't like how this came out? Touch here to retake your photo
          </div>
        </div>
        <div className="absolute top-[1737px] left-[-173.5px] w-[1427px] h-[183px] overflow-hidden text-left text-black">
          <div className="absolute top-[0px] left-[54.5px] bg-gainsboro shadow-[0px_5.083333492279053px_5.08px_rgba(0,_0,_0,_0.25)] w-[1372.5px] h-[183px]">
            <div className="absolute top-[181.73px] left-[-1.27px] box-border w-[1375.04px] h-[2.54px] border-t-[2.5px] border-solid border-white" />
            <div className="absolute top-[75px] left-[252px] font-extrabold">{`CREATIVE • TECHNICAL • MEMORABLE `}</div>
            <Footer
              footerPosition="relative"
              footerTop="3px"
              footerLeft="-8px"
              footerHeight="180px"
              footerAlignSelf="unset"
              frameDivWidth="1372.5px"
              frameDivAlignSelf="unset"
            />
          </div>
        </div>
        <div className="absolute top-[1582px] left-[325px] box-border w-[430px] h-[129px] overflow-hidden text-[38.82px] text-gold border-[5px] border-solid border-gold">
          <div className="absolute top-[39px] left-[40px] capitalize font-medium inline-block w-[349px] h-[50px]">
            Retake Photo
          </div>
        </div>
      </div>
    );
  }
);

export default PhotoBoothShare;
