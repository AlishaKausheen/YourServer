import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "./db";
import { use } from "react";

export const initialProfile =async () => {
    const user = await currentUser();

    if (!user) {
        return redirectToSignIn();
    }
    const profile = await db.profile;
}