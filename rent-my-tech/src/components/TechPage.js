import React, { useEffect } from "react";

import { connect } from "react-redux";

import TechItem from "./TechItem";

import { getTechItems } from "../store/actions/";

const TechPage = (props) => {
  useEffect(() => {
    props.getTechItems();
  }, []);

  return (
    <>
      <p>Tech Page</p>

      {props.isFetching && <p>Fetching Items...</p>}
      {props.techList.map((item) => {
        return <TechItem key={item.id} item={item} />;
      })}
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
