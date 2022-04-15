import React from 'react';
import { DisplayMedium } from 'baseui/typography';
import Layout from '../components/layout/layout';

function Speakers() {
  return (
    <DisplayMedium>
      Speakers
    </DisplayMedium>
  );
}

Speakers.getLayout = function getLayout(page) {
  return (
    <Layout seo={{ title: 'Wave Speakers', description: 'Official Wave Store' }}>
      {page}
    </Layout>
  );
};

export default Speakers;
