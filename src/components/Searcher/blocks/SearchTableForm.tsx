import { SearchTableInput } from "./SearchTableInput"
import type { ChangeEvent } from 'react';

interface IPropsSearchTableForm {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    isDisable: boolean
}

const SearchTableForm = ({ searchQuery, setSearchQuery, isDisable }: IPropsSearchTableForm) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

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
                value={searchQuery}
                onInput={handleInputChange}
                isDisable={isDisable}
            />
        </form>
    );
}

export default SearchTableForm;