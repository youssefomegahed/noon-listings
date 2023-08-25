"use client";

import React from "react";
import Image from "next/image";
import MobileNavBar from "./components/NavBars/MobileNavBar/MobileNavBar";
import DesktopNavBar from "./components/NavBars/DesktopNavBar/DesktopNavBar";
import ListingItem from "./components/ListingItem/ListingItem";

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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <ListingItem
          key={0}
          username={"youssefmegahed"}
          profilePicture={
            "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
          }
          image={
            "https://images.pexels.com/photos/9558940/pexels-photo-9558940.jpeg?cs=srgb&dl=pexels-mart-production-9558940.jpg&fm=jpg"
          }
          title={"iPhone 11 Cover"}
          price={100}
          numLikes={43}
          numComments={11}
          liked={false}
          onLikeClick={() => console.log("like clicked")}
        />
      </div>
    </div>
  );
}
