// @ts-ignore
import React from 'react';
// @ts-ignore
import clsx from 'clsx';
// @ts-ignore
import Link from '@docusaurus/Link';
// @ts-ignore
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// @ts-ignore
import Layout from '@theme/Layout';
// @ts-ignore
import HomepageFeatures from '@site/src/components/HomepageFeatures';

// @ts-ignore
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/discord/server-commands">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Pilot Club (TPC) is a free, friendly, thriving flightsim community. Share your passion for aviation, fly with friends, get support, and more.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
