import { Helmet } from "react-helmet-async";
import AllPaymentTable from "../../../components/dashboard/AllPaymentTable";
import TinnyHeading from "../shared/TinnyHeading";

const AllPaymentHistory = () => {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - All Payment History</title>
      </Helmet>
      <TinnyHeading
        title={"All Payment"}
        path={"all-payment-history"}
        pathName={"All Payment"}
      />
      <AllPaymentTable />
    </div>
  );
};

export default AllPaymentHistory;
