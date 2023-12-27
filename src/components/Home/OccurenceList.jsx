import React from 'react'
import InstanceCard from './Instance'
import './Home.css'
const OccurenceList = () => {
  const Instances = [
    {
      "title": "React App 1",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      "tags": ["React", "Frontend", "React", "Frontend", "React", "Frontend"],
      "type": "react",
      "version": 10,
      "primaryDomain": "keerthi.haxy.cloud",
      "domain": ["test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in"]
    },
    {
      "title": "React App 2",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      "tags": ["React", "Frontend", "React", "Frontend", "React", "Frontend"],
      "type": "react",
      "version": 10,
      "primaryDomain": "keerthi.haxy.cloud",

      "domain": ["test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in"]
    },
    {
      "title": "React App 3",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      "tags": ["React", "Frontend", "React", "Frontend", "React", "Frontend"],
      "type": "react",
      "version": 10,
      "primaryDomain": "keerthi.haxy.cloud",

      "domain": ["test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in"]
    },
    {
      "title": "React App 4",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      "tags": ["React", "Frontend", "React", "Frontend", "React", "Frontend"],
      "type": "react",
      "version": 10,
      "domain": ["test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in"]
    },
    {
      "title": "React App 5",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      "tags": ["React", "Frontend", "React", "Frontend", "React", "Frontend"],
      "type": "react",
      "version": 10,
      "primaryDomain": "keerthi.haxy.cloud",

      "domain": ["test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in"]
    },
    {
      "title": "React App 6",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      "tags": ["React", "Frontend", "React", "Frontend", "React", "Frontend"],
      "type": "react",
      "version": 10,
      "primaryDomain": "keerthi.haxy.cloud",

      "domain": ["test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in"]
    },
    {
      "title": "React App 7",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      "tags": ["React", "Frontend", "React", "Frontend", "React", "Frontend"],
      "type": "react",
      "version": 10,
      "primaryDomain": "keerthi.haxy.cloud",

      "domain": ["test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in"]
    },
    {
      "title": "React App 8",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      "tags": ["React", "Frontend", "React", "Frontend", "React", "Frontend"],
      "type": "react",
      "primaryDomain": "keerthi.haxy.cloud",

      "version": 10,
      "domain": ["test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in"]
    },
    {
      "title": "React App 9",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      "tags": ["React", "Frontend", "React", "Frontend", "React", "Frontend"],
      "type": "react",
      "version": 10,
      "primaryDomain": "keerthi.haxy.cloud",

      "domain": ["test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in"]
    },
    {
      "title": "React App 10",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      "tags": ["React", "Frontend", "React", "Frontend", "React", "Frontend"],
      "type": "react",
      "primaryDomain": "keerthi.haxy.cloud",

      "version": 10,
      "domain": ["test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in"]
    }
  ]

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 overflow-y-scroll h-[70vh] Instance-grid'>
      {
        Instances?.map((instance,instanceIndex) => {
          return (

            <InstanceCard key={instanceIndex} {...instance} />
          )
        })
      }
    </div>
  )
}

export default OccurenceList