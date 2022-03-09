import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categoria, setCategoria] = useState(['One Punch'])    

    return(
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategoria = {setCategoria}/>
        <hr></hr>

        <ol>
            {
                categoria.map( categoria => (
                    <GifGrid 
                        key = {categoria}
                        categoria = {categoria}/>
                ))
            }
        </ol>
    </>
    )  
}
