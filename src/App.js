import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import ThemeToggle from './components/ThemeToggle';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddEvent from './components/AddEvent';  // Correct the import path

const AppWrapper = ({ children }) => {
  const { state } = useTheme();

  useEffect(() => {
    document.body.className = state.theme + '-theme';
  }, [state.theme]);

  return <>{children}</>;
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <ThemeToggle />
          <AppWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events/:id" element={<EventDetailPage />} />
              <Route path="/add-event" element={<AddEvent />} />
            </Routes>
          </AppWrapper>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
