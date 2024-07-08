import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// 많은 수의 리스트 아이템을 생성하는 함수
const generateItems = (num: number) => {
    const items = [];
    for (let i = 0; i < num; i++) {
        items.push(`Item ${i}`);
    }
    return items;
};

// 리스트 컴포넌트
const List = ({ items }: any) => {
    return (
        <div>
            {items.map((item: any, index: number) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
};

export const NoneOptim = () => {
    const [numItems, setNumItems] = useState(10000); // 10,000개의 아이템
    const items = generateItems(numItems);

    const handleChange = (e:any) => {
        setNumItems(e.target.value);
    };

    return (
        <div>
            <input
                type="number"
                value={numItems}
                onChange={handleChange}
                min="1"
            />
            <List items={items} />
        </div>
    );
};


