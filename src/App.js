import React, { useState } from "react";
import './App.css';

const profiles = [
  {
    id:1,
    name:'Susan Smith',
    job:'web developer',
    image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",},
  {
    id:2,
    name:'Anna Johnson',
    job:'web designer',
    image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',},
  {
    id:3,
    name:'Peter Jones',
    job:'intern',
    image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',},
  {
    id:4,
    name:'Bill Anderson',
    job:'the boss',
    image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',},
]

function App(){
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const previousProfile = () => {
    if (currentProfileIndex > 0) {
      setCurrentProfileIndex(currentProfileIndex - 1);
    } else {
      setCurrentProfileIndex(profiles.length - 1);
    }
  };

  const nextProfile = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      setCurrentProfileIndex(0);
    }
  };

  const surpriseMe = () => {
    setCurrentProfileIndex(Math.floor(Math.random() * profiles.length));
  };

  return (
  <div>
    <div className='title'>
        <div className="ourReviews">Our Reviews</div>
        <div className='underline'></div>
    </div>

    <div className="profile">
      <div className="circle">&#10080;</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <img src={profiles[currentProfileIndex].image} alt={profiles[currentProfileIndex].name} />
        <h1>{profiles[currentProfileIndex].name}</h1>
        <h2>{profiles[currentProfileIndex].job}</h2>
        <p>{profiles[currentProfileIndex].text}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="arrContainer">
          <div className="arrows"><button onClick={previousProfile}>{'<'}</button>
            <button onClick={nextProfile}>{'>'}</button></div>
          <button onClick={surpriseMe}>Surprise Me</button>
          </div>
      </div>
    </div>
  </div>

  );
}

export default App;