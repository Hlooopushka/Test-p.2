import React from 'react';
import { Image } from 'antd';
import { Card } from 'antd';
import { useDrag } from 'react-dnd'

import item1 from "../../../assets/items/item1.png"
const { Meta } = Card;

const PlannerItem = () => {
    return (
        <Card
            hoverable
            style={{
            width: 120,
            }}
            cover={<Image alt="example" src={item1} preview={false}/>}
        >
        <Meta title="Item 1" />
    </Card>
    );
};

export default PlannerItem;