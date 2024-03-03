import { useState } from "react";


function App() {

  const [background, SetBack] = useState();
  const [searchV, SetSearch] = useState();
  const [info, setInfo] = useState([]);
  
  const getImage =(actualSearch)=>{
    const value = fetch(`https://api.unsplash.com/photos/random?client_id=fff5lYbBRBvTESnKkX5AzMO0RnSmjPveHl736cPSSIo&query=${actualSearch}`)
    .then(result => {
      return result.json()
    })
    .then(data => {
      SetBack(data.urls.raw);
    })

    console.log(background);
  }

  const getLocation = (country)=>{
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => {return res.json()})
    .then(data => setInfo(data))
  }

  
  
  
  return (
    <div className="App" style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
      <div className="card">
        <div className="search">
          <input type="text" placeholder="Enter The Country You Want Info On" onChange={event => SetSearch(event.target.value) }/>
          <button className="btn"onClick={()=>{getImage(searchV); getLocation(searchV)}}>Search</button>
        </div>
        {info[0] ? <h1 className="data">{info[0].name.common}</h1> : null}
        {info[0] ? <h2 className="data">{info[0].capital[0]}</h2>: null}
        {info[0] ? <h3 className="data">{info[0].continents[0]}</h3>: null}
        {info[0] ? <h3 className="data">Population: {info[0].population}</h3>: null}
        {info[0] ? <img src={info[0].flags.png} alt="" />: null}
      </div>
    </div>
  );
}

export default App;
