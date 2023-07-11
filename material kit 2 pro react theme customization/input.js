// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState } from "react";
// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputDynamic() {
  const [formValue, setFormValue] = useState("");
  const handleChange = (event) => {
    setFormValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValue("");
    alert(formValue);
  };

  return (
    <MKBox component="section" py={12}>
      <Container>
        <form onSubmit={handleSubmit}>
          <p>{formValue}</p>
          <Grid container item xs={12} lg={4} py={1} mx="auto">
            <MKInput
              onChange={handleChange}
              variant="standard"
              label="Regular"
              fullWidth
              value={formValue}
            />
          </Grid>
        </form>
      </Container>
    </MKBox>
  );
}

export default InputDynamic;
