import SearchTableForm from "./blocks/SearchTableForm";
import SearchTable from "./SearchTable";


const Searcher = () => {
    return (
        <section className="main-search">
            <SearchTableForm />
            <div className="main-table">
                <SearchTable />
            </div>
        </section>
    );
}

export default Searcher;