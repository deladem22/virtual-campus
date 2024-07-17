import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { prisma } from "~/lib/prisma.server";

export const loader = async ({ request }: ActionFunctionArgs) => {
    const searchParams = new URL(request.url).searchParams;
    const email = searchParams.get("email");
    const token = searchParams.get("token");

    console.log("Received email:", email);
    console.log("Received token:", token);

    if (!email || !token) {
        console.error("Invalid email or token");
        return new Response("Invalid email or token", { status: 400 });
    }

    const verificationRequest = await prisma.emailVerificationRequest.findFirst({
        where: { email, token },
    });

    console.log("Verification Request:", verificationRequest);

    if (!verificationRequest) {
        console.error("Verification request not found for email:", email, "and token:", token);
        return new Response("Verification request not found", { status: 400 });
    }

    await prisma.user.update({
        where: { email },
        data: { verified: true },
    });

    // Log successful verification
    console.log("User verified successfully:", email);

    // [ ]: We should autologin if the account was created in the last 10 mins

    return redirect("/login?verified=true");
};
