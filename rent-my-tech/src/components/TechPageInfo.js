import React, { useState } from "react";
import { connect } from "react-redux";
import { putTechCurrentItem, deleteTechItem } from "../store/actions";
import { useHistory } from "react-router-dom";

import { Card, CardContent, Typography, Button } from "@material-ui/core";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 50%;
  margin: 0 auto;
  margin-top: 2%;
`;

const StyledButton = styled(Button)`
  margin-left: 2%;
  border: 1px solid red;
`;

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

  const deleteTechItemHandler = () => {
    props.deleteTechItem(props.item.id);
    setTimeout(() => {
      history.push("/techPage");
    }, 500);
  };

  return (
    <>
      <StyledCard>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.item.techItem}
          </Typography>
          <Typography variant="subtitle2">
            Owned by {props.item.owner}
          </Typography>
          <br></br>
          <Typography variant="body2" component="p">
            {props.item.techDescription}
          </Typography>
          <Typography variant="caption">{props.item.price}</Typography>
        </CardContent>
      </StyledCard>

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
      <button onClick={deleteTechItemHandler}>Delete</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.tech.currentTechItem,
    error: state.tech.error,
    isFetching: state.tech.isFetching,
  };
};

export default connect(mapStateToProps, { putTechCurrentItem, deleteTechItem })(
  TechPageInfo
);
