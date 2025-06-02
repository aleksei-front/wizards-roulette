import {RefObject, useEffect} from 'react';

interface RouletteDimensions {
    containerRef: RefObject<HTMLDivElement | null>;
    wrapperRef: RefObject<HTMLDivElement | null>;
    cardRef: RefObject<HTMLDivElement | null>;
}

export const useRouletteDimensions = ({containerRef, wrapperRef, cardRef}: RouletteDimensions) => {
    useEffect(() => {
        const updateDimensions = () => {
            if (!wrapperRef.current || !containerRef.current || !cardRef.current) {
                return;
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [containerRef, wrapperRef, cardRef]);
};