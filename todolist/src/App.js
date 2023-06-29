import './App.css';
import Header from './component/Header';
import Navigation from './component/Navigation';
import TextField from '@mui/material/TextField';
import booksImage from './img/books.jpg';
import { useState } from 'react';
import Button from '@mui/material/Button';


function App() {

  const [name , setName] = useState('');
  const [task , setTask] = useState('');
  const [data , setData] = useState([]);

  const submit = ()=>{
    setData([...data,{name,task}]);
    setName('');
    setTask('');
  }
  
  const Removeelm = (index)=>{
    const arr = [...data];
    arr.splice(index,1);
    setData(arr);
  }


  return (
    <div className="App">
    <Header/>
    <Navigation/>

<div className="dataFields">
    <TextField id="outlined-basic" value={name} onChange={(n) => setName(n.target.value)} label="Name:" variant="outlined" />
    <TextField
  style={{
    width: "300px",
    backgroundImage: `url(${booksImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // opacity: "0.8",
    marginLeft:"12px",
    borderRadius:"4px",
    fontWeight:900
  }}
  InputProps={{
    style: {
      color: "white",
      fontFamily: 'Ysabeau SC, sans-serif',

      fontWeight:200,
      "::placeholder": {
        color: "white",
         
      },
    },
  }}
  InputLabelProps={{
    style: {
      color: "white",
    },
  }}
  value={task}
  onChange={(t) => setTask(t.target.value) }
  id="filled-textarea"
  label="Your Task Here:"

  multiline
  variant="filled"
/>

<Button variant="outlined" color="success" onClick={submit}
style={{
  color:"lightgreen",
  border:"1px solid lightGreen",
 marginLeft:"12px",
 height:"55px"


}}>
  Submit
</Button>
</div>

<div className="headdata">

<h3>Name</h3>
<h3>Task</h3>
<h3>Remove</h3>


</div>

<div className="showdataContainer">
{
data.map((elm,index)=>{
return(
<div className="showdata" key={index}>

  <h3>{elm.name}</h3>
  <h3>{elm.task}</h3>
  
<Button variant="outlined" color="error" onClick={() => Removeelm(index)} style={{
  marginTop:"12px"
}} >
  Remove
</Button>

  
</div>

)
})


}
</div>

    </div>
  );
}

export default App;
