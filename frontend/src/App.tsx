import { Layout, Typography } from 'antd';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout.Header>
            <Typography.Title level={2}>Notes</Typography.Title>
        </Layout.Header>
      </Layout>
    </div>
  );
}

export default App;
