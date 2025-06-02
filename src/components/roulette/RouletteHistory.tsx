import React from 'react';
import RouletteHistoryItem from "@/components/roulette/RouletteHistoryItem";
import {rouletteUsersList} from "@/assets/data/roulette";

const RouletteHistory = () => {
    return (
        <div className="flex gap-2 flex-col md:flex-row">
            <RouletteHistoryItem
                headRate={2}
                headBgColor="#D04242"
                bodyIcon={'images/games/roulette/icons/roulette-item-2-gold.svg'}
                name={'Red'}
                bodyTotal={27.82}
                bodyData={rouletteUsersList}


            />
            <RouletteHistoryItem
                headRate={14}
                name="Green"
                headBgColor="#4EA34D"
                bodyIcon="images/games/roulette/icons/roulette-item-2-gold.svg"
                bodyData={rouletteUsersList}
                bodyTotal={27.82}
            />
            <RouletteHistoryItem
                headRate={2}
                name="Black"
                headBgColor="#434851"
                bodyIcon="images/games/roulette/icons/roulette-item-2-gold.svg"
                bodyData={rouletteUsersList}
                bodyTotal={27.82}
            />
            <RouletteHistoryItem
                headRate={2}
                name="Bait"
                headBgColor="#7C7373"
                bodyIcon="images/games/roulette/icons/roulette-item-2-gold.svg"
                bodyData={rouletteUsersList}
                bodyTotal={27.82}
            />
        </div>
    );
};

export default RouletteHistory;