interface ISearchTableBody {
    data: string | number;
}

const SearchTableBody = ({ data }: ISearchTableBody) => {
    return (
        <td className="table-search__field">{data}</td>
    );
}

export default SearchTableBody;