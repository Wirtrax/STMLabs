import React, { memo } from "react";
import type { ITransformedUser } from "../../../services/api";
import SearchTableBody from "./blocks/SearchTableBody";
import SearchTableHead from "./blocks/SearchTableHead";
import Loader from "../Loader";

interface ISearchTableProps {
    users: ITransformedUser[];
    isLoading: boolean;
}

const SearchTable: React.FC<ISearchTableProps> = ({ users = [], isLoading }) => {
    const tableHeaders = [
        { title: "Фото", },
        { title: "Имя", },
        { title: "Локация", },
        { title: "Email", },
        { title: "Телефон", },
        { title: "Дата регистрации", }
    ];

    return (
        <>
            <table className="table-search">
                <thead>
                    <tr className="table-search__titles table-row">
                        {tableHeaders.map(
                            (header, index) => (
                                <SearchTableHead key={index} title={header.title} />
                            )
                        )}
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr className="table-search__loader-row">
                            <td colSpan={tableHeaders.length} className="table-search__loader-cell">
                                <Loader />
                                <p className="loader-text">Загрузка данных...</p>
                            </td>
                        </tr>
                    ) : users.length > 0 ? (
                        users.map((user, index) => (
                            <tr className="table-search__body table-row" key={index}>
                                <SearchTableBody data={[user.picture, user.mediumPicture]} type="image" />
                                <SearchTableBody data={user.name} />
                                <SearchTableBody data={user.location} />
                                <SearchTableBody data={user.email} />
                                <SearchTableBody data={user.phone} />
                                <SearchTableBody data={user.registeredDate} />
                            </tr>
                        ))
                    ) : (
                        <tr className="table-search__body">
                            <td colSpan={tableHeaders.length} className="table-search__not-found">
                                Совпадений не найдено
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </>
    )
}

export default memo(SearchTable)