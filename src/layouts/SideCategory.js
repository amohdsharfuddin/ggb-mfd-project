import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import { useParams } from "react-router-dom";

import Dispatcher from "../flux/dispatcher";
import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import SidebarCategory from "../components/layout/SidebarCategory/SidebarCategory";
import MainFooter from "../components/layout/MainFooter";

const SideCategoryLayout = ({ children, noNavbar, noFooter }) => {
  const toggleDropdown = () => {
    Dispatcher.dispatch({
      actionType: "TOGGLE_DROPDOWN",
    });
  };

  const { alphabet } = useParams();

  return (
    <Container fluid>
      <Row>
        <Col className="main-content p-0" tag="main">
          {!noNavbar && <MainNavbar toggle={toggleDropdown} />}
          <Row>
            <Col xl="2" lg="3" md="3" sm="4">
              <div className="sidebar-category-wrapper">
                <SidebarCategory urlParam={alphabet} />
              </div>
            </Col>
            <Col xl="10" lg="9" md="9" sm="8">
              {children}
            </Col>
          </Row>
        </Col>
      </Row>
      {!noFooter && <MainFooter />}
    </Container>
  );
};

SideCategoryLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool,
};

SideCategoryLayout.defaultProps = {
  noNavbar: false,
  noFooter: false,
};

export default SideCategoryLayout;
