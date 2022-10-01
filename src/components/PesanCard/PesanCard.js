import React from "react";
import "./PesanCardStyle.css";

const PesanCard = ({ pesan, deleteHandler, id }) => {
  return (
    <div className="pesanCardContainer">
      <p className="pesanCard">{pesan}</p>
      <button className="btnHapus" onClick={() => deleteHandler(id)}>
        Delete
      </button>
    </div>
  );
};

export default PesanCard;