import React from "react";
import styles from "./listings.module.scss";
import ListingItem from "../ListingItem/ListingItem";

const Listings = ({ data }) => {
  const handleLikeClick = (id) => {
    console.log(id);
  };

  return (
    <div className={styles.listingsContainer}>
      {data.map((item) => (
        <ListingItem
          key={item.id}
          username={item.username}
          profilePicture={item.profilePicture}
          image={item.image}
          title={item.title}
          price={item.price}
          numLikes={item.numLikes}
            description={item.description}
          numComments={item.numComments}
          liked={item.liked}
          onLikeClick={() => handleLikeClick(item.id)}
        />
      ))}
    </div>
  );
};

export default Listings;
