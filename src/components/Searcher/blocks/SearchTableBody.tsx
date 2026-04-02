interface ISearchTableBody {
    data: string | number;
    type?: string
}

const SearchTableBody = ({ data, type }: ISearchTableBody) => {
    return (
        <td className="table-search__field">{type !== 'image' ? data : <img src={`${data}`} alt="avatar" />}</td>
    );
}

export default SearchTableBody;