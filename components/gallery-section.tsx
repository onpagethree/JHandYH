import { wedding } from "@/data/wedding";

const [
  leftPortrait,
  rightPortrait,
  narrowLeft,
  tallRight,
  widePhoto,
  motionPhoto,
  rightAligned,
  smallCenter,
] = wedding.assets.gallery;

export function GallerySection() {
  return (
    <>
      <section className="div4">
        <img src={wedding.assets.main} alt="" />
      </section>

      <section className="div5">
        <div>
          <img src={leftPortrait} alt="" />
        </div>
        <div>
          <img src={rightPortrait} alt="" />
        </div>
      </section>

      <section className="div6">
        <div className="div6-1">
          <div>
            <img src={narrowLeft} alt="" />
          </div>
          <div>
            <img src={tallRight} alt="" />
          </div>
        </div>

        <img src={widePhoto} alt="" />
        <div id="img6-4gif">
          <img src={motionPhoto} alt="" />
        </div>

        <div id="img6-5">
          <img src={rightAligned} alt="" />
        </div>
        <div id="img6-6">
          <img src={smallCenter} alt="" />
        </div>

        <img id="glyph03" src={wedding.assets.glyph03} alt="" />
      </section>
    </>
  );
}
