import React, { useContext, useState } from 'react';
import { ProjectContext } from '../../context/ProjectContext';
import Project from '../Projects/Project';

const YourComponent = () => {
  const {projects} = useContext(ProjectContext)
  const data = projects;

  const [selectedGenre, setSelectedGenre] = useState(''); // State to store selected genre

  const filteredData = selectedGenre
    ? data.filter(item => item.genres.includes(selectedGenre))
    : data;

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleGenreClick('')}>All Genres</button>
        <button onClick={() => handleGenreClick('production')}>Production</button>
        <button onClick={() => handleGenreClick('commercial')}>Commercial</button>
        <button onClick={() => handleGenreClick('motion')}>Motion</button>
        {/* Add more buttons as needed */}
      </div>

      {/* Render your filtered data here */}
      <ul>
        {filteredData.map(item => (
          <Project {...item} img={item.images[0]} item={'item'}/>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
