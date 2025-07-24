import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "Maskn | 404";
  }, []);
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 text-stone-800 h-screen text-5xl flex items-center justify-center flex-col gap-6">
      <h1>This Page is Not Found (404)</h1>
      <button
        className="bg-blue-500 text-white px-8 py-4 rounded-md hover:bg-blue-600 hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        &lt; Back to Home
      </button>
    </div>
  );
}
