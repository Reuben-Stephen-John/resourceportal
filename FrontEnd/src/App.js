import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './page/homepage.page'
import CoursesPage from './page/courses.page'
import SearchforCourses from './page/searchCourses.page'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="courses/" element={<SearchforCourses />}></Route>
      <Route path="courses/coursePage" element={<CoursesPage />}></Route>
    </Routes>
  )
}

export default App
