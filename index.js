import DevLauncher  from './node_modules/wpe-lightning-sdk/DevLauncher';
import App from './src/App';

const options = {
  stage: {
    // Variable Width and height
    w: window.innerWidth,
    h: window.innerHeight,
    clearColor: 0x000000FF,
    precision: window.innerWidth / 1280,
    memoryPressure: 16e6,
    canvas2d: false,
    useImageWorker: true,
    useInterval: true
  }
};
window.onload = function () {
  const launcher = new DevLauncher();
  launcher.launch(App, options);
};
/* import { Launch } from './node_modules/wpe-lightning-sdk'
import App from '.src/App.js'

export default function () {
    return Launch(App, ...arguments)*/