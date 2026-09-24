import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-center items-center gap-10 border-4 rounded-xl w-fit p-4'>
            {/* Left box - details */}
            <div>
                <h1 className='text-5xl font-bold'>Fahiyan Shah Chand</h1>
                <h2>Undergraduate Student at Metropolitan University</h2>
                <h3>Currently in his third year third semester.</h3>
            </div>

            {/* Right box - picture */}
            <div>
                {/* <Image
                    src="/formal_picture.jpg"
                    alt="Picture of Fahiyan Shah Chand"
                    width={400}
                    height={200}
                    className="rounded-full object-cover"
                /> */}
                <div className="w-64 h-64 rounded-full overflow-hidden">
                    <Image
                        src="/Fahiyan.jpg"
                        alt="Picture of Fahiyan Shah Chand"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;