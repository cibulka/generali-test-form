import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider, alpha, createTheme } from '@mui/material';

import { LANG } from './constants/i18n';
import { Layout } from './sections/layout/Layout';
import { NotFound } from './sections/not-found/NotFound';

import App from './App';
import reportWebVitals from './reportWebVitals';

const { palette: defaultPalette } = createTheme();
const theme = createTheme({
  palette: {
    menuOptionSelected: {
      light: alpha(defaultPalette.error.light, 0.1),
      main: alpha(defaultPalette.error.light, 0.5),
      dark: alpha(defaultPalette.error.light, 0.8),
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/cs" replace />} />
            <Route path="/cs" element={<App lang={LANG.CS} />} />
            <Route path="/en" element={<App lang={LANG.EN} />} />
            <Route path="/sk" element={<App lang={LANG.SK} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Layout>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
