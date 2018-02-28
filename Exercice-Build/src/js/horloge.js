import config from './config.json5';
import format from 'date-fns/format';

export const formatString = 'HH:mm:ss';

export class Horloge {
  /**
   * @constructor
   * @param {HTMLElement} container
   */
  constructor(container) {
    this._container = container;
  }

  _render() {
    const now = new Date();
    this._container.innerText = format(now, formatString);
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), config.delay);
  }
}

