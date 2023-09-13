import { FunctionComponent } from "react";
import LogoBigImage from "./LogoBigImage";
import StateDefault from "./StateDefault";
import HomeWelcome from "./HomeWelcome";

const HomeMenu: FunctionComponent = () => {
  return (
    <section className="relative bg-black w-full h-[1920px] flex flex-col items-center justify-end gap-[96px]">
      <section className="w-[698px] overflow-hidden flex flex-col p-5 box-border items-center justify-end">
        <LogoBigImage
          imageDimensions="/logobig1.png"
          logoBigIconPosition="relative"
          logoBigIconMaxWidth="100%"
          logoBigIconOverflow="hidden"
          logoBigIconFlexShrink="0"
        />
      </section>
      <section
        className="self-stretch h-[681px] flex flex-col py-0 px-[50px] box-border items-center justify-between"
        id="menu"
      >
        <StateDefault
          text="Projects"
          stateDefaultWidth="unset"
          stateDefaultHeight="189px"
          stateDefaultCursor="pointer"
          stateDefaultZIndex="unset"
          stateDefaultAlignSelf="stretch"
          wELCOMEDisplay="inline-block"
        />
        <StateDefault
          text="Photo-Booth"
          stateDefaultWidth="unset"
          stateDefaultHeight="189px"
          stateDefaultCursor="pointer"
          stateDefaultZIndex="unset"
          stateDefaultAlignSelf="stretch"
          wELCOMEDisplay="inline-block"
        />
        <StateDefault
          text="map"
          stateDefaultWidth="unset"
          stateDefaultHeight="189px"
          stateDefaultCursor="pointer"
          stateDefaultZIndex="unset"
          stateDefaultAlignSelf="stretch"
          wELCOMEDisplay="inline-block"
        />
      </section>
      <SloganSection
        imageResolution="/pptxbg.png"
        imageId="/metrocreativetechmemorableslogan2.png"
        propPosition="relative"
        propMargin="unset"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propZIndex="unset"
        propAlignSelf="stretch"
      />
    </section>
  );
};

export default HomeMenu;
