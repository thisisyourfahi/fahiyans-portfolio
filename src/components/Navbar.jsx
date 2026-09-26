import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between' style={{ fontFamily: "var(--font-space-grotesk)" }}>
            <a className='hover:text-blue-700 hover:underline' href='https://www.facebook.com/thisisyourfahi1/'>
                Fahiyan Shah
            </a>
            <ul className='flex gap-10'>
                <li className='hover:text-blue-700 hover:underline'>
                    <a href='#education'>
                        Education
                    </a>
                </li>
                <li className='hover:text-blue-700 hover:underline'>
                    <a href="#skills">
                        Skills
                    </a>
                </li>
                <li className='hover:text-blue-700 hover:underline'>
                    Projects
                </li>
                <li className='hover:text-blue-700 hover:underline'>
                    Extracurricular activities
                </li>
            </ul>
        </div>
    );
};

export default Navbar;