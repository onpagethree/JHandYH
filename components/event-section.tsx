import { wedding } from "@/data/wedding";

export function EventSection() {
  return (
    <section className="div2">
      <h1>
        {wedding.event.date}
        <br />
        {wedding.event.time}
        <br />
        {wedding.event.venue}
      </h1>

      <a href={wedding.event.naverMapUrl}>네이버지도</a>
      <a href={wedding.event.kakaoMapUrl}>카카오맵</a>

      <p id="parking">{wedding.event.parking}</p>
    </section>
  );
}
