// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__backInRight">Loading ...</p>}
            <div className="card-grid">

                {
                    data.map(img =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </div>

    )
}

export default GifGrid
