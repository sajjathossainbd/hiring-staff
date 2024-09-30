import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import Swal from "sweetalert2";

const AllPaymentTable = () => {


    const { refetch, data: paymentHistory = [] } = useQuery({
        queryKey: ["payment-history"],
        queryFn: async () => {
            const res = await axiosInstance.get("/payment-history");
            return res.data;
        }
    });

    const handleUpdateStatus = (status, id) => {
        axiosInstance.patch(`/payment-history/status/${id}`, { status })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Payment Approved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            });
    };


    return (
        <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
            <h5>Manage Payments</h5>
            <hr className="my-6 text-lightGray" />
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table text-sm">
                    {/* head */}
                    <thead>
                        <tr className="text-base dark:text-white">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Payment Method</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory?.map((payment, index) => (
                            <tr key={index}>
                                <td>{payment?.name}</td>
                                <td>{payment?.email}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold mb-2 lg:text-base text-sm">
                                                {payment?.category}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-blue">$ {payment?.price}</span>
                                </td>
                                <td>
                                    {payment?.date}
                                </td>
                                <td>
                                    {payment?.paymentType}
                                </td>
                                <td>
                                    {payment?.transactionId}
                                </td>

                                <td>
                                    <select
                                        defaultValue={payment?.status}
                                        onChange={(e) => handleUpdateStatus(e.target.value, payment?._id)}
                                        className="select select-bordered w-full"
                                    >
                                        <option>Select</option>
                                        <option value="approve">Approved</option>
                                        <option value="pending">Pending</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPaymentTable;