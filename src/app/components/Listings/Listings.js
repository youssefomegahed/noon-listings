import React from "react";
import styles from "./listings.module.scss";
import ListingItem from "../ListingItem/ListingItem";

const Listings = ({
  data,
  setLikedListingsIDs,
  likedListingsIDs,
  likedSelected,
}) => {
  const handleLikeClick = (id) => {
    // get the liked listings from local storage
    let tmpLikedListingsIDs = localStorage.getItem("likedListings") || [];

    if (tmpLikedListingsIDs.length > 0) {
      tmpLikedListingsIDs = JSON.parse(tmpLikedListingsIDs);
    }

    // if the listing is already liked, remove it from the list, otherwise add it to the list
    if (tmpLikedListingsIDs.includes(id)) {
      tmpLikedListingsIDs = tmpLikedListingsIDs.filter((item) => item !== id);
    } else {
      tmpLikedListingsIDs.push(id);
    }

    // save the updated list to local storage and set the likedListingsIDs state
    localStorage.setItem("likedListings", JSON.stringify(tmpLikedListingsIDs));
    setLikedListingsIDs(tmpLikedListingsIDs);
  };

  return (
    <div className={styles.listingsContainer}>
      {data.length === 0 && (
        <h1 className={styles.noListingsText}>
          {likedSelected
            ? "You haven't liked any listings yet!"
            : "No Listings to Show"}
        </h1>
      )}
      {data.map((item) => (
        <ListingItem
          key={item.id}
          username={item.username}
          profilePicture={item.profilePicture}
          image={item.image}
          title={item.title}
          price={item.price}
          numLikes={
            likedListingsIDs.includes(item.id)
              ? item.numLikes + 1
              : item.numLikes
          }
          description={item.description}
          tags={item.tags}
          numComments={item.numComments}
          liked={likedListingsIDs.includes(item.id)}
          onLikeClick={() => handleLikeClick(item.id)}
        />
      ))}
    </div>
  );
};

export default Listings;
