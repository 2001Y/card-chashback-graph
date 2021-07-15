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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <h1>
          過去のクレジットカード新規作成によるポイントサイトのキャッシュバック率
        </h1>
      </header>
      <main>
        <h2>すべて</h2>
        <div style={{ width: "100%", height: 200 }} className="chart">
          <ResponsiveContainer>
            <LineChart
              width={600}
              height={300}
              data={json}
              margin={{
                top: 10,
                right: 30,
                left: 15,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="data" />
              <YAxis unit="円" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="エポス"
                stroke="#ff0000"
                strokeWidth={6}
                animationDuration={500}
              />
              <Line
                type="monotone"
                dataKey="楽天"
                stroke="#8884d8"
                strokeWidth={6}
                animationDuration={500}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <Card name="楽天" json={json} />
        <Card name="エポス" json={json} />
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
