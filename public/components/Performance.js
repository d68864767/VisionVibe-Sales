```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Performance = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetchSalesData();
  }, []);

  const fetchSalesData = async () => {
    try {
      const response = await axios.get('/api/sales');
      setSalesData(response.data);
    } catch (error) {
      console.error('Error fetching sales data:', error);
    }
  };

  return (
    <div>
      <h2>Performance Analytics</h2>
      {salesData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Revenue</th>
              <th>Units Sold</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.date}</td>
                <td>{sale.revenue}</td>
                <td>{sale.unitsSold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No sales data available.</p>
      )}
    </div>
  );
};

export default Performance;
```
