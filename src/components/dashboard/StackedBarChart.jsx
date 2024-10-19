/* eslint-disable react/prop-types */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StackedBarChart = ({ shortlistedQuantity, messageQuantity, applicationsQuantity, jobsQuantity }) => {

    const data = [
        {
            name: 'Total Jobs',
            uv: jobsQuantity,
            amt: 100,
        },
        {
            name: 'My Applications',
            uv: applicationsQuantity,
            pv: jobsQuantity,

        },
        {
            name: 'Total Messages',
            uv: messageQuantity,
        },
        {
            name: 'Shortlisted',
            uv: shortlistedQuantity,
            pv: applicationsQuantity,
        },
    ];

    return (
        <div style={{ height: '400px' }} className="mt-10">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StackedBarChart;
