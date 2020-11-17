import React from "react";

export default function Tabs({ children, ...props }) {
  return (
    <div className="fixed left-0 bottom-0 w-screen" {...props}>
      {children}
    </div>
  );
}
