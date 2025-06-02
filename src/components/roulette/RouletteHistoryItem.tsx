import {FC} from 'react';
import {RouletteHistoryItemProps} from "@/types/roulette.type";

import Image from "next/image";
import RouletteHistoryUser from "@/components/roulette/RouletteHistoryUser";

const RouletteHistoryItem: FC<RouletteHistoryItemProps> = ({
                                                               bodyTotal,
                                                               bodyIcon,
                                                               name,
                                                               bodyData,
                                                               headBgColor,
                                                               headRate
                                                           }) => {
    return (
        <div className="flex-1">
            <div className="h-[64px]  flex items-center justify-center rounded-sm mb-5"
                 style={{backgroundColor: headBgColor}}>
                <div className="font-semi-bold font-bai flex items-center gap-2.5 px-5 font-semibold">
                    <span className="text-2xl rounded-sm">X{headRate}</span>
                    {name}
                </div>
            </div>
            <div className="flex flex-col gap-2.5">
                <div className="text-sm text-[#848B8D] flex items-center justify-between px-2 font-semibold font-bai">
                    <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 shrink-0 relative">
                            <Image src={bodyIcon} alt={name} fill/>
                        </div>
                        <span>{name}</span>
                    </div>
                    <div>{bodyTotal}</div>
                </div>
                <div>
                    {bodyData.map((item, index) => (
                        <RouletteHistoryUser
                            key={index}
                            name={item.name}
                            avatar={item.avatar}
                            total={item.total}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RouletteHistoryItem;