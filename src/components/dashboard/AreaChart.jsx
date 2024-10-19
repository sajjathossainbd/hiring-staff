/* eslint-disable react/prop-types */
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



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
        <div style={{ width: '100%' }} className="mt-10">
            <h4 className="mt-5">A areaChart of admin analytics</h4>

            <div className="mt-7">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
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
                        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AreaCharts;