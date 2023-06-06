import React from 'react';
import { useParams } from 'react-router-dom';
import {ProjectList} from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';
import '../styles/ProjectView.css';

function ProjectView() {
    const {id} = useParams();
    const project = ProjectList[id];
    return (
    <div className='Project'>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <br></br>
        <p>
          <b>Skills: </b> 
          {project.skills}
          <br></br>
          <br></br>
          <b>About this project: </b>
          {project.description}
        </p>
        <a href={project.gitrepo}>
          <GitHub />
        </a>
    </div>
        )
}

export default ProjectView