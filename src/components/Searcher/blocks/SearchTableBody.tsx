import { memo } from 'react';
import { useTooltipPosition } from '../../../../hooks/useTooltipPosition'

interface ISearchTableBody {
    data: string | number | string[];
    type?: string
}

const SearchTableBody = ({ data, type }: ISearchTableBody) => {
    const { showTooltipe, tooltipePosition, toolTipeRef, handlers } = useTooltipPosition();

    if (type === 'image' && Array.isArray(data) && data.length >= 2) {
        const [smallImage, largeImage] = data;

        return (
            <td className="table-search__field">
                <div
                    className="table-search__tooltipe-container"
                    {...handlers}
                >
                    <img
                        src={smallImage}
                        alt="avatar"
                        className="table-search__tooltipe-avatar"
                    />

                    {showTooltipe && (
                        <div
                            ref={toolTipeRef}
                            className="table-search__tooltipe-wrapper"
                            style={{
                                top: tooltipePosition.y,
                                left: tooltipePosition.x
                            }}
                        >
                            <div className="table-search__tooltipe-content">
                                <img
                                    src={largeImage}
                                    alt="preview"
                                    className="table-search__tooltipe-preview"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </td>
        );
    }

    return (
        <td className="table-search__field">
            <span className="table-search__text">
                {data !== undefined && data !== null ? data : '-'}
            </span>
        </td>
    );
};

export default memo(SearchTableBody);