import React from "react";
import "./Main.css";
import data from "./data";
import Card from "./Card";
import Nav from "./Nav";

 function Main() {
  const dataSet = data.map((x) => {
    return (
      <Card
        key={x.title}
        title={x.title}
        location={x.location}
        googleMapsUrl={x.googleMapsUrl}
        startDate={x.startDate}
        endDate={x.endDate}
        description={x.description}
        imageUrl={x.imageUrl}
      />
    );
  });
  return (
    <>
      <Nav />
      <div className="main">{dataSet}</div>
    </>
  );
}


export default Main;