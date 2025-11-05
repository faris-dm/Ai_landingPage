import React from "react";

function Ai_trends({ Seller }) {
  return (
    <>
      <div>
        <div>
          {Seller.map((img, index) => (
            <img key={index} src={img} alt="No Problem" />
          ))}
        </div>
        {/* <h2>{heading}</h2>
        <h5>{text}</h5>
        <p>{link}</p> */}
      </div>
    </>
  );
}

export default Ai_trends;
