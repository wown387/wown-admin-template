import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FixedSizeList as List } from 'react-window';

// 많은 수의 리스트 아이템을 생성하는 함수
const generateItems = (num: number) => {
    const items = [];
    for (let i = 0; i < num; i++) {
        items.push(`Item ${i}`);
    }
    return items;
};

// 개별 아이템 컴포넌트
const ListItem = ({ index, style }: any) => (
    <div style={style}>
        Item {index}
    </div>
);

export const Optimim = () => {
    const [numItems, setNumItems] = useState(10000); // 10,000개의 아이템
    const items = generateItems(numItems);
    const itemHeight = 35; // 각 아이템의 높이

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChange = (e: any) => {
        setNumItems(Number(e.target.value));
    };

    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
            <input
                type="number"
                value={numItems}
                onChange={handleChange}
                min="1"
                style={{ marginBottom: '10px' }}
            />
            <List
                height={windowSize.height - 50} // 입력 필드의 높이를 뺀 나머지 부분
                itemCount={items.length}
                itemSize={itemHeight}
                width={windowSize.width}
            >
                {ListItem}
            </List>
        </div>
    );
};

