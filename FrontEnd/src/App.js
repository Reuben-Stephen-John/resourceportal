import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './page/homepage.page'
import CoursesPage from './page/courses.page'
import SearchforCourses from './page/searchCourses.page'
import { useEffect, useState } from 'react'

const App = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/courses')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  }, [])

  console.log(courses)

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="courses/" element={<SearchforCourses />}></Route>
      <Route path="courses/coursePage" element={<CoursesPage />}></Route>
    </Routes>
  )
}

export default App
