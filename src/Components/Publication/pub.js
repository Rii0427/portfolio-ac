import React from "react";
import "./pub.css";
import Footer from "../Footer/footer";

const pub = [
  {
    book: "Choubey, A., Yadav, A. “Recent progress in emerging nanomaterials for supercapacitor applications” (under preparation)",
  },
];
const conf = [
  {
    con: "Presented poster on the topic, “Transition metal sulfides as electrode material for asymmetric supercapacitor” IIT Roorkee, 2022 ",
  },
];

function Pub() {
  return (
    <div className="pub">
      {/* <div className='pub-1'>
      <span></span>
        <h1>PUBLICATIONS AND CONFERENCES</h1>
      </div> */}
      <div className="pub-2">
        <div className="pub-2-1">
          <span></span>
          <h1>PUBLICATIONS</h1>
        </div>
        <div className="pub-2-2">
          {pub.map((data) => {
            return(
               <p>{data.book}</p>
          )})}
        </div>
      </div>
      <div className="pub-2">
        <div className="pub-2-1">
          <span></span>
          <h1>CONFERENCES</h1>
        </div>
        <div className="pub-2-2">
          {conf.map((data) => {
            return(
               <p>{data.con}</p>
          )})}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pub;
