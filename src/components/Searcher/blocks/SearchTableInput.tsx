import { forwardRef } from 'react';
import type { ChangeEvent } from 'react';

interface ISearchTableInput {
    className?: string;
    label?: string;
    id?: string;
    type?: string;
    value?: string;
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
    isDisable: boolean
}

export const SearchTableInput = forwardRef<HTMLInputElement, ISearchTableInput>((props, ref) => {
    const {
        className = '',
        label = 'поиск',
        id = '',
        type = 'search',
        value = '',
        onInput,
        isDisable
    } = props;

    return (
        <div className={`search ${className}`}>
            <label
                className="search__label"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="search__input"
                id={id}
                placeholder={label}
                autoComplete="off"
                type={type}
                value={value}
                onChange={onInput}
                ref={ref}
                disabled={isDisable}
            />
        </div>
    );
});

export default SearchTableInput;