import { useRouter } from 'next/router'
import { Fragment } from 'react';
import Link from 'next/link';


const CoffeeStore = () => {
    const router = useRouter();
    console.log( 'router', router )
    return <Fragment>
        <div> Coffee Store Page { router.query.id }</div>
        <Link href="/"><a>
            Back to Home
        </a>
        </Link>
        <Link href="/coffee-store/special"><a>
            Go to page dynamic
        </a>
        </Link>
    </Fragment>
}

export default CoffeeStore;

/* const A = () => {

}

const B = () => {

}

const C = () => {

}
 */