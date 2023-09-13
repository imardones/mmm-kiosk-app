import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type StateDefaultType = {
  text?: string;

  /** Style props */
  stateDefaultWidth?: CSSProperties["width"];
  stateDefaultHeight?: CSSProperties["height"];
  stateDefaultCursor?: CSSProperties["cursor"];
  stateDefaultZIndex?: CSSProperties["zIndex"];
  stateDefaultAlignSelf?: CSSProperties["alignSelf"];
  wELCOMEDisplay?: CSSProperties["display"];
};

const StateDefault: FunctionComponent<StateDefaultType> = memo(
  ({
    text = "WELCOME",
    stateDefaultWidth,
    stateDefaultHeight,
    stateDefaultCursor,
    stateDefaultZIndex,
    stateDefaultAlignSelf,
    wELCOMEDisplay,
  }) => {
    const stateDefaultStyle: CSSProperties = useMemo(() => {
      return {
        width: stateDefaultWidth,
        height: stateDefaultHeight,
        cursor: stateDefaultCursor,
        zIndex: stateDefaultZIndex,
        alignSelf: stateDefaultAlignSelf,
      };
    }, [
      stateDefaultWidth,
      stateDefaultHeight,
      stateDefaultCursor,
      stateDefaultZIndex,
      stateDefaultAlignSelf,
    ]);

    const wELCOME1Style: CSSProperties = useMemo(() => {
      return {
        display: wELCOMEDisplay,
      };
    }, [wELCOMEDisplay]);

    return (
      <div
        className="w-full bg-cornflowerblue-200 box-border h-[190px] flex flex-col p-5 items-center justify-between text-center text-77xl text-white font-avenir border-[4px] border-solid border-cornflowerblue-100"
        style={stateDefaultStyle}
      >
        <div className="relative capitalize font-light" style={wELCOME1Style}>
          {text}
        </div>
      </div>
    );
  }
);

export default StateDefault;
