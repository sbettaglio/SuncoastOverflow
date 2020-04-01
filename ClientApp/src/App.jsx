import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import HelloWorld from './pages/_template/HelloWorld'
import HeyWorld from './pages/_template/HeyWorld'
import AllQuestions from './pages/AllQuestions'
import NotFound from './pages/NotFound'
import AskQuestion from './pages/AskQuestion'
import ViewQuestion from './pages/ViewQuestion'
import './custom.scss'
import './home.scss'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={HelloWorld} />
          <Route exact path="/typescript" component={HeyWorld} />
          <Route exact path="/allquestions" component={AllQuestions} />
          <Route exact path="/question" component={AskQuestion} />
          <Route exact path="/view" component={ViewQuestion} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}
