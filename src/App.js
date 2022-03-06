
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from './routes/AboutPage/AboutPage';
import ContactPage from './routes/contactPage/ContactPage';
import Portfolio from "./routes/myClass/MyClass"
import NavBar from './components/Navigations/NavBar';
import Course from './components/Courses/Course';
import HomePage from './routes/HomePage/HomePage';
import CourseTitle from './components/Courses/CourseTitle';
import MyProvider from './context/MyProvider'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <MyProvider>
              {" "}
              <AboutPage />
            </MyProvider>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/myclass" element={<Portfolio />} />
        <Route path="/course" element={<Course />}>
          <Route path="/course/:courseName" element={<CourseTitle />} />
        </Route>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
