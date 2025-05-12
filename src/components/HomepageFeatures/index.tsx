import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  subtitle: string;
  date: string;
  dateurl: string;
  youtubeurl: string;
  facebookurl: string;
  twitchurl: string;
  //description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Descifrando los anuncios de Microsoft Build 2023',
    subtitle: '-.Día 1.-',
    date: 'Fecha: Mayo 23, 2023 | Hora: 7:00 PM (PDT UTC-7)',
    dateurl: 'https://www.timeanddate.com/worldclock/fixedtime.html?msg=Descifrando+los+anuncios+de+Microsoft+Build+2023+%7C+D%C3%ADa+1&iso=20230523T1900&p1=234&am=30',
    youtubeurl: 'https://www.youtube.com/watch?v=rt_P9tMKqIM',
    facebookurl: 'https://www.facebook.com/events/615467160523212',
    twitchurl: 'https://www.twitch.tv/JorgeLevy',
  },
  {
    title: 'Descifrando los anuncios de Microsoft Build 2023',
    subtitle: '-.Día 2.-',
    date: 'Fecha: Mayo 23, 2023 | Hora: 6:30 PM (PDT UTC-7)',
    dateurl: 'https://www.timeanddate.com/worldclock/fixedtime.html?msg=Descifrando+los+anuncios+de+Microsoft+Build+2023+%7C+D%C3%ADa+2&iso=20230524T1830&p1=234&am=30',
    youtubeurl: 'https://www.youtube.com/watch?v=HA-fxcYzGjY',
    facebookurl: 'https://www.facebook.com/events/956077905815820',
    twitchurl: 'https://www.twitch.tv/JorgeLevy',
  },
];

// Add this helper function before the Feature component
function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.split('v=')[1];
  return `https://www.youtube.com/embed/${videoId}`;
}

function Feature({ title, subtitle, date, dateurl, youtubeurl, facebookurl, twitchurl }: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center video-container">
          <iframe
            width="100%"
            height="315"
            src={getYouTubeEmbedUrl(youtubeurl)}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <Heading as="h3">{subtitle}</Heading>
        <Heading as="h4">{date} <a href={dateurl} target="_blank" rel="noopener noreferrer">Convierte a tu zone horaria</a></Heading>
      </div>
      <ul>
        <li>YouTube:&nbsp;
          <a href={youtubeurl} target="_blank" rel="noopener noreferrer">
            {youtubeurl}
          </a>
        </li>
        <li> Facebook:&nbsp;
          <a href={facebookurl} target="_blank" rel="noopener noreferrer">
            {facebookurl}
          </a>
        </li>
        <li> Twitch:&nbsp;
          <a href={twitchurl} target="_blank" rel="noopener noreferrer">
            {twitchurl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
