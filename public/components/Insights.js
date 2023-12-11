```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Insights = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      const response = await axios.get('/api/insights');
      setInsights(response.data);
    } catch (error) {
      console.error('Error fetching insights:', error);
    }
  };

  return (
    <div>
      <h2>Insights</h2>
      {insights.map((insight) => (
        <div key={insight.id}>
          <h3>{insight.title}</h3>
          <p>{insight.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Insights;
```
