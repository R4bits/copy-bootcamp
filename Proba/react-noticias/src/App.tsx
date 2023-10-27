import React from 'react'
import listaNoticias from './lista-noticias.tsx'
import articulos, { articulo } from './perrosNews.ts'

function App() {
    return listaNoticias(articulos)
}

export default App