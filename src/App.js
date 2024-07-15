import { Fragment } from 'react';
import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/appbar/appbar';
import HomeScreen from './screens/home_screen';
import AboutUsScreen from './screens/about_us_screen';
import OurTeamScreen from './screens/our_team_screen';
import SupportScreen from './screens/support_screen';
import { PathsUrls } from './utils/path_url';

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Box component="main">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path={PathsUrls.home} element={<HomeScreen />} />
            <Route path={PathsUrls.about} element={<AboutUsScreen />} />
            <Route path={PathsUrls.ourTeam} element={<OurTeamScreen />} />
            <Route path={PathsUrls.support} element={<SupportScreen />} />
          </Routes>
        </Box>
      </Fragment>
    </Router>
  );
}

export default App;
