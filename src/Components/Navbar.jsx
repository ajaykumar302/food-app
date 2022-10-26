import React,{useState} from 'react'
import logo from './logo.svg';
import { Link } from 'react-router-dom'
import Products from './Products';
import Menu from './Menu';

function Navbar() {
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
    <>
      <div className='nav'>
        
        <img src={logo} alt="logo" className='logo' />
        <form onSubmit={submitHandler}>
        <input className="form-control me-2"  placeholder="Search" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
              <button className="btn btn-primary" type="submit">Search</button>
            
        </form>
        <ul type='none'>
        <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Offers">Offers</Link>
                </li>
        <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">Help</Link>
                </li>
        <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">Cart</Link>
                </li>
        <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Login</Link>
                </li>
        {/* <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">Sing in</Link>
                </li> */}
        </ul>
        
      </div>
      <div className='box'>
      <div className='box1'><Menu/></div>
      <div className='box2'>
      {data.length>=1 ? <Products  data={data}/>:null}
      </div>
      </div>
      
    </>

  )
}

export default Navbar