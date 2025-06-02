import {FC} from 'react';

type Props = {
    progress: number;
};

const RouletteTimeLine: FC<Props> = ({progress}) => {
    return (
        <div className="absolute bottom-0 w-full left-0 h-0.5 bg-[#1F2225] rounded-full overflow-hidden">
            <div
                className="bg-[#FFA510] h-full transition-all duration-[100ms] ease-linear"
                style={{width: `${progress}%`}}
            />
        </div>
    );
};

export default RouletteTimeLine;