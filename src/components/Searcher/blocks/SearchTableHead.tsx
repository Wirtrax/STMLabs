interface ISearchTableHead {
    title: string
}

const SearchTableHead = ({ title }: ISearchTableHead) => {
    return (
        <th scope="col" className="table-search__title">{title}</th>
    );
}

export default SearchTableHead;