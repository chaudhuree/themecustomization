
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState } from "react";
// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputDynamic() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <MKBox component="section" py={12}>
      <Container>
        <p>{value}</p>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput onChange={handleChange} variant="standard" label="Regular" fullWidth />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputDynamic;
