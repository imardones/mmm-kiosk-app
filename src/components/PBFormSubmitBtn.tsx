import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PBFormSubmitBtn: FunctionComponent = memo(() => {
  const navigate = useNavigate();

  const onPBFormSubmitBtnClick = useCallback(() => {
    navigate("/photoboothsmile");
  }, [navigate]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-goldenrod absolute top-[1219px] left-[24px] rounded-xl w-[1032px] h-[154px] overflow-hidden"
      onClick={onPBFormSubmitBtnClick}
    >
      <h2 className="m-0 absolute top-[38px] left-[21px] text-31xl capitalize font-bold font-century-gothic text-white text-center inline-block w-[927px] h-[50px]">
        Submit
      </h2>
    </button>
  );
});

export default PBFormSubmitBtn;
