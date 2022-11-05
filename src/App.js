import { useState } from 'react';
import { dataJewelery } from './dataJewerely';
import { dataPurse } from './dataPurse';
import { dataTravel } from './dataTravel';

import './App.css';

function App() {

  //consts for data

  const [jewelery, setJewelery] = useState(0);
  const {id1, image1, shop1} = dataJewelery[jewelery];
  
  const [purse, setPurse] = useState(0);
  const {id2, image2, description2} = dataPurse[purse];

  const [travel, setTravel] = useState(0);
  const {id3, name3, image3, description3} = dataTravel[travel];

//button next

const nextJewelery = () => {
    setJewelery((jewelery => {
        jewelery ++;
        if (jewelery > dataJewelery.length -1) {
          jewelery = 0
        }
        return jewelery
    }))
}

const nextPurse = () => {
  setPurse((purse => {
      purse ++;
      if (purse > dataPurse.length -1) {
        purse = 0
      }
      return purse
  }))
}

const nextTravel = () => {
  setTravel ((travel => {
    travel++;
    if (travel > dataTravel.length - 1) {
      travel = 0
    }
    return travel
  }))
}

// button previous 
const previousJewelery = () => {
  setJewelery((jewelery => {
    jewelery --;
    if (jewelery<0) {
      return dataJewelery.length - 1;
    }
    return jewelery;
  }))
}

const previousPurse = () => {
  setPurse((purse => {
    purse--;
    if (purse < 0) {
      return dataPurse.length -1;
    }
    return purse
  }))
}

const previousTravel =() => {
  setTravel((travel => {
    travel --;
    if (travel < 0) {
      return dataTravel.length -1;
    }
    return travel;
  }))
}

//delete one item

const removeJewelery = (id1) => {
  let newJewelery = jewelery.filter(ring => ring.id1 !== id1);
    console.log(newJewelery)
  }

//delete all

return (
<div className='main'>

      <div className='container'>
  <h1>Presents</h1>
    </div>
      <div className='container'>
        <button className='btn2 btn'>delete all</button>
      </div><div className='container'>
          <h2>Jewelery</h2>
          <h3>{id1} - {shop1}</h3>

          <div className='insideContainer'>
            <button className='btnInside' onClick={previousJewelery}>previous</button>
            <img src={image1} width='300px' alt='ring' />
            <button className='btnInside' onClick={nextJewelery}>next</button>
          </div>

          <button className='btn' onClick={() => removeJewelery(id1)}>delete</button>

        </div>
    )


  <div className='container'>
  <h2>Purses</h2>
  <h3>{id2} - {description2}</h3>

  <div className='insideContainer'>
  <button className='btnInside' onClick={previousPurse}>previous</button>
  <img src={image2} width='300px' alt='purse'/>
  <button className='btnInside' onClick = {nextPurse}>next</button>
  </div>

  <button className='btn' >delete</button>

  </div>

  <div className='container'>
  <h2>Travel</h2>

  <h3>{id3} - {name3}</h3>

  <div className='insideContainer'>
  <button className='btnInside' onClick={previousTravel}>previous</button>
  <img src={image3} width='300px' alt='travel'/>
  <button className='btnInside' onClick={nextTravel}>next</button>
</div>

<p>{description3}</p>

  <button className='btn'>delete</button>


  </div>


    </div>
);
  
}



export default App;
