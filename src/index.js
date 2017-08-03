import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import MovesTranslation from './Display_moves_translation';
import MovesList from './Display_moves';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MovesList />, document.getElementById('moves_list'));
//ReactDOM.render(<MovesTranslation />, document.getElementById('Moves_translation'));

registerServiceWorker();
