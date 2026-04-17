import React from "react";
import { Assets } from "../assets/Assets";

const Header = () => {
  return (
    <div className="container-fluid  p-3 text-center header">
      <div className="row gy-5">
        <div className="col-lg-6">
          <h1 className=" text-uppercase fw-bold lh-lg mt-5">
            Enjoy your healthy <br /> <span>delicious food</span>
          </h1>

          <div className="mt-5">
            <button className="btn btn-primary">book a table</button>
          </div>
          <div>
            <p className="mt-3">
              Baked goods have been around for thousands of years. The art of
              baking was very popular during the Roman Empire. It was highly
              famous art as Roman citizens loved baked goods and demanded them
              frequently for important occasions such as feasts and weddings.
              Because of the fame of the art of baking, around 300 BC, baking
              was introduced as an occupation and respectable profession for
              Romans. Bakers began to prepare bread at home in an oven, using
              grist mills to grind grain into flour for their breads. The demand
              for baked goods persisted, and the first bakers' guild was
              established in 168 BC in Rome. The desire for baked goods promoted
              baking throughout Europe and expanded into eastern parts of Asia.
         
       
            </p>
          </div>
        </div>
         <div className="col-lg-6">
          <img src={Assets.img1} alt="" className="delicious-food" />
        </div> 
      </div>
    </div>
  );
};

export default Header;
