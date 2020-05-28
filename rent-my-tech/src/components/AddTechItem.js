import React, { useState } from "react";
import { connect } from "react-redux";
import { postTechItem } from "../store/actions";
import { useHistory } from "react-router-dom";

const AddTechItem = (props) => {
  const history = useHistory();

  const [postPayload, setPostPayload] = useState({
    techItem: "",
    techDescription: "",
    owner: "",
    price: "",
    ownersId: "",
  });

  const handleTechChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPostPayload({
      ...postPayload,
      [name]: value,
    });
    console.log(postPayload);
  };

  const postNewItem = (e) => {
    e.preventDefault();

    props.postTechItem(postPayload);
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
        value={postPayload.techItem}
        onChange={handleTechChanges}
      />
      <p>Tech Description</p>
      <input
        type="text"
        name="techDescription"
        value={postPayload.techDescription}
        onChange={handleTechChanges}
      />
      <p>Owner</p>
      <input
        type="text"
        name="owner"
        value={postPayload.owner}
        onChange={handleTechChanges}
      />
      <p>Price</p>
      <input
        type="text"
        name="price"
        value={postPayload.price}
        onChange={handleTechChanges}
      />
      <p>ID</p>
      <input
        type="text"
        name="ownersId"
        value={postPayload.ownersId}
        onChange={handleTechChanges}
      />
      <button onClick={postNewItem}>Submit</button>
    </form>
  );
};

export default connect(null, { postTechItem })(AddTechItem);
