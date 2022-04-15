import React from 'react';
import { DisplayMedium } from 'baseui/typography';
import Layout from '../components/layout/layout';

function Headphones() {
  return (
    <DisplayMedium>
      Headphones
    </DisplayMedium>
  );
}

Headphones.getLayout = function getLayout(page) {
  return (
    <Layout seo={{ title: 'Wave Headphones', description: 'Official Wave Store' }}>
      {page}
    </Layout>
  );
};

export default Headphones;
