import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import TinnyHeading from "./shared/TinnyHeading";
import MyPaymentsTable from "../../components/dashboard/MyPaymentsTable";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const MyPayments = () => {
  const { user } = useAuth();

  const { data: myPayment } = useQuery({
    queryKey: ["my-payment", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/payment-history/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  return (
    <div>
      <Helmet>
        <title>Hiring Staff - My Payments</title>
      </Helmet>
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
