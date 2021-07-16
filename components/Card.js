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
const Card = (props) => {
  const { nameList, json } = props;

  return (
    <>
      <section id="all">
        <h2>すべて</h2>
        <div className="chart">
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
              {nameList.map((e, i) => (
                <Line
                  type="monotone"
                  dataKey={e.name}
                  stroke={e.color}
                  strokeWidth={6}
                  animationDuration={500}
                  key={i}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
      {nameList.map((e, i) => (
        <section key={i} id={e.name}>
          <h2>{e.name}</h2>
          <div className="chart">
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
                <Line
                  type="monotone"
                  dataKey={e.name}
                  stroke="#000"
                  strokeWidth={6}
                  animationDuration={500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      ))}

      {/* <p dangerouslySetInnerHTML={{ __html: json.pop().楽天site }}></p> */}
    </>
  );
};

export default Card;
