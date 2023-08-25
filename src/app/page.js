"use client";

import React from "react";
import MobileNavBar from "./components/NavBars/MobileNavBar/MobileNavBar";
import DesktopNavBar from "./components/NavBars/DesktopNavBar/DesktopNavBar";
import Listings from "./components/Listings/Listings";
import listingsData from "./data/listings";

export default function Home() {
  const [width, setWidth] = React.useState(window.screen.width);
  const [isMobile, setIsMobile] = React.useState(false);
  const [likedSelected, setLikedSelected] = React.useState(false);
  const [data, setData] = React.useState([]);

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

  React.useEffect(() => {
    setData(listingsData);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        height: "100vh",
      }}
    >
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
      <div
        style={{
          height: "calc(100vh - 60px)", // 60px is the height of the nav bar
          overflow: "auto", // Enable scrolling when needed
        }}
      >
        <Listings data={data} />
      </div>
    </div>
  );
}
