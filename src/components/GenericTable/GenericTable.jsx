import React from 'react';
import './GenericTable.css';

const GenericTable = ({ data, columns }) => {
    if (!data || data.length === 0) {
        return <p className="empty-table-message">Nenhum registro encontrado.</p>;
    }

    const renderHeader = () => (
        <div className="generic-table-header">
            {columns.map((col) => (
                <div key={col.key} className="generic-col header-col" style={{ flex: col.flex || 1 }} >
                    {col.header}
                </div>
            ))}
        </div>
    );

    const renderBody = () => (
        <div className="generic-table-body">
            {data.map((item, itemIndex) => (
                <div key={itemIndex} className="generic-row">
                    <div className="generic-details">
                        {columns.map((col) => (
                            <div key={`${itemIndex}-${col.key}`} className="generic-col data-col" style={{ flex: col.flex || 1 }}>
                                <p className="data-value">{item[col.key]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="generic-table-container">
            {renderHeader()}
            {renderBody()}
        </div>
    );
};

export default GenericTable;