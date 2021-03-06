import { useState, VFC } from 'react'
import Link from 'next/link';

import { linkData } from '../data/linkData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from './SocialLinks';

const PageLinks: VFC<{}> = () => {
    const [open, setOpen] = useState(false)
        
    return (
        <>
            {
                !open 
                ? (
                    <>
                        <ul className='items-center hidden md:flex'>
                            {
                                linkData.map(link => (
                                    <li key={link.id} className='p-2 sm:mx-1 xl:mx-6'>
                                        <Link href={link.url}>
                                        <a className='text-lg font-bold tracking-wider text-gray-600 transition transform xl:text-3xl dark:text-gray-200 md:text-2xl hover:text-navy-600 dark:hover:text-navy-600'>
                                            {link.text}
                                        </a>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <button
                            type="button"
                            aria-label="ナビゲーションの切替"
                            className="mr-3 text-4xl md:hidden text-navy-900 dark:text-gray-200"
                            onClick={() => setOpen(true)}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </>
                ) 
                : (
                    <section className="fixed top-0 left-0 z-20 w-full h-full bg-gray-100 backdrop-blur-10 bg-opacity-10 bg-clip-padding md:hidden">
                        <button
                            type='button'
                            className='absolute text-5xl text-red-700 top-4 right-6'
                            onClick={() => setOpen(false)}
                        >
                            <FontAwesomeIcon icon={faTimes}/>
                        </button>
                        <section className="flex flex-col items-center pt-60 space-y-9 ">
                            {
                                linkData.map(link => (
                                    <div key={link.id} className="block list-none">
                                        <Link href={link.url}>
                                        <button 
                                            className='text-4xl font-bold  tracking-widest text-gray-600 dark:text-gray-100 dark:hover:text-navy-600 transition duration-500 transform
                                            hover:text-navy-600 hover:-translate-y-0.5'
                                            onClick={() => setOpen(false)}
                                        >
                                            {link.text}
                                        </button>
                                        </Link>
                                    </div>
                                ))
                            }
                            <SocialLinks 
                                styleClass='text-navy-800 dark:text-navy-600 dark:hover:text-navy-400 hover:text-navy-300'
                                containerClass='flex'
                            />
                        </section>
                    </section>
                )
            }
        </>
    );
}
export default PageLinks;