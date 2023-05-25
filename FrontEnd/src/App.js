import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './page/homepage.page'
import CoursesPage from './page/courses.page'
import SearchforCourses from './page/searchCourses.page'
import { useEffect, useState } from 'react'
import FourOFour from './page/404.pages'
import AboutPage from './page/about.pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="courses/" element={<SearchforCourses />}></Route>
      <Route path="courses/coursePage/:courseId" element={<CoursesPage />}></Route>
      <Route path="*" element={<FourOFour />}></Route>
      <Route path="about" element={<AboutPage />}></Route>
    </Routes>
  )
}

export default App
