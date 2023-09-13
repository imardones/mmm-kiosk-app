import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type SendPhotoInputType = {
  emailInputLabel?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const SendPhotoInput: FunctionComponent<SendPhotoInputType> = memo(
  ({ emailInputLabel, propTop, propLeft }) => {
    const sendPhotoInputStyle: CSSProperties = useMemo(() => {
      return {
        top: propTop,
        left: propLeft,
      };
    }, [propTop, propLeft]);

    return (
      <div
        className="absolute top-[387px] left-[56px] w-[839.4px] h-[58.4px] text-center text-[36.29px] text-dimgray font-avenir"
        style={sendPhotoInputStyle}
      >
        <div className="absolute h-[61.64%] w-[98.88%] top-[0%] left-[0%] inline-block">
          {emailInputLabel}
        </div>
        <div className="absolute h-[1.71%] w-[100.12%] top-[99.14%] right-[-0.06%] bottom-[-0.86%] left-[-0.06%] box-border border-t-[1px] border-solid border-darkslateblue" />
      </div>
    );
  }
);

export default SendPhotoInput;
