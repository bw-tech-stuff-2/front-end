import React, { useEffect } from "react";

import { connect } from "react-redux";

import TechItem from "./TechItem";

import { getTechItems } from "../store/actions/";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const TechPage = (props) => {
  useEffect(() => {
    props.getTechItems();
  }, []);

  return (
    <>
      <p>Tech Page</p>

      {props.isFetching && <p>Fetching Items...</p>}
      <StyledDiv>
      {props.techList.map((item) => {
        return <TechItem key={item.id} item={item} />;
      })}
      </StyledDiv>
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
