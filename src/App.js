import React from 'react';

import './styles/App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart,faChevronDown, faChevronLeft, faChevronRight, faSearch, faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import Home from './pages/Home'

library.add(fab, faShoppingCart, faChevronDown, faChevronLeft, faChevronRight, faSearch, faTrashAlt, faPlus, faMinus)

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
