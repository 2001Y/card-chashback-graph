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

export default function Home({ json }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
        <div style={{ width: "100%", height: 250 }} className="chart">
          <ResponsiveContainer>
            <LineChart
              width={600}
              height={300}
              data={json}
              margin={{
                top: 20,
                right: 30,
                left: 15,
                bottom: 5,
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
        <h2>楽天カード</h2>
        <div style={{ width: "100%", height: 250 }} className="chart">
          <ResponsiveContainer>
            <LineChart
              width={600}
              height={300}
              data={json}
              margin={{
                top: 20,
                right: 30,
                left: 15,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="data" />
              <YAxis unit="円" />
              <Tooltip />
              <Legend />
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
        <p dangerouslySetInnerHTML={{ __html: json.pop().楽天site }}></p>
        <h2>エポスカード</h2>
        <div style={{ width: "100%", height: 250 }} className="chart">
          <ResponsiveContainer>
            <LineChart
              width={600}
              height={300}
              data={json}
              margin={{
                top: 20,
                right: 30,
                left: 15,
                bottom: 5,
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
                stroke="#8884d8"
                strokeWidth={6}
                animationDuration={500}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p dangerouslySetInnerHTML={{ __html: json.pop().エポスsite }}></p>
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
  //     data: "2021/07/14",
  //     楽天: 11000,
  //     楽天site:
  //       '<a href="https://dokotoku.jp/link/moppy">&#x30E2;&#x30C3;&#x30D4;&#x30FC;</a>',
  //     エポス: 6000,
  //     エポスsite:
  //       '<a href="https://dokotoku.jp/link/lifemedia">&#x30E9;&#x30A4;&#x30D5;&#x30E1;&#x30C7;&#x30A3;&#x30A2;</a>',
  //   },
  //   {
  //     data: "2021/07/14",
  //     楽天: 11000,
  //     楽天site:
  //       '<a href="https://dokotoku.jp/link/moppy">&#x30E2;&#x30C3;&#x30D4;&#x30FC;</a>',
  //     エポス: 6000,
  //     エポスsite:
  //       '<a href="https://dokotoku.jp/link/lifemedia">&#x30E9;&#x30A4;&#x30D5;&#x30E1;&#x30C7;&#x30A3;&#x30A2;</a>',
  //   },
  //   {
  //     data: "2021/07/15",
  //     楽天: 11000,
  //     楽天site:
  //       '<a href="https://dokotoku.jp/link/moppy">&#x30E2;&#x30C3;&#x30D4;&#x30FC;</a>',
  //     エポス: 6000,
  //     エポスsite:
  //       '<a href="https://dokotoku.jp/link/lifemedia">&#x30E9;&#x30A4;&#x30D5;&#x30E1;&#x30C7;&#x30A3;&#x30A2;</a>',
  //   },
  //   {
  //     data: "2021/07/16",
  //     楽天: 11000,
  //     楽天site:
  //       '<a href="https://dokotoku.jp/link/moppy">&#x30E2;&#x30C3;&#x30D4;&#x30FC;</a>',
  //     エポス: 6000,
  //     エポスsite:
  //       '<a href="https://dokotoku.jp/link/lifemedia">&#x30E9;&#x30A4;&#x30D5;&#x30E1;&#x30C7;&#x30A3;&#x30A2;</a>',
  //   },
  // ];

  return {
    props: { json },
    revalidate: 30, // ここを追加
  };
}
