import React, { useEffect } from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import WhatIDo from './pages/WhatIDo/WhatIDo';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Study from './pages/Study/Study';
import Maintenance from './pages/Maintenance/Maintenance';
import { DARK, LIGHT } from "../colors"
import ScrollToTop from './util/ScrollToTop';
import $ from "jquery";

const App = (props: any) => {
  useEffect(() => {
    switch(props.portfolio.theme){
      case "LIGHT":
        $("body").css({"background": LIGHT, "color": "#000000"})
        break;
      case "DARK":
        $("body").css({"background": DARK, "color": "#FFFFFF"})
        break;
    }
  }, [props.portfolio.theme])

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/casestudies" component={Work} />
          <Route exact path="/aboutme" component={About} />
          <Route exact path="/whatido" component={WhatIDo} />
          <Route exact path="/otherwork" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/study" component={Study} />
          <Route component={Home} />
          {/*<Route component={Maintenance} />*/}
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

const mapStateToProps = ( state: { portfolio: any; } ) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, null)(App);
