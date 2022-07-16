import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { Movie } from '../typings';
import Thumbnail from './Thumbnail';

interface Props {
    // Firebase
    // movie: Movie | DocumentData
    title: string
    movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
    return (
        <div className="h-40 space-y-0.5 md:space-y-2">
            <h2>{title}</h2>
            <div>
                <ChevronLeftIcon
                    className='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
                // onClick={() => handleClick('left')}
                />

                <div className="flex scrollbar-hidde items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
                    {movies.map((movie)=> (
                        <Thumbnail key={movie.id} movie={movie}/>
                    ))}
                </div>

                <ChevronRightIcon
                    className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
                //   onClick={() => handleClick('right')}
                />
            </div>
        </div>
    );
};

export default Row;