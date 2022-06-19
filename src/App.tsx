import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyles from './GlobalStyles';
import Create from './pages/Create';
import Main from './pages/Main';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Main />}
          />
          <Route
            path='/create'
            element={<Create />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
