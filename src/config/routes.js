import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Albums from 'pages/Albums/Albums';
import AboutUs from 'pages/AboutUs/AboutUs';

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/albums",
    component: Albums,
  },
  {
    path: "/about-us",
    component: AboutUs,
  },
];

export default routes;
