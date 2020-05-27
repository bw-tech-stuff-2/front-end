import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 20%;
  margin: 2%;
`;

const TechItem = (props) => {
  const { item } = props;

  const onClickHandler = (evt) => {
    // Action call that sends a get request to /api/request/:id
    // then route to /TechItemInfo page
  };

  // Simon can touch up this component
  return (
    // <div onClick={onClickHandler}>
    //   <p>{item.id}</p>
    //   <p>{item.techItem}</p>
    //   <p>{item.techDescription}</p>
    //   <p>{item.owner}</p>
    //   <p>{item.price}</p>
    // </div>
    <StyledCard onClick={onClickHandler}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {item.techItem}
        </Typography>
        <Typography variant="subtitle2">
          Owned by {item.owner}
        </Typography>
        <br></br>
        <Typography variant="body2" component="p">
          {item.techDescription}
        </Typography>
        <br></br>
        <Typography variant="caption">
          {item.price}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default TechItem;
