import React from "react";
import "./projects.css";
// import ref from "../Images/ref.png"
// import syn from "../Images/syn.png"
// import dft from "../Images/dft.jpeg"
import Footer from '../Footer/footer'

const projects = [
  {
    name: "Ph.D., IIT Roorkee [2021-Present]",
    title:
      "Fabrication of emerging nanomaterial based supercapacitors for advanced applications",
    desc: "To fabricate flexible, stretchable, self-healable composite film of MXene/metal chalcogenides in the combination of carbon-based materials optimized using DFT and testing the performance for solid state supercapacitor.",
    img: "ref.png",
  },
  {
    name: "M.Tech., Project, IIT BHU [2019-2021]",
    title:
      "Synthesis of Polypyrrole-Nickel Oxide-Activated Carbon-based ternary composite with enhanced electrochemical properties for spercapacitor electrode",
    desc: "In includes the synthesis of polypyrrole, nickel oxide, and activated carbon followed by fabricating binary and ternary composites using these three and electrochemical performance comparison to find the most efficient electrode material.",
    img: "syn.png",
  },
  {
    name: "B.Tech. Final year project, NIT Bhopal [2016-2017]",
    title:
      "Refining of used lubricating oil to restore its original properties.",
    desc: "In includes the refining of used lubricating oil through a series of operations such as dehydration, vacuum distillation, and solvent extraction.",
    img: "dft.jpeg",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="pro-1">
        <span></span>
        <h1>RESEARCH</h1>
      </div>
      <div className="pro-2">
        <p className="pro-2-p">
          Currently, I am working on fabricating supercapacitors with advanced features such as flexibility, stretchability and self-heating ability.
        </p>
      </div>
      {projects.map((data) => {
        return (
          <div className="pro-3">
            <div className="pro-left">
              <div className="pro-left-1">
                <span></span>
              </div>
              <div className="pro-left-2">
                <div className="left-1">
                  <h1>{data.name}</h1>
                  <p>{data.title}</p>
                </div>
                {/* <div className="left-2">
                <p>{data.desc}</p>
                </div> */}
              </div>
            </div>
            {/* <div className="pro-right">
              <img src={data.img} alt="" />
            </div> */}
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Projects;
