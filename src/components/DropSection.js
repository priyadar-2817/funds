import React , {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./DropSection.css";
import Checkbox from '@material-ui/core/Checkbox';
import DatePicker  from './DatePicker';
import { dTo, dFrom} from './DatePicker';
// import CheckBox from './CheckBox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
// import Droppable from "./Droppable"

import DimensionDroppable from "./DnD/Dimensions/DimensionDroppable";
import ReportDroppable from "./DnD/ReportValues/ReportDroppable";
import {trace} from "./DnD/Dimensions/DimensionDroppable";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import GraphRendering from "./GraphRendering";
import {trace_report} from "./DnD/ReportValues/ReportDroppable";

const v ={
  arrayOne:[],
  arrayTwo:[],
  fromToDate:[],
 
};
// var T="";
// var D="";
// var fromDate = dFrom[dFrom.length-1].getDate() + '-' +  (dFrom[dFrom.length-1].getMonth() + 1)  + '-' +  dFrom[dFrom.length-1].getFullYear();
// var toDate = dTo[dTo.length-1].getDate() + '-' +  (dTo[dTo.length-1].getMonth() + 1)  + '-' + (dTo[dTo.length-1].getFullYear());

// v.fromToDate.push(dFrom[dFrom.length -1]);
// module.exports=v;
// function poppy(){
//   console.log(dTo[dTo.length-1]);
//   console.log(dFrom[dFrom.length-1]);
// }

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    drop: {
    //   padding: theme.spacing(2),
      textAlign: 'center',
    //   color: theme.palette.text.secondary,
      height : '320px',
      width : '270px',
      margin:'auto',
      marginTop: '16px',
      padding : '10px',
    //   background : 'linear-gradient(145deg, #ccd5de, #f3feff)',
      borderRadius : '4px',
      // border : '.0625rem solid white',
      // boxShadow : 'inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important;',
      boxShadow : 'inset -10px -10px 10px 0px rgb(174,174,192,0.25),inset 10px 10px 10px 0px #ffffff,-10px -10px 30px 0px #ffffff, 10px 10px 30px 0px rgb(174,174,192,0.4)',
    },
  }));

  const droppableStyle = {
    backgroundColor: "F0F0F3",
    width: "270px",
    height: "300px",
   padiing : "16px",
   overflow : "auto",
  //  maxheight : "100%"
  };
  


export default function DropSection() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    //   useEffect = ()=>{
    //     console.log(trace);
        
    //  }
    function pop() {
      v.arrayOne.push(trace);
      v.arrayTwo.push(trace_report);
      var F= new Date(dFrom[dFrom.length-1]);
      var T= new Date(dTo[dTo.length-1]);
      F=F.getDate() + '-' +  (F.getMonth() + 1)  + '-' +  F.getFullYear();
      T=T.getDate() + '-' +  (T.getMonth() + 1)  + '-' +  T.getFullYear()
      // v.fromToDate.push(dFrom[dFrom.length -1], dTo[dTo.length -1]);
      v.fromToDate.push(F,T);
      console.log(v);
      // 
      // console.log(v)
    }
     
    return (
     
            <Grid container  style={{background:"var(--color-surface)", height:"100%"}}>
                 <Grid item xs={12}>
            <div  >  <DatePicker/> </div>
        
        </Grid>
        <Grid item xs={4} >
          
        <div  className={classes.drop} >
        <h3 style={{alignItems : "center"}}>Dimensions</h3>
            <DimensionDroppable id="dimensions__drop"  style={droppableStyle} >
            </DimensionDroppable>
           
            </div>
           
        </Grid>
        <Grid item xs={4}  >
              
        <div  className={classes.drop} style={{paddingRight: "18px"}} >
        <h3 style={{alignItems : "center"}}>Report Values</h3>
            <ReportDroppable id="dimensions__drop"  style={droppableStyle} >
            </ReportDroppable>
           
            </div>
        
        </Grid>
        <Grid item xs={4} >
            <div  className={classes.drop} ><h3>Logical f(x)</h3></div>
         </Grid>
         <Grid item xs={12}  >
            <div className="body__output">
                <span>Output Type</span> 
                <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Data"
      />
       <FormControlLabel
        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
        label="Graphical"
      />
      </FormGroup>
     
       <Link to ="/graphs">
        <Button variant="contained" color="secondary" className="view__button" onClick={pop}  >
        View
        {/* <GraphRendering/> */}
      </Button>
      </Link> 
      
          
     
      
            </div>
         </Grid>
        </Grid>
        
    )
}
export {v};


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';


// export default function CenteredGrid() {
 

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
