import React from 'react';
import ReactDOM from 'react-dom/client';
import MyTheme from './theme.provider';
import { Homepage, CalculatorApp, ResistorColorCoding, MyNotepad, PdfRenderer, ExternalLink} from './routes';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MyTheme>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculator" element={<CalculatorApp />} />
        <Route
          path="/resistor-color-coding"
          element={<ResistorColorCoding />}
        />
        <Route
          path="/olinsterg-unlock"
          element={
            <ExternalLink link="http://olinstergunlock.000webhostapp.com/" />
          }
        />
        <Route
          path="/spider-gagambattle"
          element={
            <ExternalLink
              link="https://play.google.com/store/apps/details?id=com.JarmelaProduction.Gagamgirls_Spider_Gagambattle_MVG&hl=en&gl=US"
            />
          }
        />
        <Route
          path="/mynotepad"
          element={<MyNotepad/>}
        /> 
        <Route
          path="/cci"
          element={<ExternalLink link='https://ciphercryptography.000webhostapp.com/' />}
        /> 
        <Route
          path="/my_resume"
          element={<PdfRenderer url='./morcilla-resume.pdf' />}
        /> 
      </Routes>
    </BrowserRouter>
  </MyTheme>
);
