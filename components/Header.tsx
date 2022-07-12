import React, { useEffect, useState } from 'react';
import { BellIcon, SearchIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=> {
        const handleScroll = ()=> {
            if(window.scrollY > 0){
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return ()=> {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className='flex items-start space-x-2 md:space-x-10'>
                <img src="https://rb.gy/ulxxee" 
                alt="logo" 
                width={100}
                height={100}
                className="cursor-pointer object-contain"
                />

                <ul className='hidden space-x-4 md:flex'>
                <li className='headerLink'>Accueil</li>
                <li className='headerLink'>Série TV</li>
                <li className='headerLink'>Cinema</li>
                <li className='headerLink'>Ajouts récents</li>
                <li className='headerLink'>Ma liste</li>
            </ul>
            </div>

            <div className='flex items-center space-x-4 text-sm font-light'>
                <SearchIcon className='hidden h-6 w-6 sm:inline'/>
                <p className='hidden lg:inline'>Kids</p>
                <BellIcon className='h-6 w-6'/>
                <Link href="/account">
                    <img 
                        src="https://rb.gy/g1pwyx" 
                        alt="" 
                        className='cursor-pointer rounded'
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;