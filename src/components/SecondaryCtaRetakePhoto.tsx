import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SecondaryCtaRetakePhoto: FunctionComponent = memo(() => {
  const navigate = useNavigate();

  const onSecondaryCtaRetakePhotoContainerClick = useCallback(() => {
    navigate("/photoboothsmile");
  }, [navigate]);

  return (
    <div
      className="absolute top-[1582px] left-[325px] box-border w-[430px] h-[129px] overflow-hidden cursor-pointer text-center text-[38.82px] text-gold font-avenir border-[5px] border-solid border-gold"
      onClick={onSecondaryCtaRetakePhotoContainerClick}
    >
      <div className="absolute top-[39px] left-[40px] capitalize font-medium inline-block w-[349px] h-[50px]">
        Retake Photo
      </div>
    </div>
  );
});

export default SecondaryCtaRetakePhoto;
