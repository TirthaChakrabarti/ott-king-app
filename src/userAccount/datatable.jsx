import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

export default function OrderTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = [
        {
          orderId: "ORD001",
          packageName: "Premium Plan",
          paymentMethod: "Credit Card",
          amount: 50.0,
          paymentDate: "2024-11-01",
          effectiveFrom: "2024-11-02",
          expiryOn: "2025-11-01",
          status: "Paid",
        },
        {
          orderId: "ORD002",
          packageName: "Basic Plan",
          paymentMethod: "PayPal",
          amount: 20.0,
          paymentDate: "2024-10-15",
          effectiveFrom: "2024-10-16",
          expiryOn: "2025-10-15",
          status: "Paid",
        },
        {
          orderId: "ORD003",
          packageName: "Premium Plan",
          paymentMethod: "Credit Card",
          amount: 50.0,
          paymentDate: "2024-11-01",
          effectiveFrom: "2024-11-02",
          expiryOn: "2025-11-01",
          status: "Paid",
        },
        {
          orderId: "ORD004",
          packageName: "Premium Plan",
          paymentMethod: "Credit Card",
          amount: 50.0,
          paymentDate: "2024-11-01",
          effectiveFrom: "2024-11-02",
          expiryOn: "2025-11-01",
          status: "Paid",
        },
        {
          orderId: "ORD005",
          packageName: "Premium Plan",
          paymentMethod: "Credit Card",
          amount: 50.0,
          paymentDate: "2024-11-01",
          effectiveFrom: "2024-11-02",
          expiryOn: "2025-11-01",
          status: "Paid",
        },
        {
          orderId: "ORD006",
          packageName: "Premium Plan",
          paymentMethod: "Credit Card",
          amount: 50.0,
          paymentDate: "2024-11-01",
          effectiveFrom: "2024-11-02",
          expiryOn: "2025-11-01",
          status: "Paid",
        },
        {
          orderId: "ORD001",
          packageName: "Premium Plan",
          paymentMethod: "Credit Card",
          amount: 50.0,
          paymentDate: "2024-11-01",
          effectiveFrom: "2024-11-02",
          expiryOn: "2025-11-01",
          status: "Paid",
        },
        {
          orderId: "ORD001",
          packageName: "Premium Plan",
          paymentMethod: "Credit Card",
          amount: 50.0,
          paymentDate: "2024-11-01",
          effectiveFrom: "2024-11-02",
          expiryOn: "2025-11-01",
          status: "Paid",
        },
        {
          orderId: "ORD001",
          packageName: "Premium Plan",
          paymentMethod: "Credit Card",
          amount: 50.0,
          paymentDate: "2024-11-01",
          effectiveFrom: "2024-11-02",
          expiryOn: "2025-11-01",
          status: "Paid",
        },
      ];
      setOrders(data);
    };
    fetchOrders();
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const statusBodyTemplate = (order) => {
    return (
      <Tag value={order.status} severity={getSeverity(order.status)}></Tag>
    );
  };

  const getSeverity = (status) => {
    switch (status) {
      case "Paid":
        return "success";
      case "Pending":
        return "warning";
      case "Failed":
        return "danger";
      default:
        return null;
    }
  };

  const header = (
    <div
      className="d-flex  align-items-center justify-content-center gap-2 p-3"
      style={{
        background: "rgb(168, 168, 193)",
        fontSize: "1.3rem",
        textAlign: "center",
        color: "white",
        margin: "0",
        padding: "10px",
      }}
    >
      <span className="text-xl text-900 font-bold">Transaction History</span>
      {/* <Button icon="pi pi-refresh" rounded raised /> */}
    </div>
  );
  const footer = `In total there are ${orders ? orders.length : 0} orders.`;

  return (
    <div className="card " style={{ overflowX: "auto" }}>
      <DataTable
        style={{ borderRadius: "0", overflowX: "scroll" }}
        scrollable
        paginator
        rows={5}
        
        rowsPerPageOptions={[5, 10, 25, 50]}
        value={orders}
        header={header}
        footer={footer}
        tableStyle={{ minWidth: "60rem" }}
      >
        <Column field="orderId" header="Order ID"></Column>
        <Column field="packageName" header="Package Name"></Column>
        <Column field="paymentMethod" header="Payment Method"></Column>
        <Column
          field="amount"
          header="Amount"
          body={(order) => formatCurrency(order.amount)}
        ></Column>
        <Column field="paymentDate" header="Payment Date"></Column>
        <Column field="effectiveFrom" header="Effective From"></Column>
        <Column field="expiryOn" header="Expiry On"></Column>
        <Column header="Status" body={statusBodyTemplate}></Column>
      </DataTable>
    </div>
  );
}
