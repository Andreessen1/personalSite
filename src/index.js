import React from "react";
import ReactDOM from 'react-dom/client';
import{
    AboutMe,
    Home,
    MagicEightBall,
    NavBar,
    TicTacToe
} from './components'
import {
    Route, BrowserRouter, Routes, useNavigate
} from 'react-router-dom'
import WorkHistory from "./components/WorkHistory";

const App = () => {
    const navigate = useNavigate();
return(
    <div>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/WorkHistory' element={<WorkHistory />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/MagicEightBall' element={<MagicEightBall />} />
        </Routes>
    </div>
)

}

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);