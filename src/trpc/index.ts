import { procedure, router } from './trpc';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { TRPCError } from '@trpc/server';


export const appRouter = router({
  authCallback: procedure.query(async() => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user?.id || !user.email) throw new TRPCError({ code: "UNAUTHORIZED"})

    // check if the user is in database
    
    return { success: true }
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;