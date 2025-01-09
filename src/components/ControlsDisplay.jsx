import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

export default function Controls({ dataLength, itemsPerPage, currentPage, setCurrentPage, setItemsPerPage }) {
    const totalPages = Math.ceil(dataLength / itemsPerPage);

    
    const handleSelect = (event) => {
        setItemsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(1);  
    };


    const handleClickStart = () => setCurrentPage(1);
    const handleClickNext = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
    const handleClickPrev = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };
    const handleClickEnd = () => setCurrentPage(totalPages);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <div className="controls">
            <p>Page: {currentPage}</p>
            <p>Items per page: </p>
            <select id="items" onChange={handleSelect} value={itemsPerPage}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
            <FontAwesomeIcon
                className={`back-to-start btn btn-arrow ${isFirstPage ? 'disabled' : ''}`}
                icon={faAngleDoubleLeft}
                onClick={!isFirstPage ? handleClickStart : null}
            />
            <FontAwesomeIcon
                className={`back btn btn-arrow ${isFirstPage ? 'disabled' : ''}`}
                icon={faAngleLeft}
                onClick={!isFirstPage ? handleClickPrev : null}
            />
            <FontAwesomeIcon
                className={`next btn btn-arrow ${isLastPage ? 'disabled' : ''}`}
                icon={faAngleRight}
                onClick={!isLastPage ? handleClickNext : null}
            />
            <FontAwesomeIcon
                className={`next-to-end btn btn-arrow ${isLastPage ? 'disabled' : ''}`}
                icon={faAngleDoubleRight}
                onClick={!isLastPage ? handleClickEnd : null}
            />
        </div>
    );
}