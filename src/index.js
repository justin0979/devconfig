import * as ReactDOM from 'react-dom';
import App from 'components/App';
import './sass/main.scss';

ReactDOM.render(<App />, document.querySelector('#root'));

//  Comment out below after webpack-dev-server v4.1.0
//  if (module.hot) {
//    module.hot.accept();
//  }
