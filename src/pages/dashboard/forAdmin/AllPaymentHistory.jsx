import AllPaymentTable from "../../../components/dashboard/AllPaymentTable";
import TinnyHeading from "../shared/TinnyHeading";

const AllPaymentHistory = () => {
  return (
    <div className="lg:left-48 ralative">
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
