
import Image from "next/image";
import React from "react";

const Header = () => {
    return (
        <header className="relative w-full overflow-hidden bg-white">
            {/* Name */}
            <div className="relative z-10 pt-20">
                <h1
                    className="whitespace-nowrap text-center text-[clamp(2.2rem,12vw,9rem)] font-black leading-none tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    <span
                        className="text-transparent"
                        style={{
                            WebkitTextStroke: "2px #252525",
                        }}
                    >
                        FAHIYAN
                    </span>{" "}
                    <span className="text-[#252525]">
                        SHAH
                    </span>
                </h1>
            </div>

            {/* Portrait */}
            <div className="relative z-0 -mt-4 flex justify-center">
                <Image
                    className="h-auto w-full max-w-175 object-cover"
                    src="/Fahiyan.png"
                    width={700}
                    height={700}
                    alt="Fahiyan"
                    priority
                />
            </div>
        </header>
    );
};

export default Header;