"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { trpc } from "@/app/_trpc/client";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');

    const {data, isLoading} = trpc.authCallback.useQuery();

    if (isLoading) return <MaxWidthWrapper>Authenticating...</MaxWidthWrapper>;
    if (data?.success) {
        router.push(origin ? `/${origin}` : '/dashboard');
    } else {
        router.push('/sign-in')
    }
}

export default Page;