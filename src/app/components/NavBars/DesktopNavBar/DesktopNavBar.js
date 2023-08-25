import React from "react";
import Link from "next/link";
import styles from "./desktopNavBar.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faHeartCircleCheck,
  faHouseCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
const DesktopNavBar = ({ likedSelected, setLikedSelected }) => {
  return (
    <nav className={styles["desktop-nav"]}>
      <div className={styles["nav-logo"]}>
        <Image src="/logo.png" alt="Logo" width={90} height={90} />
      </div>
      <div className={styles["nav-links"]}>
        <Link
          href={"/"}
          className={styles["nav-link"]}
          onClick={() => {
            setLikedSelected(false);
          }}
        >
          <FontAwesomeIcon
            icon={likedSelected ? faHome : faHouseCircleCheck}
            style={{ color: "black", marginRight: "5px", fontSize: "1.1rem" }}
          />
          <span className={styles["nav-link-text"]}>Home</span>
        </Link>
        <Link
          href={"/"}
          className={styles["nav-link"]}
          onClick={() => {
            setLikedSelected(true);
          }}
        >
          <FontAwesomeIcon
            icon={likedSelected ? faHeartCircleCheck : heartRegular}
            style={{ color: "black", marginRight: "5px", fontSize: "1.1rem" }}
          />
          <span className={styles["nav-link-text"]}>Liked</span>
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
