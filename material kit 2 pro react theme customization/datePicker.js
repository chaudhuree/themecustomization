import MKDatePicker from "components/MKDatePicker";

<MKDatePicker
  onChange={(selectedDates) => console.log(selectedDates[0])}
  input={{ placeholder: "Select a date" }}
  options={{ minDate: "2020-01-01" }}
/>;
