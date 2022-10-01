import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PesanCard from "../../components/PesanCard/PesanCard";
import API from "../../config/API";
import "./PesanStyle.css";

const Pesan = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await API.get("/pesan");
    setData(data.data);
  };

  const deleteHandler = async (id) => {
    await API.delete(`/pesan/${id}`);
    getData();
  };

  return (
    <div className="containerPesan">
      <img
        className="imagePesan"
        src="https://yoolk.ninja/wp-content/uploads/2021/08/Games-GenshinImpact-1024x1024.png"
      />
      <h1 className="namaPesan">Thank you for the messages... </h1>
      <p className="msglist">messages list</p>
      <div className="cardContainer">
        {data &&
          data.map((dt, index) => (
            <div key={index}>
              <PesanCard
                pesan={dt.pesan}
                id={dt.id}
                deleteHandler={deleteHandler}
              />
            </div>
          ))}
      </div>
     <div className="msgButton">
       <Link to={"/"} className="linkKirimPesan">
          <a>click here to send massage</a>
       </Link>
      </div>
    </div>
  );
};

export default Pesan;