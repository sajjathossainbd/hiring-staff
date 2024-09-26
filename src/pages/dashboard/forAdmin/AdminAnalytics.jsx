import { FaUsers } from "react-icons/fa6";
import DashboardCard from "../shared/DashboardCard";
import TinnyHeading from "../shared/TinnyHeading";
import { IoBagRemoveOutline } from "react-icons/io5";
import { VscGitStashApply } from "react-icons/vsc";
import { MdPlaylistAddCheck } from "react-icons/md";

import { PieChart, Pie,  Cell, ResponsiveContainer } from 'recharts';


const AdminAnalytics = () => {

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
              {`${(percent * 100).toFixed(0)}%`}
            </text>
          );
    }


    return (
        <div>
            <TinnyHeading
                title={"Admin Analytics"}
                path="admin-analytics"
                pathName="Admin Analytics"
            />

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
                <DashboardCard logo={<FaUsers />} title={'All Users'} quantity={'100'} />
                <DashboardCard logo={<IoBagRemoveOutline />} title={'All Jobs'} quantity={'500'} />
                <DashboardCard logo={<VscGitStashApply />} title={'All Applications'} quantity={'1000'} />
                <DashboardCard logo={<MdPlaylistAddCheck />} title={'Shortlisted'} quantity={'50'} />
            </div>
            <div style={{ height: '400px' }} className="mt-10">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AdminAnalytics;
