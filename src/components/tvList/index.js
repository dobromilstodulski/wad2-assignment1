import React from "react";
import TV from "../tvCard/";
import Row from 'react-bootstrap/Row'

const TVList = ({tvshows, action}) => {
  const TVCards = tvshows.map(m => (
    <TV key={m.id} movie={m} action={action} />
  ));
  return <Row md={4}>{TVCards}</Row>
};

export default TVList;