"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {PropsWithChildren, useState} from "react"
import { trpc } from "@/app/_trpc/client"
import { httpBatchLink } from "@trpc/client";

const Providers = ({children}: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
      trpc.createClient({
        links: [
          httpBatchLink({
            url: 'http://localhost:3000/api/trpc',
            // You can pass any HTTP headers you wish here
            async headers() {
              return {
                // authorization: getAuthCookie(),
              };
            },
          }),
        ],
      }),
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </trpc.Provider>
      );
}

export default Providers;