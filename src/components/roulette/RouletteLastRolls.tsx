import React from "react";
import Image from "next/image";

const RouletteLastRolls = () => {
    return (
        <div className="font-bai">
            <div className=" text-sm font-bold mb-2.5 text-[#848B8D] text-end">Last 100 Rolls</div>
            <div className="flex items-center justify-end gap-2.5">
                <div
                    className="flex items-center min-w-[72px] gap-2 border border-[#2C3034] bg-[#1F2225] py-1 px-2 rounded-sm">
                    <div
                        className="h-[25px] w-[24px] bg-[#D04242] flex items-center justify-center rounded-[5px] border-b border-b-[rgb(255,255,255,0.28)]"
                    >
                        <div className="w-full p-0.5 h-4/5 relative">
                            <Image src="images/games/roulette/icons/roulette-item-2.svg" alt="icon" fill/>
                        </div>
                    </div>
                    <span className="text-white/90 font-medium">58</span>
                </div>
                <div
                    className="flex items-center min-w-[72px] gap-2 border border-[#2C3034] bg-[#1F2225] py-1 px-2 rounded-sm">
                    <div
                        className="h-[25px] w-[24px] bg-[#4EA34D] flex items-center justify-center rounded-[5px] border-b border-b-[rgb(255,255,255,0.28)]"
                    >
                        <div className="w-full p-0.5 h-4/5 relative">
                            <Image src="images/games/roulette/icons/roulette-item-4.svg" alt="icon" fill/>
                        </div>
                    </div>
                    <span className="text-white/90 font-medium">5</span>
                </div>
                <div
                    className="flex items-center min-w-[72px] gap-2 border border-[#2C3034] bg-[#1F2225] py-1 px-2 rounded-sm">
                    <div
                        className="h-[25px] w-[24px] bg-[#434851] flex items-center justify-center rounded-[5px] border-b border-b-[rgb(255,255,255,0.28)]"
                    >
                        <div className="w-full p-0.5 h-4/5 relative">
                            <Image src="images/games/roulette/icons/roulette-item-3.svg" alt="icon" fill/>
                        </div>
                    </div>
                    <span className="text-white/90 font-medium">31</span>
                </div>
                <div
                    className="flex items-center min-w-[72px] gap-2 border border-[#2C3034] bg-[#1F2225] py-1 px-2 rounded-sm">
                    <div
                        className="h-[25px] w-[24px] bg-[#A19999] flex items-center justify-center rounded-[5px] border-b border-b-[rgb(255,255,255,0.28)]"
                    >
                        <div className="w-full p-0.5 h-4/5 relative">
                            <Image src="images/games/roulette/icons/roulette-item-1.svg" alt="icon" fill/>
                        </div>
                    </div>
                    <span className="text-white/90 font-medium">6</span>
                </div>
            </div>
        </div>
    );
};

export default RouletteLastRolls;