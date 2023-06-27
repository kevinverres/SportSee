import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { getUserPerformance } from "../../service/service";
import "../../assets/css/Performance.css";

function Performance({ id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserDataPerformance = async () => {
      try {
        const response = await getUserPerformance(id);
        const formatData = response.data.map((data) => {
          switch (data.kind) {
            case 1:
              return { ...data, kind: 'Cardio' };
            case 2:
              return { ...data, kind: 'Energie' };
            case 3:
              return { ...data, kind: 'Endurance' };
            case 4:
              return { ...data, kind: 'Force' };
            case 5:
              return { ...data, kind: 'Vitesse' };
            case 6:
              return { ...data, kind: 'Intensité' };
            default:
              return { ...data };
          }
        });
        setData(formatData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getUserDataPerformance();
  }, [id]);
//   console.log(data);

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="container-radarchart">
        <ResponsiveContainer width="100%" >
          <RadarChart cx="48%" cy="50%" outerRadius="65%" data={data}>
            <PolarGrid radialLines={false}  />
            <PolarAngleAxis stroke="#ffff" tickLine={false} tick={{ fontSize: 11 }} dataKey="kind" />
            <Radar
              dataKey="value"
              stroke="#FF0101B2"
              fill="#FF0101B2"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Performance;
