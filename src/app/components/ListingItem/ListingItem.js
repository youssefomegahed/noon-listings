import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./listingItem.module.scss";

const ListingItem = ({
  username,
  profilePicture,
  image,
  title,
  price,
  numLikes,
  description,
  numComments,
  liked,
  onLikeClick,
}) => {
  return (
    <div className={styles["listing-item"]}>
      <a className={styles["user-info"]} href="#">
        <div className={styles["profile-picture"]}>
          <Image
            src={profilePicture}
            alt={`${username}'s profile`}
            width={40}
            height={40}
          />
        </div>
        <span className={styles["username"]}>{username}</span>
      </a>
      <div className={styles["listing-image"]}>
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={300}
          height={200}
          style={{
            borderRadius: 5,
            objectFit: "cover",
            filter: "brightness(70%)",
          }}
        />
        <div className={styles["title-container"]}>
          <a href="#">
            <h2 className={styles["listing-title"]}>{title}</h2>
          </a>
          <button
            className={styles["like-button"]}
            onClick={onLikeClick}
            style={{
              color: "black",
              fontSize: 25,
              marginRight: 5,
            }}
          >
            <FontAwesomeIcon
              icon={liked ? solidHeart : faHeart}
              color={"#82ae04"}
            />
          </button>
        </div>
      </div>
      <div className={styles["listing-details"]}>
        <span className={styles["price"]}>${price}</span>
        <a className={styles["likes"]} href="#">
          <button
            className={styles["like-button"]}
            onClick={onLikeClick}
            style={{
              color: "black",
              fontSize: 14,
            }}
          >
            <FontAwesomeIcon
              icon={liked ? solidHeart : faHeart}
              color={"#82ae04"}
              style={{
                marginTop: 5,
              }}
            />
          </button>{" "}
          {"  " + numLikes + " likes"}
        </a>
        <span className={styles["description"]}>{description}</span>
        <a className={styles["comments"]} href="#">
          View {numComments} comments
        </a>
      </div>
    </div>
  );
};

export default ListingItem;
