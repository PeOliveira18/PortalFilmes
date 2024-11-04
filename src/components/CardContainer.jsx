import left from "../images/left.svg"
import right from "../images/right.svg"

export default function CardContainer({ titulo, children }) {
    return (
        <div className="max-w-full px-5 mt-5">
            <h1>{titulo}</h1>
            <div className="flex">
                {children}
            </div>
        </div>
    )
}