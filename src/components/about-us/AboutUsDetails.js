import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "shards-react";

const AboutUsDetails = ({ aboutUsDetails, t }) => 
<div className="about-us-wrapper">
  {aboutUsDetails.map((vocab, key) => {
    return (
      <div className="about-us">
        <Col>
          {/* logo & title */}
          <Row className="about-us-title">
            <Col lg="2" md="12" sm="12" xs="12">
              <div className="about-us-title-logo">
                <img src={vocab.logo} alt={vocab.name} />
              </div>
            </Col>
            <Col lg="10" md="12" sm="12" xs="12">
              <h1 className="about-us-title-text" data-aos="fade-up">{t(vocab.metaTitle)}</h1>
            </Col>
          </Row>

          {/* paragraph texts */}
          {vocab.metaValue.map((paragraph, key) =>
            <p data-aos="fade-up" data-aos-delay="400">{t(paragraph)}</p>         
          )} 

          {/* for more */}
          <p data-aos="fade-up" data-aos-delay="400">
            {t(vocab.forMore)}
            <a href={vocab.forMoreLink} target="_blank" rel="noopener noreferrer" key={key}>
              {vocab.forMoreLink}
            </a>
            .
          </p>                               
        </Col>
      </div> 
    )
  })}
</div>     

AboutUsDetails.propTypes = {
  /**
   * The user details object.
   */
  aboutUsDetails: PropTypes.array,
};

AboutUsDetails.defaultProps = {
  aboutUsDetails: [
    {
      name: "bim_name",
      logo: require("./../../images/bim/logo/bim-logo.jpg"),
      image: require("./../../images/mfd/mfd-about.jpg"),
      metaTitle: "about_bim_title",
      metaValue: [ 
        "about_bim_1",
        "about_bim_2",
        "about_bim_3",
        "about_bim_4",
      ],
      forMore: "about_bim_more",
      forMoreLink: "https://infomfd.wixsite.com/website-5/malaysia-sign-language"
    },    
    {
      name: "mfd_name",
      logo: require("./../../images/mfd/mfd-logo.jpg"),
      image: require("./../../images/mfd/mfd-kids.jpg"),
      metaTitle: "about_mfd_title",
      metaValue: [ 
        "about_mfd_1", 
        "about_mfd_2", 
      ],   
      forMore: "about_mfd_more",
      forMoreLink: "https://www.mymfdeaf.org"
    },
    {
      name: "ggb_name",
      logo: require("./../../images/ggb/ggb-logo.jpg"),
      metaTitle: "about_ggb_title",
      metaValue: [ 
        "about_ggb_1", 
        "about_ggb_2", 
      ],
      forMore: "about_ggb_more",
      forMoreLink: "https://careers.guidewire.com/guidewire-gives-back"
    },
    {
      name: "vercel_name",
      logo: require("./../../images/general/logo/vercel-logo.jpg"),
      metaTitle: "about_vercel_title",
      metaValue: [ 
        "about_vercel_1", 
        "about_vercel_2", 
      ],
      forMore: "about_vercel_more",
      forMoreLink: "https://vercel.com/"
    },        
  ],
};

export default AboutUsDetails;
