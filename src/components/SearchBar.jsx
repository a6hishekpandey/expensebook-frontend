import searchIcon from "../assets/search.png";
import { useDispatch } from "react-redux";
import { search as sliceSearch } from "../store/toolsSlice.js";

function SearchBar() {
    const dispatch = useDispatch();

    const debounce = (cb, delay) => {
        let timer;

        return function (...args) {
            if (timer) clearTimeout(timer);

            timer = setTimeout(() => {
                cb(...args);
            }, delay);
        };
    };

    const handleChange = debounce((e) => {
        dispatch(sliceSearch({ search: e.target.value }));
    }, 600);

    return (
        <div className="flex items-center bg-[#1f213a] mr-2 h-[3.125rem] rounded-lg flex-grow">
            <input
                type="text"
                className="h-full w-full outline-none p-4 text-white bg-transparent text-sm flex-grow"
                placeholder="Search"
                style={{ borderRight: "1px solid #4c4e6a" }}
                onChange={handleChange}
            />
            <img
                className="h-6 mx-3 hover:cursor-pointer"
                src={searchIcon}
                alt="search"
            />
        </div>
    );
}

export default SearchBar;
