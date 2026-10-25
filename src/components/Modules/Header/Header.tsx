// src/components/Header.tsx
import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <header className="app-header">
            <h1>Want to get Voi?</h1>
            <nav>
                <ul>
                    <li><a href="https://medium.com/@voifoundation/staking-program-how-to-guide-382ea5085dab">DEX Guide</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;