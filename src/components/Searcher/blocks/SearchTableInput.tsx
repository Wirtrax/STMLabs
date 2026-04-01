interface ISearchTableInput {
    className?: string;
    label?: string;
    id?: string;
    type?: string;
    value?: string;
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchTableInput = (props: ISearchTableInput) => {
    const {
        className = '',
        label = 'поиск',
        id = '',
        type = 'search',
        // value = '',
        // onInput,
    } = props;

    return (
        <div className={`search ${className}`}>
            <label
                className="search__label"
            htmlFor={id}
            >
                поиск
            </label>
            <input
                className="search__input"
            id={id}
            placeholder={label}
            autoComplete="off"
            type={type}
            // value={value}
            // onInput={onInput}
            // ref={ref}
            />
        </div>
    )
}

export default SearchTableInput;