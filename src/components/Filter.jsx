import { useDispatch } from "react-redux"
import { sortOpt, statusOpt, typeOpt } from "../helpers/constants"
import { filterBySearch, filterByStatus, filterByType, sortJobs, clearFilters } from "../redux/jobSlice";
import { useRef } from "react";

const Filter = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const typeRef = useRef();
    const statusRef = useRef();
    const sortRef = useRef();

    const handleReset = () => {
        dispatch(clearFilters());

        // inputları temizle
        inputRef.current.value = '';

        typeRef.current.value = 'Seçiniz';

        statusRef.current.value = 'Seçiniz';

        sortRef.current.value = 'Seçiniz';
    }

    return (
        <div className="filter-sec">
            <h2>Filtrele</h2>
            <form >

                <div>
                    <label>Arama: </label>
                    <input
                        ref={inputRef}
                        onChange={(e) => dispatch(filterBySearch(e.target.value))}
                        placeholder="örn. Amazon"
                        type="text" />
                </div>


                <div>
                    <label>Durum: </label>
                    <select
                        ref={statusRef}
                        onChange={(e) => dispatch(filterByStatus(e.target.value))}
                        name="status">
                        <option selected disabled>Seçiniz</option>
                        {statusOpt.map((opt, i) => (
                            <option key={i}>{opt}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Tür: </label>
                    <select
                        ref={typeRef}
                        onChange={(e) => dispatch(filterByType(e.target.value))} required >
                        <option selected disabled>Seçiniz</option>
                        {typeOpt.map((opt, i) => (
                            <option key={i}>{opt}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Sırala: </label>
                    <select
                        ref={sortRef}
                        onChange={(e) => dispatch(sortJobs(e.target.value))}
                        name="type" >
                        <option selected disabled>Seçiniz</option>
                        {sortOpt.map((opt, i) => (
                            <option key={i}>{opt}</option>
                        ))}
                    </select>
                </div>

                <div className="button-area">
                    <button onClick={handleReset} type="button" >Filtreleri Temizle</button>
                </div>
            </form>
        </div>
    )
}

export default Filter
