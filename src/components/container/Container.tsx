import {FC, type PropsWithChildren} from "react";
import clsx from "clsx";

type ContainerProps = {
    containerSize?: number
}
const Container: FC<PropsWithChildren<ContainerProps>> = ({containerSize, children}) => {
    return (
        <div className={clsx("mx-auto px-4 w-full", containerSize ? `max-w-[${containerSize}px]` : "max-w-[1470px]")}>
            {children}
        </div>
    );
};

export default Container;