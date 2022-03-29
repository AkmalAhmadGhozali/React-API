import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Beranda from '../Pages/Beranda'
import TentangSaya from '../Pages/TentangSaya'
import Gallery from '../Pages/Gallery'
import Cart from '../Pages/Cart'
import Pegawai from '../Pages/Pegawai'

const Utama = () => (
    <Switch>
        <Route exact path='/' component={Beranda} />
        <Route path='/tentangsaya' component={TentangSaya} />
        <Route path='/gallery' component={Gallery}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/pegawai' component={Pegawai}/>
    </Switch>
)

export default Utama;