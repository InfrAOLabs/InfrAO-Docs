import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Appendix from '@site/src/components/Appendix';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  // Empty header to remove the logo and title
  return null;
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="AO Infrastructure"
      description="AO Infrastructure Documentation Portal">
      <main>
        <div className="container" style={{ padding: '2rem 0' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 'bold' }}>
            AO Infrastructure
          </h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--ifm-color-emphasis-700)' }}>
            Tools and resources for AO infrastructure development and maintenance
          </p>
        </div>
        <Appendix />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
