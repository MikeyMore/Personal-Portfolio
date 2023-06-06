import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { School } from '@mui/icons-material';
import { Work } from '@mui/icons-material';
import "../styles/Experience.css";



export default function Experience() {

  

  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-element-education' 
        date='2015 - 2018' 
        iconStyle={{background: '#3e497a', color:'#fff'}}
        icon={<School />}
        
        ><h3 className='vertical-timeline-element-title'>High School, Jose N. Gándara</h3>
        <p> High School Dyploma in Pre-Engineering Program</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element-education' 
        date='2018 - present' 
        iconStyle={{background: '#3e497a', color:'#fff'}}
        icon={<School />}
        
        ><h3 className='vertical-timeline-element-title'>Universidad Ana G. Méndez</h3>
        <p> Currently in pursuit of bechalors degree in computer science and engineering, expected graduation date: december 2023</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element-work' 
        date='2023 - present' 
        iconStyle={{background: '#B8860B', color:'#fff'}}
        icon={<Work />}
        
        
        ><h3 className='vertical-timeline-element-title'>Score Technologies Inc.</h3>
        <p> Working full-time as a Junior Full Stack Developer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
