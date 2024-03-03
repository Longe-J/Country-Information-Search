import { useState } from "react";


function App() {

  const [background, SetBack] = useState();
  
  const getImage =()=>{
    const value = fetch('https://api.unsplash.com/photos/random?client_id=fff5lYbBRBvTESnKkX5AzMO0RnSmjPveHl736cPSSIo')
    .then(result => {
      return result.json()
    })
    .then(data => {
      SetBack(data.urls.full);
    })
    
    
    console.log(background)
  }

  
  
  
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <div className="card">
        <div className="search">
          <input type="text" placeholder="Enter The Country You Want Info On"/>
          <button className="btn"onClick={getImage}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;
