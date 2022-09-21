import { useState } from 'react';

import { useIsomorphicLayoutEffect, useEventListener } from './usehooks'

interface WindowSize {
    width: number;
    height: number;
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    });

    const handleSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEventListener('resize', handleSize);

    useIsomorphicLayoutEffect(() => {
        handleSize();
    }, []);

    return windowSize;
}

export { useWindowSize };