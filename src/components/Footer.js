import React from "react";
import foodTruck from "../assets/food-truck.png";
import "./footerstyles.css"
import fbIcon from "../assets/fb-icon (1).png";
import instaIcon from "../assets/insta-icon.png";
import twitIcon from "../assets/twitt-icon.png";

const Footer=()=>{
    return (
        <div className="footerContainer">
         <img src={foodTruck} alt="" />
         <div className="footerContent">
         <div className="heading">
            <span>Contact Us</span>
            </div>
            <div className="content">
            <p className="text">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p className="text">example2020@gmail.com</p>
            <p className="text">(904) 443-0343</p>
            </div>
         </div>
         <div className="footerContent">
         <div className="heading">
            <span>More</span>
         </div>
         <div className="content">
         <p className="text">About us</p>
            <p className="text">Carrer</p>
            <p className="text">Products</p>
            <p className="text">Contact us</p>
            </div>
        </div>
        <div className="footerContent">
        <div className="heading">
            <span>Social Links</span>
            </div>
            <div className="socialImg">
            <img src={fbIcon} alt=""  className="socimg"/>
            <img src={instaIcon} alt="" className="socimg"/>
            <img src={twitIcon} alt="" className="socimg" />
          </div>
          <div className="copyRight">
            <p className="text">© 2022 Food Truck Example</p>
          </div>
        </div>
        </div>
    )
}
export default Footer;