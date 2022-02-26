import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import Calendar from '../components/Calendar';
import styled from 'styled-components';

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

const MainLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Main: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Main</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Blog></Blog>

            <MainLogin>
                <Calendar />
            </MainLogin>
        </div>
    );
};

export default Main;
