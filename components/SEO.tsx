import { VFC } from 'react';
import Head from 'next/head'

import Data from '../data/siteData';

interface SEOProps {
    siteTitle: string;
    title: string;
    description: string;
}

const SEO: VFC<SEOProps> = ({ siteTitle, title, description }) => {
    return (
        <Head>
            <title>{`${siteTitle} | ${Data.title}`}</title>
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={Data.image} />
            <meta property='og:url' content={Data.url} />
            <meta property='og:site_name' content={Data.title} />
            <meta name='description' content={description}/>
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:creator' content={Data.twitterUsername} />
            <meta name='twitter:description' content={Data.description} />
            <meta name='twitter:image' content={`${Data.url}${Data.image}`} />
        </Head>
    );
}
export default SEO;