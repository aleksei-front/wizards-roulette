import Image from "next/image";
import {FC} from "react";
import {RouletteHistoryUserProps} from "@/types/roulette.type";

const RouletteHistoryUser: FC<RouletteHistoryUserProps> = ({avatar, total, name}) => {
    return (
        <div className="p-2 pr-3 flex items-center gap-2 font-bai text-sm font-semibold">
            <div><Image src={avatar} alt={name} width={28} height={28}/></div>
            <div>{name}</div>
            <div className="ml-auto inline-flex items-center gap-1.5">
                <Image
                    src="/images/icons/crystal.svg"
                    alt="total"
                    width={16}
                    height={16}
                    className="rounded-sm"
                />
                <span>{total}</span>
            </div>
        </div>
    );
};

export default RouletteHistoryUser;