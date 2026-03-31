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

                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwe
                    fwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwef
                    wefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='sdfefwefwfweffwefefwefwefwfwefwefwe'/>
                    <SearchTableBody data='sdfefwefwfweffwefefwefwefwfwefwefwe'/>
                </tr>
                <tr className="table-search__body table-row">
                    <SearchTableBody data='sdfefwefwfweffwefefwefwefwfwefwefwe'/>

                    <SearchTableBody data='sdfefwefwfweffwefefwefw
                    efwfwefwefwe'/>
                    <SearchTableBody data='sdfefwefwfweffwefefwefwefwfwefwefwe'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefw
                    efwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfw
                    efwefwefwefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                </tr>
                <tr className="table-search__body table-row">
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefw
                    efefwefwfwfwefwefwefwefefwfwefwef'/>

                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefw
                    efwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwef
                    wefwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefw
                    efefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwef
                    wefefwefwfwfwefwefwefwefefwfwefwef'/>
                </tr>
                <tr className="table-search__body table-row">
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwe
                    fefwefwfwfwefwefwefwefefwfwefwef'/>

                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefw
                    efwefefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='efwefwefwefwefwefwefwfwefwefwefwefwe
                    fefwefwfwfwefwefwefwefefwfwefwef'/>
                    <SearchTableBody data='dqwd'/>
                    <SearchTableBody data='dqwd'/>
                </tr>
            </tbody>
        </table>
    );
}

export default SearchTable;