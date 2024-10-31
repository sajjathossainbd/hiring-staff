/* eslint-disable react/prop-types */

const MyPaymentsTable = ({ data }) => {
  return (
    <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
      <h5>My Payments</h5>
      <hr className="my-6 text-lightGray" />
      {/* table */}
      <div className="overflow-x-auto lg:h-[550px]">
        <table className="table text-sm">
          {/* head */}
          <thead>
            <tr className="text-base dark:text-white">
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Date</th>
              <th>Method</th>
              <th>Transaction</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((payment, index) => (
              <tr key={index}>
                <td>{payment?.name}</td>
                <td>{payment?.category}</td>
                <td>
                  <span className="text-blue">${payment?.price}</span>
                </td>
                <td>{payment?.date}</td>
                <td>{payment?.paymentType}</td>
                <td>{payment?.transactionId}</td>
                <td
                  className={`font-semibold ${
                    payment?.status == "approved"
                      ? "text-green"
                      : "text-yellow-600"
                  }`}
                >
                  {payment?.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPaymentsTable;
