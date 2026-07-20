import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JehyunAndYounghyun",
  description: "김제현 송영현 결혼식 초대장",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preconnect"
          href="https://bks0c7yrb0.execute-api.ap-northeast-2.amazonaws.com"
        />
        <link
          rel="stylesheet"
          href="https://bks0c7yrb0.execute-api.ap-northeast-2.amazonaws.com/v1/api/css/drop_fontstream_css/?sid=gAAAAABkxnFxeM_qWopEVVlR8coiZDz9q1FgQcINWnrSViPYGVG871sr6cKuYFz7pjoxmNeszFUTqBzTj23sdvTW7FmTCxgINZ9-Cju2mSEI8WHMbONbz5zFc0xhZFMGnnbGTYZLlM72fh7ai4lxT9DEAwv5941s56_lpsCoCk4LxGI6iY65WFLdtH3_Oyz2RybY70qtHL9CddZ0Bxv9U06CBm0P_tLugF5YlATEjVo6GsuSeHI5hCu5ejalyWj0qI0NvVOYXh-B"
          referrerPolicy="origin"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
