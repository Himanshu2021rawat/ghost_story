import Header from "./component/Header";
import Navigation from "./component/Navigation";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [story, setStory] = useState();
  const [data, setData] = useState([]);

  const addData = ()=>{
    setData([...data,{name,story}]);
    setName('');
    setStory('');
  }

  const deleteitem = (index)=>{
    const arr = [...data];
    arr.splice(index,1);
    setData(arr);
  }
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="contentwrite">
        <TextField
          placeholder="Your Name"
          onChange={(n)=>setName(n.target.value)}
          value={name}
          id="outlined-basic"
          label="Your Name"
          variant="outlined"
        />
        <TextField
        
          id="outlined-multiline-static"
          label="Your Story"
          onChange={(e)=>setStory(e.target.value)}
          value={story}
          multiline
          rows={6}
          
          placeholder="Enter Your Story Here:"
        />
        <Button onClick={addData} variant="outlined" color="error">
          Submit
        </Button>
      </div>

      <div className="showdata">
        <h4>Name</h4>
        <h4>Story</h4>
        <h4>Delete</h4>
      </div>


<div className="showingdata">
{
data.map((elm,index)=>{
    return(
  <div className="datum" key={index}>
    <h4> {elm.name}</h4>
    <div className="text">
    <textarea name="" id=""  rows="10">{elm.story}</textarea>
    </div>
    <Button onClick={()=>deleteitem(index)} variant="outlined" color="error">Delete</Button>
  </div>
    )



})

}
</div>


    </div>
  );
}

export default App;
