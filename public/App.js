import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Analytics from './components/Analytics';
import Recommendations from './components/Recommendations';
import Insights from './components/Insights';
import Performance from './components/Performance';

function App() {
  const [products, setProducts] = useState([]);
  const [analyticsData, setAnalyticsData] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [insights, setInsights] = useState([]);
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    // Fetch products data from the backend API
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));

    // Fetch analytics data from the backend API
    fetch('/api/analytics')
      .then((response) => response.json())
      .then((data) => setAnalyticsData(data))
      .catch((error) => console.error(error));

    // Fetch recommendations data from the backend API
    fetch('/api/recommendations')
      .then((response) => response.json())
      .then((data) => setRecommendations(data))
      .catch((error) => console.error(error));

    // Fetch insights data from the backend API
    fetch('/api/insights')
      .then((response) => response.json())
      .then((data) => setInsights(data))
      .catch((error) => console.error(error));

    // Fetch performance data from the backend API
    fetch('/api/performance')
      .then((response) => response.json())
      .then((data) => setPerformanceData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="content">
        <ProductList products={products} />
        <Analytics data={analyticsData} />
        <Recommendations recommendations={recommendations} />
        <Insights insights={insights} />
        <Performance data={performanceData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
