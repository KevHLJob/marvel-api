import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react';

// https://gateway.marvel.com:443/v1/public/characters?apikey=416bfc1ce2ef30fddf772844608e5506

//private Key
//8d5391f9b9c85cefe27ba420a80faaef29223ef4

//public key
//416bfc1ce2ef30fddf772844608e5506

//hash md5: 90900eab56908e7e6f18b44f11318803
//ts:1
//18d5391f9b9c85cefe27ba420a80faaef29223ef4416bfc1ce2ef30fddf772844608e5506
function App() {

  const [personajes, setPersonajes]=useState([])

  //Call api with ts=1 and hash 
  useEffect(()=> {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=416bfc1ce2ef30fddf772844608e5506&hash=90900eab56908e7e6f18b44f11318803').then(res=>{
    setPersonajes(res.data.data.results)
  }).catch(error=> console.log(error))
  },[])


  return ( 
    <div className="App">
     <h1>Marvel</h1>

      {/* Elemento cards de bootstrap */}
     <div className="row row-cols-1 row-cols-md-3 g-4">
       {/* Mapeamos los personajes de todo el array */}
       { personajes.map(per=>(
      
      <div className="col" key={per.id}>
      <div className="card" style={{width: "18rem" , height:"18rem"}}>
       <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" 
       style={{width:"100%", height: "80%"}} alt="" />
         <div className="card-body">
           <p className="card-text">{per.name}</p>
         </div>
       </div>
     </div>

  ))

    }
    </div>
    </div>
  );
}

export default App;
