import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type LogoBigImageType = {
  imageDimensions?: string;

  /** Style props */
  logoBigIconPosition?: CSSProperties["position"];
  logoBigIconMaxWidth?: CSSProperties["maxWidth"];
  logoBigIconOverflow?: CSSProperties["overflow"];
  logoBigIconFlexShrink?: CSSProperties["flexShrink"];
};

const LogoBigImage: FunctionComponent<LogoBigImageType> = memo(
  ({
    imageDimensions,
    logoBigIconPosition,
    logoBigIconMaxWidth,
    logoBigIconOverflow,
    logoBigIconFlexShrink,
  }) => {
    const logoBigIconStyle: CSSProperties = useMemo(() => {
      return {
        position: logoBigIconPosition,
        maxWidth: logoBigIconMaxWidth,
        overflow: logoBigIconOverflow,
        flexShrink: logoBigIconFlexShrink,
      };
    }, [
      logoBigIconPosition,
      logoBigIconMaxWidth,
      logoBigIconOverflow,
      logoBigIconFlexShrink,
    ]);

    return (
      <img
        className="h-[241px] object-cover self-stretch"
        alt=""
        src={imageDimensions}
        style={logoBigIconStyle}
      />
    );
  }
);

export default LogoBigImage;
