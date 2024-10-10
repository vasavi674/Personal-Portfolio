import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
        <ProjectsCard
          title="CRUD Application"
          des=" A CRUD application allows users to Create, Read, Update, and Delete data, enabling full data management within a system. It provides a simple interface for interacting with a database, ensuring all essential operations are covered for data handling"
          src={projectOne}
        />
        <ProjectsCard
          title="SUDUDKO GAME"
          des=" A Sudoku game is a logic-based puzzle where players fill a 9x9 grid with numbers, ensuring that each row, column, and 3x3 subgrid contains all digits from 1 to 9 without repetition. It offers various difficulty levels, challenging users to complete the puzzle through deductive reasoning"
          src={projectTwo}
        />
        <ProjectsCard
          title="Weather Prediction"
          des="A weather prediction project uses machine learning or statistical models to forecast future atmospheric conditions such as temperature, humidity, and precipitation. It analyzes historical weather data to make accurate, short- or long-term predictions for specific locations."
          src={projectThree}
        />
    </section>
  );
}

export default Projects