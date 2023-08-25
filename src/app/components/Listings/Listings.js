import React from "react";
import styles from "./listings.module.scss";
import ListingItem from "../ListingItem/ListingItem";

const Listings = ({ data, setLikedListings, likedListings }) => {
  const handleLikeClick = (id) => {
    let tmpLikedListings = localStorage.getItem("likedListings") || [];

    if (tmpLikedListings.length > 0) {
      tmpLikedListings = JSON.parse(tmpLikedListings);
    }
    if (tmpLikedListings.includes(id)) {
      tmpLikedListings = tmpLikedListings.filter((item) => item !== id);
    } else {
      tmpLikedListings.push(id);
    }
    localStorage.setItem("likedListings", JSON.stringify(tmpLikedListings));
    setLikedListings(tmpLikedListings);
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
          numLikes={
            likedListings.includes(item.id) ? item.numLikes + 1 : item.numLikes
          }
          description={item.description}
          numComments={item.numComments}
          liked={likedListings.includes(item.id)}
          onLikeClick={() => handleLikeClick(item.id)}
        />
      ))}
    </div>
  );
};

export default Listings;
