import { wedding } from "@/data/wedding";

export function ContactSection() {
  return (
    <section className="div3">
      <img id="glyph02" src={wedding.assets.glyph02} alt="" />
      <div className="contact JH">
        <p>{wedding.couple.groom.parents}</p>
        <h1>{wedding.couple.groom.name}</h1>
        <a href="#">마음 보내실 곳</a>
      </div>
      <div className="contact YH">
        <p>{wedding.couple.bride.parents}</p>
        <h1>{wedding.couple.bride.name}</h1>
        <a href="#">마음 보내실 곳</a>
      </div>
    </section>
  );
}
