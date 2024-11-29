import React from "react";

import OrderTable from "./datatable";

const TransactionHistory = () => {
  return (
    <div 
      className="transaction-history-parent" 
      style={{ marginTop: '40px' }}
    >
      <div 
        className="transaction-history-wrapper"
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}
      >
        <OrderTable/>
      </div>
    </div>
  );
};

export default TransactionHistory;
