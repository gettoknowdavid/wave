import React from 'react';
import Layout from '../components/layout/layout';

function Home() {
  return (
    <div>
      Home
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout seo={{ title: 'Wave', description: 'Official Wave Store' }}>
      {page}
    </Layout>
  );
};

export default Home;
