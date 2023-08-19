import Drawer from './components/drawer/Drawer';
import Header from './components/header/Header';
import Card from './components/card/Card';

import './app.scss';

function App() {
  return (
    <div className="wrapper">
      <Drawer/>
      <Header/>
      <div className='content'>
        <div className="content__header">
          <h1>Все кроссовки</h1>
          <div className="search__block">
            <img src="./img/search.svg" 
                 alt="search"
                 className='seacrh__icon' />
            <input className='search' 
                  type="text" 
                  name="search"
                  placeholder='Поиск...'/>
          </div>
        </div>
        <div className="sneakers">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default App;
