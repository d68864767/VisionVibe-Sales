import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/analytics">Analytics</a></li>
          <li><a href="/recommendations">Recommendations</a></li>
          <li><a href="/insights">Insights</a></li>
          <li><a href="/performance">Performance</a></li>
        </ul>
      </nav>
      <img src="/assets/logo.png" alt="VisionVibe Sales" />
    </header>
  );
}

export default Header;
