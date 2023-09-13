import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type FooterType = {
  /** Style props */
  footerPosition?: CSSProperties["position"];
  footerTop?: CSSProperties["top"];
  footerLeft?: CSSProperties["left"];
  footerHeight?: CSSProperties["height"];
  footerAlignSelf?: CSSProperties["alignSelf"];
  frameDivWidth?: CSSProperties["width"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
};

const Footer: FunctionComponent<FooterType> = memo(
  ({
    footerPosition,
    footerTop,
    footerLeft,
    footerHeight,
    footerAlignSelf,
    frameDivWidth,
    frameDivAlignSelf,
  }) => {
    const footerStyle: CSSProperties = useMemo(() => {
      return {
        position: footerPosition,
        top: footerTop,
        left: footerLeft,
        height: footerHeight,
        alignSelf: footerAlignSelf,
      };
    }, [footerPosition, footerTop, footerLeft, footerHeight, footerAlignSelf]);

    const frameDiv1Style: CSSProperties = useMemo(() => {
      return {
        width: frameDivWidth,
        alignSelf: frameDivAlignSelf,
      };
    }, [frameDivWidth, frameDivAlignSelf]);

    return (
      <div
        className="bg-gainsboro shadow-[0px_5.083333492279053px_5.08px_rgba(0,_0,_0,_0.25)] h-[180px] flex flex-col p-2 box-border items-start justify-start text-left text-21xl text-black font-avenir"
        style={footerStyle}
      >
        <div
          className="relative bg-gainsboro shadow-[0px_5.083333492279053px_5.08px_rgba(0,_0,_0,_0.25)] w-[1372.5px] h-[183px]"
          style={frameDiv1Style}
        >
          <div className="absolute top-[181.73px] left-[-1.27px] box-border w-[1375.04px] h-[2.54px] border-t-[2.5px] border-solid border-white" />
          <div className="absolute top-[64px] left-[307.75px] font-extrabold">{`CREATIVE • TECHNICAL • MEMORABLE `}</div>
        </div>
      </div>
    );
  }
);

export default Footer;
