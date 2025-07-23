import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Maskn | 404";
  }, []);
  return <div>NotFound</div>;
}
