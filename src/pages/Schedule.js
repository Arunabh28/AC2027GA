import React from 'react';

const sampleSchedule = [
  {id:1, time: '09:00', title: 'Registration'},
  {id:2, time: '10:00', title: 'Opening Keynote'},
  {id:3, time: '11:30', title: 'Breakout Sessions'},
  {id:4, time: '13:00', title: 'Lunch'},
  {id:5, time: '14:00', title: 'Panel Discussion'}
];

export default function Schedule(){
  return (
    <div>
      <h2>Event Schedule</h2>
      <div className="card">
        <ul className="schedule-list">
          {sampleSchedule.map(item => (
            <li key={item.id} className="schedule-item">
              <div>{item.title}</div>
              <div style={{opacity:0.8}}>{item.time}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
