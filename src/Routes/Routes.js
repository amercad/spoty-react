import { Routes, Route } from "react-router-dom";
import { Menu } from '../Menu/Menu'

import { Home } from '../Home/Home.js';
import { Historia } from '../Historia/Historia.js';
import { Integrantes } from '../Integrantes/Integrantes.js';
import { Music } from '../Music/Music.js';

export const Rutas = () => {
    return (
        <div className="Routes">
        <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="historia" element={<Historia />} />
            <Route path="integrantes" element={<Integrantes />} />
            <Route path="music" element={<Music />} />
          </Routes>
        </div>
      );
}