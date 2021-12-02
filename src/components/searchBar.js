

const Search = ({ value, handleInputChange, handleFormSubmit }) => {
    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search Weather</span>
            </label>
            <input
                type="text"
                id="header-search"
                value={value}
                placeholder="Search by city"
                onChange={handleInputChange}
            />
            <button 
                type="submit"
                onClick={handleFormSubmit}
            >
                    Search
            </button>
        </form>
    )
}

export default Search;