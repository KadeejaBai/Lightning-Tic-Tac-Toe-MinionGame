/* eslint-disable no-undef */
import { IMAGES } from './constants/ImageConstants';
import Game from './components/Game';
export default class App extends ux.App {
  static _template() {
    return {
      Header: { src: IMAGES.MINION , x: 50 ,y: 10,scale: 0.5 },
      TicTac: { type: Game ,x: 100 ,y: 100 ,scale: 0.5 }
    };
  }

  /**
     * @memberof Activation
     * Init Method.
     */
  _init() {
    console.log('\n Init ');
  }

  _getFocused() {
    return this.tag('TicTac');
  }

}