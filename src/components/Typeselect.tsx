import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type TypeselectType = {
  text?: string;
  dimensionLabel?: string;
  placeHolder?: string;
  showVectorIcon?: boolean;
  showPleaseSelect?: boolean;

  /** Style props */
  typeselectPosition?: CSSProperties["position"];
  typeselectTop?: CSSProperties["top"];
  typeselectLeft?: CSSProperties["left"];
};

const Typeselect: FunctionComponent<TypeselectType> = memo(
  ({
    text = "LABEL *",
    dimensionLabel,
    placeHolder = "Please Select",
    showVectorIcon,
    showPleaseSelect,
    typeselectPosition,
    typeselectTop,
    typeselectLeft,
  }) => {
    const typeselectStyle: CSSProperties = useMemo(() => {
      return {
        position: typeselectPosition,
        top: typeselectTop,
        left: typeselectLeft,
      };
    }, [typeselectPosition, typeselectTop, typeselectLeft]);

    return (
      <div
        className="flex flex-col items-start justify-start relative text-left text-11xl text-gainsboro font-century-gothic"
        style={typeselectStyle}
      >
        <div className="relative w-[393.19px] h-9 z-[0]">
          <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
            {text}
          </div>
        </div>
        <div className="relative bg-white box-border w-[1031px] h-[113.13px] z-[1] border-[2.8px] border-solid border-darkseagreen" />
        {showVectorIcon && (
          <img
            className="absolute my-0 mx-[!important] top-[67px] left-[961px] w-[51.79px] h-[51.79px] object-cover z-[2]"
            alt=""
            src={dimensionLabel}
          />
        )}
        {showPleaseSelect && (
          <div className="absolute my-0 mx-[!important] top-[67px] left-[28px] text-16xl font-light font-avenir text-silver inline-block w-[422.09px] h-[56.97px] shrink-0 z-[3]">
            {placeHolder}
          </div>
        )}
      </div>
    );
  }
);

export default Typeselect;
