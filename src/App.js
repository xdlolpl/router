import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


// const [search, setSearch] = useState('')

const App =()=> {
  return (
    <div className="App">
        <Header title="Blog React Hubert Miłuch"/>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/post' element={<NewPost />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Routes>
        <Footer /> 
    </div>
  );
}

export default App;
