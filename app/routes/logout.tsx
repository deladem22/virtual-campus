import { redirect } from "@remix-run/node";
import { authCookie } from "~/lib/cookies.server";

export const loader = async () => {
    return redirect("/", {
        headers: {
        "Set-Cookie": await authCookie.serialize("", { maxAge: 0 }),
        },
    });
    };

    export default function Logout() {
    return null;
    }
