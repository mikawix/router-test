import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import NewComponent from './components/new-component/new-component'
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
       <NewComponent/>
    );
}

export default App;
