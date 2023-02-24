import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GiNetworkBars, GiForkKnifeSpoon } from "react-icons/gi";
import { HiWifi, HiShoppingCart } from "react-icons/hi";
import { BsBatteryHalf, BsBellFill, BsPersonFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { MdRestaurant, MdStore } from "react-icons/md";
import { RiListOrdered } from "react-icons/ri";
import potatoChips from "./images/potatoChips.jpg";
import beefFriedRice from "./images/beefFriedRice.jpg";
import chickenFriedRice from "./images/chickenFriedRice.jpg";
import jollofRice from "./images/jollofRice.jpg";
import beefJollof from "./images/beefJollof.jpg";

function Prototype() {
  return (
    <Container fluid="xs" className="background">
      <Row className="navRow">
        <Col xs={4} className="brandTime">
          <p className="time">8:04</p>
          <p className="pRowTwo brandName pt-3">Foodjoint</p>
        </Col>
        <Col xs={4}></Col>
        <Col xs={4} className="default-icons pl-2">
          <p>
            <GiNetworkBars className="titleBarIcons networkBars me-2" />
            <HiWifi className="titleBarIcons wifi me-2" />
            <BsBatteryHalf className="titleBarIcons battery me-1" />
          </p>
          <p className="pRowTwo pt-3">
            <BsBellFill className="menuBarIcons bell me-4" />
            <HiShoppingCart className="menuBarIcons cart me-4" />
            <BsPersonFill className="menuBarIcons contact me-1" />
          </p>
        </Col>
      </Row>
      <hr className="line" />
      <Row className="searchBox">
        <Col className="search-wrap">
          <p className="search searchText pt-3">Search</p>
          <p className="search searchIcon pt-3">
            <IoMdSearch />
          </p>
        </Col>
      </Row>
      <Row className="allCard cardOne">
        <Col xs={4} className="imageBox">
          <img className="firstImage" src={potatoChips} alt="potatoChips" />
        </Col>
        <Col xs={4} className="descriptionBox">
          <p className="foodName"> Potato Chips With Chicken</p>
          <p className="description green">Green Leaf Eatery</p>
          <p className="description close">
            <span>Closed.</span>
          </p>
          <p className="description opens">Opens @ 11:00 AM</p>
        </Col>
        <Col xs={4} className="priceBox">
          GHC<span> 25.00</span>
        </Col>
      </Row>
      <Row className="allCard cardOne">
        <Col xs={4} className="imageBox">
          <img className="firstImage" src={beefFriedRice} alt="beefFriedRice" />
        </Col>
        <Col xs={4} className="descriptionBox">
          <p className="foodName">Beef Fried Rice</p>
          <p className="description green">Green Leaf Eatery</p>
          <p className="description close">
            <span>Closed.</span>
          </p>
          <p className="description opens">Opens @ 11:00 AM</p>
        </Col>
        <Col xs={4} className="priceBox">
          GHC<span> 40.00</span>
        </Col>
      </Row>
      <Row className="allCard cardOne">
        <Col xs={4} className="imageBox">
          <img
            className="firstImage"
            src={chickenFriedRice}
            alt="chickenFriedRice"
          />
        </Col>
        <Col xs={4} className="descriptionBox">
          <p className="foodName">Chicken Fried Rice</p>
          <p className="description green">Green Leaf Eatery</p>
          <p className="description close">
            <span>Closed.</span>
          </p>
          <p className="description opens">Opens @ 11:00 AM</p>
        </Col>
        <Col xs={4} className="priceBox">
          GHC<span> 40.00</span>
        </Col>
      </Row>
      <Row className="allCard cardOne">
        <Col xs={4} className="imageBox">
          <img className="firstImage" src={jollofRice} alt="jollofRice" />
        </Col>
        <Col xs={4} className="descriptionBox">
          <p className="foodName">Beef Jollof</p>
          <p className="description green">Green Leaf Eatery</p>
          <p className="description close">
            <span>Closed.</span>
          </p>
          <p className="description opens">Opens @ 11:00 AM</p>
        </Col>
        <Col xs={4} className="priceBox">
          GHC<span> 40.00</span>
        </Col>
      </Row>
      <Row className="allCard cardOne">
        <Col xs={4} className="imageBox">
          <img className="firstImage" src={beefJollof} alt="beefJollof" />
        </Col>
        <Col xs={4} className="descriptionBox">
          <p className="foodName">Chicken Jollof</p>
          <p className="description green">Green Leaf Eatery</p>
          <p className="description close">
            <span>Closed.</span>
          </p>
          <p className="description opens">Opens @ 11:00 AM</p>
        </Col>
        <Col xs={4} className="priceBox">
          GHC<span> 40.00</span>
        </Col>
      </Row>
      <Row className="footer-wrap">
        <Col xs={4} className="footer">
          <MdRestaurant className="dishes" />
          <p className="iconName"><span>Dishes</span></p>
        </Col>
        <Col xs={4} className="footer">
          <MdStore className="store"/>
          <p className="iconName">Foodjoints</p>
        </Col>
        <Col xs={4} className="footer">
          <RiListOrdered className="order"/>
          <p className="iconName">My Orders</p>
        </Col>
      </Row>
      <Row className="lastRow">
        <Col xs={4}></Col>
        <Col xs={4} className="hr">
          <div className="navigationBar"></div>
        </Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
}

export default Prototype;
