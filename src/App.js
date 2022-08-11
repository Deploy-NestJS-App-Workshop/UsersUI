import './App.css';
import UserManagement from './components/UserManagement/UserManagement';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import LanguageContext from './components/Providers/LanguageContext'
import { useState } from 'react';
import UserDetail from './components/UserManagement/UserDetail';

function App() {
  const [language, setLanguage] = useState('en');

  function toggleLanguage() {
    setLanguage(language === 'en' ? 'ua' : 'en');
  }

  const languageValue = {
    language,
    toggleLanguage
  }


  return (
    <BrowserRouter>
      <LanguageContext.Provider value={languageValue}>
        <Routes>
          <Route index element={<UserManagement />} />
          <Route path="users">
            <Route path=":id" element={<UserDetail />} />
          </Route>
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
