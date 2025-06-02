import React, {useState} from 'react';
import Image from "next/image";

const RouletteRecentRolls = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleResizeScreen = () => {
        setIsFullScreen(!isFullScreen);
    }

    return (
        <div>
            <div className="font-bai text-sm font-bold mb-2.5 text-[#848B8D]">Recent Rolls</div>
            <div className="flex gap-2 items-center">

                <div className="flex items-center gap-1.5">
                    {Array.from({length: 8}, (_, index) => (
                        <div
                            className="h-[30px] w-[28px] bg-[#D04242] flex items-center justify-center rounded-[5px] border-b-2 border-b-[rgb(255,255,255,0.28)]"
                            key={index}>
                            <div className="w-3/5 h-3/5 relative">
                                <Image src="images/games/roulette/icons/roulette-item-1.svg" alt="icon" fill/>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="w-[36px] h-[36px] shrink-0 opacity-90 cursor-pointer flex items-center justify-center relative duration-200 transition hover:opacity-70"
                    onClick={handleResizeScreen}
                >
                    <Image
                        src={isFullScreen ? "images/icons/full-screen.svg" : "images/icons/min-screen.svg"}
                        alt="resize" width={24} height={24}
                    />
                </button>
            </div>
        </div>
    );
};

export default RouletteRecentRolls;