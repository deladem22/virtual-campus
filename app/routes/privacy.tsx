import { useLoaderData } from "@remix-run/react";

import ReactMarkdown from "react-markdown";

export const loader = async () => {

    
    };

export default function Privacy() {
    const markdown = useLoaderData<string>();

    return (
        <div className="container mx-auto py-6 lg:rounded-xl mt-6 bg-zinc-100 dark:bg-neutral-800 lg:mb-4 lg:rounded-xl max-lg:rounded-t-lg max-md:rounded-t-0 max-md:mb-16">
        <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}
