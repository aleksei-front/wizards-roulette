import React from 'react';
import Image from "next/image";
import styles from "./Roulette.module.css"
import clsx from "clsx";

const RouletteInfo = () => {
    return (
        <div
            className={clsx("relative cursor-pointer order-1 lg:order-none duration-200 transition hover:opacity-80 flex flex-col gap-4 items-center p-4 pt-2", styles.info)}>
            <div className="flex items-center gap-2.5 ">
                <div
                    className="w-8 h-8 border-b-2 border-b-[rgb(255,255,255,0.28)] flex items-center justify-center bg-[#434851] opacity-50 p-0.5 rounded-lg">
                    <div className="relative w-full h-4/5">
                        <Image src="images/games/roulette/icons/roulette-item-4.svg" fill alt="icon"/>
                    </div>
                </div>
                <div
                    className="w-8 h-8 border-b-2 border-b-[rgb(255,255,255,0.28)] flex items-center justify-center bg-[#434851] opacity-50 p-0.5 rounded-lg">
                    <div className="relative w-full h-4/5">
                        <Image src="images/games/roulette/icons/roulette-item-4.svg" fill alt="icon"/>
                    </div>
                </div>
                <div
                    className="w-8 h-8 border-b-2 border-b-[rgb(255,255,255,0.28)] flex items-center justify-center bg-[#434851] opacity-50 p-0.5 rounded-lg">
                    <div className="relative w-full h-4/5">
                        <Image src="images/games/roulette/icons/roulette-item-4.svg" fill alt="icon"/>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2">
                <div className="relative w-5 h-5 shrink-0">
                    <Image src="images/icons/crystal.svg" alt="total" fill/>
                </div>
                <div className={clsx("text-[27px] font-bold font-bai text-transparent", styles.gradientText)}>2,070.75
                </div>
                <div className="w-4 h-4 text-[rgb(132, 139, 141] opacity-50">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            fill="currentColor"
                            d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default RouletteInfo;