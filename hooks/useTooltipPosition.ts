import { useRef, useState, useCallback } from "react";
import useDebounce from "./useDebounce";

interface ITooltipPosition {
    x: number,
    y: number,
    position: 'top' | 'bottom' | 'left' | 'right';
}

interface IUseTooltipPosition {
    offset?: number;
    tooltipWidth?: number;
    tooltipHeight?: number;
    preferPosition?: 'top' | 'bottom' | 'left' | 'right';
    debounceDelay?: number;
}

export const useTooltipPosition = (options: IUseTooltipPosition = {}) => {
    const {
        offset = 5,
        tooltipWidth: defaultTooltipWidth = 300,
        tooltipHeight: defaultTooltipHeight = 300,
        preferPosition = "bottom",
        debounceDelay = 150
    } = options

    const [showTooltipe, setShowToolTipe] = useState<boolean>(false);
    const [tooltipePosition, setTooltipePosition] = useState<ITooltipPosition>({ x: 0, y: 0, position: "right" })
    const toolTipeRef = useRef<HTMLDivElement>(null);
    const lastMousePositionRef = useRef<{ x: number; y: number } | null>(null);

    const calculatePosition = (mouseX: number, mouseY: number) => {
        let currentWidth = defaultTooltipWidth;
        let currentHeight = defaultTooltipHeight;
        let currentPosition = preferPosition;

        if (toolTipeRef.current) {
            const tooltipRect = toolTipeRef.current.getBoundingClientRect();
            currentWidth = tooltipRect.width;
            currentHeight = tooltipRect.height;
        }

        let x = mouseX + offset;
        let y = mouseY + offset;

        if (x + currentWidth > window.innerWidth) {
            x = mouseX - currentWidth - offset;
            currentPosition = 'left';
        }

        if (x < 0) {
            x = offset;
            currentPosition = 'right';
        }

        if (y + currentHeight > window.innerHeight) {
            y = mouseY - currentHeight - offset;
            currentPosition = 'top';
        }

        if (y < 0) {
            y = offset;
            currentPosition = 'bottom';
        }

        return { x, y, position: currentPosition }
    };

    const updatePosition = useCallback((x: number, y: number) => {
        const newPosition = calculatePosition(x, y);
        setTooltipePosition(newPosition);
    }, [calculatePosition]);

    const debouncedUpdatePosition = useDebounce(updatePosition, debounceDelay);

    const handlerMousOn = () => {
        setShowToolTipe(true);
        if (lastMousePositionRef.current) {
            updatePosition(lastMousePositionRef.current.x, lastMousePositionRef.current.y);
        }
    }

    const handlerMousOut = () => {
        setShowToolTipe(false);
        lastMousePositionRef.current = null;
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        lastMousePositionRef.current = { x: clientX, y: clientY };
        debouncedUpdatePosition(clientX, clientY);
    }

    return {
        showTooltipe,
        tooltipePosition,
        toolTipeRef,
        handlers: {
            onMouseEnter: handlerMousOn,
            onMouseLeave: handlerMousOut,
            onMouseMove: handleMouseMove,
        }
    }
}