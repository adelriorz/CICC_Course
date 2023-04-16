import React, { useState } from 'react';
import { Cat } from 'react-kawaii';
import { useSelector, useDispatch } from 'react-redux';
import { updateMood, MOODS } from './mood';

function App() {
  const currentMood = useSelector((state) => state.mood);
  const dispatch = useDispatch();
  const [size, setSize] = useState(320);
  const [color, setColor] = useState('#ffffff');

  const handleMoodUpdate = (event, size, color) => {
    const mood = event.target.dataset.type;
    dispatch(updateMood({ mood, size, color }));
  };

  return (
    <div className='App'>
      <Cat size={size} mood={currentMood} color={color} />
      <section>
        {Object.values(MOODS).map((mood) => (
          <button key={mood} data-type={mood} onClick={(e) => handleMoodUpdate(e, size, color)}>
            {mood}
          </button>
        ))}
      </section>
      <label>
        Size:
        <input type='number' value={size} onChange={(e) => setSize(parseInt(e.target.value))} />
      </label>
      <label>
        Color:
        <input type='color' value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
    </div>
  );
}

export default App;
