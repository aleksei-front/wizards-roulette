import {RefObject, useCallback, useEffect, useState} from 'react';
import {rouletteData} from '@/assets/data/roulette';
import {ACTIVE_CLASS_DURATION, MIN_LOOPS, SPIN_DURATION} from '@/constants/rouletteGame';
import {getRandomIndex} from "@/utils/randomIndex";


interface RouletteSpinProps {
    containerRef: RefObject<HTMLDivElement | null>;
    wrapperRef: RefObject<HTMLDivElement | null>;
    cardRef: RefObject<HTMLDivElement | null>;
}

export const useRouletteSpin = ({containerRef, wrapperRef, cardRef}: RouletteSpinProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [winner, setWinner] = useState<number | null>(9);
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);


    const initializeSpin = useCallback(() => {
        if (!containerRef.current || !wrapperRef.current || !cardRef.current) {
            return;
        }

        const targetWinCounter = 9;
        const initialIndex = rouletteData.findIndex((card) => card.winCounter === targetWinCounter);

        if (initialIndex === -1) {
            console.warn(`No card found with winCounter = ${targetWinCounter}`);
            startSpin();
            return;
        }

        const cardWidth = cardRef.current.getBoundingClientRect().width;
        const gapValue = parseFloat(getComputedStyle(containerRef.current).gap) || 8;
        const totalItems = rouletteData.length;
        const targetIndex = MIN_LOOPS * totalItems + initialIndex;
        const wrapperWidth = wrapperRef.current.clientWidth;
        const centerOffset = wrapperWidth / 2 - cardWidth / 2;
        const totalItemWidth = cardWidth + gapValue;
        const scrollTo = targetIndex * totalItemWidth - centerOffset;

        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = `translateX(-${scrollTo}px)`;

        setWinner(targetWinCounter);
        setActiveCardIndex(targetIndex);

        const timeout = setTimeout(() => {
            setActiveCardIndex(null);
        }, ACTIVE_CLASS_DURATION);

        return () => clearTimeout(timeout);
    }, [containerRef, wrapperRef, cardRef]);


    useEffect(() => {
        initializeSpin();
    }, [initializeSpin]);

    const startSpin = useCallback(async () => {
        if (isLoading || !containerRef.current || !wrapperRef.current || !cardRef.current) {
            return;
        }

        setIsLoading(true);
        setWinner(null);
        setActiveCardIndex(null);

        let randomIndex: number;
        try {
            const response = await fetch('/api/roulette', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
            });

            if (!response.ok) throw new Error('Ошибка запроса к бэкенду');

            const data = await response.json();
            const winIndex = data.winIndex;

            if (typeof winIndex === 'number' && winIndex >= 0 && winIndex < rouletteData.length) {
                randomIndex = winIndex;
            } else {
                console.warn('Invalid winIndex from backend, using random:', winIndex);
                randomIndex = getRandomIndex(rouletteData.length);
            }
        } catch (err) {
            console.log('Fetch error:', err);
            randomIndex = getRandomIndex(rouletteData.length);
        }

        const cardWidth = cardRef.current.getBoundingClientRect().width;
        const gapValue = parseFloat(getComputedStyle(containerRef.current).gap) || 8;
        const totalItems = rouletteData.length;
        const targetIndex = MIN_LOOPS * totalItems + randomIndex;
        const wrapperWidth = wrapperRef.current.clientWidth;
        const centerOffset = wrapperWidth / 2 - cardWidth / 2;
        const totalItemWidth = cardWidth + gapValue;
        const scrollTo = targetIndex * totalItemWidth - centerOffset;

        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = 'translateX(0)';

        setTimeout(() => {
            if (containerRef.current) {
                containerRef.current.style.transition = `transform ${SPIN_DURATION}ms cubic-bezier(0.25, 1, 0.5, 1)`;
                containerRef.current.style.transform = `translateX(-${scrollTo}px)`;
            }
        }, 10);

        setTimeout(() => {
            setActiveCardIndex(targetIndex);
            setIsLoading(false);
            setWinner(rouletteData[randomIndex].winCounter);

            setTimeout(() => {
                setActiveCardIndex(null);
            }, ACTIVE_CLASS_DURATION);
        }, SPIN_DURATION);
    }, [isLoading, containerRef, wrapperRef, cardRef]);

    return {isLoading, winner, activeCardIndex, initializeSpin, startSpin};
};