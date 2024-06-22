import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import 'tailwindcss/tailwind.css';
import SectionTitle from '../../Components/SectionTitle';
import useArticles from '../../Hooks/useArticles';

const IncomeChart = () => {
    const [data, setData] = useState(null);
    const [dateRange, setDateRange] = useState('today');
    const [selectedOption, setSelectedOption] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [articleData] = useArticles();

    const options = [
        { label: 'Today', value: 'today' },
        { label: 'Last 7 Days', value: '7days' },
        { label: 'Last 30 Days', value: '30days' },
        { label: 'Last 6 Months', value: '6months' },
        { label: 'This Year', value: 'year' },
    ];

    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/swindon/fake-api@master/tailwindAlpineJsChartJsEx1.json')
            .then((res) => res.json())
            .then((res) => {
                setData(res.dates);
            });
    }, []);

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const handleSelectOption = (index) => {
        setSelectedOption(index);
        setDateRange(options[index].value);
        setShowDropdown(false);
    };

    const getChartData = () => {
        if (!data || !data[dateRange]) return [];

        const labels = data[dateRange].data.labels;
        const income = data[dateRange].data.income;
        const expenses = data[dateRange].data.expenses;

        const chartData = [['Date', 'Income', 'Expenses']];
        labels.forEach((label, index) => {
            chartData.push([label, income[index], expenses[index]]);
        });

        return chartData;
    };

    const getPublisherData = () => {
        if (!articleData || articleData.length === 0) return [];

        const publisherCount = {};
        articleData.forEach(article => {
            const publisher = article.publisher;
            if (publisherCount[publisher]) {
                publisherCount[publisher]++;
            } else {
                publisherCount[publisher] = 1;
            }
        });

        const totalArticles = articleData.length;
        const chartData = [['Publisher', 'Percentage']];
        Object.keys(publisherCount).forEach(publisher => {
            chartData.push([publisher, (publisherCount[publisher] / totalArticles) * 100]);
        });

        return chartData;
    };

    const titleTextStyle = {
        color: '#E3963E',
        fontSize: 20,
        bold: true,
    };


    return (
        <div>
            <SectionTitle heading={"Dashboard"}></SectionTitle>


            <div className="flex items-center justify-center px-5 py-5">
                <h3 className='text-3xl font-bold text-[#E3963E] pr-5'>Publishers Pie Chart</h3>
                <div className="border text-[#E3963E] rounded shadow-xl py-5 px-5 w-full lg:w-1/2">
                    <Chart
                        width={'100%'}
                        height={'400px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={getPublisherData()}
                        options={{
                            title: 'Article Distribution by Publisher',
                            pieHole: 0.4,
                            titleTextStyle: titleTextStyle
                        }}
                    />
                </div>
            </div>




            <div className="flex items-center justify-center px-5 py-5">
                <h3 className='text-3xl font-bold text-[#E3963E] pr-5'>Income and expenses</h3>
                <div className="border text-[#E3963E] rounded shadow-xl py-5 px-5 w-full lg:w-1/2">
                    <div className="flex flex-wrap items-end">
                        <div className="flex-1">
                            <h3 className="text-lg text-[#E3963E] font-semibold leading-tight">Income</h3>
                        </div>
                        <div className="relative" onClick={() => setShowDropdown(!showDropdown)}>
                            <button className="text-sm font-semibold text-[#E3963E] hover:text-gray-300 h-6 focus:outline-none">
                                <span>{options[selectedOption].label}</span>
                                <i className="ml-1 mdi mdi-chevron-down"></i>
                            </button>
                            {showDropdown && (
                                <div className="bg-gray-700 shadow-lg rounded text-sm absolute top-auto right-0 min-w-full w-32 z-30 mt-1 -mr-3">
                                    <span className="absolute top-0 right-0 w-3 h-3 bg-gray-700 transform rotate-45 -mt-1 mr-3"></span>
                                    <div className="bg-gray-700 rounded w-full relative z-10 py-1">
                                        <ul className="list-reset text-xs">
                                            {options.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className={`px-4 py-2 hover:bg-gray-600 hover:text-white transition-colors duration-100 cursor-pointer ${index === selectedOption ? 'text-white' : ''
                                                        }`}
                                                    onClick={() => handleSelectOption(index)}
                                                >
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-wrap items-end mb-5">
                        <h4 className="text-2xl lg:text-3xl text-[#E3963E] font-semibold leading-tight inline-block mr-2">
                            ${data ? formatNumber(data[dateRange].total) : 0}
                        </h4>
                        <span
                            className={`inline-block ${data && data[dateRange].upDown < 0 ? 'text-red-500' : 'text-green-500'
                                }`}
                        >
                            {data && data[dateRange].upDown < 0 ? '▼' : '▲'} {data ? data[dateRange].upDown : 0}%
                        </span>
                    </div>
                    <div>
                        <Chart
                            width={'100%'}
                            height={'400px'}
                            chartType="LineChart"
                            loader={<div>Loading Chart</div>}
                            data={getChartData()}
                            options={{
                                hAxis: {
                                    title: 'Date',
                                },
                                vAxis: {
                                    title: 'Amount',
                                    format: 'short',
                                },
                                series: {
                                    0: { color: '#667EEA' },
                                    1: { color: '#ED64A6' },
                                },

                            }}
                        />
                    </div>
                </div>
            </div>



            <div className="flex items-center justify-center px-5 py-5">
            <h3 className='text-3xl font-bold text-[#E3963E] pr-5'>Growth of Read&Digest</h3>
                <div className="border text-[#E3963E] rounded shadow-xl py-5 px-5 w-full lg:w-1/2">
                    <Chart
                        chartType="Calendar"
                        width="100%"
                        height="350px"
                        data={[
                            [
                                {
                                    type: 'date',
                                    id: 'Date',
                                },
                                {
                                    type: 'number',
                                    id: 'Won/Loss',
                                },
                            ],
                            [new Date(2022, 3, 13), 37032],
                            [new Date(2022, 3, 14), 38024],
                            [new Date(2022, 3, 15), 38024],
                            [new Date(2022, 3, 16), 38108],
                            [new Date(2022, 3, 17), 38229],
                            // More rows...
                            [new Date(2023, 9, 4), 38177],
                            [new Date(2023, 9, 5), 38705],
                            [new Date(2023, 9, 12), 38210],
                            [new Date(2023, 9, 13), 38029],
                            [new Date(2023, 9, 19), 38823],
                            [new Date(2023, 9, 23), 38345],
                            [new Date(2023, 9, 24), 38436],
                            [new Date(2023, 9, 30), 38447],
                        ]}
                        
                    />
                </div>
            </div>

        </div>
    );
};

export default IncomeChart;
