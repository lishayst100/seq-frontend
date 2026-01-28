import React, { useState } from 'react';

const TitleProjects = ({ handleGenreClick }) => {
  const titles = [
    { value: '', title: 'All' },
    { value: 'commercial', title: 'Commercials' },
    { value: 'motion', title: 'Motion' },
    { value: 'ux', title: 'UX' },
    { value: 'events', title: 'Events' },
    { value: 'ai', title: 'AI' },
  ];

  const [selected, setSelected] = useState(0);

  const toggleSelected = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <ul
      className="titles"
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {titles.map((title, index) => (
        <li key={index}  style={{ display: 'inline-block' }}>
          <button
            type="button"
            className={selected === index ? 'title-projects selected' : 'title-projects'}
            aria-pressed={selected === index}
            onClick={() => {
              toggleSelected(index);
              handleGenreClick(title.value);
            }}
          >
            {title.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TitleProjects;
