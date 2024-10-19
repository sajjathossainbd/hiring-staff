/* eslint-disable react/prop-types */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const AreaCharts = ({ UsersQuantity,
    totalJobsQuantity,
    applicationsQuantity,
    recruitersQuantity,
    shortlistedQuantity }) => {

    const data = [
        {
            name: 'Total Users',
            uv: UsersQuantity,

        },
        {
            name: 'Total Jobs',
            uv: totalJobsQuantity,

        },
        {
            name: 'Total Recruiters',
            uv: applicationsQuantity,

        },
        {
            name: 'Total Applications',
            uv: recruitersQuantity,

        },
        {
            name: 'Total Shortlisted',
            uv: shortlistedQuantity,

        },
    ];

    return (
        <div style={{ height: '400px' }} className="mt-10 bg-white p-5 rounded-lg">
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

export default AreaCharts;