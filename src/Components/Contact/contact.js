import React, { useRef,useState } from "react";
import "./contact.css";
// import { useForm } from "react-hook-form";
// import emailjs, { init } from "@emailjs/browser";
// import axios from "axios"

// const baseURL ="https://console.firebase.google.com/u/0/project/portfolio-c92e0/database/portfolio-c92e0-default-rtdb/data/~2F";

const Contact = () => {
//   init("template_yjnkr41");
//   const form = useRef();

  // const[data,setData]=useState({
  //   name:"",
  //   email:"",
  //   subject:"",
  //   message:"",
  // })

  // const InputEvent = (event) => {
  //   const {name,value} = event.target

  //   setData((preVal) => {
  //     return{
  //       ...preVal,
  //       [name]:value,
      
  //     }
  //   })
  // }

  // const formSubmit = (event)=> {
  //   event.preventDefault()
  //   // emailjs.sendForm("SERVICE_D", "TEMPLAE_ID", form.current, "USER_ID")
  //   .then(
  //     (result) => {
  //       alert(
  //         `My Name is ${data.name}.`
  //         `My email is ${data.email}.`
  //         `My subject is ${data.subject}.`
  //         `My message is ${data.message}.`
  //         );
  //       console.log(result.text);
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     }
  //   );
  // }

  // const {
  //   formState: { errors },
  // } = useForm();

  return (
    <div className="contact">
      <div className="contact-1">
        <span></span>
        <h1>CONTACT ME</h1>
      </div>
      <div className="c-text">
          <p>ANTRA CHOUBEY</p>
          <p>RENEWABLE & ENVIRONMENTAL SUSTAINABILITY LAB</p>
          <p>DEPARTMENT OF CHEMICAL ENGINEERING</p>
          <p>IIT ROORKEE</p>
          <p>Email - antra_c@ch.iitr.ac.in</p>
      </div>
        {/* <div className="contact-2">
          <form>
            <div className="form-control">
              <label>
                Name<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={InputEvent}
                required="true"
              />
              {errors.name && errors.name.type === "required" && (
                <p className="errorName">Name is required.</p>
              )}
            </div>
            <div className="form-control">
              <label>
                Email<span>*</span>
              </label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={InputEvent}
                required="true"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
              {errors.email && errors.email.type === "required" && (
                <p className="errorMsg">Email is required.</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="errorMsg">Email is not valid.</p>
              )}
            </div>
          <div className="form-control">
            <label>Subject</label>
            <input 
            type="text"
            name="subject"
            value={data.subject}
            onChange={InputEvent}
             />
          </div>
          <div className="form-control-1">
            <label>Message</label>
            <textarea rows="10" cols="30"
            name="message"
            value={data.message}
            onChange={InputEvent}
            ></textarea>
          </div>
            <button onSubmit={formSubmit} className="form-control">Send</button>
        </form>
      </div> */}
    </div>
  );
};

export default Contact;
