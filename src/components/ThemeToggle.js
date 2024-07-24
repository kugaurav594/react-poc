import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '@mui/material';

const ThemeToggle = () => {
  const { state, dispatch } = useTheme();

  return (
    <Button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
      Toggle to {state.theme === 'light' ? 'Dark' : 'Light'} Theme
    </Button>
  );
};

export default ThemeToggle;
