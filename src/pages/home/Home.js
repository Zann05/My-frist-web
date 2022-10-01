import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../config/API";
import "./HomeStyle.css";

const Home = () => {
  const [pesan, setPesan] = useState("");

  const kirim = async () => {
    await API.post("/pesan", {
      pesan,
    });
    setPesan("");
  };

  return (
    <div className="container">
      <img
        className="image"
        src="https://img.captain-droid.com/wp-content/uploads/com-mihoyo-genshinimpact-icon.png"
      />  
     <div className="words">
       <p className="pembukaan"> hello.. my name is Fauzan Ramadhan im from SMK Kartika V-1 Balikpapan, I participated in study program activity organized by the Information Systems Student Association (HMSI), and this is the result of the activity :
       </p>
       <h1 className="nama">SEND YOUR ANONYMOUS MESSAGE FOR ME</h1>
       <p className="myself">click on the image below to know more about myself</p>
       <div>
        <a href="https://instagram.com/fauzan.rhn?igshid=YmMyMTA2M2Y=">
           <img className="IG" src="https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png"></img></a>
         <a href="https://www.tiktok.com/@zann.0.5">
           <img className="TikTok" src="https://cdn.pixabay.com/photo/2021/01/30/06/43/tiktok-5962994_960_720.png"></img></a>
        <a href="https://wa.me/+6282148297403">
           <img className="WA" src="https://1.bp.blogspot.com/-OMfAN5AhKbU/Xut3OFHoLeI/AAAAAAAAGGk/miajoiIGBhsl9hh5svrX48QTmJB7AXpjACLcBGAsYHQ/s1600/logo-wa-transparan.png"></img></a>
        <a href=" https://twitter.com/FauzanR_05?t=cMDi8FJ6CebK42t0aeuDkg&s=08">
           <img className="twitter" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"></img></a>
      </div>
      <p className="send">Send your message down below :</p>
      </div>
      <div className="formContainer">
        <textarea
          className="formPesan"
          placeholder="Type your message"
          value={pesan}
          onChange={(input) => setPesan(input.target.value)}
        ></textarea>
      </div>
     <div className="pesanButton">
        <Link to={"/Pesan"} className="linkLihatPesan">
          <a>click here to view messages</a>
        </Link>
      </div>
      {pesan.length > 0 && (
        <button className="btnKirim" onClick={kirim}>
          SEND
        </button>
      )}
    </div>
  );
};

export default Home;