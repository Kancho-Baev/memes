import Head from 'next/head';

const HeadComponent = ({ label = 'Create Next App', favHref = '/favicon.ico' }) => {
  return (
    <Head>
      <title>{label}</title>
      <link rel="icon" href={favHref} />
    </Head>
  );
};

export default HeadComponent;
