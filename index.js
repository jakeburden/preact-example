import 'ress'
import 'tachyons'
import { Component } from 'preact'

export default class App extends Component {
  render () {
    return (
      <main class='sans-serif white bg-black vh-100 pa3 pa5-l'>
        <h1 class='f1 ma0 lh-title'>Hello, World!</h1>
        <p class='measure lh-copy'>Just trying preact cli!</p>
      </main>
    )
  }
}
