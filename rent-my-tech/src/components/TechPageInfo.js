import React, { useState } from "react";
import { connect } from "react-redux";
import { putTechCurrentItem } from "../store/actions";
import { useHistory } from "react-router-dom";

const TechPageInfo = (props) => {
  const [putPayload, setPutPayload] = useState({
    techItem: "",
    techDescription: "",
    owner: "",
    price: "",
  });

  const history = useHistory();

  const handleTechChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPutPayload({
      ...putPayload,
      [name]: value,
    });
  };

  const postTechChanges = (e) => {
    e.preventDefault();

    props.putTechCurrentItem(props.item.id, putPayload);
    setTimeout(() => {
      history.push("/techPage");
    }, 500);
  };

  return (
    <form>
      <p>Tech Item</p>
      <input
        type="text"
        name="techItem"
        value={putPayload.techItem}
        onChange={handleTechChanges}
      />
      <p>Tech Description</p>
      <input
        type="text"
        name="techDescription"
        value={putPayload.techDescription}
        onChange={handleTechChanges}
      />
      <p>Owner</p>
      <input
        type="text"
        name="owner"
        value={putPayload.owner}
        onChange={handleTechChanges}
      />
      <p>Price</p>
      <input
        type="text"
        name="price"
        value={putPayload.price}
        onChange={handleTechChanges}
      />
      <button onClick={postTechChanges}>Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.tech.currentTechItem,
    error: state.tech.error,
    isFetching: state.tech.isFetching,
  };
};

export default connect(mapStateToProps, { putTechCurrentItem })(TechPageInfo);
