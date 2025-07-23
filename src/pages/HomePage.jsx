import { useEffect } from "react";
import ListChart from "../features/dashboard/ListChart";
import SalesChart from "../features/dashboard/SalesChart";
import Stats from "../features/dashboard/Stats";

export default function HomePage() {
  useEffect(() => {
    document.title = "Maskn | Dashboard";
  }, []);
  return (
    <div className="space-y-8 bg-gray-100">
      <Stats />
      <div className="grid md:grid-cols-2 gap-4">
        <SalesChart />

        <ListChart />
      </div>
    </div>
  );
}
