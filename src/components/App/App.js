import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from 'config/routes'
import Footer from 'components/Layout/Footer/Footer'
import Header from 'components/Layout/Header/Header'
import TabListener from 'components/App/TabListener/TabListener'
import ScrollToTop from 'components/App/ScrollToTop/ScrollToTop'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main className='main'>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </main>
          <Footer />
          <TabListener />
          <ScrollToTop />
        </div>
      </Router>
    )
  }
}

export default App
