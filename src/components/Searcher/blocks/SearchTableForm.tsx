import { SearchTableInput } from "./SearchTableInput"


const SearchTableForm = () => {

    return (
        <form className="search__form"
            onSubmit={(event) => {
                event.preventDefault()
            }}
        >
            <SearchTableInput
                className="search__field"
                label="Seacrh person"
                id="new-task"
                type="search"
                // value={'searchQuery'}
                // onInput={(event) => setSearchQuery(event.target.value)}
            />
        </form>
    );
}

export default SearchTableForm;