import React from "react";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import { useBookings } from "../bookings/useBookings";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
export default function SalesChart() {
  const { data: result, error, isLoading } = useBookings();
  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;

  const bookings = result.data;
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), 7 - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
    };
  });
  const colors = {
    totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
    text: "#374151",
    background: "#fff",
  };
  return (
    <div className="w-full max-w-4xl mx-auto  bg-white">
      <h2 className="font-medium text-2xl p-4 mb-4">
        Revenues from: {format(allDates.at(0), "MMM dd yyyy")}-
        {format(allDates.at(-1), "MMM dd yyyy")}
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit=" LE"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total Revenue"
            unit="LE"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
