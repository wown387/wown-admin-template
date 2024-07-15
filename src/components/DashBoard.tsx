import React from 'react';
import { Card, Row, Col, Statistic, Select } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Bar } from 'react-chartjs-2';
import { registerables, Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// import 'antd/dist/antd.css';
Chart.register(...registerables);

const { Option } = Select;

const Dashboard: React.FC = () => {
    const salesData = {
        labels: ['12/1', '12/2', '12/3', '12/4', '12/5', '12/6', '12/7'],
        datasets: [
            {
                label: '기간별 매출',
                data: [4206000, 3000000, 2000000, 3200000, 4800000, 4000000, 4500000],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const cardData = [
        { title: '총 매출', value: '5,000,000', suffix: '원', percentage: 10.2, icon: <ArrowUpOutlined />, color: 'green' },
        { title: '주문건수', value: '687', percentage: 10.2, icon: <ArrowUpOutlined />, color: 'green' },
        { title: '평균 구매단가', value: '30,000', suffix: '원', percentage: 10.2, icon: <ArrowUpOutlined />, color: 'green' },
        { title: '활성화 유저', value: '26K', percentage: -20.8, icon: <ArrowDownOutlined />, color: 'red' },
        { title: '신규주문', value: '1 / 38', percentage: -20.8, icon: <ArrowDownOutlined />, color: 'red' },
        { title: '취소/교환/반품', value: '1 / 3', percentage: -5.8, icon: <ArrowDownOutlined />, color: 'red' },
        { title: '신규 리뷰편딩', value: '35', percentage: 10.2, icon: <ArrowUpOutlined />, color: 'green' },
        { title: '생산된 영상리뷰', value: '56', percentage: 10.2, icon: <ArrowUpOutlined />, color: 'green' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Select defaultValue="최근 7일" style={{ width: 120, marginBottom: '20px' }}>
                <Option value="7days">최근 7일</Option>
                <Option value="1month">최근 1개월</Option>
                <Option value="3months">최근 3개월</Option>
            </Select>
            <Row gutter={16}>
                {cardData.map((card, index) => (
                    <Col span={6} key={index}>
                        <Card>
                            <Statistic
                                title={card.title}
                                value={card.value}
                                // suffix={card.suffix}
                                valueStyle={{ color: card.color }}
                                prefix={card.icon}
                                suffix={card.percentage && <span>{card.percentage}%</span>}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
            <Card title="기간별 매출" style={{ marginTop: '20px' }}>
                <Bar data={salesData} />
            </Card>
        </div>
    );
};

export default Dashboard;
