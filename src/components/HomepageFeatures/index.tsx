import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const products = [
  {
    title: 'RandAO',
    src: '/vid/randao.mp4',
    description: (
      <>
        <p>RandAO processes random numbers at lightning speed, generating millions of values on-chain - more compute than any other protocol on AO.</p>
        <ul>
          <li>Processes up to 5 random numbers per second concurrently</li>
          <li>Each random number takes just 5 seconds from start to finish</li>
          <li>Scales per process with potential for much higher speeds</li>
          <li>Performs hundreds of dry runs to ensure provider readiness</li>
          <li>Uses 2 messages per provider plus 3 messages for organization</li>
        </ul>
      </>
    ),
    link: 'https://providers_randao.ar.io',
    linkText: 'Explore RandAO',
    image: null
  },
  {
    title: 'RuneRealm',
    src: '/vid/runerealm.mp4',
    description: (
      <>
        <p>A cutting-edge monster catching MMORPG that's 100% on-chain:</p>
        <ul>
          <li>Every step and interaction is recorded on-chain</li>
          <li>All AI logic is computed on-chain</li>
          <li>Not possible on any other blockchain</li>
          <li>Requires specialized infrastructure to function</li>
        </ul>
      </>
    ),
    link: 'https://runerealm_game.ar.io',
    linkText: 'Enter RuneRealm',
    image: null
  },
  {
    title: 'Lunar',
    src: null,
    description: (
      <>
        <p>Optimized version of the public Lunar repository with enhanced performance:</p>
        <ul>
          <li>All Default Forward Research endpoints replaced with our own for faster loading</li>
          <li>MU endpoints swapped where possible for better performance</li>
          <li>Ongoing work to replace GraphQL endpoints for even faster response times</li>
          <li>Direct fork of the base public repository with infrastructure improvements</li>
        </ul>
      </>
    ),
    link: 'https://lunar_infrao.ar.io/',
    linkText: 'Discover Lunar',
    image: '/img/lunar.svg'
  },
  {
    title: 'AOLink',
    src: null,
    description: (
      <>
        <p>Optimized version of the public AOLink repository with enhanced performance:</p>
        <ul>
          <li>All Default Forward Research endpoints replaced with our own for faster loading</li>
          <li>MU endpoints swapped where possible for better performance</li>
          <li>Ongoing work to replace GraphQL endpoints for even faster response times</li>
          <li>Direct fork of the base public repository with infrastructure improvements</li>
        </ul>
      </>
    ),
    link: 'https://aolink_infrao.ar.io',
    linkText: 'Try AOLink',
    image: '/img/Autonomous-Finance.png'
  }
];

function ProductCard({ title, src, description, link, linkText, image }) {
  return (
    <div className={clsx('col col--6', styles.cardContainer)}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.mediaContainer}>
          {src ? (
            <div className={styles.videoWrapper}>
              <video
                className={styles.video}
                controls
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className={styles.imageWrapper}>
              <img src={image} alt={title} className={styles.productImage} />
            </div>
          )}
        </div>
        <div className={styles.cardContent}>
          <div className={styles.description}>{description}</div>
          <div className={styles.linkContainer}>
            <Link
              className="button button--primary button--lg"
              to={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
