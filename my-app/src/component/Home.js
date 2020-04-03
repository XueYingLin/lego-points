import React, { useState } from 'react';

const legoCalendar = [
    {id: 1, title: "create a roller coaster"},
    {id: 2, title: "build a new rocket"},
    {is: 3, title: "build a new home"},
    {id: 4, title: "build a new Star War movie set"},
    {id: 5, title: "build a tallest tower"},
    {id: 6, title: "build a new space ship"},
    {id: 7, title: "build a coolest pick up truck"}
    
  ]

const Home = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    }
  return (
    <div>
      <h2>Lego Calendar</h2>
      
      {legoCalendar.map((item) => <p><input className="checkbox" type="checkbox" /> Day {item.id} :  Title: {item.title}</p>)}
      
    </div>
  )
}

export default Home;
