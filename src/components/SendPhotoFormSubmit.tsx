import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SendPhotoFormSubmit: FunctionComponent = memo(() => {
  const navigate = useNavigate();

  const onSendPhotoFormSubmitContainerClick = useCallback(() => {
    navigate("/photoboothsmile");
  }, [navigate]);

  return (
    <div
      className="absolute top-[698px] left-[226px] bg-cornflowerblue-100 w-[511px] h-[154px] overflow-hidden cursor-pointer text-center text-31xl text-white font-avenir"
      onClick={onSendPhotoFormSubmitContainerClick}
    >
      <div className="absolute top-[52px] left-[84px] capitalize font-medium inline-block w-[349px] h-[50px]">
        Send Photo
      </div>
    </div>
  );
});

export default SendPhotoFormSubmit;
