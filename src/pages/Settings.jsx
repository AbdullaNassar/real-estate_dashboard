import React, { useEffect } from "react";

export default function Settings() {
  useEffect(() => {
    document.title = "Maskn | Settings";
  }, []);
  return <div>Settings</div>;
}
