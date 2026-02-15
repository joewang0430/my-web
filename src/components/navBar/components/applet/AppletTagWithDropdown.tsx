"use client";

import { useState, useRef, useEffect } from 'react';
import AppletTag from '../../ui/AppletTag';
import AppletDropdown from './AppletDropdown';

// 大屏幕模式下的 Applet 按钮 + 下拉菜单容器
const AppletTagWithDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // 点击外部关闭菜单
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={containerRef}>
            <AppletTag small={false} onClick={toggleDropdown} isActive={isOpen} />
            {isOpen && <AppletDropdown />}
        </div>
    );
};

export default AppletTagWithDropdown;
