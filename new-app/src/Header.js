import React from 'react';
import './Header.css';

const Header = function () {
    const headerStyle = {
        textAlign: 'center',
        padding: 20,
        background: '#000',
        color: '#fff',
        textTransform: 'uppercase'
    };

    return (
        <div style={headerStyle}>
            <div className="header">
                Phone Directory
            </div>
        </div>
    )
}
export default Header;