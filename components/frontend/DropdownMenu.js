import React, { useState } from 'react';

const DropdownMenu = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <div className={`ht-setting-trigger ${isOpen ? 'is-active' : ''}`} onClick={toggleDropdown}>
                <span>{title}</span>
            </div>

            <div className="setting ht-setting" style={isOpen ?
                {
                    display: 'block',
                    animation: 'fadeIn 300ms ease-in-out'
                }
                :
                { display: 'none', animation: 'fadeIn 300ms ease-in-out' }}>
                <ul className="ht-setting-list">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </li>
    );
};

export default DropdownMenu;
