import React from 'react';
import Proptypes from 'prop-types';

function Food({ name, picture, rating }){
    return <div>
      <h2>I like {name} </h2>
      <img src={picture} alt={name} />
      <h4> {rating}/5 </h4>
    </div>;
}


const foodIlike = [
  {id: 1,
  name: 'Kimchi',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Various_kimchi.jpg/330px-Various_kimchi.jpg',
  rating: 3.9
  }
]

Food.propTypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number
};

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
}

  function App() {
    return (
      <div>
        <h1>HELLO</h1>
        {console.log(foodIlike.map(renderFood))}
        {foodIlike.map(renderFood)} 
      </div>
    ); 
  }

export default App;

