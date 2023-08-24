"use client";

import React from "react";
import MobileNavBar from "./components/NavBars/MobileNavBar/MobileNavBar";
import DesktopNavBar from "./components/NavBars/DesktopNavBar/DesktopNavBar";

export default function Home() {
  return (
    <div>
      <DesktopNavBar />
      {/* <MobileNavBar /> */}
    </div>
  );
}
