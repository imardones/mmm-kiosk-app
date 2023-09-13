import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type TopNavBarType = {
  mSign1?: string;
  dimensionCode?: string;

  /** Style props */
  topNavBarPosition?: CSSProperties["position"];
  topNavBarTop?: CSSProperties["top"];
  topNavBarLeft?: CSSProperties["left"];
  topNavBarWidth?: CSSProperties["width"];
  topNavBarAlignSelf?: CSSProperties["alignSelf"];
  frameDivHeight?: CSSProperties["height"];
  mSign1Cursor?: CSSProperties["cursor"];
  vectorIconCursor?: CSSProperties["cursor"];

  /** Action props */
  onMSign1Click?: () => void;
  onVectorImageClick?: () => void;
};

const TopNavBar: FunctionComponent<TopNavBarType> = memo(
  ({
    mSign1,
    dimensionCode,
    topNavBarPosition,
    topNavBarTop,
    topNavBarLeft,
    topNavBarWidth,
    topNavBarAlignSelf,
    frameDivHeight,
    mSign1Cursor,
    vectorIconCursor,
    onMSign1Click,
    onVectorImageClick,
  }) => {
    const topNavBarStyle: CSSProperties = useMemo(() => {
      return {
        position: topNavBarPosition,
        top: topNavBarTop,
        left: topNavBarLeft,
        width: topNavBarWidth,
        alignSelf: topNavBarAlignSelf,
      };
    }, [
      topNavBarPosition,
      topNavBarTop,
      topNavBarLeft,
      topNavBarWidth,
      topNavBarAlignSelf,
    ]);

    const frameDivStyle: CSSProperties = useMemo(() => {
      return {
        height: frameDivHeight,
      };
    }, [frameDivHeight]);

    const mSign1Style: CSSProperties = useMemo(() => {
      return {
        cursor: mSign1Cursor,
      };
    }, [mSign1Cursor]);

    const vectorIconStyle: CSSProperties = useMemo(() => {
      return {
        cursor: vectorIconCursor,
      };
    }, [vectorIconCursor]);

    return (
      <div
        className="w-[1080px] h-[180px] flex flex-row items-center justify-between"
        style={topNavBarStyle}
      >
        <div
          className="bg-white shadow-[0px_5.083333492279053px_5.08px_rgba(0,_0,_0,_0.25)] w-[1080px] h-[180px] flex flex-row p-5 box-border items-center justify-between"
          style={frameDivStyle}
        >
          <img
            className="relative w-[242px] h-[135px] object-cover max-w-[242px] max-h-[135px]"
            alt=""
            src={mSign1}
            style={mSign1Style}
            onClick={onMSign1Click}
          />
          <img
            className="relative w-[90.64px] h-[72px] object-cover"
            alt=""
            src={dimensionCode}
            style={vectorIconStyle}
            onClick={onVectorImageClick}
          />
        </div>
      </div>
    );
  }
);

export default TopNavBar;
