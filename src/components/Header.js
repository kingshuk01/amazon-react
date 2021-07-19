import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom"
import {useStateValue} from '../StateProvider'

const Header = () => {

  const [{basket}, dispatch] = useStateValue();

 
  return (
    <div className="header">
      <Link to='/'>
      <img
        className="header_logo"
        src="https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/038523e/2147483647/strip/true/crop/2500x1128+0+744/resize/1440x650!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fab%2F7d%2F7387c5c34035af9dafce465fe433%2Famazon-org-smile-extruded-sq.jpg"
      ></img>
      </Link>
      <div className="header_search">
        <input className="header_search_input" type="text"></input>
        <SearchIcon className="header_search_icon"></SearchIcon>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_line_one">Hello Guest</span>
          <span className="header_line_two">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_line_one">Return</span>
          <span className="header_line_two">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_line_one">Your</span>
          <span className="header_line_two">Prime</span>
        </div>
        <Link to='/checkout'>
        <div className="header_option_basket">
          <ShoppingBasketIcon />
          <span className="header_line_two header_basket_count">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
