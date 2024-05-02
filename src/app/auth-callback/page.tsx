'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { trpc } from "@/app/_trpc/client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function Search() {
    const router = useRouter();
    
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');

    const {data, isLoading} = trpc.authCallback.useQuery(undefined, {
        retry: true,
        retryDelay: 500
    });

    useEffect(() => {
        if (data?.success) {
            router.push(origin ? `/${origin}` : '/dashboard');
        } else {
            router.push('/sign-in')
        }
    }, [data, isLoading, origin, router])


    return <MaxWidthWrapper>Authenticating...</MaxWidthWrapper>
}

const Page = () => {

    return (
        <Suspense>
            <Search />
        </Suspense>
    );
}

export default Page;