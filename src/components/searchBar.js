

const Search = () => {
    return(
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Weather</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search by city"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    )
}

export default Search;