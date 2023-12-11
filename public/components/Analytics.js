```javascript
import React, { useEffect, useState } from 'react';

const Analytics = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Fetch sales data from the backend API
    fetch('/api/sales')
      .then((response) => response.json())
      .then((data) => setSalesData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Analytics</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.date}</td>
              <td>{sale.product}</td>
              <td>{sale.quantity}</td>
              <td>{sale.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Analytics;
```
