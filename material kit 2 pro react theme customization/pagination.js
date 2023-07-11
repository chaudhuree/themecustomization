// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKPagination from "components/MKPagination";
import { useState } from "react";

function PaginationSimple() {
  const [activeButton, setActiveButton] = useState(1);
  let totalNumberOfProducts = 6;

  const handleButtonClick = (value) => {
    if (value === "keyboard_arrow_left") {
      setActiveButton((prevValue) => prevValue - 1);
    } else if (value === "keyboard_arrow_right") {
      setActiveButton((prevValue) => prevValue + 1);
    } else {
      setActiveButton(value);
    }
    console.log("Clicked button value:", value);
    // Perform desired actions with the button value
  };

  return (
    <Container sx={{ height: "100%" }}>
      <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
        <MKPagination>
          <MKPagination
            item
            active={activeButton === -1}
            onClick={() => handleButtonClick("keyboard_arrow_left")}
          >
            <Icon>keyboard_arrow_left</Icon>
          </MKPagination>
          {[...Array(totalNumberOfProducts)].map((_, index) => (
            <MKPagination
              key={index}
              item
              active={activeButton === index + 1}
              onClick={() => handleButtonClick(index + 1)}
            >
              {index + 1}
            </MKPagination>
          ))}
          <MKPagination
            item
            active={activeButton === totalNumberOfProducts + 1}
            onClick={() => handleButtonClick("keyboard_arrow_right")}
          >
            <Icon>keyboard_arrow_right</Icon>
          </MKPagination>
        </MKPagination>
      </Grid>
    </Container>
  );
}

export default PaginationSimple;
