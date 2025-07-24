import React from "react";
import { useProperties } from "../properties/UseProperties";
import Error from "../../ui/Error";
import Spinner from "../../ui/Spinner";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
export default function ListChart() {
  const startData = [
    {
      duration: "studio",
      value: 0,
      color: "#ef4444",
    },
    {
      duration: "villa",
      value: 0,
      color: "#14b8a6",
    },
    {
      duration: "house",
      value: 0,
      color: "#22c55e",
    },
  ];

  function prepareData(startData, stays) {
    function incArrayValue(arr, field) {
      return arr.map((obj) =>
        obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
      );
    }

    const data = stays
      .reduce((arr, cur) => {
        const num = cur.type;
        if (num === "villa") return incArrayValue(arr, "villa");
        if (num === "studio") return incArrayValue(arr, "studio");
        if (num === "house") return incArrayValue(arr, "house");

        return arr;
      }, startData)
      .filter((obj) => obj.value > 0);

    return data;
  }

  const { data: result, isLoading, error } = useProperties();
  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;

  const confirmedStays = result?.data ?? [];
  const data = prepareData(startData, confirmedStays);
  return (
    <div className=" w-full max-w-4xl mx-auto  bg-white">
      <h2 className="font-bold text-2xl p-4">Types of Listings</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="50%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex gap-4 justify-center">
        {data.map((item) => (
          <div className="flex items-center gap-2">
            <div
              className="size-4 rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            ></div>
            <div>{item.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
