import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log("user", user)
    if (typeof user == 'undefined' || user == null) return null;

    return (
        <MaxWidthWrapper>
            {user.email}
        </MaxWidthWrapper>
    )
}

export default Page;