import React from 'react'
import { Tabs as AntdTabs } from 'antd'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { LineChart } from '@mui/x-charts';

const Tabs = () => {
    const items = [
        {
            key: '1',
            label: 'Stats',
            children: (
                <div className='text-black'>
                    CPU Stats
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                        series={[
                            {
                                data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                                showMark: ({ index }) => index % 2 === 0,
                            },
                        ]}
                        width={500}
                        height={300}
                    />
                </div>
            ),
        },
        {
            key: '2',
            label: 'Networking',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Domains',
            children: 'Content of Tab Pane 3',
        },
    ];
    const onChangeTab = (key) => {
        console.log(key);
    };


    return (
        <div className='bg-white px-14 my-6  py-4 rounded-lg'>
            <AntdTabs className='text-white' defaultActiveKey="1" items={items} onChange={onChangeTab} />

        </div>
    )
}

export default Tabs