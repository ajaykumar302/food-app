import React,{useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products';

function App() {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "95917f6c";
  const YOUR_APP_KEY ="b00ceefa2d52a319abc8a0d7a0d647a4";
  const submitHandler = e =>{
    e.preventDefault();
    // console.log(search);
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div className="App">
    <Navbar/>
    <center>
    <h1>Food Recipe App</h1>
    <form onSubmit={submitHandler}>
    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/>
    <input type="submit" className="btn btn-primary" value="Search"/>
    </form>
    </center>
    {data.length>=1 ? <Products  data={data}/>:null}
    </div>
  );
}

export default App;
