import React, { useEffect, useState } from 'react';
import { Movie } from '../typings';
import Image from 'next/image'
import { baseUrl } from '../constants/movie';

interface Props {
    netflixOrignals: Movie[]
}

const Banner = ({netflixOrignals}: Props) => {
    const [movie, setMovie] = useState<Movie | null>(null);
    console.log(netflixOrignals);
    
    // picture random
    useEffect(()=> {
        setMovie(netflixOrignals[Math.floor(Math.random() * netflixOrignals.length)])
    }, [netflixOrignals])

    return (
        <div>
            <div>
                <Image
                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    layout='fill'
                />
            </div>
        </div>
    );
};

export default Banner;