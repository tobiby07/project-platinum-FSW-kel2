import React, { useCallback, useEffect, useState } from "react";
import Layout from "../..";
import DataList from "../../components/Order/DataList";
import axiosObject from "../../../../services/axiosUrl";
import { toast } from "react-toastify";
function Order() {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const getOrder = useCallback(async () => {
    try {
      const response = await axiosObject.get("/api/order");
      setOrder(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  }, []);
  useEffect(() => {
    getOrder();
    setRefresh(false);
  }, [getOrder, refresh]);
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div>
            <h2>Order</h2>
          </div>
        </div>
        <div className="page-content ">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Order</th>
                <th scope="col">Customer</th>
                <th scope="col">Total</th>
                <th scope="col">Address</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <th colSpan={4}>Loading....</th>
                </tr>
              ) : order.length > 0 ? (
                order.map((order, index) => <DataList key={order.id} index={index} order={order} setRefresh={setRefresh} />)
              ) : (
                <tr>
                  <th colSpan={4}>No Data Found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
export default Order;
