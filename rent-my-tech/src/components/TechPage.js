import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

import TechItem from "./TechItem";

import { getTechItems } from "../store/actions/";
import styled from "styled-components";

import { CircularProgress } from "@material-ui/core";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  background: dodgerblue;
`;

const TechPage = (props) => {
  const history = useHistory();
  useEffect(() => {
    props.getTechItems();
  }, []);

  return (
    <>
      <h1 className="page-heading">Items</h1>

      {props.isFetching && <CircularProgress />}
      <StyledDiv>
        {props.techList.map((item) => {
          return <TechItem key={item.id} item={item} />;
        })}
      </StyledDiv>
      <div className="tech-page-box">
        <h3>Want to list something new...</h3>
        <button
          className="tech-page-btn"
          onClick={() => {
            history.push("/addTechItem");
          }}
        >
          Add Item
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.tech.isFetching,
    error: state.tech.error,
    techList: state.tech.techList,
  };
};

export default connect(mapStateToProps, { getTechItems })(TechPage);
