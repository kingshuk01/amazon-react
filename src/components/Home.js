import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images.livemint.com/img/2019/07/12/600x338/2019-07-05T065821Z_1_LYNXNPEF640GO_RTROPTP_3_AMAZON-COM-LIABILITY_1562582596221_1562903237045.JPG"
        ></img>
        <div className="home_row">
          <Product
            id = {1231}
            title="The magic"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/5115jhMmGrL._SX314_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id = {1256}
            title="US Polo Association
            Men's Regular fit T-Shirt"
            price={10.0}
            image="https://m.media-amazon.com/images/I/71B4grOUjQL._AC_UL320_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id = {4566}
            title="samsung s20"
            price="29.99"
            image="https://m.media-amazon.com/images/I/71nT6xat93L._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id = {1278}
            title="Classmate BFirst Ball Pen (Blue)- Pack of 50"
            price="29.99"
            image="https://m.media-amazon.com/images/I/81K8sAxX3PL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id = {9876}
            title="CLYMB
            Outdoor Sports Running Shoes for Mens Boy"
            price="29.99"
            image="https://m.media-amazon.com/images/I/61utX8kBDlL._AC_SR200,161_QL70_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id ={6243}
            title="Mobyro Premium Flip Phone Cover for Realme C25 Smart View Mirror Flip Stand Case, R-Clear View Display Mobile Case for Realme C25 [Black]"
            price="29.99"
            image="https://m.media-amazon.com/images/I/71AgjfWDBBL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
