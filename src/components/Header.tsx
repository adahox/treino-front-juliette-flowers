import react from 'react';
import Logo from './Logo';

export default function Header() {

    return (
        <header className='flex flex-row justify-center md:justify-between h-24 bg-light-100 px-[120px]'>
            <div className='flex flex-col justify-center'>
                <Logo />
            </div>
            <div>
                <ul className='hidden md:flex flex-row h-full items-center text-dark-100'>
                    <li className='px-[18px] font-bold'>
                        <a href="" className='border-b-2 border-solid border-dark-100'>
                            Home
                        </a> 
                </li>
                    <li className='px-[18px] font-light'>
                       <a href="#" >
                            About
                        </a> 
                    </li>
                    <li className='px-[18px] font-light'>
                       <a href="#">
                            Services
                        </a> 
                    </li>
                    <li className='px-[18px] font-light'>
                       <a href="#">
                            Contact
                        </a> 
                    </li>
                </ul>
            </div>
        </header>
    )
}