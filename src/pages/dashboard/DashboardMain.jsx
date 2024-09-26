import { SiImessage } from "react-icons/si";
import useAuth from "../../hooks/useAuth";
import DashboardCard from "./shared/DashboardCard";
import TinnyHeading from "./shared/TinnyHeading";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdPlaylistAddCheck } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";

const DashboardMain = () => {

    const { user } = useAuth()



    const data = [
        {
            name: 'Users',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Candidates',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Recruiters',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Jobs',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Apply',
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
        <div>
            <TinnyHeading
                title={user?.displayName}
                path="dashboard-main"
                pathName="Dashboard Main"
            />
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
                <DashboardCard logo={<IoBagRemoveOutline />} title={'Posted Jobs'} quantity={'100'} />
                <DashboardCard logo={<VscGitStashApply />} title={'All Applications'} quantity={'500'} />
                <DashboardCard logo={<SiImessage />} title={'Message'} quantity={'1000'} />
                <DashboardCard logo={<MdPlaylistAddCheck />} title={'Shortlisted'} quantity={'50'} />
            </div>
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
        </div >
    );
};

export default DashboardMain;