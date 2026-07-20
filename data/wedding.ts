export const wedding = {
  couple: {
    groom: {
      name: "김제현",
      parents: "김명국 김정희의 아들",
    },
    bride: {
      name: "송영현",
      parents: "송두석 한정희의 딸",
    },
  },
  event: {
    date: "2026년 10월 17일",
    time: "12시 30분",
    venue: "한국은행, 중구 남대문로 39",
    parking: "주차 가능합니다.",
    naverMapUrl: "https://naver.me/xtNyjOgy",
    kakaoMapUrl: "https://kko.to/OTYRI91GQP",
  },
  gift: {
    groom: {
      title: "신랑측",
      accounts: [
        {
          relation: "부",
          hanja: "父",
          name: "김명국",
          bank: "우리은행",
          accountNumber: "02510271202501",
          kakaoPayUrl: "",
        },
        {
          relation: "모",
          hanja: "母",
          name: "김정희",
          bank: "신한은행",
          accountNumber: "110 448 016880",
          kakaoPayUrl: "",
        },
        {
          relation: "본인",
          hanja: "",
          name: "김제현",
          bank: "카카오뱅크",
          accountNumber: "3333-02-4025793",
          kakaoPayUrl: "",
        },
      ],
    },
    bride: {
      title: "신부측",
      accounts: [
        {
          relation: "부",
          hanja: "父",
          name: "송두석",
          bank: "",
          accountNumber: "",
          kakaoPayUrl: "",
        },
        {
          relation: "모",
          hanja: "母",
          name: "한정희",
          bank: "",
          accountNumber: "",
          kakaoPayUrl: "",
        },
        {
          relation: "본인",
          hanja: "",
          name: "송영현",
          bank: "",
          accountNumber: "",
          kakaoPayUrl: "",
        },
      ],
    },
  },
  assets: {
    glyph01: "/assets/glyph01.svg",
    glyph02: "/assets/glyph02.svg",
    glyph03: "/assets/glyph03.svg",
    intro: "/assets/1_12900008_m.jpg",
    eventBackground: "/assets/2_13130012.jpg",
    main: "/assets/3_12900023.png",
    gallery: [
      "/assets/4_MG_4995.png",
      "/assets/5_20260511_8.jpg",
      "/assets/6_12900026.jpg",
      "/assets/7_12900039.jpg",
      "/assets/8_13150017.jpg",
      "/assets/div5_04.gif",
      "/assets/9_13150018.jpg",
      "/assets/10_20260511_5.jpg",
    ],
  },
} as const;
