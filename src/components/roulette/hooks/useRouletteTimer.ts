import { useEffect, useState } from 'react';
import { AUTO_SPIN_INTERVAL } from '@/constants/rouletteGame';

interface RouletteTimerProps {
    isLoading: boolean;
    startSpin: () => void;
}

export const useRouletteTimer = ({ isLoading, startSpin }: RouletteTimerProps) => {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        let animationFrameId: number;
        let startTime = performance.now();

        const updateProgress = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const remaining = Math.max(0, AUTO_SPIN_INTERVAL - elapsed);
            const percent = (remaining / AUTO_SPIN_INTERVAL) * 100;
            setProgress(percent);

            if (remaining > 0 && !isLoading) {
                animationFrameId = requestAnimationFrame(updateProgress);
            } else if (!isLoading) {
                setProgress(0);
                startSpin();
                startTime = performance.now();
                animationFrameId = requestAnimationFrame(updateProgress);
            }
        };

        animationFrameId = requestAnimationFrame(updateProgress);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isLoading, startSpin]);

    return { progress };
};