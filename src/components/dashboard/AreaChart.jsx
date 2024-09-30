import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';

const AreaCharts = () => {

    const data = [
        {
            name: 'Users',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Apply',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Jobs',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Recruiters',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Candidates',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Shortlists',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Message',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <div style={{ width: '100%' }} className="mt-10">
            <h4 className="mt-5">A areaChart of admin analytics</h4>

            <div className="mt-7">
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                        width={500}
                        height={200}
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </LineChart>
                    <Legend />
                </ResponsiveContainer>
            </div>

            <div className="mt-7">
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                        width={500}
                        height={200}
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AreaCharts;