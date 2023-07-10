import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";
import "../../assets/css/Score.css";

function Score({ score }) {
  const pieData = [
    {
      name: "completed",
      value: score.todayScore || score.score,
      fillColor: "#FF0000",
    },
    {
      name: "not-completed",
      value: 1 - score.todayScore || 1 - score.score,
      fillColor: "#82ca9e00",
    },
  ];
  const pieData2 = [
    {
        name: "completed-pie",
        value: 1,
      },
  ];
  // console.log(pieData);
  return (
    <div className="container-piechart">
        <p className="title-piechart">Score</p>
      <p className="score-piechart">
        <span>{pieData[0].value * 100}%</span><br /> de votre<br /> objectif
      </p>
      <ResponsiveContainer width="100%">
        <PieChart width={400} height={400}>
          <Label position="center">Score</Label>
          <Pie
            data={pieData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={85}
            stroke=""
            fill="#82ca9e"
            startAngle={90}
            endAngle={450}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
          <Pie data={pieData2} dataKey="value" cx="50%" cy="50%" stroke="" fill="#ffff" outerRadius={70} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Score;
