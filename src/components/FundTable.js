import React from "react";

export default function FundTable({ funds, deleteFund }) {
  return (
    <table className="fund-table">
      <thead>
        <tr>
          <th>Fund Name</th>
          <th>Type</th>
          <th>Risk</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {funds.map((f) => (
          <tr key={f.id}>
            <td>{f.name}</td>
            <td>{f.type}</td>
            <td>{f.risk}</td>

            <td>
              <button className="delete-btn" onClick={() => deleteFund(f.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}