import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import BasicForm from "./Components/BasicForm";
import MovieListPage from './features/pages/MovieListPage';

function App() {
 return(
    <Routes>
        <Route path='/movies' element={<MovieListPage/>}/>
     <Route path='/form' element={<BasicForm/>}/>
     </Routes>
 )
}

export default App;
