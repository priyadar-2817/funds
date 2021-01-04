// import 'date-fns';
// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import "./DatePicker.css";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';


// export default function DatePicker() {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState(new Date('2020-12-08T21:11:54'));

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
//       <Grid container justify="space-around">
//       <KeyboardDatePicker
//           className= "body__datepicker"
//           margin="normal"
//           id="date-picker-dialog"
//           label="From"
//           format="MM/dd/yyyy"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />

//         <KeyboardDatePicker
//           className="body__datepicker"
//           margin="normal"
//           id="date-picker-dialog"
//           label="To"
//           format="MM/dd/yyyy"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
    
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// }




import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import "./DatePicker.css";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
// const D ={
//     dTo:[],
//     dFrom:[],
    
//   };
  var dTo=[];
  var dFrom=[];

// function pop(){
//     console.log(v);
// }


export default function DatePicker() {
  // The first commit of Material-UI
  const [selectedToDate, setSelectedToDate] = React.useState(new Date());
  const [selectedFromDate, setSelectedFromDate] = React.useState(new Date());
  const handleFromDateChange = (date) => {
      
    setSelectedFromDate(date);
    // console.log(date);
    dFrom.push(date);
    // console.log(D.dTo);

  };


  const handleToDateChange = (date) => {
      
    setSelectedToDate(date);
    // console.log(date);
    dTo.push(date);
    // console.log(D.dTo);

  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
      <Grid container justify="space-around">
      <KeyboardDatePicker
          className= "body__datepicker"
          margin="normal"
          id="date-picker-dialog"
          label="From"
          format="MM/dd/yyyy"
          value={selectedFromDate}
          onChange={handleFromDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        

        <KeyboardDatePicker
          className="body__datepicker"
          margin="normal"
          id="date-picker-dialog"
          label="To"
          format="MM/dd/yyyy"
          value={selectedToDate}
          onChange={handleToDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
export {dTo, dFrom};
