import { useQuery } from "@tanstack/react-query";
import useCurrentUser from "../../hooks/useCurrentUser";
import axiosInstance from "../../utils/axios";
import TinnyHeading from "./shared/TinnyHeading";
import MyPaymentsTable from "../../components/dashboard/MyPaymentsTable";


const MyPayments = () => {

    const { currentUser } = useCurrentUser()

    const { data: myPayment, } = useQuery({
        queryKey: ['my-payment', currentUser?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/payment-history/${currentUser?.email}`);
            return res.data;
        },
        enabled: !!currentUser?.email,
    });

    console.log(myPayment);


    return (
        <div>
            <TinnyHeading
                title={"My Payments"}
                path={"my-payments"}
                pathName={"My Payments"}
            />

            <MyPaymentsTable data={myPayment} />
        </div>
    );
};

export default MyPayments;