import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <a className='hover:text-blue-700 hover:underline' href='https://www.facebook.com/thisisyourfahi1/'>
                Fahiyan Shah
            </a>
            <ul className='flex gap-10'>
                <li className='hover:text-blue-700 hover:underline'>
                    Extracurricular Activities
                </li>
                <li className='hover:text-blue-700 hover:underline'>
                    Skills
                </li>
                <li className='hover:text-blue-700 hover:underline'>
                    Projects
                </li>
            </ul>
        </div>
    );
};

export default Navbar;