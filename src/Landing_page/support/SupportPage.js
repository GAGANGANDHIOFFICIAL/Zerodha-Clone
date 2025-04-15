import React from "react";

function SupportPage() {
  return (
    <section className="bg-info container-fluid mt-10px " style={{color:"white"}} id="supportHero">
      <div className="p-5 container  ms-5" id="supportWrapper">
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "100px" }}
        >
          <h4 >
            Support Portal
          </h4>
          <a href="#" style={{ color: "white", marginLeft: "600px" }}>
            Track Tickets
          </a>
        </div>
      </div>
      <div className="row p-5 m-4 " >
        <div className="col-6 p-3 " >
          <h1 className="fs-3" tyle={{ color: "white", margin: "0 10px 0 0" }}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="mt-15px mb-10px" style={{height:"60px",width:"500px",borderRadius:"5px"}} placeholder="Eg. how do I activate F&O" />
          <br />
          <a   style={{color:"white", marginRight:"15px"}} href="">Track account opening</a>
          <a style={{color:"white",marginRight:"15px"}}   href="">Track segment activation</a>
          <a   style={{color:"white",marginRight:"15px"}} href="">Intraday margins</a>
          <a   style={{color:"white",marginRight:"10px"}} href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a  style={{color:"white"}} href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a  style={{color:"white"}}  href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default SupportPage;
