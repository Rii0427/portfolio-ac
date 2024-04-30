import React from "react";
import "./pub.css";
import Footer from "../Footer/footer";

const pub = [
  {
    book: `Choubey A, Yadav A. “MXene and transition metal chalcogenides-based 2D nanomaterials for next-generation supercapacitors” Journal of Energy Storage, 79 (2024) 110131.`,
  },
  {
    book: `Choubey A, Yadav A. “Unveiling electrochemical charge storage in nanopebbles of Ni-Mn selenide embedded in delaminated MXene for hybrid asymmetric supercapacitor”.(Under review)`,
  },
];
const conf = [
  {
    con: `Choubey A, Yadav A. “Bimetallic transition metal chalcogenides as electrode material for supercapacitor application” Indian Institute of Chemical Engineers-CHEMCON, HIT, Kolkata, Dec. 27-30, 2023.`,
  },
  {
    con: `Choubey A, Yadav A, “Bimetallic Transition Metal Selenide-MXene Nanocomposite for Supercapacitor Application” The Electrochemical Society, 245th meeting 2024, San Fransisco, US.`,
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
