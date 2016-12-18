import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';

import * as module from './module';

console.log(module);

render(<App />, document.getElementById('app'));
