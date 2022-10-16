import { useRouter } from "next/router";
import Head from 'next/head';
import { Fragment } from "react";

const NextJS = () => {
    const router = useRouter()
    console.log( 'router', router );
    return <Fragment>

        <Head>
            <title>My learning journet { router.query.next }</title>
        </Head>
        <div> Welcome to Next.js with Ankita </div>;
    </Fragment>
}

export default NextJS;