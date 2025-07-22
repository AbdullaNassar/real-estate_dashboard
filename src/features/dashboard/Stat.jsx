import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

export default function Stat({
  title = "test",
  value,
  icon,
  color = "text-yellow-600",
  bg = "text=yellow-600",
  up = true,
  description = "10% changes on profit",
}) {
  return (
    <div className="bg-white rounded-xl shadow">
      <div className="flex items-center justify-between p-4">
        <div className="space-y-3">
          <h2 className={`${color} font-bold text-2xl`}>{value}</h2>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <span className={`${color} text-3xl`}>{icon}</span>
      </div>
      <div
        className={`flex justify-between p-4 ${bg} items-center  text-white`}
      >
        <h2>{description}</h2>
        <span>{up ? <FaArrowTrendUp /> : <FaArrowTrendDown />}</span>
      </div>
    </div>
  );
}
