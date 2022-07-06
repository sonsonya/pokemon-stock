import List from './pages/List';
import Detail from './pages/Detail';
import Confirm from './pages/Confirm';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { configure } from 'mobx';

configure({ enforceActions: 'never' });

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<List/>} path='/'/>
        <Route element={<Detail/>} path='/detail/:name/:stock'/>
        <Route element={<Confirm/>} path='/confirm'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
