import React, { memo } from 'react';
import type { ITransformedUser } from '../../../services/api';
import SearchTableBody from "./blocks/SearchTableBody";
import SearchTableHead from "./blocks/SearchTableHead";

interface ISearchTableProps {
    users: ITransformedUser[];
    isLoading: boolean;
}

const SearchTable: React.FC<ISearchTableProps> = ({ users = [], isLoading }) => {
    console.log("SearchTable")

    const tableHeaders = [
        { title: "Фото", },
        { title: "Имя", },
        { title: "Локация", },
        { title: "Email", },
        { title: "Телефон", },
        { title: "Дата регистрации", }
    ];
    if (isLoading) {
        return (
            <div>
                загрузка
            </div>
        )
    }

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
                    {
                        users.length > 0 ? (
                            users.map((user, index) => (
                                <tr className="table-search__body table-row" key={index}>
                                    <SearchTableBody data={user.picture} type='image' />
                                    <SearchTableBody data={user.name} />
                                    <SearchTableBody data={user.location} />
                                    <SearchTableBody data={user.email} />
                                    <SearchTableBody data={user.phone} />
                                    <SearchTableBody data={user.registeredDate} />
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={tableHeaders.length} style={{ textAlign: 'center' }}>
                                    совпадений не найдено
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </>
    )
}

export default memo(SearchTable)