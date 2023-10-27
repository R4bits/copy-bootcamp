import React from 'react'
import articulos, { articulo } from './perrosNews.ts'

function listanoticias({ articulos }: { articulos: articulo[] }) {
    return (
        <main className='container my-0 mx-auto'>
            <h2 key={7} className='text-center font-bold text-5xl my-10'>Noticias</h2>
            {articulos.map((articulo) =>
                <section key={8} className='outline grey p-3'>
                    <article>
                        <cite key={1}>{articulo.author}</cite>
                        <h3 key={2} className='font-bold text-2xl text-center my-5'>{articulo.title}</h3>
                        <div className='flex'>
                            <p key={3} className=''>{articulo.description}</p>
                            <img key={5} src={articulo.urlToImage} className='inline' />
                        </div>
                        <a key={4} href={articulo.url} className='text-cyan-500 block font-bold'>Fuente</a>
                        <time key={6} className='font-bold'>{articulo.publishedAt}</time>
                    </article>
                    <div key={9} className='w-full my-8 mx-auto border-slate-500 border-4' />
                </section>)}
        </main>
    )
}

export default listanoticias