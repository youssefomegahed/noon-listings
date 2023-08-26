"use client";

import React from "react";
import MobileNavBar from "./components/NavBars/MobileNavBar/MobileNavBar";
import DesktopNavBar from "./components/NavBars/DesktopNavBar/DesktopNavBar";
import Listings from "./components/Listings/Listings";
import listingsData from "./data/listings"; // simulates getting data from an API

export default function Home() {
  const [width, setWidth] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [likedSelected, setLikedSelected] = React.useState(false); // state to keep track of whether the liked tab is selected or not
  const [data, setData] = React.useState([]); // listings data
  const [likedListingsIDs, setLikedListingsIDs] = React.useState([]);

  // on page load
  React.useEffect(() => {
    // set the width of the screen
    setWidth(window.screen.width);
    console.log(window.screen.width);

    //
    window.addEventListener("resize", () => {
      setWidth(window.screen.width);
    });

    // get the listings data from the ./data/listings.js file and set it to the data state
    setData(listingsData);

    // get the liked listings from local storage (if any) and set it to the likedListingsIDs state
    let tmpLikedListingsIDs = localStorage.getItem("likedListings") || [];

    if (tmpLikedListingsIDs.length > 0) {
      tmpLikedListingsIDs = JSON.parse(tmpLikedListingsIDs);
    }

    setLikedListingsIDs(tmpLikedListingsIDs);
  }, []);

  // every time the width changes, check if it is mobile size or not
  React.useEffect(() => {
    if (width < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

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
        {/* Listings */}
        <Listings
          data={
            likedSelected
              ? data.filter((item) => likedListingsIDs.includes(item.id))
              : data // if likedSelected is false, show all listings, otherwise show liked listings
          }
          setLikedListingsIDs={setLikedListingsIDs}
          likedListingsIDs={likedListingsIDs}
          likedSelected={likedSelected}
        />
      </div>
    </div>
  );
}
