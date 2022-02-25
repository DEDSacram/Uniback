import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import Calendar from '../components/Calendar';

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export function Blog({ posts }: any): JSX.Element {
    return (
        <ul>
            {posts.map((post: { title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => (
                <li>{post.title}</li>
            ))}
        </ul>
    );
}

const Main: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Main</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Blog></Blog>

            <main className="vh-100 d-flex flex-column justify-content-center align-items-center">
                <Calendar />
            </main>
        </div>
    );
};

export default Main;
