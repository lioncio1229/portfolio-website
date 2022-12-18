import React from 'react';
import ReactDOM from 'react-dom/client';
import MyTheme from './theme.provider';
import { Homepage, CalculatorApp, ResistorColorCoding, MyNotepad, ExternalLink} from './routes';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PdfRenderer from './components/pdf.renderer';
import VideoRenderer, {YoutubeVideo} from './components/video.renderer';

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
            <ExternalLink link="https://play.google.com/store/apps/details?id=com.JarmelaProduction.Gagamgirls_Spider_Gagambattle_MVG&hl=en&gl=US" />
          }
        />

        <Route
          path="/mynotepad"
          element={
            <ExternalLink link="https://my-notepad.onrender.com/" />
          }
        />

        <Route
          path="/cci"
          element={
            <ExternalLink link="https://ciphercryptography.000webhostapp.com/" />
          }
        />

        <Route
          path="/my_resume"
          element={<PdfRenderer url="./morcilla-resume.pdf" />}
        />

        <Route
          path="/olinsterg_unlock_video"
          element={<VideoRenderer src="./videos/unlock.m4v" />}
        />

        <Route
          path="/spidergagambattle_video"
          element={
            <VideoRenderer>
              <YoutubeVideo src="https://www.youtube.com/embed/rw6s5F2liRk" />
            </VideoRenderer>
          }
        />

        <Route
          path="/facebook"
          element={
            <ExternalLink link="https://www.facebook.com/lioncio.morcilla.75/" />
          }
        />

        <Route
          path="/linkedin"
          element={
            <ExternalLink link="https://www.linkedin.com/in/lioncio-morcilla-35b9ba203/" />
          }
        />

        <Route
          path="/github"
          element={<ExternalLink link="https://github.com/lioncio1229" />}
        />
      </Routes>
    </BrowserRouter>
  </MyTheme>
);
