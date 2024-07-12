import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListing from './components/JobListing'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero title='Test Title' subTitle='subtitle'/>
   <HomeCards/>
    <JobListing/>
    <ViewAllJobs/>
   
    </>
  )
}

export default App