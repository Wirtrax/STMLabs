import { useState, useEffect, useMemo } from "react";
import type { ITransformedUser } from '../../../services/api';
import { getUsers } from '../../../services/api';
import useDebounce from '../../../hooks/useDebounce'

import SearchTableForm from "./blocks/SearchTableForm";
import SearchTable from "./SearchTable";


const Searcher = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<ITransformedUser[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>('');

    const debouncedSearch = useDebounce((value: string) => {
        setDebouncedSearchQuery(value);
    }, 300);

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        debouncedSearch(value);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true)
                const response = await getUsers();

                if (response.success) {
                    setUsers(response.users)
                }
            } catch (error) {
                console.log('fetch error:', error);
            } finally {
                setLoading(false)
            }
        }

        fetchUsers();
    }, [])

    const filteredUsers = useMemo(() => {
        if (!debouncedSearchQuery) return users;

        const searchLower = debouncedSearchQuery.toLowerCase();

        return users.filter(user =>
            user.name.toLowerCase().includes(searchLower)
        );
    }, [users, debouncedSearchQuery]);

    return (
        <section className="main-search">
            <SearchTableForm
                searchQuery={searchQuery}
                setSearchQuery={handleSearchChange}
                isDisable={loading}
            />
            <div className="main-table">
                <SearchTable users={filteredUsers} isLoading={loading} />
            </div>
        </section>
    );
}

export default Searcher;