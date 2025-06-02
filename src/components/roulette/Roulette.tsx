'use client';

import {useRef} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import RouletteCard from '@/components/roulette/RouletteCard';
import {rouletteData} from '@/assets/data/roulette';
import Container from '@/components/container/Container';
import RouletteTimeLine from '@/components/roulette/RouletteTimeLine';
import RouletteRecentRolls from '@/components/roulette/RouletteRecentRolls';
import RouletteLastRolls from '@/components/roulette/RouletteLastRolls';
import RouletteInfo from '@/components/roulette/RouletteInfo';
import RouletteHistory from '@/components/roulette/RouletteHistory';
import {MIN_LOOPS} from '@/constants/rouletteGame';

import styles from './Roulette.module.css';
import {useRouletteTimer} from "@/components/roulette/hooks/useRouletteTimer";
import {useRouletteDimensions} from "@/components/roulette/hooks/useRouletteDimensions";
import {useRouletteSpin} from "@/components/roulette/hooks/useRouletteSpin";

export const Roulette = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useRouletteDimensions({containerRef, wrapperRef, cardRef});

    const {isLoading, activeCardIndex, startSpin} = useRouletteSpin({
        containerRef,
        wrapperRef,
        cardRef,
    });

    const {progress} = useRouletteTimer({isLoading, startSpin});


    const repeatCount = Math.max(MIN_LOOPS * 2, MIN_LOOPS);
    const repeatedItems = Array.from({length: repeatCount}, () => rouletteData).flat();

    return (
        <Container>
            <div className="mb-10">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <RouletteRecentRolls/>
                    <RouletteInfo/>
                    <RouletteLastRolls/>
                </div>
                <div className="relative">
          <span className="absolute left-1/2 bottom-full -translate-x-1/2 w-3 h-3 z-10 pointer-events-none">
            <Image src="/images/games/roulette/icons/arrow.svg" alt="arrow" fill/>
          </span>
                    <div ref={wrapperRef} className={clsx('overflow-hidden py-2 relative', styles.items)}>
                        <div ref={containerRef} className="flex items-center gap-2"
                             style={{transform: 'translateX(0)'}}>
                            {repeatedItems.map((card, idx) => (
                                <RouletteCard
                                    key={idx}
                                    card={card}
                                    ref={idx === 0 ? cardRef : undefined}
                                    isActive={idx === activeCardIndex}
                                />
                            ))}
                        </div>
                        <RouletteTimeLine progress={progress}/>
                    </div>
                </div>
            </div>
            <RouletteHistory/>
        </Container>
    );
};