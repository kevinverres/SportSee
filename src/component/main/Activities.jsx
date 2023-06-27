import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getUserActivity } from "../../service/service";
import { useEffect, useState } from "react";
import "../../assets/css/Activities.css";

function Activities({ id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserDataActivity = async () => {
      try {
        const response = await getUserActivity(id);

        setData(response.sessions);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getUserDataActivity();
  }, [id]);
  const formatData = () => {
    let counter = 0;
    const dataToUse = data.map((datas) => {
      counter++;
      return {
        index: `${counter}`,
        day: datas.day,
        kilogram: datas.kilogram,
        calories: datas.calories,
      };
    });
    return dataToUse;
  };
//   console.log(data && formatData());
  const CustomTooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
            <p>{payload[0].value}kg</p>
            <p>{payload[1].value}Kcal</p>
        </div>
      );
    }
  
    return null;
  };

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  } else {
    return (
      <div className="container-barchart">
        <div className="barchart_info">
          <p className="title_barchart">Activité quotidienne</p>
          <ul className="legend">
            <li className="dot_weight">
              <span className="span_weight">Poids (kg)</span>
            </li>
            <li className="dot_calories">
              <span className="span_calories">Calories brûlées (kCal)</span>
            </li>
          </ul>
        </div>
        <ResponsiveContainer aspect={4}>
          <BarChart barGap={8} barCategoryGap={1} data={data && formatData()}>
            <CartesianGrid vertical={false} strokeDasharray="1 1" />
            <XAxis dataKey="index" tickLine={false} />
            <YAxis
              yAxisId="kilogram"
              dataKey="kilogram"
              type="number"
              domain={[69, "dataMax + 1"]}
              axisLine={false}
              orientation="right"
              tickLine={false}
              tick={{ fontSize: 14 }}
              dx={15}
            />
            <YAxis
              yAxisId="calories"
              dataKey="calories"
              type="number"
              domain={[0, "dataMax + 20"]}
              hide={true}
            />
            <Tooltip content={<CustomTooltip />}/>
            <Bar
              yAxisId="kilogram"
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[50, 50, 0, 0]}
            />
            <Bar
              yAxisId="calories"
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Activities;
