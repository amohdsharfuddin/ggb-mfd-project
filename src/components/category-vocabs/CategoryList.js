import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "shards-react";
import ItemsCarousel from "react-items-carousel";
import { useTranslation } from "react-i18next";

import PageTitle from "../common/PageTitle";
import CategoryDetail from "./CategoryDetail";
import { Store } from "../../flux";

const CategoryList = ({ category, group }) => {
  // get total number of categories
  const noOfCategories = Object.keys(category).length;

  // determine number of cards to be displayed (categories) based on Screen Size
  const getNoOfCardsToDisplay = (noOfCategories) => {
    if(window.innerWidth < 375) {
      return 1;
    }
    else if(window.innerWidth > 1500 && noOfCategories >= 3) {
      return 3;
    }
    else {
      if(noOfCategories < 3) {
        return noOfCategories;
      }
      else {
        return 2;
      }
    }
  };

  const [noOfCards, setNoOfCards] = useState(
    getNoOfCardsToDisplay(noOfCategories)
  );
  useEffect(() => {
    function handleResize() {
      setNoOfCards(getNoOfCardsToDisplay(noOfCategories));
    }
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const { t } = useTranslation("group-category");

  const groupFormatted = Store.formatString(group);

  return (
    <Col sm="12" md="6" lg="6" xl="4">
      <div className="category-card-wrapper">
        <Link to={`/groups/${groupFormatted}`}>
          <PageTitle title={t(groupFormatted)} />
        </Link>
        <ItemsCarousel
          // Carousel configurations
          numberOfCards={noOfCards}
          gutter={12}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={false}
          // Active item configurations
          requestToChangeActive={(activeItemIndex) =>
            setActiveItemIndex(activeItemIndex)
          }
          activeItemIndex={activeItemIndex}
          activePosition={"center"}
          chevronWidth={30}
          rightChevron={<i className="material-icons">arrow_forward_ios</i>}
          leftChevron={<i className="material-icons">arrow_back_ios</i>}
          outsideChevron={false}
        >
          {category.map((categoryItem, key) => (
            <CategoryDetail
              categoryItem={categoryItem}
              group={group}
              noOfCard={noOfCards}
              key={key}
            />
          ))}
        </ItemsCarousel>
      </div>
    </Col>
  );
};

export default CategoryList;
