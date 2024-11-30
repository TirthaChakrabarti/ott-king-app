import React from "react";

import LargeSmallSection from "../../utils/LargeSmallList/LargeSmallList";
import { largeCardData, smallCardData } from "../../data";

const DealOfTheWeek = ({
  Heading = "Heading",
  largeCardData = [],
  smallCardData = [],
}) => {
  return (
    <div>
      <LargeSmallSection
        Heading="Deal of the Week"
        largeCardData={largeCardData}
        smallCardData={smallCardData}
      />
    </div>
  );
};

export default DealOfTheWeek;
