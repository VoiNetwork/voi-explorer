// src/components/Header.tsx
import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <header className="app-header">
            <h1>Want to get Voi?</h1>
            <nav>
                <ul>
                    <li><a href="https://www.mexc.com/exchange/VOI_USDT">MEXC</a></li>
                    <li><a href="https://voirewards.com/">Voi Rewards</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;