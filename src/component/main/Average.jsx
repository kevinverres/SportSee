import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";
import { getUserAverage } from "../../service/service";
import "../../assets/css/Average.css";

function Average({ id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserDataAverage = async () => {
      try {
        const response = await getUserAverage(id);
        const formatData = response.sessions.map((data) => {
          
          switch (data.day) {
            case 1:
              return { ...data, day: "L" };
            case 2:
              return { ...data, day: "M" };
            case 3:
              return { ...data, day: "M" };
            case 4:
              return { ...data, day: "J" };
            case 5:
              return { ...data, day: "V" };
            case 6:
              return { ...data, day: "S" };
            case 7:
              return { ...data, day: "D" };
            default:
              return { ...data };
          }
        })
        setData(formatData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getUserDataAverage();
  }, [id]);
  // console.log(data);
  const CustomTooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-average">
            <p>{payload[0].value} min</p>
        </div>
      );
    }
  
    return null;
  };
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="containerLineChart">
        <p className="title-linechart">Durée moyenne des sessions</p>
        <ResponsiveContainer width="100%">
        <LineChart
          strokeWidth={1}
          data={data}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#ffffff" />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={CustomTooltip} cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 32,
            }}  />
          <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2}
            dot={false}
            activeDot={{
              width: 8,
              fill: '#FFFFFF',
              stroke: '#FFFFFF',
              strokeWidth: 10,
              r: 3,
              strokeOpacity: 0.35,
              border: '5px solid rgba(255, 255, 255, 0.198345)',
          }}
          />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

export default Average;
