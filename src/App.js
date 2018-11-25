import React, { Component } from 'react'
import ListPage from './ListPage'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from './Environment'
const AppAllPostQuery = graphql`
  query AppAllPostQuery {
    viewer {
      ...ListPage_viewer
    }
  }
`
class App extends Component {
  render() {
    return (
      <ListPage />
    )
  }
}
export default App
