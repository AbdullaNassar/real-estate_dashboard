import React from "react";
import { useProperties } from "../properties/UseProperties";
import Error from "../../ui/Error";
import Spinner from "../../ui/Spinner";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
export default function ListChart() {
  const startDataLight = [
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

  const startDataDark = [
    {
      duration: "1 night",
      value: 0,
      color: "#b91c1c",
    },
    {
      duration: "2 nights",
      value: 0,
      color: "#c2410c",
    },
    {
      duration: "3 nights",
      value: 0,
      color: "#a16207",
    },
    {
      duration: "4-5 nights",
      value: 0,
      color: "#4d7c0f",
    },
    {
      duration: "6-7 nights",
      value: 0,
      color: "#15803d",
    },
    {
      duration: "8-14 nights",
      value: 0,
      color: "#0f766e",
    },
    {
      duration: "15-21 nights",
      value: 0,
      color: "#1d4ed8",
    },
    {
      duration: "21+ nights",
      value: 0,
      color: "#7e22ce",
    },
  ];

  function prepareData(startData, stays) {
    // A bit ugly code, but sometimes this is what it takes when working with real data 😅

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

  const { data: confirmedStays, isLoading, error } = useProperties();

  if (isLoading) return <Spinner />;
  console.log(confirmedStays);

  const isDarkMode = false;
  const startData = isDarkMode ? startDataDark : startDataLight;
  const data = prepareData(startData, confirmedStays);
  return (
    <div className=" w-full max-w-4xl mx-auto  bg-white">
      <h2 className="font-semibold text-2xl">Listing</h2>
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
          {/* <Legend
                verticalAlign="middle"
                align="right"
                layout="vertical"
                iconSize={15}
                iconType="circle"
              /> */}
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
