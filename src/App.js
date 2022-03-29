import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import MasterList from './pages/master/MasterList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/master/list" element={<MasterList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
