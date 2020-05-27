import React from "react";

const TechItem = (props) => {
  const { item } = props;

  const onClickHandler = (evt) => {
    // Action call that sends a get request to /api/request/:id
    // then route to /TechItemInfo page
  };

  // Simon can touch up this component
  return (
    <div onClick={onClickHandler}>
      <p>{item.id}</p>
      <p>{item.techItem}</p>
      <p>{item.techDescription}</p>
      <p>{item.owner}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default TechItem;
