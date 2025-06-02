import {forwardRef, memo} from "react";
import {RouletteCardProps} from "@/types/roulette.type";
import Image from "next/image";
import clsx from "clsx";
import styles from "./Roulette.module.css";

const RouletteCard = forwardRef<HTMLDivElement, { card: RouletteCardProps; isActive?: boolean }>(
    ({card, isActive}, ref) => {
        return (
            <div
                ref={ref}
                className={clsx(
                    "w-[80px] h-[84px] border-b-2 border-b-[rgba(255,255,255,0.28)] shrink-0 flex items-center justify-center rounded-md bg-[#D04242] nth-[even]:bg-[#434851] relative",
                    styles.card,
                    isActive && styles.active
                )}
                style={{backgroundColor: card.bgColor ?? undefined}}
            >
                <div className="relative h-4/5 w-4/5">
                    <Image src={card.icon} alt="icon" fill/>
                </div>
            </div>
        );
    }
);
RouletteCard.displayName = 'RouletteCard';
export default memo(RouletteCard);
