"use client";

import { wedding } from "@/data/wedding";

export function EventSection() {
  const openNaverMap = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
      return;
    }

    event.preventDefault();
    window.location.href = wedding.event.naverMapAppUrl;

    window.setTimeout(() => {
      if (!document.hidden) {
        window.location.href = wedding.event.naverMapUrl;
      }
    }, 900);
  };

  return (
    <section
      className="div2"
      style={{ backgroundImage: `url("${wedding.assets.eventBackground}")` }}
    >
      <h1>
        {wedding.event.date}
        <br />
        {wedding.event.time}
        <br />
        {wedding.event.venue}
      </h1>

      <a href={wedding.event.naverMapUrl} onClick={openNaverMap}>
        네이버지도
      </a>
      <a href={wedding.event.kakaoMapUrl}>카카오맵</a>

      <p id="parking">{wedding.event.parking}</p>
    </section>
  );
}
