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
  const { name, json } = props;

  return (
    <>
      <h2>{name}カード</h2>
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
              dataKey={name}
              stroke="#000"
              strokeWidth={6}
              animationDuration={500}
            />
          </LineChart>
        </ResponsiveContainer>
          </div>
          {/* <p dangerouslySetInnerHTML={{ __html: json.pop().楽天site }}></p> */}
    </>
  );
};

export default Card;
