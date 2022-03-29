import React from 'react';
import Utama from './Components/Utama';
import { Link } from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div><hr />
        <Link to="/">Beranda</Link>| 
        <Link to="/tentangsaya"> Tentang Saya</Link>| 
        <Link to="/gallery" className="nav-link"> Gallery</Link>|
        <Link to="/cart" className="nav-link"> Cart</Link> |
        <Link to="/pegawai" className="nav-link">Daftar Pegawai</Link>
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;
