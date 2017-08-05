import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import RouteWithSubRoutes from './RouteWithSubRoutes';

// pages 
import JourneySelector from '../page/JourneySelector';
import FirstPage from '../page/FirstPage';
// import SecondPage from '../page/SecondPage';
// import SecondFirstPage from '../page/SecondFirstPage';
// import SecondSecondPage from '../page/SecondSecondPage';


const routes = [
  // { path: '/',
  //   component: JourneySelector
  // },
  { path: '/JourneySelector',
    component: JourneySelector
  },
  { path: '/journey1',
    component: FirstPage
  // },
  // { path: '/SecondPage',
  //   component: SecondPage,
  //   routes: [
  //     { path: '/SecondPage/SecondFirst',
  //       component: SecondFirstPage
  //     },
  //     { path: '/SecondPage/SecondSecond',
  //       component: SecondSecondPage
  //     }
  //   ]
  }
]

// // wrap <Route> and use this everywhere instead, then when
// // sub routes are added to any route it'll work
// const RouteWithSubRoutes = (route) => (
//   <Route path={route.path} render={props => (
//     // pass the sub-routes down to keep nesting
//     <route.component {...props} routes={route.routes}/>
//   )}/>
// )

const Navigator = (props) => (

  <Router history={history}>

    <div>
      {console.log("Navigator.props = ", props)}

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

export default Navigator
