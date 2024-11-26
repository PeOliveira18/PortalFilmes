import { useState } from "react"

function Pagination({setPages, pages}) {
    const [selected, setSelected] = useState(pages)
    
    const handleClickPage = (page) => {
        setSelected(page)
        setPages(page)
    }

    const handleClickPrevious = () => {
        if(pages> 1){
            const newPage = pages-1
            setPages(newPage)
            setSelected(newPage)
        }
    }

    const handleClickNext = () => {
        const newPage = pages + 1
        setPages(newPage)
        setSelected(newPage)
    }



    return (
        <nav aria-label="Page navigation example" className="my-10">
            <ul class="flex items-center -space-x-px h-10 text-base">
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleClickPrevious}>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className={`btn-categorias ${selected === 1 ? 'btn-ativo' : ''}`} onClick={() => handleClickPage(1)}>1</a>
                </li>
                <li>
                    <a href="#" className={`btn-categorias ${selected === 2 ? 'btn-ativo' : ''}`} onClick={() => handleClickPage(2)}>2</a>
                </li>
                <li>
                    <a href="#" className={`btn-categorias ${selected === 3 ? 'btn-ativo' : ''}`} onClick={() => handleClickPage(3)}>3</a>
                </li>
                <li>
                    <a href="#" className={`btn-categorias ${selected === 4 ? 'btn-ativo' : ''}`} onClick={() => handleClickPage(4)}>4</a>
                </li>
                <li>
                    <a href="#" className={`btn-categorias ${selected === 5 ? 'btn-ativo' : ''}`} onClick={() => handleClickPage(5)}>5</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleClickNext}>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>

    );
}

export default Pagination;