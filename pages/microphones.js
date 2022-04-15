import React from 'react';
import { DisplayMedium } from 'baseui/typography';
import Layout from '../components/layout/layout';

function Microphones() {
  return (
    <DisplayMedium>
      Microphones
    </DisplayMedium>
  );
}

Microphones.getLayout = function getLayout(page) {
  return (
    <Layout seo={{ title: 'Wave Microphones', description: 'Official Wave Store' }}>
      {page}
    </Layout>
  );
};

export default Microphones;
