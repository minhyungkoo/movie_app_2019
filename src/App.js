import React from 'react';

function FOOD({ name, picture }){
    return <div>
      <h2>I like {name} </h2>
      <img src={picture} />
    </div>;
}

const foodIlike = [
  {name: 'Kimchi',
  image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Various_kimchi.jpg/330px-Various_kimchi.jpg'
  }
]


  function App() {
    return (
      <div>
        <h1>HELLO</h1>
        {foodIlike.map(dish => <FOOD name={dish.name} picture={dish.image}/>)}
      </div>
    ); 
  }

export default App;

