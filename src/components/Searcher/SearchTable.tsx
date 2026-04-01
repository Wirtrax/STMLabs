import SearchTableBody from "./blocks/SearchTableBody";

const SearchTable = () => {
    return (
        <table className="table-search">
            <thead>
                <tr className="table-search__titles table-row">
                    <th scope="col" className="table-search__title">Person</th>
                    <th scope="col" className="table-search__title">Person</th>
                    <th scope="col" className="table-search__title">Person</th>
                    <th scope="col" className="table-search__title">Person</th>
                    <th scope="col" className="table-search__title">Person</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-search__body table-row">
                    <SearchTableBody data='dqwd'/>

                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='sdfefwefwfweffwefefwefwefwfwefwefwe'/>
                    <SearchTableBody data='sdfefwefwfweffwefefwefwefwfwefwefwe'/>
                </tr>
                <tr className="table-search__body table-row">
                    <SearchTableBody data='sdfefwefwfweffwefefwefwefwfwefwefwe'/>

                    <SearchTableBody data='sdfefwefwfweffwefefwefwefwfwefwefwe'/>
                    <SearchTableBody data='sdfefwefwfweffwefefwefwefwfwefwefwe'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                </tr>
                <tr className="table-search__body table-row">
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>

                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                </tr>
                <tr className="table-search__body table-row">
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>

                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='dqwd'/>
                    <SearchTableBody data='dqwd'/>
                </tr>
            </tbody>
        </table>
    );
}

export default SearchTable;