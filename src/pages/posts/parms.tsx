import { useRouter } from 'next/router';

export interface CatchAllParamsPageProps {
}

export default function CatchAllParamsPage (props: CatchAllParamsPageProps) {
    const router = useRouter();
    const { params } = router.query;
  return (
    <div>
        <h1>Catch All Params Page</h1>

        <p>
            Params: {JSON.stringify(router.query)}
        </p>
        <p>
            First param: {
            Array.isArray(params) ? params[0] : ''
            }
        </p>
    </div>
  );
}
