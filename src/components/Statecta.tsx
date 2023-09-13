import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type StatectaType = {
  text?: string;

  /** Style props */
  statectaPosition?: CSSProperties["position"];
  statectaTop?: CSSProperties["top"];
  statectaLeft?: CSSProperties["left"];
  statectaWidth?: CSSProperties["width"];
  statectaAlignSelf?: CSSProperties["alignSelf"];
  wELCOMELeft?: CSSProperties["left"];
};

const Statecta: FunctionComponent<StatectaType> = memo(
  ({
    text = "WELCOME",
    statectaPosition,
    statectaTop,
    statectaLeft,
    statectaWidth,
    statectaAlignSelf,
    wELCOMELeft,
  }) => {
    const statectaStyle: CSSProperties = useMemo(() => {
      return {
        position: statectaPosition,
        top: statectaTop,
        left: statectaLeft,
        width: statectaWidth,
        alignSelf: statectaAlignSelf,
      };
    }, [
      statectaPosition,
      statectaTop,
      statectaLeft,
      statectaWidth,
      statectaAlignSelf,
    ]);

    const wELCOMEStyle: CSSProperties = useMemo(() => {
      return {
        left: wELCOMELeft,
      };
    }, [wELCOMELeft]);

    return (
      <div
        className="w-[907px] h-[189px] text-center text-31xl text-white font-century-gothic"
        style={statectaStyle}
      >
        <div className="absolute top-[0px] left-[0px] bg-cornflowerblue-200 box-border w-[907px] h-[189px] border-[4px] border-solid border-cornflowerblue-100" />
        <b
          className="absolute top-[calc(50%_-_30.5px)] left-[320px] capitalize"
          style={wELCOMEStyle}
        >
          {text}
        </b>
      </div>
    );
  }
);

export default Statecta;
