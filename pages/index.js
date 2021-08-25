import Head from "next/head";
import Image from "next/image";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Card from "../components/Card";

export default function Home({ json }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <h1>
          過去のクレジットカード入会によるポイントサイトの最高還元金額の推移
        </h1>
      </header>
      <main>
        <Card
          nameList={[
            { name: "楽天カード", color: "#b8b8b4" },
            { name: "エポスカード", color: "#878787" },
            { name: "Yahoo カード", color: "#EE032B" },
            { name: "JCB W", color: "#34498a" },
            { name: "三井住友カード プラチナ", color: "#201315" },
            { name: "dカード GOLD", color: "#CFAC73" },
            { name:"LINE Pay カード",color: "#06c755" }
          ]}
          json={json}
        />
        <footer>
          <a
            href="http://2001y.me/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            ©︎2001Y
          </a>
        </footer>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbx5umD18_YqMPa4O_72orPCx03EhyCrksIEdl-Gj2W3aw4yyqOTZkhFntDzvyt3Cj_N5A/exec"
  );
  const json = await res.json();

  // const json = [
  //   {
  //     data: "2021/07/13",
  //     楽天: 11000,
  //     楽天site:
  //       '[モッピー] 11000円：<a href="https://dokotoku.jp/link/11609">&#x697D;&#x5929;&#x30AB;&#x30FC;&#x30C9;&#x3010;&#x6700;&#x5927;18,000&#x5186;&#x76F8;&#x5F53;&#x3011;</a>',
  //     エポス: 6000,
  //     エポスsite:
  //       '[ライフメディア] 6000円：<a href="https://dokotoku.jp/link/791">&#x30A8;&#x30DD;&#x30B9;&#x30AB;&#x30FC;&#x30C9;</a>',
  //   },
  //   {
  //     data: "2021/07/14",
  //     楽天: 11000,
  //     楽天site:
  //       '[モッピー] 11000円：<a href="https://dokotoku.jp/link/11609">&#x697D;&#x5929;&#x30AB;&#x30FC;&#x30C9;&#x3010;&#x6700;&#x5927;18,000&#x5186;&#x76F8;&#x5F53;&#x3011;</a>',
  //     エポス: 6000,
  //     エポスsite:
  //       '[ライフメディア] 6000円：<a href="https://dokotoku.jp/link/791">&#x30A8;&#x30DD;&#x30B9;&#x30AB;&#x30FC;&#x30C9;</a>',
  //   },
  //   {
  //     data: "2021/07/15",
  //     楽天: 11000,
  //     楽天site:
  //       '[モッピー] 11000円：<a href="https://dokotoku.jp/link/11609">&#x697D;&#x5929;&#x30AB;&#x30FC;&#x30C9;&#x3010;&#x6700;&#x5927;18,000&#x5186;&#x76F8;&#x5F53;&#x3011;</a>',
  //     エポス: 6000,
  //     エポスsite:
  //       '[ライフメディア] 6000円：<a href="https://dokotoku.jp/link/791">&#x30A8;&#x30DD;&#x30B9;&#x30AB;&#x30FC;&#x30C9;</a>',
  //   },
  //   {
  //     data: "2021/07/16",
  //     楽天: 11000,
  //     楽天site:
  //       '[モッピー] 11000円：<a href="https://dokotoku.jp/link/11609">&#x697D;&#x5929;&#x30AB;&#x30FC;&#x30C9;&#x3010;&#x6700;&#x5927;18,000&#x5186;&#x76F8;&#x5F53;&#x3011;</a>',
  //     エポス: 6000,
  //     エポスsite:
  //       '[ライフメディア] 6000円：<a href="https://dokotoku.jp/link/791">&#x30A8;&#x30DD;&#x30B9;&#x30AB;&#x30FC;&#x30C9;</a>',
  //   },
  //   {
  //     data: "2021/07/17",
  //     楽天: 11000,
  //     楽天site:
  //       '[モッピー] 11000円：<a href="https://dokotoku.jp/link/11609">&#x697D;&#x5929;&#x30AB;&#x30FC;&#x30C9;&#x3010;&#x6700;&#x5927;18,000&#x5186;&#x76F8;&#x5F53;&#x3011;</a>',
  //     エポス: 6000,
  //     エポスsite:
  //       '[ライフメディア] 6000円：<a href="https://dokotoku.jp/link/791">&#x30A8;&#x30DD;&#x30B9;&#x30AB;&#x30FC;&#x30C9;</a>',
  //   },
  //   {
  //     data: "2021/07/16",
  //     楽天: 11000,
  //     楽天site:
  //       '[モッピー] 11000円：<a href="https://dokotoku.jp/link/11609">&#x697D;&#x5929;&#x30AB;&#x30FC;&#x30C9;&#x3010;&#x6700;&#x5927;18,000&#x5186;&#x76F8;&#x5F53;&#x3011;</a>',
  //     エポス: 6000,
  //     エポスsite:
  //       '[ライフメディア] 6000円：<a href="https://dokotoku.jp/link/791">&#x30A8;&#x30DD;&#x30B9;&#x30AB;&#x30FC;&#x30C9;</a>',
  //   },
  // ];

  return {
    props: { json },
    revalidate: 30, // ここを追加
  };
}
