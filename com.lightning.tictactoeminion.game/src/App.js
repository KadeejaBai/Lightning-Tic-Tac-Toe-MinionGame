import { Lightning } from 'wpe-lightning-sdk'
import { IMAGES } from './constants/ImageConstants'
import Game from './components/Game'

export default class App extends Lightning.Component {
  static _template() {
    return {
      Header: { src: IMAGES.MINION, x: 450, y: 10, scale: 0.5 },
      TicTac: { type: Game, x: 100, y: 100, scale: 0.5 }
    }
  }

  /**
   * @memberof App
   * Init Method.
   */
  _init() {
    console.log('\n Init ')
  }

  _getFocused() {
    return this.tag('TicTac')
  }
}
