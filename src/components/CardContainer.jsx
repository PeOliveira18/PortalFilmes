import { useRef } from "react";
import left from "../images/left.svg";
import right from "../images/right.svg";

export default function CardContainer({ titulo, children }) {
    const carrosel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault();
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carrosel.current.scrollLeft += carrosel.current.offsetWidth;
    };

    return (
            <div className="max-w-full w-auto px-5 relative">
                <h1 className="mt-10">{titulo}</h1>
                <div className="flex scrollbar-hide overflow-hidden" ref={carrosel}>
                    {children}
                </div>
                <button onClick={handleRightClick} className="botoes-carrosel right-0"><img src={right} alt="Right" /></button>
                <button onClick={handleLeftClick} className="botoes-carrosel left-0"><img src={left} alt="Left"/></button>
            </div>
    )
}