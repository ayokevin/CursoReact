import React, { useState,useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({categoria}) => {

    const {data: images, loading} = useFetchGifs(categoria);

    return (
        <>
            <h3 className='animate__animate animate__fadeIn'>{categoria}</h3>

            {loading && <p className='animate__animate animate__flash'>Loading</p>}
            <div className='card-grid'>   
                {
                    images.map( img => (
                        <GifGridItem 
                            key = {img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
        
    )
}
