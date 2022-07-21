import React from 'react';
import { Movie } from '../typings';
import Image from 'next/image'

interface Props {
    // Firebase
    // movie: Movie | DocumentData
    movie: Movie
}

const Thumbnail = ({ movie }: Props) => {
    return (
        <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path
                    }`}
                className="rounded-sm object-cover md:rounded absolute"
                layout="fill"
            />
            <h1 className='absolute text-shadow-xl ml-2 top-2 lg:top-24'>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
    );
};

export default Thumbnail;