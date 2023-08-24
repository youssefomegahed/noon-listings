"use client";

import React from "react";
import MobileNavBar from "./components/NavBars/MobileNavBar/MobileNavBar";
import DesktopNavBar from "./components/NavBars/DesktopNavBar/DesktopNavBar";

export default function Home() {
  const [width, setWidth] = React.useState(window.screen.width);
  const [isMobile, setIsMobile] = React.useState(false);
  const [likedSelected, setLikedSelected] = React.useState(false);

  // every time the width changes, check if it is mobile or not
  React.useEffect(() => {
    if (width < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  // event listener for window to check for resize
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.screen.width);
    });
  }, []);

  return (
    <div>
      {/* Navigation Bar based on screen size */}
      {isMobile ? (
        <MobileNavBar
          likedSelected={likedSelected}
          setLikedSelected={setLikedSelected}
        />
      ) : (
        <DesktopNavBar
          likedSelected={likedSelected}
          setLikedSelected={setLikedSelected}
        />
      )}

      {/* Page Content */}
      <div>
        <h1>Home</h1>
      </div>
    </div>
  );
}
