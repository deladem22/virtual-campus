var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough, Readable } from "node:stream";
import { createReadableStreamFromReadable, createCookie, json, redirect, unstable_composeUploadHandlers, unstable_parseMultipartFormData } from "@remix-run/node";
import { RemixServer, useRouteLoaderData, Link, NavLink, useLocation, useNavigation, useRouteError, isRouteErrorResponse, Meta, Links, Scripts, useLoaderData, useRevalidator, Outlet, ScrollRestoration, json as json$1, useFetcher, useParams, useSubmit, useNavigate, useOutlet, useActionData } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { cssBundleHref } from "@remix-run/css-bundle";
import clsx from "clsx";
import React from "react";
import BoringAvatar from "boring-avatars";
import jwt from "jsonwebtoken";
import { PrismaClient, Prisma } from "@prisma/client";
import posthog from "posthog-js";
import dayjs from "dayjs";
import ics from "ics";
import crypto from "node:crypto";
import lodashGet from "lodash.get";
import fs from "node:fs";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import ReactDOM from "react-dom";
import parse from "html-react-parser";
import relativeTime from "dayjs/plugin/relativeTime.js";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useFetcher as useFetcher$1 } from "react-router-dom";
import compress from "browser-image-compression";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";
import smartypants from "remark-smartypants";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { visit } from "unist-util-visit";
import { findAndReplace } from "mdast-util-find-and-replace";
import { Resend } from "resend";
import strip from "strip-markdown";
import { remark } from "remark";
import bcrypt from "bcrypt";
import qs, { parse as parse$1, stringify } from "qs";
import { Queue } from "@datastructures-js/queue";
import { queue } from "async";
import { Device } from "mediasoup-client";
import { WebSocketTransport, Peer } from "protoo-client";
import sharp from "sharp";
import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import aws from "aws-sdk";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const dev = process.env.NODE_ENV !== "production";
const observeAppId = "";
function CommonHead() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
    /* @__PURE__ */ jsx(
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,maximum-scale=1,viewport-fit=cover"
      }
    ),
    /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#FAFAFA" }),
    /* @__PURE__ */ jsx("link", { rel: "manifest", href: "/manifest.webmanifest" }),
    /* @__PURE__ */ jsx("link", { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png" }),
    /* @__PURE__ */ jsx("link", { rel: "icon", type: "image/png", href: "/favicon.png" }),
    /* @__PURE__ */ jsx(
      "link",
      {
        href: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
        rel: "stylesheet"
      }
    ),
    !dev && observeAppId && /* @__PURE__ */ jsx("script", { src: "https://0.observe.so/script.js", "data-app": observeAppId })
  ] });
}
function SymOutline({ className }) {
  return (
    // <svg
    // 	width="517"
    // 	height="517"
    // 	viewBox="0 0 517 517"
    // 	fill="none"
    // 	xmlns="http://www.w3.org/2000/svg"
    // 	className={className}
    // >
    // 	<path
    // 		fillRule="evenodd"
    // 		clipRule="evenodd"
    // 		d="M392 18H125C65.9055 18 18 65.9055 18 125V392C18 451.094 65.9055 499 125 499H392C451.094 499 499 451.094 499 392V125C499 65.9055 451.094 18 392 18ZM125 0C55.9644 0 0 55.9644 0 125V392C0 461.036 55.9644 517 125 517H392C461.036 517 517 461.036 517 392V125C517 55.9644 461.036 0 392 0H125Z"
    // 		fill="currentColor"
    // 	/>
    // 	<path
    // 		d="M186.111 359.963C186.675 355.021 183.522 350.416 178.711 349.155C173.9 347.894 168.893 350.361 166.961 354.944C158.34 375.396 135.761 386.937 113.664 381.147C89.4222 374.794 74.9201 349.991 81.2732 325.749C87.064 303.652 108.196 289.636 130.247 292.154C135.189 292.718 139.794 289.564 141.055 284.753C142.316 279.942 139.849 274.935 135.266 273.003C114.814 264.382 103.272 241.803 109.063 219.707C114.854 197.61 135.986 183.594 158.037 186.111C162.979 186.675 167.584 183.522 168.845 178.711C170.106 173.899 167.639 168.893 163.056 166.961C142.604 158.34 131.063 135.761 136.853 113.664C143.206 89.4221 168.009 74.9201 192.251 81.2731C214.348 87.0639 228.364 108.196 225.846 130.247C225.282 135.189 228.436 139.794 233.247 141.055C238.058 142.315 243.065 139.849 244.997 135.266C253.618 114.814 276.197 103.272 298.293 109.063C320.39 114.854 334.406 135.986 331.889 158.037C331.325 162.979 334.478 167.584 339.289 168.845C344.101 170.106 349.107 167.639 351.039 163.056C359.66 142.604 382.239 131.063 404.336 136.853C428.578 143.206 443.08 168.009 436.727 192.251C430.453 216.193 406.181 230.636 382.231 224.869C376.938 223.594 371.597 226.789 370.217 232.056L370.211 232.078C368.831 237.345 371.918 242.748 377.156 244.234C400.856 250.954 414.925 275.445 408.65 299.387C403.096 320.58 383.426 334.346 362.364 333.208C357.622 332.952 353.354 336.065 352.15 340.658C350.947 345.252 353.139 350.058 357.397 352.16C376.311 361.498 386.701 383.142 381.147 404.336C374.794 428.578 349.991 443.08 325.749 436.727C303.652 430.936 289.636 409.804 292.154 387.753C292.718 382.811 289.564 378.206 284.753 376.945C279.942 375.684 274.935 378.151 273.003 382.734C264.382 403.186 241.803 414.728 219.707 408.937C197.61 403.146 183.594 382.014 186.111 359.963Z"
    // 		stroke="currentColor"
    // 		strokeWidth="20"
    // 		strokeLinejoin="round"
    // 	/>
    // </svg>
    /* @__PURE__ */ jsx("svg", { width: "120", height: "120", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("title", { children: "Layer 1" }),
      /* @__PURE__ */ jsx("path", { d: "m0,41.7795c0,-23.0742 18.7053,-41.7795 41.7795,-41.7795l96.4415,0c23.074,0 37.779,17.7053 41.779,41.7795l0,96.4415c0,23.074 -18.705,41.779 -41.779,41.779l-96.4415,0c-23.0742,0 -41.7795,-18.705 -41.7795,-41.779l0,-96.4415z", stroke: "#F9A81F", fill: "none", id: "svg_1" }),
      /* @__PURE__ */ jsx("path", { id: "svg_2", d: "m88.11966,12.8791c-35.89878,0 -64.99997,32.23716 -64.99997,71.99743c0,13.58649 3.44038,26.28369 9.35944,37.12859l-9.35944,30.307l26.06021,-9.8724c10.85953,9.01947 24.31469,14.4394 38.93975,14.4394c35.89875,0 65.00003,-32.23727 65.00003,-72.00258s-29.10127,-71.99743 -65.00003,-71.99743l0,0zm-10.66035,99.64635l-10.85517,16.0191l-29.85304,-44.0972l29.84859,-44.10752l10.85963,16.05574l-18.99349,28.05179l18.99349,28.0781zm32.83028,15.99823l-10.85071,-16.04004l18.99873,-28.04656l-18.99873,-28.0572l10.85071,-16.04005l29.85308,44.06577l-29.85308,44.11807z", stroke: "#623908", fill: "none" }),
      /* @__PURE__ */ jsx("text", { transform: "matrix(0.763118, 0, 0, 0.891039, 14.1841, 8.91015)", fontStyle: "italic", xmlSpace: "preserve", textAnchor: "start", fontFamily: "Noto Sans JP", fontSize: "18", stroke: "#F9A81F", strokeWidth: "1", fill: "none", id: "svg_4", y: "87.96726", x: "65.80506", children: "gctuvc" }),
      /* @__PURE__ */ jsx("path", { id: "svg_5", d: "m273,147", stroke: "#F9A81F", fill: "none" }),
      /* @__PURE__ */ jsx("path", { id: "svg_6", d: "m93,97", stroke: "#F9A81F", fill: "none" })
    ] }) })
  );
}
const projectLinks = [
  {
    name: "About",
    href: ""
  },
  {
    name: "Data & Privacy Policy",
    href: ""
  }
];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "container mx-auto py-6 lg:rounded-xl mt-6 bg-zinc-100 dark:bg-neutral-800 lg:mb-4 lg:rounded-xl max-lg:rounded-t-lg max-md:rounded-t-0 max-md:mb-16", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx(SymOutline, { className: "size-12" }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 lg:col-span-1", children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold", children: "Virtual Campus" }),
        /* @__PURE__ */ jsx("div", { className: "text-secondary mb-2", children: "Virtual Campus is An open initiative to promote collaboration and knowledge sharing among students of Ghana Communication Technology University (GCTU)." }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-4 flex-wrap", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center text-secondary shrink-0", children: [
          /* @__PURE__ */ jsx("div", { className: "size-2 rounded-full bg-green-500" }),
          "All systems green"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-start-3 col-span-1", children: [
        /* @__PURE__ */ jsx("header", { className: "font-bold", children: "Project" }),
        /* @__PURE__ */ jsx("ul", { className: "text-secondary", children: projectLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:underline", href: link.href, children: link.name }) }, link.href)) })
      ] })
    ] })
  ] });
}
const colors = ["#ffe12e", "#4d8c3a", "#0060ff", "#ff7d10", "#4e412b"];
const BA = typeof BoringAvatar.default !== "undefined" ? BoringAvatar.default : BoringAvatar;
function Avatar({
  className,
  name,
  size = 28,
  square,
  variant = "beam"
}) {
  return /* @__PURE__ */ jsx("div", { className: clsx("self-start", className), children: /* @__PURE__ */ jsx(
    BA,
    {
      colors,
      size,
      name,
      square,
      variant
    }
  ) });
}
function Username({ showVerfied, user }) {
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex gap-1 items-center", children: [
    "@",
    user.username,
    " ",
    user.verified && showVerfied && /* @__PURE__ */ jsx("div", { className: "inline-block i-lucide-verified text-green-500" }),
    user.username === "frimp" && /* @__PURE__ */ jsx("div", { className: "inline-block i-lucide-crown text-amber-500" }),
    user.role === "moderator" && /* @__PURE__ */ jsx("div", { className: "inline-block i-lucide-zap text-red-500" })
  ] });
}
const links$1 = [
  {
    title: "Discussions",
    href: "/discussions",
    icon: "i-lucide-message-circle"
  },
  {
    title: "Timetable",
    href: "/timetable",
    icon: "i-lucide-calendar-range"
  },
  {
    title: "Library",
    href: "/library",
    icon: "i-lucide-library-square"
  },
  {
    title: "Events",
    href: "/events",
    icon: "i-lucide-sparkle"
  },
  {
    title: "Communities",
    href: "/communities",
    icon: "i-lucide-users-round"
  },
  {
    title: "Marketplace",
    href: "/market",
    icon: "i-lucide-shopping-bag"
  },
  {
    title: "Parlon",
    href: "/parlon",
    icon: "i-lucide-video text-pink-500"
  }
  // {
  // 	title: "Games",
  // 	href: "/games",
  // 	icon: "i-lucide-gamepad-2",
  // },
];
function Navbar() {
  const { user, unreadNotifications } = useRouteLoaderData("root") || {};
  return /* @__PURE__ */ jsx("header", { className: "container mx-auto border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-zinc-50 dark:bg-neutral-900 z-10", children: /* @__PURE__ */ jsx("div", { className: "rounded-xl py-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex gap-4 items-center", children: /* @__PURE__ */ jsx(Link, { className: "block shrink-0", to: "/", children: /* @__PURE__ */ jsx("img", { src: "/sym.svg", width: 32, className: "inline", alt: "virtual-campus" }) }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
      Boolean(user) && /* @__PURE__ */ jsxs(
        NavLink,
        {
          className: ({ isActive }) => clsx(
            "size-8 rounded-full border-2 border-transparent bg-zinc-100 hover:bg-zinc-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center relative",
            { "!bg-blue-600 text-white group is-active": isActive }
          ),
          to: "/notifications",
          children: [
            /* @__PURE__ */ jsx("div", { className: "i-lucide-bell text-xl" }),
            Boolean(unreadNotifications) && /* @__PURE__ */ jsx("div", { className: "rounded-full absolute -top-1 -right-2 bg-blue-600 text-white font-medium px-1 text-xs !group-[.is-active]:bg-blue-700", children: unreadNotifications })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full p-1 pe-2 transition-[background] duration-200", children: user ? /* @__PURE__ */ jsxs(
        NavLink,
        {
          to: `/p/${user.username}`,
          className: ({ isActive }) => clsx("flex items-center gap-2 ", {
            "group is-active": isActive
          }),
          children: [
            /* @__PURE__ */ jsx(
              Avatar,
              {
                className: "rounded-full border-2 border-transparent group-[.is-active]:border-blue-600 group-[.is-active]:dark:border-amber-500 transition-[border-color] duration-200",
                size: 22,
                name: user.username
              }
            ),
            " ",
            /* @__PURE__ */ jsx(Username, { user })
          ]
        }
      ) : /* @__PURE__ */ jsxs(Link, { className: "flex gap-2 items-center", to: "/login", children: [
        /* @__PURE__ */ jsx("div", { className: "i-lucide-arrow-right-circle opacity-50" }),
        "Login"
      ] }) })
    ] })
  ] }) }) });
}
function BottomNav() {
  const [showMore, setShowMore] = React.useState(false);
  const location2 = useLocation();
  React.useEffect(() => {
    setShowMore(false);
  }, [location2.pathname]);
  return /* @__PURE__ */ jsxs("div", { className: "fixed left-0 bottom-0 w-full lg:hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx(
          "bg-zinc-50 dark:bg-neutral-900 p-4 border-t dark:border-neutral-700 container mx-auto h-[15rem] group overflow-hidden transition-[height] duration-200",
          { "!h-0 !py-0 collapsed": !showMore }
        ),
        children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col items-end", children: links$1.slice(3).map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          NavLink,
          {
            className: ({ isActive }) => clsx(
              "px-2 py-1 block rounded-lg flex items-center gap-4 hover:bg-zinc-100 dark:hover:bg-neutral-800 group text-secondary",
              { "!bg-blue-600 !text-white is-active": isActive }
            ),
            to: link.href,
            children: [
              /* @__PURE__ */ jsx("div", { children: link.title }),
              /* @__PURE__ */ jsx("div", { className: "text-secondary group-[.is-active]:!bg-blue-600 group-[.is-active]:!text-white text-xl py-1 rounded-full", children: /* @__PURE__ */ jsx("div", { className: link.icon }) })
            ]
          }
        ) }, link.href)) })
      }
    ),
    /* @__PURE__ */ jsx(
      "nav",
      {
        className: " border-zinc-200 dark:border-neutral-800 bg-zinc-50 dark:bg-zinc-900 static z-10",
        style: { paddingBottom: "env(safe-area-inset-bottom)" },
        children: /* @__PURE__ */ jsxs("ul", { className: "flex p-2 justify-around", children: [
          links$1.slice(0, 3).map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            NavLink,
            {
              to: link.href,
              className: ({ isActive }) => clsx(
                "rounded-lg font-medium flex flex-col items-center gap-1 transition-[background] duration-200 group",
                {
                  "!bg-opacity-100 is-active": isActive
                }
              ),
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-secondary group-hover:bg-zinc-100 group-hover:dark:bg-neutral-800 group-[.is-active]:!bg-blue-600 group-[.is-active]:!text-white text-xl px-4 py-1 rounded-full", children: /* @__PURE__ */ jsx("div", { className: link.icon }) }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-secondary", children: link.title })
              ]
            }
          ) }, link.href)),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: clsx("group", { "is-active": showMore }),
              onClick: () => setShowMore(!showMore),
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-secondary group-[.is-active]:!bg-amber-600 group-[.is-active]:!text-white text-xl px-4 py-1 rounded-full", children: /* @__PURE__ */ jsx("div", { className: "i-lucide-menu" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-secondary", children: "More" })
              ]
            }
          ) })
        ] })
      }
    )
  ] });
}
function SideNav() {
  return /* @__PURE__ */ jsx("ul", { className: "", children: links$1.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
    NavLink,
    {
      to: link.href,
      className: ({ isActive }) => clsx(
        "px-2 py-1 hover:bg-zinc-100 dark:hover:bg-neutral-800 rounded-full font-medium flex items-center gap-2 transition-[background] duration-200",
        {
          "!bg-zinc-200 !dark:bg-neutral-800": isActive,
          "text-secondary": !isActive
        }
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: clsx("opacity-70", link.icon) }),
        " ",
        link.title
      ]
    }
  ) }, link.href)) });
}
function PendingUI() {
  const navigation = useNavigation();
  const intervalRef = React.useRef();
  const divRef = React.useRef(null);
  React.useEffect(() => {
    if (!divRef.current) return;
    const loader2 = divRef.current;
    if (["loading", "submitting"].includes(navigation.state)) {
      intervalRef.current = setInterval(() => {
        const previous = Number.parseInt(loader2.style.width);
        if (previous >= 80) {
          clearInterval(intervalRef.current);
          return;
        }
        loader2.style.width = `${previous + 2}%`;
      }, 200);
    }
    return () => {
      if (intervalRef.current) {
        loader2.style.width = "100%";
        setTimeout(() => {
          loader2.style.width = "0%";
        }, 200);
        clearInterval(intervalRef.current);
        intervalRef.current = void 0;
      }
    };
  }, [navigation]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "loader sticky left-0 top-0 h-1 -mb-1 bg-blue-500 transition-[width] duration-200 transition-ease-in z-20",
      style: { width: "0%" },
      ref: divRef
    }
  );
}
const MAX_COOKIE_AGE = 60 * 60 * 24 * 30;
const userPrefs = createCookie("user-prefs", {
  maxAge: MAX_COOKIE_AGE
});
const authCookie = createCookie("auth", {
  secrets: ((_a = process.env.COOKIE_SECRET) == null ? void 0 : _a.split(",")) ?? [],
  maxAge: MAX_COOKIE_AGE,
  secure: true
});
function signUser(user) {
  return jwt.sign({ sub: user.id }, process.env.SECRET_KEY);
}
function decodeToken(token) {
  try {
    return jwt.verify(
      token,
      process.env.SECRET_KEY
    );
  } catch (err) {
    return null;
  }
}
async function checkAuth(request) {
  const { token } = await authCookie.parse(request.headers.get("Cookie")) || {};
  const { sub } = decodeToken(token) || {};
  if (!sub) {
    throw json({ type: "unauthenticated" }, { status: 401 });
  }
  return sub;
}
let prisma;
if (process.env.NODE_ENV === "production") {
  prisma = installMiddleware(new PrismaClient());
  prisma.$connect();
} else {
  if (!global.__db) {
    global.__db = installMiddleware(new PrismaClient());
    global.__db.$connect();
  }
  prisma = global.__db;
}
function installMiddleware(prisma2) {
  return prisma2.$extends(
    Prisma.defineExtension({
      query: {
        post: {
          async delete({ args }) {
            return prisma2.post.update({ ...args, data: { deleted: true } });
          },
          async deleteMany({ args }) {
            return prisma2.post.updateMany({ ...args, data: { deleted: true } });
          },
          async findMany({ args }) {
            return prisma2.post.findMany({
              ...args,
              where: { ...args.where, deleted: false }
            });
          },
          async count({ args }) {
            return prisma2.post.count({
              ...args,
              where: { ...args.where, deleted: false }
            });
          },
          async findFirst({ args }) {
            return prisma2.post.findFirst({
              ...args,
              where: { ...args.where, deleted: false }
            });
          }
        }
      }
    })
  );
}
function useColorScheme() {
  const [scheme, setScheme] = React.useState("light");
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.matches) {
      setScheme("dark");
    }
    const listener = (e) => {
      if (e.matches) {
        setScheme("dark");
      } else {
        setScheme("light");
      }
    };
    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);
  return scheme;
}
const Anchor = React.forwardRef(
  ({ className, variant = "primary", ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      Link,
      {
        ref,
        className: clsx(
          "inline-flex items-center gap-2 rounded-lg bg-blue-600 px-2 py-1 font-medium",
          {
            "bg-zinc-200 px-2 py-1 dark:bg-neutral-800": variant === "neutral",
            "text-white": variant === "primary"
          },
          className
        ),
        ...props
      }
    );
  }
);
const errorLabels = {
  600: "An unexpected error occured",
  404: "Not Found",
  401: "Login Required"
};
const errorDescriptions = {
  600: "This must be strange to you. It's strange to us too. we will look into this and resolve it as soon as possible.",
  404: "There is nothing on this page. Perhaps, what was on this page is long gone. Sorry!",
  401: "You need to be logged in to perform this action or access this page."
};
function getErrorLabel(code) {
  return errorLabels[code] || errorLabels[600];
}
function getErrorDescription(code) {
  return errorDescriptions[code] || errorDescriptions[600];
}
function ErrorBoundary() {
  const error = useRouteError();
  const location2 = useLocation();
  const statusCode = isRouteErrorResponse(error) ? error.status : 600;
  React.useEffect(() => {
    if (statusCode === 404) return;
    if (isRouteErrorResponse(error)) {
      posthog.capture("route-error-response", {
        data: error.data,
        statusCode,
        page: location2.pathname
      });
    } else {
      posthog.capture("application-error", {
        stack: error.stack || error.message,
        page: location2.pathname
      });
    }
  }, [error, statusCode, location2]);
  const stackTrace = error.stack;
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(CommonHead, {}),
      /* @__PURE__ */ jsxs("title", { children: [
        statusCode,
        ": ",
        getErrorLabel(statusCode)
      ] }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("div", { className: "min-h-[60vh] mt-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex mx-auto gap-4 max-w-[28rem] px-4", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(SymOutline, { className: "size-12" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h1", { className: "font-bold", children: [
              statusCode,
              ": ",
              getErrorLabel(statusCode)
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: getErrorDescription(statusCode) }),
            /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxs(Anchor, { to: "/discussions", children: [
              "Go Home ",
              /* @__PURE__ */ jsx("div", { className: "i-lucide-arrow-right opacity-50" })
            ] }) })
          ] })
        ] }),
        process.env.NODE_ENV === "development" && stackTrace && /* @__PURE__ */ jsxs("div", { className: "p-4 border-t dark:border-neutral-800 mt-8 overflow-y-auto", children: [
          /* @__PURE__ */ jsxs("header", { className: "flex font-mono bg-red-600 text-white items-center inline-flex rounded-lg px-2 text-sm gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "i-lucide-eye opacity-70" }),
            " Dev only"
          ] }),
          /* @__PURE__ */ jsx("pre", { className: "text-sm text-gray-500 mt-4", children: stackTrace })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const authRoutes = [
  "/login",
  "/create-account",
  "/forgot-password",
  "/reset-password",
  "/account-created",
  "/resend-verification"
];
const loader$E = async ({ request }) => {
  let user;
  let unreadNotifications = 0;
  try {
    const userId = await checkAuth(request);
    user = await prisma.user.findFirst({ where: { id: userId } });
    unreadNotifications = await prisma.notificationSubscriber.count({
      where: { userId, read: false }
    });
  } catch (error) {
  }
  return json$1({ user, unreadNotifications });
};
const links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
function App() {
  const { user, unreadNotifications } = useLoaderData();
  const scheme = useColorScheme();
  const revalidator = useRevalidator();
  const location2 = useLocation();
  const hideNav = authRoutes.includes(location2.pathname);
  React.useEffect(() => {
    var _a2, _b;
    if (scheme === "light") {
      (_a2 = document.querySelector('meta[name="theme-color"]')) == null ? void 0 : _a2.setAttribute("content", "#FAFAFA");
    } else {
      (_b = document.querySelector('meta[name="theme-color"]')) == null ? void 0 : _b.setAttribute("content", "#171717");
    }
  }, [scheme]);
  React.useEffect(() => {
    function refresh() {
      if (document.visibilityState !== "visible") {
        return;
      }
      revalidator.revalidate();
    }
    document.addEventListener("visibilitychange", refresh);
    return () => document.removeEventListener("visibilitychange", refresh);
  }, [revalidator]);
  React.useEffect(() => {
    try {
      if (unreadNotifications > 0) {
        navigator.setAppBadge(unreadNotifications);
      } else {
        navigator.clearAppBadge();
      }
    } catch {
    }
  }, [unreadNotifications]);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(CommonHead, {}),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(PendingUI, {}),
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto !max-md:px-0", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-4", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx("col-span-1 max-lg:hidden", {
              hidden: hideNav
            }),
            children: /* @__PURE__ */ jsx("div", { className: "max-w-[15rem] sticky top-[4rem]", children: /* @__PURE__ */ jsx(SideNav, {}) })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx("col-span-1 lg:col-span-4 mt-2", {
              "lg:col-span-5": hideNav
            }),
            children: /* @__PURE__ */ jsx(Outlet, {})
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {}),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(BottomNav, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  default: App,
  links,
  loader: loader$E
}, Symbol.toStringTag, { value: "Module" }));
const values = {
  initialized: false,
  values: {},
  get(key) {
    if (!this.initialized) {
      const json2 = fs.readFileSync(`res/${process.env.SCHOOL}.json`, "utf-8");
      this.values = JSON.parse(json2);
      this.initialized = true;
    }
    return lodashGet(this.values, key);
  },
  meta() {
    return {
      id: this.get("id"),
      shortName: this.get("shortName")
    };
  }
};
const loader$D = async ({ params }) => {
  const { year, programme, level, sem } = params;
  const schedule = await prisma.schedule.findMany({
    where: {
      year,
      programme: { slug: programme },
      level: Number(level),
      semester: Number(sem)
    },
    include: {
      course: true
    }
  });
  const semesterEnd = values.get("examination.start").replace(/-/g, "");
  const schoolId = values.get("id");
  const events = schedule.map((lesson) => {
    const _hours = (lesson.timeEnd - lesson.timeStart) / 3600;
    const hours = Math.floor(_hours);
    const minutes = (_hours - hours) * 60;
    const hour = Math.floor(lesson.timeStart / 3600);
    const minute = (lesson.timeStart - hour * 3600) / 60;
    const date = dayjs().set("day", lesson.day).set("hour", hour).set("minute", minute).set("second", 0).set("millisecond", 0);
    const day = date.format("dd").toUpperCase();
    const id = [schoolId, programme, year, level, sem, lesson.id].join("-");
    const eventId = crypto.createHash("md5").update(id).digest("hex");
    const title = `${lesson.course.code} ${lesson.course.name}`;
    return {
      title,
      duration: { hours: Math.floor(hours), minutes: Math.floor(minutes) },
      location: lesson.location,
      alarms: [
        {
          trigger: { before: true, minutes: 30 },
          action: "audio",
          description: title
        },
        {
          trigger: { before: true, minutes: 5 },
          action: "audio",
          description: title
        }
      ],
      start: [
        date.year(),
        date.month() + 1,
        date.date(),
        date.hour(),
        date.minute()
      ],
      uid: eventId,
      recurrenceRule: `FREQ=WEEKLY;BYDAY=${day};INTERVAL=1;UNTIL=${semesterEnd}T235959Z`
    };
  });
  const { value: icsRender } = ics.createEvents(events);
  const fn = `${programme}-${year}-${sem}.ics`;
  const cal = new File([icsRender], fn, {});
  return new Response(cal, {
    headers: {
      "Content-Type": "text/calendar",
      "Content-Disposition": `attachment; filename="${fn}"`
    }
  });
};
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$D
}, Symbol.toStringTag, { value: "Module" }));
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
function timeFromString(time) {
  if (!time) return 0;
  const [hour, minute] = time.split(":").map((t) => Number.parseInt(t, 10));
  return (hour * 60 + minute) * 60;
}
function timeToString(time) {
  return dayjs().startOf("day").add(time, "seconds").format("hh:mma");
}
function timeToInputValue(time) {
  return dayjs().startOf("day").add(time, "seconds").format("HH:mm:ss");
}
function isBefore(startTime, endTime) {
  return timeFromString(startTime) < timeFromString(endTime);
}
function useAsyncFetcher() {
  const promise = React.useRef();
  const fetcher = useFetcher();
  const submit = React.useCallback(
    (target, options) => {
      let p = new Promise((resolve, reject) => {
        promise.current = [resolve, reject];
        fetcher.submit(target, options);
      });
      return p;
    },
    [fetcher]
  );
  React.useEffect(() => {
    if (!promise.current) return;
    const [resolve] = promise.current;
    if (fetcher.data) {
      resolve(fetcher.data);
    }
  }, [fetcher.data]);
  return { submit };
}
const Button = React.forwardRef(
  ({ className, variant = "primary", ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        className: clsx(
          "inline-flex items-center gap-2 rounded-lg bg-blue-600 px-2 py-1 font-medium",
          {
            "bg-zinc-200 px-2 py-1 !dark:bg-neutral-800": variant === "neutral",
            "text-white": variant === "primary",
            "!bg-amber-500 text-white": variant === "secondary",
            "opacity-60": props.disabled
          },
          className
        ),
        type: props.type,
        ...props
      }
    );
  }
);
const Input = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        ref,
        className: clsx(
          "block w-full rounded-lg bg-zinc-200 dark:bg-neutral-800 px-2 py-1 focus:ring-2",
          className
        ),
        ...props
      }
    );
  }
);
function useMounted() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  return mounted;
}
function Modal({ children, className, onClose, open }) {
  const ref = React.useRef(null);
  const mounted = useMounted();
  React.useEffect(() => {
    var _a2, _b, _c;
    if (open) {
      (_a2 = ref.current) == null ? void 0 : _a2.showModal();
    } else {
      (_b = ref.current) == null ? void 0 : _b.close();
    }
    (_c = ref.current) == null ? void 0 : _c.addEventListener("close", () => {
      onClose == null ? void 0 : onClose();
    });
  }, [open, onClose]);
  if (!mounted) {
    return null;
  }
  return ReactDOM.createPortal(
    /* @__PURE__ */ jsx(
      "dialog",
      {
        className: clsx(
          "rounded-xl border border-zinc-300 dark:border-neutral-700 shadow dark:bg-neutral-900",
          className
        ),
        ref,
        children
      }
    ),
    document.body
  );
}
function LargeSelect({
  children,
  label,
  newForm,
  onAdd,
  onSelect,
  onToggle,
  open,
  options
}) {
  const [state, setState] = React.useState("select");
  function showAdd() {
    setState("add");
  }
  const handleModalClose = React.useCallback(() => onToggle(false), [onToggle]);
  function hide() {
    onToggle(false);
  }
  async function handleOnAdd(data) {
    await onAdd(data);
    setState("select");
  }
  React.useEffect(() => {
    if (!open) {
      setState("select");
    }
  }, [open]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "bg-zinc-200 dark:bg-neutral-800 px-2 py-1 rounded-lg font-medium flex-1 text-start flex items-center w-full",
        type: "button",
        onClick: () => onToggle(true),
        children: [
          /* @__PURE__ */ jsx("span", { className: "flex-1 line-clamp-1", children }),
          /* @__PURE__ */ jsx("div", { className: "i-lucide-mouse-pointer-2 text-secondary" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      Modal,
      {
        onClose: handleModalClose,
        open,
        className: "w-full max-w-[24rem]",
        children: /* @__PURE__ */ jsx("div", { className: "w-full rounded-lg bg-zinc-100 dark:bg-neutral-900 dark:border border-neutral-800 h-[24rem] flex flex-col", children: state === "select" ? /* @__PURE__ */ jsx(
          SelectState,
          {
            onShowAdd: showAdd,
            onHide: hide,
            onSelect,
            options,
            label
          }
        ) : /* @__PURE__ */ jsx(
          FormState,
          {
            form: newForm,
            label,
            onAdd: handleOnAdd,
            onCancel: () => setState("select")
          }
        ) })
      }
    )
  ] });
}
function SelectState({
  label,
  onHide,
  onSelect,
  onShowAdd,
  options
}) {
  const [q, setQ] = React.useState("");
  const filteredOptions = React.useMemo(() => {
    return options.filter(
      (option) => option.label.toLowerCase().includes(q.toLowerCase())
    );
  }, [options, q]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "p-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-secondary flex gap-2 items-center mb-2 font-medium", children: [
        /* @__PURE__ */ jsx("div", { className: "i-lucide-scan-search" }),
        " Select ",
        label
      ] }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "text",
          placeholder: "Start typing…",
          value: q,
          onChange: (e) => setQ(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "flex-1 px-2 overflow-y-auto", children: [
      filteredOptions.length === 0 && /* @__PURE__ */ jsx("li", { className: "text-secondary", children: filteredOptions.length === 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
        "No option with ",
        /* @__PURE__ */ jsx("b", { children: q }),
        " found"
      ] }) : /* @__PURE__ */ jsx(Fragment, { children: "No options available. Try adding new." }) }),
      filteredOptions.map((option) => /* @__PURE__ */ jsx(
        "li",
        {
          className: "px-2 py-1 hover:bg-zinc-200 dark:hover:bg-neutral-800 rounded-lg focus-within:bg-zinc-200 dark:focus-within:bg-neutral-800",
          onClick: () => onSelect(option.value),
          onKeyDown: (e) => ["Enter", "Space"].includes(e.key) && onSelect(option.value),
          children: /* @__PURE__ */ jsx("button", { className: "block w-full text-start", type: "button", children: option.label })
        },
        option.value
      ))
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "border-t border-zinc-200 dark:border-neutral-800 flex justify-between p-2", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "inline-flex gap-2 items-center !bg-zinc-200 !dark:bg-neutral-800 px-2 rounded-md font-medium",
          onClick: onShowAdd,
          type: "button",
          children: [
            /* @__PURE__ */ jsx("div", { className: "i-lucide-list-plus text-secondary" }),
            " Add new"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "px-2 py-1 hover:bg-zinc-200 dark:hover:bg-neutral-800 rounded-lg font-medium",
          onClick: onHide,
          type: "button",
          children: "Cancel"
        }
      )
    ] })
  ] });
}
function FormState({ form, label, onAdd, onCancel }) {
  const formMethods = useForm();
  const { handleSubmit } = formMethods;
  const [status, setStatus] = React.useState("idle");
  async function submit(data) {
    setStatus("loading");
    try {
      await onAdd(data);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }
  return /* @__PURE__ */ jsx(FormProvider, { ...formMethods, children: /* @__PURE__ */ jsxs("form", { className: "flex flex-col h-full", onSubmit: handleSubmit(submit), children: [
    /* @__PURE__ */ jsx("header", { className: "p-2", children: /* @__PURE__ */ jsxs("div", { className: "text-sm text-secondary flex gap-2 items-center font-medium", children: [
      /* @__PURE__ */ jsx("div", { className: "i-lucide-list-plus" }),
      " Add new ",
      label
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1", children: form }),
    /* @__PURE__ */ jsxs("footer", { className: "border-t border-zinc-200 dark:border-neutral-800 flex justify-between p-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "px-2 py-1 hover:bg-zinc-200 dark:hover:bg-neutral-800 rounded-lg font-medium",
          onClick: onCancel,
          type: "button",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "submit",
          className: "inline-flex gap-2 items-center !bg-zinc-200 !dark:bg-neutral-800 px-2 rounded-md font-medium",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: clsx("text-secondary", {
                  "i-lucide-corner-down-left": status !== "loading",
                  "i-svg-spinners-dot-revolve": status === "loading"
                })
              }
            ),
            " ",
            status === "loading" ? "Saving…" : "Save"
          ]
        }
      )
    ] })
  ] }) });
}
function LessonForm({
  courses: coursesRaw,
  instructors: instructorsRaw
}) {
  const { level, day } = useParams();
  const { programme } = useLoaderData();
  const { user } = useRouteLoaderData("root") || {};
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      consent: false,
      courseId: null,
      timeEnd: dayjs().add(1, "hour").format("HH:mm"),
      instructorId: null,
      location: "",
      timeStart: dayjs().format("HH:mm"),
      programmeId: programme == null ? void 0 : programme.id
    }
  });
  const [showCourseSelect, setShowCourseSelect] = React.useState(false);
  const [showInstructorSelect, setShowInstructorSelect] = React.useState(false);
  const fetcher = useAsyncFetcher();
  const submit = useSubmit();
  const navigation = useNavigation();
  const courses = React.useMemo(
    () => coursesRaw.map(({ code, id, name }) => ({
      label: `${code}: ${name}`,
      value: id
    })),
    [coursesRaw]
  );
  const instructors = React.useMemo(
    () => instructorsRaw.map(({ id, name }) => ({ label: name, value: id })),
    [instructorsRaw]
  );
  const $instructor = watch("instructorId");
  const $course = watch("courseId");
  const instructor = React.useMemo(
    () => instructors.find((i) => i.value === $instructor),
    [$instructor, instructors]
  );
  const course = React.useMemo(
    () => courses.find((i) => i.value === $course),
    [$course, courses]
  );
  async function handleCourseCreate(data) {
    await fetcher.submit(JSON.stringify(data), {
      action: "/courses",
      encType: "application/json",
      method: "POST"
    });
  }
  async function handleInstructorCreate(data) {
    await fetcher.submit(JSON.stringify(data), {
      action: "/instructors",
      encType: "application/json",
      method: "POST"
    });
  }
  async function addLesson(data) {
    if (!(data.instructorId && data.courseId)) {
      return;
    }
    submit(JSON.stringify(data), {
      action: "..",
      encType: "application/json",
      method: "POST"
    });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(addLesson), children: [
    /* @__PURE__ */ jsx("header", { className: "font-bold text-lg mb-2", children: "Add Lesson" }),
    !user && /* @__PURE__ */ jsxs("div", { className: "mb-2 p-2 rounded-lg bg-blue-50 text-blue-500 my-2 dark:bg-blue-700 dark:bg-opacity-10 dark:text-blue-400", children: [
      "You need to",
      " ",
      /* @__PURE__ */ jsx(Link, { className: "underline", to: "/login", children: "Login" }),
      " ",
      "first to be able to add a timetable entry."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "border border-zinc-200 dark:border-neutral-600 rounded-lg px-2", children: programme == null ? void 0 : programme.name }),
      /* @__PURE__ */ jsxs("div", { className: "border border-zinc-200 dark:border-neutral-600 rounded-lg px-2", children: [
        "L",
        level
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border border-zinc-200 dark:border-neutral-600 rounded-lg px-2", children: [
        days[Number(day)],
        "s"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-secondary flex gap-2 mt-2", children: [
      /* @__PURE__ */ jsx("div", { className: "i-lucide-corner-left-up" }),
      " You're adding a lesson for the above"
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "block mt-4", children: [
      /* @__PURE__ */ jsx("span", { children: "Course" }),
      /* @__PURE__ */ jsx(
        LargeSelect,
        {
          label: "Course",
          open: showCourseSelect,
          onToggle: setShowCourseSelect,
          options: courses,
          newForm: /* @__PURE__ */ jsx(CourseForm, {}),
          onAdd: handleCourseCreate,
          onSelect: (value) => {
            setValue("courseId", value);
            setShowCourseSelect(false);
          },
          children: (course == null ? void 0 : course.label) ?? "Select a course"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "mt-2 block", children: [
      /* @__PURE__ */ jsx("span", { children: "Instructor" }),
      /* @__PURE__ */ jsx(
        LargeSelect,
        {
          label: "Instructor",
          open: showInstructorSelect,
          onToggle: setShowInstructorSelect,
          options: instructors,
          newForm: /* @__PURE__ */ jsx(InstructorForm, {}),
          onAdd: handleInstructorCreate,
          onSelect: (value) => {
            setValue("instructorId", value);
            setShowInstructorSelect(false);
          },
          children: (instructor == null ? void 0 : instructor.label) ?? "Select an instructor"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 mt-2 gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsx("span", { children: "Start time" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "time",
            ...register("timeStart", {
              required: true
            })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsx("span", { children: "End time" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "time",
            ...register("timeEnd", {
              required: true,
              validate: (value) => isBefore(watch("timeStart"), value) || "Should be after start time"
            })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsx("span", { children: "Location" }),
        /* @__PURE__ */ jsx(Input, { ...register("location", { required: true }) }),
        /* @__PURE__ */ jsx("small", { className: "text-secondary", children: "Eg. SF24 (Group 1)" })
      ] }) })
    ] }),
    errors.timeEnd && /* @__PURE__ */ jsx("span", { className: "text-red-500 text-sm", children: errors.timeEnd.message }),
    /* @__PURE__ */ jsxs("label", { className: "flex gap-2 mt-2", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "input",
        {
          className: "!border border-zinc-300 dark:bg-neutral-600 dark:border-neutral-500 rounded-md w-5 h-5",
          type: "checkbox",
          ...register("consent", { required: true })
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { children: [
        "By clicking ",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Save lesson" }),
        ", you agree that these details are correct and conform to the",
        " ",
        /* @__PURE__ */ jsx("a", { className: "underline", href: "/crowdsourcing#ethics", children: "crowdsourcing ethics" }),
        ". Providing false information can lead to permanent ban."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxs(Button, { disabled: !user || navigation.state === "submitting", children: [
      /* @__PURE__ */ jsx("div", { className: "i-lucide-corner-down-left opacity-50" }),
      " Save lesson"
    ] }) })
  ] });
}
function CourseForm() {
  const { register } = useFormContext();
  return /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
    /* @__PURE__ */ jsxs("label", { className: "block", children: [
      "Code",
      /* @__PURE__ */ jsx(Input, { ...register("code", { required: true }) }),
      /* @__PURE__ */ jsx("small", { className: "text-secondary", children: "Eg. Math 171" })
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "block mt-2", children: [
      "Name",
      /* @__PURE__ */ jsx(Input, { ...register("name", { required: true }) }),
      /* @__PURE__ */ jsx("small", { className: "text-secondary", children: "Eg. Logic and Set Theory" })
    ] })
  ] });
}
function InstructorForm() {
  const { register } = useFormContext();
  return /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxs("label", { className: "block", children: [
    "Name",
    /* @__PURE__ */ jsx(Input, { ...register("name", { required: true }) })
  ] }) });
}
const loader$C = async ({ params }) => {
  const courses = await prisma.course.findMany({ orderBy: { code: "asc" } });
  const instructors = await prisma.instructor.findMany({
    orderBy: { name: "asc" }
  });
  const programme = await prisma.programme.findFirst({
    where: { slug: params.programme }
  });
  return { courses, instructors, programme };
};
function AddLesson() {
  const { courses, instructors } = useLoaderData();
  return /* @__PURE__ */ jsx(LessonForm, { courses, instructors });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AddLesson,
  loader: loader$C
}, Symbol.toStringTag, { value: "Module" }));
function DaysHeader({ className, selectedDay = 1 }) {
  const { year, programme, level, sem } = useParams();
  return /* @__PURE__ */ jsx("div", { className: clsx("flex gap-2", className), children: days.map((day, index) => /* @__PURE__ */ jsx(
    Link,
    {
      to: `/timetable/${year}/${programme}/${level}/${sem}/${index}`,
      className: clsx(
        "text-center font-medium flex-1 px-2 bg-zinc-200 dark:bg-neutral-800 rounded-lg text-secondary hover:bg-zinc-300 dark:hover:bg-neutral-700 transition-[background] duration-200",
        {
          "!bg-blue-600 !text-white": index === selectedDay
        }
      ),
      children: day.substring(0, 3)
    },
    index
  )) });
}
function LessonItem({ checked, lesson, onClick }) {
  const [showEdit, setShowEdit] = React.useState(false);
  const fetcher = useAsyncFetcher();
  const { user } = useRouteLoaderData("root") || {};
  const handleModalClose = React.useCallback(() => setShowEdit(false), []);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      timeStart: timeToInputValue(lesson.timeStart),
      timeEnd: timeToInputValue(lesson.timeEnd),
      location: lesson.location
    }
  });
  function handleEdit(e) {
    e.preventDefault();
    e.stopPropagation();
    setShowEdit(true);
  }
  async function handleDelete() {
    const yes = confirm(
      "Are you sure you want to delete this lesson? This cannot be undone."
    );
    if (!yes) {
      return;
    }
    await fetcher.submit(null, {
      encType: "application/json",
      action: `/lessons/${lesson.id}`,
      method: "DELETE"
    });
    setShowEdit(false);
  }
  async function saveLesson(data) {
    await fetcher.submit(JSON.stringify(data), {
      encType: "application/json",
      action: `/lessons/${lesson.id}`,
      method: "PATCH"
    });
    setShowEdit(false);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: clsx(
          "block w-full text-start group p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-neutral-800 transition-[background] duration-200 cursor-pointer",
          {
            "bg-zinc-100 dark:bg-neutral-800": checked
          }
        ),
        onClick,
        type: "button",
        children: [
          /* @__PURE__ */ jsxs("header", { className: "font-mono text-sm text-secondary", children: [
            timeToString(lesson.timeStart),
            " — ",
            timeToString(lesson.timeEnd),
            " @",
            " ",
            /* @__PURE__ */ jsx("span", { children: lesson.location })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "font-medium", children: [
            lesson.course.code,
            ": ",
            lesson.course.name
          ] }),
          /* @__PURE__ */ jsx("footer", { className: "text-sm text-secondary flex justify-between", children: /* @__PURE__ */ jsx("span", { children: lesson.instructor.name }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: clsx(
                "flex gap-2 mt-2 justify-end opacity-0 transition-opacity duration-250 h-0",
                { "opacity-100 h-auto": checked }
              ),
              children: /* @__PURE__ */ jsxs(
                Button,
                {
                  className: "dark:bg-zinc-700",
                  variant: "neutral",
                  onClick: handleEdit,
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "i-lucide-edit-3 opacity-50" }),
                    " Edit"
                  ]
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      Modal,
      {
        open: showEdit,
        onClose: handleModalClose,
        className: "w-full max-w-[24rem]",
        children: /* @__PURE__ */ jsxs("form", { className: "w-full", onSubmit: handleSubmit(saveLesson), children: [
          /* @__PURE__ */ jsxs("header", { className: "p-2 pb-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-secondary flex gap-2 items-center mb-2 font-medium", children: [
              /* @__PURE__ */ jsx("div", { className: "i-lucide-scan-search" }),
              " Edit lesson"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "You're editing the lesson: ",
              /* @__PURE__ */ jsx("b", { children: lesson.course.name })
            ] })
          ] }),
          !user && /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 text-blue-500 my-2 dark:bg-blue-700 dark:bg-opacity-10 dark:text-blue-400 mb-2 p-2 rounded-lg mx-2", children: [
            "You need to",
            " ",
            /* @__PURE__ */ jsx(Link, { className: "underline", to: "/login", children: "Login" }),
            " ",
            "first to be able to add a timetable entry."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("label", { className: "block", children: [
                /* @__PURE__ */ jsx("span", { children: "Start time" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "time",
                    ...register("timeStart", {
                      required: true
                    })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("label", { className: "block", children: [
                /* @__PURE__ */ jsx("span", { children: "End time" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "time",
                    ...register("timeEnd", {
                      required: true,
                      validate: (value) => isBefore(watch("timeStart"), value) || "Should be after start time"
                    })
                  }
                ),
                errors.timeEnd && /* @__PURE__ */ jsx("span", { className: "text-red-500", children: errors.timeEnd.message })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("label", { className: "block", children: [
                /* @__PURE__ */ jsx("span", { children: "Location" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    ...register("location", {
                      required: true
                    })
                  }
                ),
                /* @__PURE__ */ jsx("small", { className: "text-secondary", children: "Eg. SF24" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-secondary", children: "If you need to change the course and lecturer, you need to delete this schedule and create a new one." })
          ] }),
          /* @__PURE__ */ jsx("footer", { className: "p-2 border-t border-zinc-300 dark:border-neutral-700", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "neutral",
                  type: "button",
                  onClick: () => setShowEdit(false),
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxs(Button, { variant: "neutral", type: "button", onClick: handleDelete, children: [
                /* @__PURE__ */ jsx("div", { className: "opacity-50 i-lucide-trash-2" }),
                " Delete"
              ] })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "primary", children: "Save" })
          ] }) })
        ] })
      }
    )
  ] });
}
const Select = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "select",
  {
    className: clsx(
      "block bg-zinc-200 dark:bg-neutral-800 px-2 py-1 pe-6 rounded-lg font-medium",
      className
    ),
    ref,
    ...props
  }
));
function TimetableFilter({ currentSem, programmes }) {
  const params = useParams();
  const [programmeSelectOpen, setProgrammeSelectOpen] = React.useState(false);
  const fetcher = useAsyncFetcher();
  const { watch, register, setValue } = useForm({
    defaultValues: {
      programme: params.programme,
      level: params.level,
      sem: params.sem ?? currentSem ?? "1",
      year: params.year
    }
  });
  const navigate = useNavigate();
  const programme = watch("programme");
  const level = watch("level");
  const sem = watch("sem");
  const year = watch("year");
  const selected = React.useMemo(
    () => programmes.find(({ slug }) => slug === programme),
    [programmes, programme]
  );
  const programmeOptions = programmes.map(({ name, slug }) => ({
    label: name,
    value: slug
  }));
  async function handleAdd(data) {
    await fetcher.submit(JSON.stringify(data), {
      encType: "application/json",
      action: "/programmes",
      method: "POST"
    });
  }
  React.useEffect(() => {
    if (!programme || !level || !sem || !year) return;
    const day = params.day ?? "1";
    const to = `/timetable/${year}/${programme}/${level}/${sem}/${day}`;
    if (location.pathname.startsWith(to)) return;
    navigate(to);
  }, [programme, level, sem, year, params.day, navigate]);
  return /* @__PURE__ */ jsxs("div", { className: "max-lg:block flex gap-2", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-1 max-lg:mb-2", children: /* @__PURE__ */ jsx(
      LargeSelect,
      {
        label: "Programme",
        newForm: /* @__PURE__ */ jsx(NewForm, {}),
        onAdd: handleAdd,
        open: programmeSelectOpen,
        onToggle: (open) => setProgrammeSelectOpen(open),
        options: programmeOptions,
        onSelect: (value) => {
          setValue("programme", value);
          setProgrammeSelectOpen(false);
        },
        children: (selected == null ? void 0 : selected.name) ?? "Select a programme"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(Select, { className: "flex-1", ...register("year"), children: /* @__PURE__ */ jsx("option", { value: "2023-2024", children: "2023/2024" }) }),
      /* @__PURE__ */ jsxs(Select, { className: "flex-1", ...register("level", { required: true }), children: [
        /* @__PURE__ */ jsx("option", { value: "100", children: "L100" }),
        /* @__PURE__ */ jsx("option", { value: "200", children: "L200" }),
        /* @__PURE__ */ jsx("option", { value: "300", children: "L300" }),
        /* @__PURE__ */ jsx("option", { value: "400", children: "L400" }),
        /* @__PURE__ */ jsx("option", { value: "500", children: "L500" }),
        /* @__PURE__ */ jsx("option", { value: "600", children: "L600" })
      ] }),
      /* @__PURE__ */ jsxs(Select, { className: "flex-1", ...register("sem", { required: true }), children: [
        /* @__PURE__ */ jsx("option", { value: "1", children: "Sem 1" }),
        /* @__PURE__ */ jsx("option", { value: "2", children: "Sem 2" })
      ] })
    ] })
  ] });
}
function NewForm() {
  const { register } = useFormContext();
  return /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxs("label", { children: [
    "Programme",
    /* @__PURE__ */ jsx(Input, { type: "text", ...register("name", { required: true }) }),
    /* @__PURE__ */ jsx("small", { className: "text-secondary", children: "Example. BSc. Aerospace Engineering, MSc. Mathematics" })
  ] }) }) });
}
function TimetableSaveToCalender() {
  const [open, setOpen] = React.useState(false);
  const { programmes } = useLoaderData();
  const handleModalClose = React.useCallback(() => setOpen(false), []);
  const { year, programme: programmeSlug, sem, level } = useParams();
  const url = `/downloads/timetable/${year}/${programmeSlug}/${level}/${sem}`;
  const programme = programmes.find((p) => p.slug === programmeSlug);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Button, { onClick: () => setOpen(true), children: [
      /* @__PURE__ */ jsx("div", { className: "size-4", children: /* @__PURE__ */ jsx("div", { className: "i-lucide-calendar-plus opacity-50" }) }),
      " ",
      "Save to calendar"
    ] }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        open,
        onClose: handleModalClose,
        className: "w-full max-w-[24rem]",
        children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsxs("header", { className: "flex text-secondary p-2 items-center text-sm gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: " i-lucide-calendar-plus" }),
            /* @__PURE__ */ jsx("div", { children: "Save to Calendar" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "px-2 mb-2", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "You're about to download the calendar file which contains all the schedule for",
              " ",
              /* @__PURE__ */ jsx("code", { className: "bg-zinc-200 dark:bg-neutral-700 px-1 rounded", children: programme == null ? void 0 : programme.name }),
              " ",
              /* @__PURE__ */ jsxs("code", { className: "bg-zinc-200 dark:bg-neutral-700 px-1 rounded", children: [
                "L",
                level
              ] }),
              " ",
              "Semester",
              " ",
              /* @__PURE__ */ jsx("code", { className: "bg-zinc-200 dark:bg-neutral-700 px-1 rounded", children: sem }),
              " ",
              "for the year",
              " ",
              /* @__PURE__ */ jsx("code", { className: "bg-zinc-200 dark:bg-neutral-700 px-1 rounded", children: year }),
              "."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-secondary", children: "After download, open file to automically fill your calendar." }),
            /* @__PURE__ */ jsx("p", { className: "mt-2", children: "🌶️ You may need to manually adjust your calendar when there are changes." })
          ] }),
          /* @__PURE__ */ jsxs("footer", { className: "flex justify-between p-2 border-t border-zinc-200 dark:border-neutral-700", children: [
            /* @__PURE__ */ jsx(Button, { variant: "neutral", onClick: () => setOpen(false), children: "Cancel" }),
            /* @__PURE__ */ jsx(Anchor, { to: url, download: true, reloadDocument: true, children: "Download ics file" })
          ] })
        ] })
      }
    )
  ] });
}
async function withUserPrefs(request, values2) {
  const cookies = await userPrefs.parse(request.headers.get("Cookie")) || {};
  return await userPrefs.serialize({ ...cookies, ...values2 });
}
const loader$B = async ({ params, request }) => {
  const { year, programme, level, sem, day: _day } = params;
  const day = Number(_day);
  const schedule = await prisma.schedule.findMany({
    where: {
      day,
      level: Number(level),
      programme: { slug: programme },
      semester: Number(sem),
      year
    },
    include: {
      course: true,
      instructor: true
    },
    orderBy: [{ timeStart: "asc" }]
  });
  const programmes = await prisma.programme.findMany({
    orderBy: { name: "asc" }
  });
  const res = {
    day,
    level,
    programme,
    programmes,
    schedule,
    sem,
    year,
    school: values.meta()
  };
  return json(res, {
    headers: {
      "Set-Cookie": await withUserPrefs(request, {
        programme,
        level,
        year,
        sem,
        lastBase: "timetable"
      })
    }
  });
};
const action$p = async ({ request, params }) => {
  if (request.method !== "POST") {
    return new Response(null, {
      status: 405,
      statusText: "Method Not Allowed"
    });
  }
  await checkAuth(request);
  const { year, level, day, sem } = params;
  const { consent, timeEnd, timeStart, ...data } = await request.json();
  await prisma.schedule.create({
    data: {
      ...data,
      day: Number(day),
      level: Number(level),
      year,
      timeStart: timeFromString(timeStart),
      timeEnd: timeFromString(timeEnd),
      semester: Number(sem)
    }
  });
  return null;
};
const meta$q = ({ data }) => {
  const description = `See timetable for ${data == null ? void 0 : data.programme}, L${data == null ? void 0 : data.level} for the year ${data == null ? void 0 : data.year}`;
  return [
    { title: `Timetable | ${data == null ? void 0 : data.school.shortName} ✽ gctuvc` },
    { name: "description", content: description }
  ];
};
function TimeTable() {
  const { day, programmes, schedule } = useLoaderData();
  const [checked, setChecked] = React.useState(0);
  const outlet = useOutlet();
  const _minutes = schedule.reduce((acc, lesson) => {
    return acc + (lesson.timeEnd - lesson.timeStart) / 60;
  }, 0);
  const hours = Math.floor(_minutes / 60);
  const minutes = _minutes - hours * 60;
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-4 min-h-[60vh]", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: clsx("col-span-1 lg:col-span-2 xl:col-span-3", {
          "max-lg:hidden": outlet
        }),
        children: [
          /* @__PURE__ */ jsx(TimetableFilter, { programmes }),
          /* @__PURE__ */ jsx(DaysHeader, { className: "mt-2", selectedDay: day }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex justify-between", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex items-center gap-2 rounded-lg bg-zinc-200 px-2 py-1 dark:bg-neutral-800 font-medium",
                to: "add",
                onClick: () => posthog.capture("add_lesson_clicked"),
                children: [
                  /* @__PURE__ */ jsx("div", { className: "size-4", children: /* @__PURE__ */ jsx("div", { className: "i-lucide-list-plus opacity-50" }) }),
                  " ",
                  "Add lesson"
                ]
              }
            ),
            /* @__PURE__ */ jsx(TimetableSaveToCalender, {})
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "mt-2", children: schedule.map((lesson, i) => {
            const nextLesson = schedule[i + 1];
            const timeDifference = nextLesson ? nextLesson.timeStart - lesson.timeEnd : 0;
            const hours2 = Math.floor(timeDifference / 3600);
            return /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(
                LessonItem,
                {
                  lesson,
                  checked: lesson.id === checked,
                  onClick: () => {
                    if (lesson.id === checked) {
                      setChecked(0);
                    } else {
                      setChecked(lesson.id);
                    }
                  }
                }
              ),
              i < schedule.length - 1 && /* @__PURE__ */ jsx("hr", { className: "border-zinc-300 dark:border-neutral-600" }),
              hours2 > 2 && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs("div", { className: "rounded-b-lg bg-zinc-200 dark:bg-neutral-600 text-sm font-medium text-zinc-800 dark:text-neutral-200 px-2", children: [
                Math.floor(hours2),
                " hours apart"
              ] }) }) })
            ] }, lesson.id);
          }) }),
          schedule.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxs("div", { className: "text-sm border rounded-full inline-block px-2 border-zinc-300 dark:border-neutral-700 text-secondary", children: [
            schedule.length,
            " lessons • ",
            hours,
            "h ",
            minutes,
            "m total"
          ] }) }),
          schedule.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center text-secondary mt-12", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-rose-100 dark:bg-rose-700 dark:bg-opacity-20 rounded-lg size-12 inline-flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "i-lucide-cup-soda inline-block text-3xl rounded-lg text-rose-500" }) }),
            /* @__PURE__ */ jsx("p", { className: "mt-2", children: "No lessons for today" }),
            /* @__PURE__ */ jsxs("p", { children: [
              "If a lesson is missing, you can",
              " ",
              /* @__PURE__ */ jsx(
                Link,
                {
                  className: "bg-zinc-200 dark:bg-neutral-700 dark:text-neutral-300 rounded-md px-2 py-1 text-inherit font-medium",
                  to: "add",
                  children: "Add new lesson"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "col-span-1 lg:col-span-2 xl:col-span-3", children: /* @__PURE__ */ jsx(Outlet, {}) })
  ] }) });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$p,
  default: TimeTable,
  loader: loader$B,
  meta: meta$q
}, Symbol.toStringTag, { value: "Module" }));
const action$o = async ({ request, params }) => {
  const userId = await checkAuth(request);
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (request.method !== "POST") {
    return json({}, { status: 405 });
  }
  const community = await prisma.community.findFirst({
    where: { handle: params.slug }
  });
  if (!community) {
    return json({}, { status: 404 });
  }
  await prisma.communityMember.create({
    data: { communityId: community.id, userId }
  });
  const count = await prisma.communityMember.count({
    where: { communityId: community.id }
  });
  await prisma.community.update({
    where: { id: community.id },
    data: { members: count }
  });
  const notification = await prisma.notification.create({
    data: {
      message: `You have a new member (@${user == null ? void 0 : user.username}) in your community (${community.name}).`,
      entityId: community.id,
      entityType: "community",
      actorId: userId
    }
  });
  await prisma.notificationSubscriber.create({
    data: {
      notificationId: notification.id,
      userId: community.createdById
    }
  });
  return null;
};
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$o
}, Symbol.toStringTag, { value: "Module" }));
function ellipsize$1(str, length = 48) {
  if (str.length > length) {
    return `${str.substring(0, length)}...`;
  }
  return str;
}
function methodNotAllowed(data = null) {
  return json(data, { status: 405 });
}
function notFound(data = null) {
  return json(data, { status: 404 });
}
function forbidden(data = null) {
  return json(data, { status: 403 });
}
const loader$A = async ({ request, params }) => {
  const user = await prisma.user.findFirst({
    where: { username: params.username }
  });
  if (!user) {
    throw notFound();
  }
  const memberships = await prisma.communityMember.findMany({
    where: { userId: user.id },
    include: { community: true }
  });
  const communities = memberships.map((m) => m.community);
  return json({ user, meta: values.meta(), communities });
};
const meta$p = ({ data }) => {
  var _a2;
  return [
    {
      title: `@${(_a2 = data == null ? void 0 : data.user) == null ? void 0 : _a2.username} / Communities | ${data == null ? void 0 : data.meta.shortName} ✽ gctuvc`
    }
  ];
};
function ProfileCommunities() {
  const { user } = useRouteLoaderData("root") || {};
  const { username } = useParams();
  const { communities } = useLoaderData();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("ul", { children: communities.map((community) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
      Link,
      {
        className: "flex gap-2 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-neutral-800",
        to: `/communities/${community.handle}`,
        children: [
          /* @__PURE__ */ jsx(
            Avatar,
            {
              name: community.handle,
              variant: "marble",
              className: "!rounded-lg"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("header", { className: "font-medium", children: community.name }),
            /* @__PURE__ */ jsx("p", { className: "text-secondary text-sm leading-none", children: ellipsize$1(community.description, 60) })
          ] })
        ]
      }
    ) }, community.id)) }),
    communities.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-secondary", children: [
      "Not part of any community.",
      " ",
      (user == null ? void 0 : user.username) === username && /* @__PURE__ */ jsx(Link, { className: "underline", to: "/communities", children: "Find a community here" })
    ] })
  ] });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProfileCommunities,
  loader: loader$A,
  meta: meta$p
}, Symbol.toStringTag, { value: "Module" }));
async function checkMod(request) {
  const userId = await checkAuth(request);
  const user = await prisma.user.findFirst({
    where: { id: userId, role: "moderator" }
  });
  if (!user) {
    throw json({}, { status: 403 });
  }
  return user;
}
const action$n = async ({ request, params }) => {
  if (request.method !== "POST") {
    throw json({}, { status: 405 });
  }
  const mod = await checkMod(request);
  const data = await request.json();
  const community = await prisma.community.findFirst({
    where: { handle: params.slug }
  });
  if (!community) {
    throw json({}, { status: 404 });
  }
  switch (data.action) {
    case "approve": {
      await prisma.community.update({
        where: { id: community.id },
        data: { status: "activated", members: 1 }
      });
      await prisma.communityMember.create({
        data: {
          communityId: community.id,
          role: "moderator",
          userId: community.createdById
        }
      });
      const notification = await prisma.notification.create({
        data: {
          message: `Congratulations 🎉, your community (${community.name}) has been approved.`,
          entityId: community.id,
          entityType: "community",
          actorId: mod.id
        }
      });
      await prisma.notificationSubscriber.create({
        data: {
          notificationId: notification.id,
          userId: community.createdById
        }
      });
    }
  }
  return json(null);
};
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$n
}, Symbol.toStringTag, { value: "Module" }));
const loader$z = async () => {
  const shortName = values.get("shortName");
  const appName = `${shortName} ✽ gctuvc`;
  return json(
    {
      short_name: appName,
      name: appName,
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      display_override: ["fullscreen"],
      shortcuts: [
        {
          name: appName,
          url: "/",
          icons: [
            {
              src: "/icons/android-icon-96x96.png",
              sizes: "96x96",
              type: "image/png",
              purpose: "any monochrome"
            }
          ]
        },
        {
          name: "Timetable",
          url: "/timetable"
        },
        {
          name: "Library",
          url: "/library"
        }
      ],
      icons: [
        {
          src: "/icons/android-icon-36x36.png",
          sizes: "36x36",
          type: "image/png",
          density: "0.75"
        },
        {
          src: "/icons/android-icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
          density: "1.0"
        },
        {
          src: "/icons/android-icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
          density: "1.5"
        },
        {
          src: "/icons/android-icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
          density: "2.0"
        },
        {
          src: "/icons/android-chrome-256x256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    },
    {
      headers: {
        "Cache-Control": "public, max-age=600",
        "Content-Type": "application/manifest+json"
      }
    }
  );
};
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$z
}, Symbol.toStringTag, { value: "Module" }));
function CommunityCreated() {
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto min-h-[60vh]", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-lg", children: "Community registration submitted." }),
    /* @__PURE__ */ jsx("div", { className: "mb-2 text-secondary", children: "This will go through a short review process. Please keep an eye on your notifications for update." }),
    /* @__PURE__ */ jsx(Anchor, { to: "/", children: "Go home" })
  ] });
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CommunityCreated
}, Symbol.toStringTag, { value: "Module" }));
function slugify(text, mangle2 = false) {
  let slug = text.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/&/g, "-and-").replace(/[^\w-]+/g, "").replace(/--+/g, "-");
  if (mangle2) {
    slug += "-" + Math.random().toString(36).substring(2, 7);
  }
  return slug;
}
const loader$y = async ({ params }) => {
  const event = await prisma.eventItem.findFirstOrThrow({
    where: { id: Number(params.id) }
  });
  const when = dayjs(event.date).startOf("day").add(event.startTime, "seconds");
  const render2 = ics.createEvent({
    title: event.title,
    start: [
      when.year(),
      when.month() + 1,
      when.date(),
      when.hour(),
      when.minute()
    ],
    // [ ] Properly calculate duration
    duration: { hours: 1 },
    description: event.shortDescription || event.description,
    location: event.venue,
    url: `https://${values.get("id")}.gctuvc.com/events/${event.id}`
  });
  const fn = `${slugify(event.title)}.ics`;
  return new Response(new File([render2.value], fn, {}), {
    headers: {
      "Content-Type": "text/calendar",
      "Content-Disposition": `attachment; filename="${fn}"`
    }
  });
};
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$y
}, Symbol.toStringTag, { value: "Module" }));
function Content({ content }) {
  if (!content) return null;
  return /* @__PURE__ */ jsx("article", { className: "article", children: parse(content) });
}
function ellipsizeFilename(name, length = 14) {
  const parts = name.split(".");
  const [filename, ...rest] = parts;
  const extension = rest.pop() || "";
  const fn = [filename, ...rest].join(".").substring(0, length);
  if (`${fn}.${extension}`.length <= length) {
    return name;
  }
  return [fn, extension].join("…");
}
function humanizeSize(s) {
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let size = s;
  while (size >= 1024 && i < units.length) {
    size /= 1024;
    i++;
  }
  return `${size.toFixed(1)}${units[i]}`;
}
function FileThumbnail({ className, contentType }) {
  if (contentType.startsWith("image/")) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx(
          "size-10 rounded-lg bg-zinc-100 dark:bg-neutral-700 items-center justify-center flex text-secondary",
          className
        ),
        children: /* @__PURE__ */ jsx("div", { className: "i-lucide-image size-6" })
      }
    );
  }
  if (contentType.startsWith("video/")) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx(
          "size-10 rounded-lg bg-zinc-100 dark:bg-neutral-700 items-center justify-center flex text-secondary",
          className
        ),
        children: /* @__PURE__ */ jsx("div", { className: "i-lucide-video size-6" })
      }
    );
  }
  if (contentType.startsWith("audio/")) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx(
          "size-10 rounded-lg bg-zinc-100 dark:bg-neutral-700 items-center justify-center flex text-secondary",
          className
        ),
        children: /* @__PURE__ */ jsx("div", { className: "i-lucide-music size-6" })
      }
    );
  }
  if ([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ].includes(contentType)) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx(
          "size-10 rounded-lg bg-zinc-100 dark:bg-neutral-700 items-center justify-center flex text-secondary",
          className
        ),
        children: /* @__PURE__ */ jsx("div", { className: "i-lucide-file-text size-6" })
      }
    );
  }
  if ([
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ].includes(contentType)) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx(
          "size-10 rounded-lg bg-zinc-100 dark:bg-neutral-700 items-center justify-center flex text-secondary",
          className
        ),
        children: /* @__PURE__ */ jsx("div", { className: "i-lucide-monitor-play size-6" })
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: clsx(
        "size-10 rounded-lg bg-zinc-100 dark:bg-neutral-700 items-center justify-center flex text-secondary",
        className
      ),
      children: /* @__PURE__ */ jsx("div", { className: "i-lucide-asterisk size-6" })
    }
  );
}
function AudioItem({ name, url, noPlay, onRemove, size }) {
  const [playing, setPlaying] = React.useState();
  const [downloadState, setDownloadState] = React.useState("idle");
  const audioRef = React.useRef();
  function togglePlay(e) {
    if (noPlay) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    if (downloadState === "downloading") {
      return;
    }
    if (downloadState !== "downloaded") {
      setDownloadState("downloading");
      fetch(url, { mode: "no-cors" }).then(async (res) => {
        const audio = new Audio(url);
        audioRef.current = audio;
        audio.addEventListener("ended", () => {
          setPlaying(false);
        });
        setDownloadState("downloaded");
      }).catch(() => setDownloadState("idle"));
      return;
    }
    if (!audioRef.current) {
      return;
    }
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  }
  React.useEffect(() => {
    return () => {
      var _a2;
      (_a2 = audioRef.current) == null ? void 0 : _a2.pause();
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex border dark:border-neutral-800 bg-white dark:bg-neutral-900 !bg-opacity-30 rounded-lg p-1 gap-2", children: [
    /* @__PURE__ */ jsx("div", { className: " shrink-0", children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "size-10 rounded-lg bg-zinc-100 dark:bg-neutral-700 items-center justify-center flex text-secondary",
        onClick: togglePlay,
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx("i-lucide-play size-6", {
              "!i-lucide-music": downloadState === "idle",
              "!i-lucide-pause": playing === true,
              "i-svg-spinners-180-ring-with-bg": downloadState === "downloading"
            })
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono leading-tight line-clamp-1 text-sm", children: ellipsizeFilename(name) }),
      /* @__PURE__ */ jsx("div", { className: "text-secondary text-sm leading-none", children: humanizeSize(size) })
    ] }),
    onRemove && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "p-2 rounded-full bg-zinc-100 dark:bg-neutral-800 hover:bg-zinc-200 dark:hover:bg-neutral-700 transition-[background] duration-200",
        onClick: onRemove,
        children: /* @__PURE__ */ jsx("div", { className: "i-lucide-x" })
      }
    ) })
  ] });
}
function MediaItem({ media, noPlay }) {
  if (media.contentType.startsWith("audio/")) {
    return /* @__PURE__ */ jsx(
      AudioItem,
      {
        noPlay,
        url: media.url,
        size: media.size,
        name: media.filename
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { className: "text-start text-sm flex gap-2 py-1 px-1 rounded-lg border border-zinc-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 !bg-opacity-30", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Thumbnail$1,
      {
        contentType: media.contentType,
        name: media.filename,
        thumbnail: media.thumbnail
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono break-all", children: ellipsizeFilename(media.filename) }),
      /* @__PURE__ */ jsx("div", { className: "text-secondary leading-none", children: humanizeSize(media.size) })
    ] })
  ] });
}
function Thumbnail$1({
  className,
  contentType,
  thumbnail,
  name
}) {
  if (contentType.startsWith("image/")) {
    return /* @__PURE__ */ jsx(
      "img",
      {
        src: thumbnail,
        alt: name,
        className: clsx(
          "size-10 object-cover rounded-lg border dark:border-neutral-700",
          className
        )
      }
    );
  }
  return /* @__PURE__ */ jsx(FileThumbnail, { className, contentType });
}
dayjs.extend(relativeTime);
function postTime(time) {
  if (dayjs().diff(dayjs(time), "day") < 1) {
    return dayjs(time).fromNow();
  }
  const format = dayjs(time).isSame(/* @__PURE__ */ new Date(), "year") ? "DD MMM, hh:mma" : "DD MMM 'YY, hh:mma";
  return dayjs(time).format(format);
}
function PostTime({ time }) {
  return /* @__PURE__ */ jsx(
    "time",
    {
      title: dayjs(time).format("DD MMM YYYY, hh:mm a"),
      dateTime: typeof time === "string" ? time : time.toISOString(),
      children: postTime(time)
    }
  );
}
function MediaPreview({ media, open, onClose, post, setMedia }) {
  var _a2;
  React.useEffect(() => {
    if (!media) return;
    const it = document.querySelector(`#preview-media-${media.id}`);
    it == null ? void 0 : it.scrollIntoView();
  }, [media]);
  const otherMedia = post.media.filter((m) => m.id !== (media == null ? void 0 : media.id));
  return /* @__PURE__ */ jsx(
    Modal,
    {
      className: "w-screen md:w-[30rem] aspect-[2/3]",
      open,
      onClose,
      children: media && /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full fade-in", children: [
        /* @__PURE__ */ jsxs("div", { className: "h-[76%] bg-zinc-100 dark:bg-neutral-800 border-b border-zinc-200 dark:border-neutral-700 relative flex items-center overflow-hidden", children: [
          (media == null ? void 0 : media.contentType.startsWith("image/")) ? /* @__PURE__ */ jsx(
            "img",
            {
              className: "object-contain self-center",
              src: media.url,
              alt: media.filename
            },
            media.id
          ) : ((_a2 = media == null ? void 0 : media.contentType) == null ? void 0 : _a2.startsWith("video/")) ? /* @__PURE__ */ jsx("video", { className: "w-full", playsInline: true, src: media.url, controls: true }) : /* @__PURE__ */ jsxs("div", { className: "w-full justify-center text-secondary flex items-center gap-2 font-medium", children: [
            /* @__PURE__ */ jsx("div", { className: "i-lucide-tower-control" }),
            " Cannot preview this file. Download instead."
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "size-7 rounded-full !bg-zinc-200 !dark:bg-neutral-700 flex items-center justify-center text-secondary absolute right-2 top-2",
              onClick: () => onClose == null ? void 0 : onClose(),
              children: /* @__PURE__ */ jsx("div", { className: "i-lucide-x" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "dark:border-neutral-800 rounded-lg px-1 py-0.5 font-mono flex gap-1 items-center absolute top-2 left-2 bg-zinc-200 dark:bg-neutral-800 !bg-opacity-50", children: [
            /* @__PURE__ */ jsx(
              Thumbnail$1,
              {
                thumbnail: media == null ? void 0 : media.thumbnail,
                className: "size-5 rounded-sm dark:bg-transparent",
                contentType: media == null ? void 0 : media.contentType,
                name: media == null ? void 0 : media.filename
              }
            ),
            ellipsizeFilename(media == null ? void 0 : media.filename)
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "h-[24%]", children: [
          /* @__PURE__ */ jsx("ul", { className: "overflow-x-auto flex gap-2 p-1", children: otherMedia.map((it) => {
            const selected = post.media.length > 1 && media === it;
            return /* @__PURE__ */ jsx(
              "li",
              {
                className: "shrink-0",
                id: `preview-media-${it.id}`,
                children: /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: clsx(
                      "border dark:border-neutral-800 rounded-lg px-1 py-0.5 font-mono flex gap-1 items-center",
                      {
                        "text-secondary": !selected,
                        "bg-blue-600 text-white border-transparent": selected
                      }
                    ),
                    type: "button",
                    onClick: () => setMedia == null ? void 0 : setMedia(it),
                    children: [
                      /* @__PURE__ */ jsx(
                        Thumbnail$1,
                        {
                          thumbnail: it == null ? void 0 : it.thumbnail,
                          className: clsx(
                            "size-5 rounded-sm dark:bg-transparent",
                            {
                              "!text-white !bg-blue-600": selected
                            }
                          ),
                          contentType: it.contentType,
                          name: it.filename
                        }
                      ),
                      it.filename
                    ]
                  }
                )
              },
              it.id
            );
          }) }),
          /* @__PURE__ */ jsxs("header", { className: "flex gap-2 p-2 items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsx(Avatar, { name: post.user.username, size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium leading-tight", children: /* @__PURE__ */ jsx(Username, { user: post.user }) }),
              /* @__PURE__ */ jsxs("p", { className: "font-mono text-secondary text-sm", children: [
                "posted ",
                postTime(post.createdAt)
              ] }),
              Boolean(otherMedia.length) && /* @__PURE__ */ jsxs("p", { className: "text-sm text-secondary font-mono", children: [
                post.media.length,
                " attachments"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 ms-10", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "bg-zinc-100 dark:bg-neutral-800 rounded-lg inline-flex gap-2 items-center px-1 py-0.5 border border-zinc-200 dark:border-neutral-700 font-medium",
                type: "button",
                onClick: () => navigator == null ? void 0 : navigator.share({ url: media == null ? void 0 : media.url }),
                children: [
                  /* @__PURE__ */ jsx("div", { className: "i-lucide-share opacity-60" }),
                  " Share"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                className: "bg-zinc-100 dark:bg-neutral-800 rounded-lg inline-flex gap-2 items-center px-1 py-0.5 border border-zinc-200 dark:border-neutral-700 font-medium",
                href: media == null ? void 0 : media.url,
                target: "_blank",
                rel: "noreferrer",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "i-lucide-download opacity-60" }),
                  " Download file"
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function DD({ items, onItemClick }) {
  return /* @__PURE__ */ jsxs(DropdownMenu.Root, { children: [
    /* @__PURE__ */ jsx(DropdownMenu.Trigger, { asChild: true, children: /* @__PURE__ */ jsx(
      "button",
      {
        className: "text-secondary rounded-full size-8 relative inline-flex justify-center items-center hover:bg-zinc-200 dark:hover:bg-neutral-700",
        "aria-label": "Customise options",
        type: "button",
        onClick: (e) => {
          e.stopPropagation();
        },
        children: /* @__PURE__ */ jsx("div", { className: "i-lucide-more-horizontal text-lg" })
      }
    ) }),
    /* @__PURE__ */ jsx(DropdownMenu.Portal, { children: /* @__PURE__ */ jsx(
      DropdownMenu.Content,
      {
        align: "end",
        side: "bottom",
        className: "bg-white dark:bg-neutral-900 border dark:border-neutral-800 rounded-lg p-1 shadow",
        children: items.map((item, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
          /* @__PURE__ */ jsxs(
            DropdownMenu.Item,
            {
              className: "px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-neutral-800 flex gap-2 items-center cursor-pointer",
              onClick: (e) => e.stopPropagation(),
              onSelect: () => onItemClick == null ? void 0 : onItemClick(item.id),
              children: [
                /* @__PURE__ */ jsx("span", { className: clsx("inline-block opacity-50", item.icon) }),
                " ",
                item.title
              ]
            }
          ),
          i !== items.length - 1 && /* @__PURE__ */ jsx(DropdownMenu.Separator, { className: "border-t ms-8 me-2" })
        ] }, item.id))
      }
    ) })
  ] });
}
function PostMenu({ post }) {
  const { user } = useRouteLoaderData("root") || {};
  const fetcher = useFetcher();
  if ((user == null ? void 0 : user.id) !== post.userId) {
    return /* @__PURE__ */ jsx("div", { className: "size-8" });
  }
  const menuItems = [
    { id: "delete-post", title: "Delete post", icon: "i-lucide-trash" }
  ];
  function handleClick(actionId) {
    if (actionId === "delete-post") {
      const yes = confirm(
        "Are you sure you want to delete this post? This cannot be undone."
      );
      if (yes) {
        fetcher.submit("", {
          method: "DELETE",
          action: `/discussions/${post.id}`
        });
      }
    }
  }
  return /* @__PURE__ */ jsx(DD, { items: menuItems, onItemClick: handleClick });
}
function Tags({ className, tags }) {
  const parsedTags = React.useMemo(() => {
    const parsed = JSON.parse(tags || "null") || [];
    return parsed.map((str) => {
      const [id, ...parts] = str.split(":");
      return [id, parts.join(":")];
    });
  }, [tags]);
  if (!parsedTags.length) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "ul",
    {
      className: clsx(
        "flex text-secondary font-medium flex-wrap gap-y-1",
        className
      ),
      children: parsedTags.map(([id, value]) => /* @__PURE__ */ jsx(
        "li",
        {
          className: "bg-zinc-100 dark:bg-neutral-800 [&:not(:last-child)]:border-e dark:border-neutral-700 px-2 text-sm inline-flex items-center gap-1 whitespace-nowrap first:rounded-s-lg last:rounded-e-lg",
          children: value
        },
        `${id}:${value}`
      ))
    }
  );
}
function Votes({ post }) {
  const fetcher = useFetcher();
  const { user } = useRouteLoaderData("root") || {};
  async function vote(up) {
    fetcher.submit(JSON.stringify({ up }), {
      method: "PATCH",
      action: `/vote/${post.id}`,
      encType: "application/json"
    });
  }
  async function handleUpvote(e) {
    e.preventDefault();
    e.stopPropagation();
    await vote(true);
  }
  async function handleDownvote(e) {
    e.preventDefault();
    e.stopPropagation();
    await vote(false);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: clsx(" text-secondary disabled:opacity-50", {
          "!dark:text-white !text-zinc-900": post.vote
        }),
        type: "button",
        onClick: handleUpvote,
        disabled: !user,
        children: /* @__PURE__ */ jsx("div", { className: "i-lucide-triangle" })
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: post.upvotes - post.downvotes }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: clsx("text-secondary disabled:opacity-50", {
          "!dark:text-white !text-zinc-900": post.vote === false
        }),
        type: "button",
        onClick: handleDownvote,
        disabled: !user,
        children: /* @__PURE__ */ jsx("div", { className: "i-lucide-triangle rotate-180" })
      }
    )
  ] });
}
function PostContent$1({ post }) {
  const [media, setMedia] = React.useState(
    void 0
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx(Link, { to: `/p/${post.user.username}`, children: /* @__PURE__ */ jsx(Avatar, { name: post.user.username }) }) }),
        /* @__PURE__ */ jsx(Votes, { post })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-b dark:border-neutral-700 pb-2 flex-1 w-0", children: [
        /* @__PURE__ */ jsxs("header", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-secondary", children: [
            /* @__PURE__ */ jsx(Username, { user: post.user }),
            " •",
            " ",
            /* @__PURE__ */ jsx(PostTime, { time: post.createdAt })
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(PostMenu, { post }) })
        ] }),
        /* @__PURE__ */ jsx(Tags, { className: "mb-4", tags: post.tags }),
        /* @__PURE__ */ jsxs("div", { className: "-mt-2", children: [
          /* @__PURE__ */ jsx(Content, { content: post.content }),
          post.community && /* @__PURE__ */ jsx(Link, { to: `/communities/${post.community.handle}`, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-2 items-center font-medium text-sm bg-blue-50 dark:bg-blue-800 dark:bg-opacity-20 px-1 rounded-md text-blue-500", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-block i-lucide-creative-commons" }),
            post.community.name
          ] }) }),
          post.media.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 flex-wrap mt-2", children: post.media.map((media2) => /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "block w-full",
              type: "button",
              onClick: () => setMedia(media2),
              children: /* @__PURE__ */ jsx(MediaItem, { media: media2 })
            }
          ) }, media2.id)) })
        ] }),
        /* @__PURE__ */ jsxs("footer", { className: "mt-2 flex justify-between", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-secondary", children: [
            /* @__PURE__ */ jsx("div", { className: "i-lucide-message-circle inline-block" }),
            " ",
            post.commentsCount || "Leave a comment"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-secondary", children: [
            /* @__PURE__ */ jsx("div", { className: "i-lucide-users-2 inline-block" }),
            " ",
            post.people,
            " ",
            post.people === 1 ? "person" : "people"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      MediaPreview,
      {
        post,
        media,
        open: Boolean(media),
        onClose: () => setMedia(void 0),
        setMedia
      }
    )
  ] });
}
function isImage(contentType, basic = false) {
  return ["image/png", "image/jpeg", "image/jpg"].includes(contentType) || !basic && ["image/webp", "image/gif"].includes(contentType);
}
function LoginComment() {
  return /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxs("p", { className: "text-secondary", children: [
    "You must be",
    " ",
    /* @__PURE__ */ jsx(Link, { className: "underline text-reset", to: "/login", children: "logged in" }),
    " ",
    "to comment."
  ] }) });
}
function useComments({ postId }) {
  const [comments, setComments] = React.useState([]);
  const fetcher = useFetcher();
  React.useEffect(() => {
    fetcher.load(`/comments?postId=${postId}`);
  }, [fetcher.load, postId]);
  React.useEffect(() => {
    if (fetcher.data) {
      setComments(fetcher.data.comments);
    }
  }, [fetcher.data]);
  return { comments, status: fetcher.state };
}
function NestedComments({ post }) {
  const { comments, status } = useComments({ postId: post.id });
  if (status === "loading") {
    return /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center text-secondary", children: [
      /* @__PURE__ */ jsx("span", { className: "i-svg-spinners-180-ring-with-bg inline-block" }),
      " ",
      "Loading comments…"
    ] });
  }
  return comments.map((comment, i) => /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
    /* @__PURE__ */ jsx(PostItem, { post: comment, level: 2 }),
    i < comments.length - 1 && /* @__PURE__ */ jsx("hr", { className: "me-2 ms-8 dark:border-neutral-800" })
  ] }, comment.id));
}
async function uploadMedia(file) {
  const formData = new FormData();
  if (isImage(file.type, true)) {
    formData.append("file", await compressFile(file));
  } else {
    formData.append("file", file);
  }
  const res = await fetch("/media", {
    method: "POST",
    body: formData
  });
  return await res.json();
}
const compressOptions = {
  maxSizeMB: 0.6,
  maxWidthOrHeight: 1920
};
function fileFromBlob(blob) {
  return new File([blob], blob.name, { type: blob.type });
}
async function compressFile(file) {
  const blob = await compress(file, compressOptions);
  return fileFromBlob(blob);
}
const useAudioRecorder = (audioTrackConstraints, onNotAllowedOrFound, mediaRecorderOptions) => {
  const [isRecording, setIsRecording] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [recordingTime, setRecordingTime] = React.useState(0);
  const [mediaRecorder, setMediaRecorder] = React.useState();
  const timerIntervalRef = React.useRef();
  const [recordingBlob, setRecordingBlob] = React.useState();
  const _startTimer = React.useCallback(() => {
    timerIntervalRef.current = setInterval(() => {
      setRecordingTime((time) => time + 1);
    }, 1e3);
  }, []);
  const _stopTimer = React.useCallback(() => {
    clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = void 0;
  }, []);
  const startRecording = React.useCallback(() => {
    if (timerIntervalRef.current) return;
    navigator.mediaDevices.getUserMedia({ audio: audioTrackConstraints ?? true }).then((stream) => {
      setIsRecording(true);
      const recorder = new MediaRecorder(
        stream,
        mediaRecorderOptions
      );
      setMediaRecorder(recorder);
      recorder.start();
      _startTimer();
      recorder.addEventListener("dataavailable", (event) => {
        setRecordingBlob(event.data);
        for (const track of stream.getTracks()) {
          track.stop();
        }
        setMediaRecorder(void 0);
      });
    }).catch((err) => {
      console.log(err.name, err.message, err.cause);
    });
  }, [
    audioTrackConstraints,
    _startTimer,
    onNotAllowedOrFound,
    mediaRecorderOptions
  ]);
  const stopRecording = React.useCallback(() => {
    mediaRecorder == null ? void 0 : mediaRecorder.stop();
    _stopTimer();
    setRecordingTime(0);
    setIsRecording(false);
    setIsPaused(false);
  }, [
    mediaRecorder,
    _stopTimer
  ]);
  const togglePauseResume = React.useCallback(() => {
    if (isPaused) {
      setIsPaused(false);
      mediaRecorder == null ? void 0 : mediaRecorder.resume();
      _startTimer();
    } else {
      setIsPaused(true);
      _stopTimer();
      mediaRecorder == null ? void 0 : mediaRecorder.pause();
    }
  }, [mediaRecorder, isPaused, _startTimer, _stopTimer]);
  const clear = React.useCallback(() => setRecordingBlob(void 0), []);
  return {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder,
    clear
  };
};
function AudioRecorder({ onRecorded, onRecording }) {
  const {
    isPaused,
    isRecording,
    recordingTime,
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    clear
  } = useAudioRecorder({
    echoCancellation: true
  });
  React.useEffect(() => {
    if (recordingBlob) {
      onRecorded == null ? void 0 : onRecorded(recordingBlob);
      clear();
    }
  }, [clear, recordingBlob, onRecorded]);
  React.useEffect(() => {
    onRecording == null ? void 0 : onRecording(isRecording);
  }, [isRecording, onRecording]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: clsx(
        "size-8 bg-zinc-200 dark:bg-neutral-800 inline-flex justify-center items-center transition-[width] duration-200 px-2 gap-2",
        { "w-30 !justify-start !bg-red-500 text-white": isRecording }
      ),
      children: isRecording ? /* @__PURE__ */ jsxs(Fragment, { children: [
        !isPaused ? /* @__PURE__ */ jsx("div", { className: "i-svg-spinners-pulse-3 shrink-0" }) : /* @__PURE__ */ jsx("div", { className: "size-2 bg-white rounded-full opacity-50 mx-1 shrink-0" }),
        /* @__PURE__ */ jsx("div", { className: "font-mono text-sm", children: secondsToMinuteSeconds(recordingTime) }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: togglePauseResume, children: /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx("i-lucide-pause dark:opacity-75", {
              "i-lucide-play": isPaused
            })
          }
        ) }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: stopRecording, children: /* @__PURE__ */ jsx("div", { className: "i-lucide-check dark:opacity-75" }) })
      ] }) : /* @__PURE__ */ jsx(
        "button",
        {
          className: "inline-flex",
          onClick: startRecording,
          type: "button",
          title: "Record audio",
          children: /* @__PURE__ */ jsx("span", { className: "i-lucide-mic inline-block" })
        }
      )
    }
  );
}
function secondsToMinuteSeconds(seconds) {
  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;
  return `${minute}:${second.toString().padStart(2, "0")}`;
}
const FileInput = React.forwardRef(({ className, children, type, ...props }, ref) => {
  return /* @__PURE__ */ jsxs(
    "label",
    {
      className: clsx(
        "flex rounded-lg px-2 py-1 font-medium bg-zinc-200 dark:bg-neutral-800 cursor-pointer w-[7.2rem] disabled:opacity-50",
        className,
        // eslint-disable-next-line react/prop-types
        { "opacity-60 !cursor-default": props.disabled }
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            className: "opacity-0 h-0 w-0 overflow-hidden",
            ...props,
            ref
          }
        )
      ]
    }
  );
});
function FileSelectItem({ file, onRemove }) {
  if (file.type.startsWith("audio/")) {
    return /* @__PURE__ */ jsx(
      AudioItem,
      {
        name: file.name,
        url: URL.createObjectURL(file),
        size: file.size,
        onRemove
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex border dark:border-neutral-700 rounded-lg p-1 gap-2", children: [
    /* @__PURE__ */ jsx("div", { className: " shrink-0", children: /* @__PURE__ */ jsx(Thumbnail, { file }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono leading-tight line-clamp-1 break-all text-sm", children: ellipsizeFilename(file.name) }),
      /* @__PURE__ */ jsx("div", { className: "text-secondary text-sm leading-none", children: humanizeSize(file.size) })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "p-2 rounded-full !bg-zinc-100 !dark:bg-neutral-800 hover:bg-zinc-200 dark:hover:bg-neutral-700 transition-[background] duration-200",
        onClick: onRemove,
        children: /* @__PURE__ */ jsx("div", { className: "i-lucide-x" })
      }
    ) })
  ] });
}
function Thumbnail({ file }) {
  if (file.type.startsWith("image/")) {
    return /* @__PURE__ */ jsx(
      "img",
      {
        src: URL.createObjectURL(file),
        width: 30,
        alt: file.name,
        className: "size-10 object-cover rounded-lg border dark:border-neutral-700"
      }
    );
  }
  return /* @__PURE__ */ jsx(FileThumbnail, { contentType: file.type });
}
const cache$1 = [];
function useCourses() {
  const [courses, setCourses] = React.useState(cache$1);
  const fetcher = useFetcher();
  const [status, setStatus] = React.useState(
    cache$1.length ? "success" : "loading"
  );
  const refresh = React.useCallback(() => {
    setStatus("loading");
    fetcher.load("/courses");
  }, [fetcher.load]);
  React.useEffect(() => {
    if (cache$1.length) {
      return;
    }
    refresh();
  }, [refresh]);
  React.useEffect(() => {
    if (!fetcher.data) {
      return;
    }
    setCourses(fetcher.data);
    cache$1.length = 0;
    cache$1.push(...fetcher.data);
    setStatus("success");
  }, [fetcher.data]);
  return { courses, refresh, status };
}
function useTagCourses() {
  const { courses, status, refresh } = useCourses();
  return {
    status: status === "loading" ? "loading" : "ready",
    items: courses.map((course) => `${course.code}: ${course.name}`),
    update: refresh,
    canAdd: true
  };
}
const cache = [];
function useProgrammes() {
  const [programmes, setProgrammes] = React.useState(cache);
  const fetcher = useFetcher();
  const [status, setStatus] = React.useState(
    cache.length ? "success" : "loading"
  );
  const refresh = React.useCallback(() => {
    setStatus("loading");
    fetcher.load("/programmes");
  }, [fetcher.load]);
  React.useEffect(() => {
    if (cache.length) {
      return;
    }
    refresh();
  }, [refresh]);
  React.useEffect(() => {
    if (!fetcher.data) {
      return;
    }
    setProgrammes(fetcher.data);
    cache.length = 0;
    cache.push(...fetcher.data);
    setStatus("success");
  }, [fetcher]);
  return { programmes, refresh, status };
}
function useTagProgrammes() {
  const { programmes, status, refresh } = useProgrammes();
  return {
    status: status === "loading" ? "loading" : "ready",
    items: programmes.map((prog) => prog.name),
    update: refresh,
    canAdd: true
  };
}
const DEFAULT_TAG_LIMIT = 4;
const DEFAULT_SELECTIONS = {
  course: [],
  programme: [],
  level: []
};
const TagInputCtx = React.createContext({
  selections: {
    course: [],
    programme: [],
    level: []
  },
  onChange: () => {
  },
  reset: () => {
  },
  tagsLimit: DEFAULT_TAG_LIMIT
});
function useTagInputCtx() {
  return React.useContext(TagInputCtx);
}
function TagInput({
  children,
  className,
  onDone,
  value,
  tagsLimit = DEFAULT_TAG_LIMIT
}) {
  const [showModal, setShowModal] = React.useState(false);
  const [selections, setSelections] = React.useState(DEFAULT_SELECTIONS);
  const handleSelection = React.useCallback((id, values2) => {
    setSelections((prev) => ({ ...prev, [id]: values2 }));
  }, []);
  function handleOnClose() {
    setShowModal(false);
    onDone == null ? void 0 : onDone(selections);
  }
  const handleModalClose = React.useCallback(() => setShowModal(false), []);
  const reset = React.useCallback(() => setSelections(DEFAULT_SELECTIONS), []);
  React.useEffect(() => {
    if (!value) {
      return;
    }
    setSelections(value);
  }, [value]);
  return /* @__PURE__ */ jsxs(
    TagInputCtx.Provider,
    {
      value: { selections, onChange: handleSelection, reset, tagsLimit },
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: clsx(
              "size-8 !bg-zinc-200 !dark:bg-neutral-800 inline-flex justify-center items-center transition-[width] duration-200 px-2 gap-2",
              className
            ),
            title: "Add tag",
            onClick: () => setShowModal(true),
            children: children || /* @__PURE__ */ jsx("div", { className: "i-lucide-hash" })
          }
        ),
        /* @__PURE__ */ jsx(
          Modal,
          {
            className: "w-full max-w-[24rem]",
            open: showModal,
            onClose: handleModalClose,
            children: /* @__PURE__ */ jsx("div", { className: "bg-zinc-100 dark:bg-neutral-900 h-[24rem] flex flex-col", children: /* @__PURE__ */ jsx(Selection, { onClose: handleOnClose }) })
          }
        )
      ]
    }
  );
}
function Selection({ onClose }) {
  const [stage, setStage] = React.useState("type");
  function handleClose() {
    setStage("type");
    onClose();
  }
  const props = {
    onSetStage: setStage,
    onReset: () => setStage("type"),
    onClose: handleClose
  };
  switch (stage) {
    case "type":
      return /* @__PURE__ */ jsx(Stage1, { onClose: handleClose, onSelect: setStage });
    case "course":
      return /* @__PURE__ */ jsx(TypeSelect, { ...props, useData: useTagCourses, id: "course" });
    case "programme":
      return /* @__PURE__ */ jsx(TypeSelect, { ...props, useData: useTagProgrammes, id: "programme" });
    case "level":
      return /* @__PURE__ */ jsx(TypeSelect, { ...props, useData: useLevels, id: "level" });
    default:
      return null;
  }
}
const types = ["Course", "Programme", "Level"];
function Stage1({ onSelect, onClose }) {
  const { selections, reset } = useTagInputCtx();
  const filterCount = React.useMemo(
    () => Object.values(selections).flat().length,
    [selections]
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "p-2 pb-0", children: /* @__PURE__ */ jsxs("div", { className: "text-sm text-secondary flex items-center justify-between mb-2 font-medium", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "i-lucide-hash" }),
        " Select tag type"
      ] }),
      filterCount > 0 && /* @__PURE__ */ jsxs(
        "button",
        {
          className: "bg-red-500 text-white px-1 rounded-md inline-flex items-center gap-1",
          type: "button",
          onClick: () => reset(),
          children: [
            /* @__PURE__ */ jsx("span", { className: "i-lucide-x inline-block" }),
            " Clear selections"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("ul", { className: "p-2 pt-1 flex-1 overflow-y-auto", children: types.map((type) => {
      const selected = selections[type.toLowerCase()];
      return /* @__PURE__ */ jsxs("li", { className: "group", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "block w-full px-2 py-1 text-start rounded-lg hover:bg-zinc-200 dark:hover:bg-neutral-800",
            onClick: () => onSelect(type.toLowerCase()),
            children: [
              type,
              " ",
              selected.length > 0 && /* @__PURE__ */ jsx("span", { className: "bg-zinc-300 dark:bg-neutral-800 rounded-lg px-2 text-sm", children: selected.length })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "hr",
          {
            "aria-hidden": true,
            className: "dark:border-neutral-700 me-2 ms-2 group-last:hidden"
          }
        )
      ] }, type);
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-2 text-secondary text-sm flex items-center gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "i-lucide-menu-square inline-block" }),
      "You can select tags from different types."
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "p-2 border-t dark:border-t-neutral-700 flex justify-end", children: /* @__PURE__ */ jsx(Button, { onClick: onClose, children: "Done" }) })
  ] });
}
function useLevels() {
  return {
    status: "ready",
    items: ["L100", "L200", "L300", "L400", "L500", "L600"],
    update: () => {
    },
    canAdd: false
  };
}
function TypeSelect({ onReset, onClose, useData, id }) {
  const [q, setQ] = React.useState("");
  const { items, status, canAdd } = useData();
  const { selections, onChange, tagsLimit } = useTagInputCtx();
  const selection = selections[id];
  const filteredItems = items.filter(
    (item) => item.toLocaleLowerCase().includes(q.toLowerCase().trim())
  );
  function handleChange(item, checked) {
    if (Object.values(selections).flat().length >= tagsLimit && checked) {
      alert(`You can only select up to ${tagsLimit} tags`);
      return;
    }
    const values2 = checked ? [...selection, item] : selection.filter((value) => value !== item);
    onChange(id, values2);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "p-2 pb-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-secondary flex gap-2 items-center mb-2 font-medium", children: [
        /* @__PURE__ */ jsx("div", { className: "i-lucide-hash" }),
        " Select ",
        id
      ] }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "text",
          placeholder: "Start typing…",
          value: q,
          onChange: (e) => setQ(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "px-2 flex-1 mt-2 overflow-y-auto", children: filteredItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 px-2 py-1 hover:bg-zinc-200 dark:hover:bg-neutral-800 rounded-lg ", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          className: "rounded-md bg-zinc-300 dark:bg-neutral-700",
          checked: selection.includes(item),
          onChange: (e) => handleChange(item, e.target.checked)
        }
      ),
      /* @__PURE__ */ jsx("span", { children: item })
    ] }) }, item)) }),
    status === "loading" && /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center text-secondary px-2 py-1", children: [
      /* @__PURE__ */ jsx("div", { className: "i-svg-spinners-180-ring-with-bg" }),
      " Updating list…"
    ] }),
    canAdd && /* @__PURE__ */ jsxs("div", { className: "text-secondary p-2 text-sm", children: [
      "Can't find a programme or course? Check",
      " ",
      /* @__PURE__ */ jsx(
        Link,
        {
          className: "text-blue-700 dark:text-blue-500 underline",
          to: "/timetable",
          children: "Timetable"
        }
      ),
      " ",
      "and add from there."
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "p-2 border-t dark:border-t-neutral-700 flex justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx(Button, { variant: "neutral", onClick: onReset, children: "Back" }) }),
      /* @__PURE__ */ jsx(Button, { onClick: onClose, children: "Done" })
    ] })
  ] });
}
function stringifySelections(selections) {
  const normalized = Object.entries(selections).flatMap(
    ([id, values2]) => values2.map((v) => `${id}:${v}`)
  );
  return JSON.stringify(normalized);
}
function TagSelect({ onRemove, tags }) {
  const flatTags = Object.entries(tags).flatMap(
    ([id, values2]) => values2.map((v) => [id, v])
  );
  if (!flatTags.length) {
    return null;
  }
  return /* @__PURE__ */ jsx("ul", { className: "flex mb-1 gap-1 flex-wrap", children: flatTags.map(([id, tag]) => /* @__PURE__ */ jsxs(
    "li",
    {
      className: "bg-zinc-200 dark:bg-neutral-800 rounded-full px-2 inline-flex items-center gap-1 font-medium",
      children: [
        tag,
        " ",
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "i-lucide-x text-secondary",
            type: "button",
            title: `Remove ${id}:${tag}`,
            onClick: () => onRemove == null ? void 0 : onRemove(id, tag)
          }
        )
      ]
    },
    `${id}:${tag}`
  )) });
}
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: clsx(
        "w-full rounded-lg bg-zinc-100 dark:bg-neutral-800 border-zinc-200 dark:border-neutral-700 p-2 h-30",
        className
      ),
      ref,
      ...props
    }
  );
});
const ATTACHMENT_LIMIT = 5 * 1024 * 1024;
function PostInput({ disabled, level = 0, parent, dataExtra }) {
  var _a2;
  const { getValues, handleSubmit, register, setValue, watch, reset } = useForm(
    {
      defaultValues: {
        content: "",
        files: []
      }
    }
  );
  const [isRecording, setIsRecording] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [tags, setTags] = React.useState(DEFAULT_SELECTIONS);
  const [isPreviewing, setIsPreviewing] = React.useState(false);
  const fetcher = useFetcher$1();
  const previewFetcher = useFetcher$1();
  const { user } = useRouteLoaderData("root") || {};
  const isComment = level > 0;
  const $files = watch("files");
  function loadPreview() {
    const content = getValues("content");
    if (!content.trim()) {
      return;
    }
    previewFetcher.submit(JSON.stringify({ content }), {
      method: "POST",
      action: "/md",
      encType: "application/json"
    });
  }
  async function createPost2(data) {
    setUploading(true);
    const media = await Promise.all($files.map(uploadMedia));
    setUploading(false);
    const stringifiedTags = stringifySelections(tags);
    fetcher.submit(
      JSON.stringify({
        ...data,
        parentId: parent == null ? void 0 : parent.id,
        media,
        tags: stringifiedTags,
        ...dataExtra
      }),
      {
        encType: "application/json",
        method: "POST",
        action: !parent ? "/discussions" : void 0
      }
    );
  }
  function handleFilesSelect(e) {
    var _a3;
    if (!((_a3 = e.target.files) == null ? void 0 : _a3.length)) {
      return;
    }
    const files = Array.from(e.target.files);
    if (files.some((file) => file.size > ATTACHMENT_LIMIT)) {
      alert("Some files you selected are too large. Maximum 5MB per file.");
      return;
    }
    setValue("files", [...$files, ...files].slice(0, 5));
  }
  function handleTagRemove(id, value) {
    setTags((tags2) => {
      const values2 = tags2[id].filter((it) => it !== value);
      return { ...tags2, [id]: values2 };
    });
  }
  const handleRecordComplete = React.useCallback(
    (blob) => {
      const name = getNextRecordingName($files);
      const file = new File([blob], name, { type: "audio/mp3" });
      if (file.size > ATTACHMENT_LIMIT) {
        alert("The recording is too large. Maximum 5MB per file.");
        return;
      }
      setValue("files", [...$files, file].slice(0, 5));
    },
    [$files, setValue]
  );
  function removeFile(index) {
    setValue(
      "files",
      $files.filter((_, i) => i !== index)
    );
  }
  function togglePreview() {
    if (!isPreviewing) {
      const content = getValues("content");
      if (!content.trim()) {
        return;
      }
      loadPreview();
    }
    setIsPreviewing(!isPreviewing);
  }
  React.useEffect(() => {
    if (fetcher.data) {
      reset();
      setTags(DEFAULT_SELECTIONS);
      setIsPreviewing(false);
    }
  }, [fetcher.data, reset]);
  const posting = fetcher.state === "submitting" || uploading;
  const hidePreview = previewFetcher.state !== "idle" || !isPreviewing;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(createPost2), children: [
    !parent && /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx(TagSelect, { tags, onRemove: handleTagRemove }) }),
    /* @__PURE__ */ jsx(
      Textarea,
      {
        className: clsx({ hidden: !hidePreview }),
        placeholder: isComment ? "What do you think?" : "What have you got to share?",
        maxLength: 1024,
        ...register("content", {
          required: true,
          setValueAs(value) {
            return value.trim();
          }
        }),
        disabled: posting || isPreviewing
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: clsx(
          "min-h-[5rem] bg-zinc-100 dark:bg-neutral-800 rounded-lg pt-0 mb-2 border-2 border-blue-600",
          {
            hidden: hidePreview
          }
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "-mt-1", children: /* @__PURE__ */ jsx("div", { className: "text-sm bg-blue-600 text-white inline-block px-2 rounded-rb-lg rounded-tl-md font-medium", children: "Preview mode" }) }),
          /* @__PURE__ */ jsx("div", { className: "px-2 py-1", children: /* @__PURE__ */ jsx(Content, { content: (_a2 = previewFetcher.data) == null ? void 0 : _a2.rendered }) }),
          /* @__PURE__ */ jsxs("div", { className: "bg-zinc-200 dark:bg-neutral-700 bg-opacity-50 text-secondary inline-block text-sm rounded-lg px-2 mb-1 ms-2 font-medium", children: [
            "Tap ",
            /* @__PURE__ */ jsx("span", { className: "inline-block i-lucide-pen" }),
            " to go back to edit mode."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx(
          "grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 flex-wrap",
          { "mb-2": $files.length }
        ),
        children: $files.map((file, i) => /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
          FileSelectItem,
          {
            file,
            onRemove: () => !uploading && removeFile(i)
          }
        ) }, `${file.name}-${i}`))
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between flex-wrap gap-y-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxs(
          FileInput,
          {
            name: "files",
            multiple: true,
            maxLength: 4,
            accept: "image/png,image/jpeg,image/gif,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,audio/*",
            onChange: handleFilesSelect,
            disabled: posting || $files.length >= 5,
            children: [
              /* @__PURE__ */ jsx("div", { className: "i-lucide-file-symlink opacity-50 shrink-0" }),
              "Add files"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex [&>*:last-child]:rounded-e-full [&>*:first-child]:rounded-s-full", children: [
          /* @__PURE__ */ jsx(
            AudioRecorder,
            {
              onRecorded: handleRecordComplete,
              onRecording: setIsRecording
            }
          ),
          !isRecording && /* @__PURE__ */ jsxs(Fragment, { children: [
            !parent && /* @__PURE__ */ jsx(TagInput, { value: tags, onDone: setTags }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "size-8 !bg-zinc-200 !dark:bg-neutral-800 inline-flex justify-center items-center",
                type: "button",
                title: isPreviewing ? "Edit mode" : "Preview mode",
                onClick: togglePreview,
                children: /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: clsx("inline-block i-lucide-eye", {
                      "!i-svg-spinners-180-ring-with-bg": previewFetcher.state !== "idle",
                      "i-lucide-pencil": previewFetcher.state === "idle" && isPreviewing
                    })
                  }
                )
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { disabled: posting || !user || disabled, children: posting ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "i-svg-spinners-180-ring-with-bg" }),
        " Posting…"
      ] }) : isComment ? "Comment" : "Start Discussion" }) })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-secondary", children: [
      "5 files max. Images and docs only. 5MB limit per file.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "underline",
          target: "_blank",
          href: "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",
          rel: "noreferrer",
          children: "Markdown"
        }
      ),
      " ",
      "is supported."
    ] })
  ] }) });
}
function getNextRecordingName(files) {
  const nextNumber = files.filter(
    (file) => file.name.startsWith("Recording")
  ).length;
  return `Recording-${nextNumber + 1}.mp3`;
}
function PostItem({
  expanded: shouldExpand = false,
  post,
  limit,
  level = 0
}) {
  const mounted = useMounted();
  const [expanded, setExpanded] = React.useState(shouldExpand);
  function handleItemClick() {
    setExpanded((expanded2) => !expanded2);
  }
  const link = post.parentId ? `/discussions/${post.parentId}#${post.id}` : `/discussions/${post.id}`;
  const showCommentInput = expanded && level > 0 && level < 2;
  const full = level < 2;
  const content = /* @__PURE__ */ jsx(
    PostContent,
    {
      full,
      active: expanded,
      post,
      level,
      limit
    }
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    level === 0 ? /* @__PURE__ */ jsx(
      Link,
      {
        to: level < 1 ? link : "",
        className: "block",
        id: post.id.toString(),
        children: content
      }
    ) : /* @__PURE__ */ jsx(
      "div",
      {
        className: "cursor-pointer",
        id: post.id.toString(),
        tabIndex: 0,
        role: "button",
        onClick: handleItemClick,
        onKeyDown: (e) => {
          if (["Space", "Enter"].includes(e.key)) handleItemClick();
        },
        children: content
      }
    ),
    showCommentInput && mounted && /* @__PURE__ */ jsx(SubComment, { post })
  ] });
}
function PostContent({ full, post, active, level, limit }) {
  var _a2;
  const showThumbnail = level === 0 && post.media.length === 1 && isImage(post.media[0].contentType);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx(
        "p-2 rounded-lg hover-bg-light transition-[background] duration-200 flex gap-2",
        { "bg-light dark:bg-neutral-800": active }
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          full && /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx(Avatar, { name: post.user.username }) }),
          /* @__PURE__ */ jsx(Votes, { post })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 w-0", children: [
          /* @__PURE__ */ jsxs("header", { className: "flex gap-2 justify-between", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-secondary text-sm", children: [
              /* @__PURE__ */ jsx(Username, { user: post.user }),
              " •",
              " ",
              /* @__PURE__ */ jsx(PostTime, { time: post.createdAt })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(PostMenu, { post }) })
          ] }),
          !post.parentId && /* @__PURE__ */ jsx(Tags, { className: "mb-4", tags: post.tags }),
          /* @__PURE__ */ jsxs("div", { className: "-mt-3 post-content grid grid-cols-1 lg:grid-cols-4 gap-2", children: [
            showThumbnail && /* @__PURE__ */ jsx("div", { className: "col-span-1 lg:order-last", children: /* @__PURE__ */ jsx("div", { className: "aspect-[3/2]", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: post.media[0].url,
                alt: "",
                className: "h-full w-full object-cover rounded-lg"
              }
            ) }) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: clsx("col-span-1 lg:col-span-3", {
                  "lg:col-span-4": !showThumbnail
                }),
                children: /* @__PURE__ */ jsx(Content, { content: post.content })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { children: ((_a2 = post.media) == null ? void 0 : _a2.length) > 0 && !showThumbnail && /* @__PURE__ */ jsx("div", { className: "grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 flex-wrap mt-2", children: post.media.map((media) => /* @__PURE__ */ jsx("div", { className: "col-span-1", children: limit ? /* @__PURE__ */ jsx(MediaItem, { noPlay: limit, media }) : /* @__PURE__ */ jsx(
            "a",
            {
              className: "block",
              href: media.url,
              target: "_blank",
              onClick: (e) => e.stopPropagation(),
              rel: "noreferrer",
              children: /* @__PURE__ */ jsx(MediaItem, { noPlay: limit, media })
            }
          ) }, media.id)) }) }),
          post.community && /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-2 items-center font-medium text-sm bg-blue-50 dark:bg-blue-800 dark:bg-opacity-20 px-1 rounded-md text-blue-500", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-block i-lucide-creative-commons" }),
            post.community.name
          ] }),
          level < 2 && /* @__PURE__ */ jsxs("footer", { className: "mt-2 flex justify-between", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-secondary", children: [
              /* @__PURE__ */ jsx("div", { className: "i-lucide-message-circle inline-block" }),
              " ",
              post.commentsCount
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-secondary", children: [
              /* @__PURE__ */ jsx("div", { className: "i-lucide-users-2 inline-block" }),
              " ",
              post.people,
              " ",
              post.people === 1 ? "person" : "people"
            ] })
          ] })
        ] })
      ]
    }
  );
}
function SubComment({ post }) {
  const { user } = useRouteLoaderData("root") || {};
  return /* @__PURE__ */ jsxs("div", { className: "ms-12 border-s-2 ps-2 dark:border-neutral-700", children: [
    user ? /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsx(PostInput, { parent: post, level: 1 }) }) : /* @__PURE__ */ jsx(LoginComment, {}),
    /* @__PURE__ */ jsx(NestedComments, { post })
  ] });
}
function removeCodeTrail() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "code") {
        for (const child of node.children) {
          if (child.type === "text") {
            child.value = child.value.replace(/\n$/, "");
          }
        }
      }
    });
  };
}
const userGroup = "[\\da-z][-\\da-z_]{0,38}";
const mentionRegex = new RegExp(`(?:^|\\s)@(${userGroup})`, "gi");
function replaceMention(value, username) {
  const whitespace = [];
  if (value.indexOf("@") > 0) {
    whitespace.push({
      type: "text",
      value: value.substring(0, value.indexOf("@"))
    });
  }
  const children = [{ type: "text", value: value.trim() }];
  if (username === "notgr") {
    children.push({
      type: "element",
      tagName: "span",
      properties: {
        className: "i-lucide-crown text-amber-500 inline-block"
      }
    });
  }
  return [
    ...whitespace,
    {
      type: "element",
      tagName: "a",
      // use a div with id = user+username and add hover listeners to show a popup on tap or hover
      properties: {
        href: `/p/${username}`,
        className: "!no-underline inline-flex items-center gap-1 font-medium !text-green-600 dark:text-green-500 bg-green-700 bg-opacity-10 rounded-lg px-1"
      },
      children
    }
  ];
}
function linkifyMentions() {
  return (tree) => {
    findAndReplace(tree, [[mentionRegex, replaceMention]]);
  };
}
const processor$3 = unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeSanitize).use(linkifyMentions).use(remarkMath).use(rehypeKatex).use(removeCodeTrail).use(rehypeShiki, {
  themes: { light: "vitesse-light", dark: "vitesse-dark" }
}).use(smartypants).use(rehypeStringify);
async function render(content) {
  return (await processor$3.process(content)).toString();
}
const loader$x = async ({ params, request }) => {
  const splat = params["*"].split("/");
  const post = await prisma.post.findFirst({
    where: { id: Number(params.id) },
    include: { user: true, media: true, community: true }
  });
  if (!post) {
    throw json({}, { status: 404 });
  }
  post.content = await render(post.content);
  const comment = await prisma.post.findFirst({
    where: { id: Number(splat[0]) },
    include: { user: true, media: true, community: true }
  });
  if (comment) {
    comment.content = await render(comment.content);
  }
  return { post, comment };
};
function ConcentratedDiscussion() {
  const { id } = useParams();
  const { post, comment } = useLoaderData();
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto min-h-[60vh] mt-2", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-2", children: [
    /* @__PURE__ */ jsx("header", { className: "mb-4", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: `/discussions/${id}`,
        className: "bg-zinc-100 dark:bg-neutral-800 px-1 py-0.5 rounded-lg inline-flex items-center gap-2 text-secondary font-medium",
        children: [
          /* @__PURE__ */ jsx("div", { className: "i-lucide-arrow-left" }),
          " Go to discussion"
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PostContent$1, { post }),
    comment && /* @__PURE__ */ jsx(PostItem, { post: comment, expanded: true, level: 1 })
  ] }) }) });
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConcentratedDiscussion,
  loader: loader$x
}, Symbol.toStringTag, { value: "Module" }));
function ProductItem({ product }) {
  const images = JSON.parse(product.images);
  return /* @__PURE__ */ jsxs(Link, { to: `/market/${product.id}`, children: [
    /* @__PURE__ */ jsx("div", { className: "aspect-square bg-zinc-100 dark:bg-neutral-800 rounded-lg mb-1 overflow-hidden", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-full aspect-square object-cover",
        src: images[0].thumbnail || "",
        alt: product.name
      }
    ) }),
    /* @__PURE__ */ jsx("header", { className: "font-medium leading-none", children: product.name }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-secondary", children: product.category.title }),
    /* @__PURE__ */ jsxs("div", { className: "bg-zinc-200 dark:bg-neutral-800 rounded-lg inline px-1 font-mono text-sm", children: [
      "GHS ",
      Number(product.price).toFixed(2)
    ] })
  ] });
}
const loader$w = async ({ params }) => {
  const user = await prisma.user.findFirst({
    where: { username: params.username }
  });
  if (!user) {
    throw notFound();
  }
  const products = await prisma.product.findMany({
    where: {
      seller: { userId: user.id }
    },
    include: { category: true }
  });
  return json({ products });
};
function ProfileCatalog() {
  const { products } = useLoaderData();
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4", children: products.map((product) => {
    return /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(ProductItem, { product }) }, product.id);
  }) });
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProfileCatalog,
  loader: loader$w
}, Symbol.toStringTag, { value: "Module" }));
function KnustLoginDirection() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-red-50 dark:bg-red-700 dark:bg-opacity-10 p-2 rounded-lg mt-4", children: [
    "To log into your email, go to",
    " ",
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "underline text-red-500 dark:text-red-400",
        target: "_blank",
        href: "https://outlook.com/login",
        rel: "noreferrer",
        children: "outlook.com/login"
      }
    ),
    ", enter your school email and password to access your account."
  ] });
}
const resend = new Resend(`${process.env.RESEND_API}`);
const send = resend.emails.send.bind(resend.emails);
const candidates = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
function randomStr(length = 8) {
  return Array.from({ length }).map(() => candidates[Math.floor(Math.random() * candidates.length)]).join("");
}
async function sendEmailVerification(email) {
  const existingVerification = await prisma.emailVerificationRequest.findFirst({
    where: { email }
  });
  if (!existingVerification) {
    const verification = await prisma.emailVerificationRequest.create({
      data: {
        token: randomStr(48),
        email
      }
    });
    return await sendEmail(verification);
  }
}
async function sendEmail(verification) {
  const { email, token } = verification;
  const link = [
    // will change after domain and hosting is bought
    `https://gctuvc.com/verify-email/?`,
    //omit subdomain for now
    `email=${email}`,
    `&token=${token}`
  ].join("");
  return await send({
    to: verification.email,
    from: "m@gctuvc.com",
    subject: "Account verification ✽ Virtual Campus",
    text: `Hi and welcome to GCTU virtual campus,

Click the following link to verify your account: ${link}.

See you!


(You cannot reply to this email.)`
  });
}
const loader$v = async ({ request }) => {
  const email = new URL(request.url).searchParams.get("email");
  if (!email) {
    return new Response(null, { status: 400 });
  }
  await sendEmailVerification(email);
  return { school: values.meta() };
};
const meta$o = () => {
  return [{ title: "Resend Verification ✽ gctuvc" }];
};
function ResendVerification() {
  const { school } = useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "container min-h-[60vh] mx-auto", children: [
    /* @__PURE__ */ jsx("div", { children: "Verification link sent" }),
    school.id === "knust" && /* @__PURE__ */ jsx(KnustLoginDirection, {})
  ] });
}
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResendVerification,
  loader: loader$v,
  meta: meta$o
}, Symbol.toStringTag, { value: "Module" }));
function CommunityInfo() {
  const { user } = useRouteLoaderData("root") || {};
  const { community, membership, members } = useLoaderData();
  const { slug } = useParams();
  const fetcher = useFetcher();
  async function join() {
    fetcher.submit("", {
      action: `/communities/${slug}/members`,
      method: "POST"
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-lg leading-none", children: community.name }),
    /* @__PURE__ */ jsxs("div", { className: "bg-rose-100 dark:bg-rose-900 dark:bg-opacity-20 rounded-lg inline-block text-rose-500 font-medium px-1 text-sm", children: [
      "+",
      community.handle
    ] }),
    /* @__PURE__ */ jsx("p", { className: "", children: community.description }),
    !membership && /* @__PURE__ */ jsxs("div", { className: "border dark:border-neutral-800 rounded-lg p-2 mt-2", children: [
      /* @__PURE__ */ jsx("header", { className: "font-mono text-xs text-secondary", children: "Join to interact" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm", children: "To be able to start and participate in conversations in this community, you need to join first." }),
      /* @__PURE__ */ jsx("div", { className: "mt-2", children: !user ? /* @__PURE__ */ jsx(Anchor, { to: "/login", children: "Login & join" }) : /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          disabled: fetcher.state === "submitting",
          onClick: join,
          children: fetcher.state === "submitting" ? /* @__PURE__ */ jsx(Fragment, { children: "Joining" }) : /* @__PURE__ */ jsx(Fragment, { children: "Join community" })
        }
      ) })
    ] }),
    user && membership && /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxs("div", { className: "text-xs text-secondary", children: [
      "Member since ",
      dayjs(membership.createdAt).format("DD MMM YYYY")
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-lg:hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center mt-2 font-medium text-secondary text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "i-lucide-users-2 inline-block" }),
        community.members,
        " members"
      ] }),
      /* @__PURE__ */ jsx("ul", { children: members.map((member) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 py-1 px-2 rounded-lg hover:bg-zinc-100 items-center hover-bg-light", children: [
        /* @__PURE__ */ jsx(Avatar, { size: 22, name: member.user.username }),
        /* @__PURE__ */ jsxs("div", { children: [
          member.user.username,
          " ",
          member.role === "moderator" && /* @__PURE__ */ jsx("span", { className: "bg-zinc-200 dark:bg-neutral-800 rounded-full px-2 text-sm text-secondary font-medium", children: "MOD" })
        ] })
      ] }) }, member.userId)) })
    ] })
  ] });
}
function CommunityMod({ community }) {
  const { user } = useRouteLoaderData("root") || {};
  const fetcher = useFetcher();
  const actions = [];
  if (community.status === "pending-approval") {
    actions.push({ title: "Approve", id: "approve" });
  }
  function handleAction(action2) {
    switch (action2) {
      case "approve": {
        fetcher.submit(JSON.stringify({ action: action2 }), {
          encType: "application/json",
          method: "POST",
          action: `/communities/${community.handle}/mod`
        });
      }
    }
  }
  if (actions.length === 0) {
    return null;
  }
  if ((user == null ? void 0 : user.role) !== "moderator") return null;
  return /* @__PURE__ */ jsxs("div", { className: "mb-2 p-1 bg-red-50 border border-red-200 rounded-lg", children: [
    /* @__PURE__ */ jsx("header", { className: "font-mono text-xs text-red-500", children: "community mod" }),
    /* @__PURE__ */ jsx("div", { className: "flex", children: actions.map((action2) => /* @__PURE__ */ jsx(
      Button,
      {
        className: "text-sm p-1",
        variant: "neutral",
        onClick: () => handleAction(action2.id),
        disabled: fetcher.state === "submitting",
        children: action2.title
      },
      action2.id
    )) })
  ] });
}
const processor$2 = unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeSanitize).use(reduce).use(removeLinks).use(remarkMath).use(rehypeKatex).use(removeCodeTrail).use(rehypeShiki, {
  themes: { light: "vitesse-light", dark: "vitesse-dark" }
}).use(smartypants).use(rehypeStringify);
async function renderSummary(content) {
  return (await processor$2.process(content)).toString();
}
function removeLinks() {
  return (tree) => {
    visit(tree, "element", (child, index, parent) => {
      if (child.tagName === "a") {
        child.tagName = "span";
        child.properties.href = void 0;
        child.properties.className = "underline hyphens-auto";
      }
    });
  };
}
function reduce() {
  return (tree) => {
    const count = tree.children.length;
    tree.children.splice(5);
    if (count > 5) {
      tree.children.push({
        type: "element",
        tagName: "div",
        properties: { className: "content-more" },
        children: []
      });
    }
    visit(tree, "element", (child) => {
      const tagName = child.tagName;
      if (child.type === "element" && ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tagName)) {
        child.tagName = "div";
        child.properties = {
          ...child.properties,
          className: "reduce-heading"
        };
        child.children = [
          {
            type: "element",
            tagName: "div",
            properties: { className: "tag" },
            children: [{ type: "text", value: tagName }]
          },
          {
            type: "element",
            tagName: "div",
            properties: {},
            children: child.children
          }
        ];
      }
    });
  };
}
const loader$u = async ({ request, params }) => {
  const community = await prisma.community.findFirst({
    where: { handle: params.slug }
  });
  if (!community) {
    throw json({}, { status: 404 });
  }
  if (community.status !== "activated") {
    try {
      await checkMod(request);
    } catch {
      throw json({}, { status: 404 });
    }
  }
  let userId;
  try {
    userId = await checkAuth(request);
  } catch (err) {
    throw json({ err: "check auth failed" }, { status: 404 });
  }
  const members = await prisma.communityMember.findMany({
    where: { communityId: community.id },
    orderBy: { role: "desc" },
    include: { user: true }
  });
  const membership = userId ? await prisma.communityMember.findFirst({
    where: { communityId: community.id, userId }
  }) : null;
  const posts = await prisma.post.findMany({
    where: { communityId: community.id, parentId: null },
    include: { user: true, media: true, community: false },
    orderBy: { createdAt: "desc" }
  });
  for (const post of posts) {
    post.content = await renderSummary(post.content);
  }
  return json({ community, members, membership, posts, school: values.meta() });
};
const meta$n = ({ data }) => {
  if (!data) return [];
  return [
    {
      title: `${data.community.name} (+${data.community.handle}) | ${data.school.shortName} ✽ Virtual-Campus`
    },
    { name: "description", content: data.community.description }
  ];
};
function Community() {
  const { community, membership, posts } = useLoaderData();
  return /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 min-h-[60vh] gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-2", children: [
      /* @__PURE__ */ jsx(CommunityMod, { community }),
      /* @__PURE__ */ jsx("div", { className: "lg:hidden mb-2", children: /* @__PURE__ */ jsx(CommunityInfo, {}) }),
      /* @__PURE__ */ jsx(
        PostInput,
        {
          disabled: !membership,
          dataExtra: { communityId: community.id }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-2", children: posts.map((post, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(
          PostItem,
          {
            limit: true,
            post
          }
        ),
        i < posts.length - 1 && /* @__PURE__ */ jsx("hr", { className: "me-2 ms-12 dark:border-neutral-700" })
      ] }, post.id)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "col-span-1 max-lg:hidden", children: /* @__PURE__ */ jsx(CommunityInfo, {}) })
  ] }) });
}
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Community,
  loader: loader$u,
  meta: meta$n
}, Symbol.toStringTag, { value: "Module" }));
const loader$t = async ({ request, params }) => {
  const userId = await checkAuth(request);
  const notificationId = Number(params.id);
  const notification = await prisma.notification.findFirst({
    where: { id: notificationId }
  });
  if (!notification) {
    throw new Response("Not found", { status: 404 });
  }
  await prisma.notificationSubscriber.updateMany({
    data: { read: true },
    where: { notificationId, userId }
  });
  switch (notification.entityType) {
    case "post": {
      const post = await prisma.post.findFirst({
        where: { id: notification.entityId }
      });
      if (!post) {
        throw json({}, { status: 404 });
      }
      const path = [];
      if (post.path) {
        path.push(post.path);
      }
      path.push(post.id);
      return redirect(`/discussions/${path.join("/")}`);
    }
    case "community": {
      const community = await prisma.community.findFirst({
        where: { id: notification.entityId },
        select: { handle: true }
      });
      return redirect(`/communities/${community == null ? void 0 : community.handle}`);
    }
  }
};
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$t
}, Symbol.toStringTag, { value: "Module" }));
const MAX_FILES = 5;
function ProductForm({ product }) {
  const { categories } = useLoaderData();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: (product == null ? void 0 : product.name) || "",
      description: (product == null ? void 0 : product.description) || "",
      price: (product == null ? void 0 : product.price) || "",
      category: (product == null ? void 0 : product.categoryId) || 1
    }
  });
  const [imagesToUpload, setImagesToUpload] = React.useState([]);
  const [existingImages, setExistingImages] = React.useState(() => {
    return JSON.parse((product == null ? void 0 : product.images) || "[]");
  });
  const [uploading, setUploading] = React.useState(false);
  const fetcher = useFetcher();
  const editMode = Boolean(product);
  async function save(data) {
    if (existingImages.length + imagesToUpload.length === 0) {
      alert("You need to add at least 1 image");
      return;
    }
    const media = [...existingImages];
    if (imagesToUpload.length) {
      setUploading(true);
      try {
        for (const image of imagesToUpload) {
          media.push(await uploadMedia(image));
        }
      } catch (err) {
        return;
      } finally {
        setUploading(false);
      }
    }
    data.images = JSON.stringify(media);
    fetcher.submit(JSON.stringify(data), {
      method: editMode ? "PATCH" : "POST",
      encType: "application/json"
    });
  }
  function handleImageSelect(event) {
    const files = event.target.files;
    if (!(files == null ? void 0 : files.length)) {
      return;
    }
    const max = MAX_FILES - (imagesToUpload.length + existingImages.length);
    const top = Array.from(files).slice(0, max);
    if (top.length === 0) {
      alert(
        `You already have ${MAX_FILES} uploaded. You need to remove some before adding any.`
      );
      return;
    }
    setImagesToUpload((prev) => [...prev, ...top]);
  }
  const canUploadImage = imagesToUpload.length + existingImages.length < MAX_FILES;
  const saving = fetcher.state === "submitting" || uploading;
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(save), children: [
    /* @__PURE__ */ jsxs("label", { children: [
      "Product name",
      /* @__PURE__ */ jsx(Input, { ...register("name", { required: true }) })
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "mt-2", children: [
      "Category",
      /* @__PURE__ */ jsx(
        Select,
        {
          ...register("category", { required: true, valueAsNumber: true }),
          children: categories.map((category) => /* @__PURE__ */ jsx("option", { value: category.id, children: category.title }, category.id))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "mt-2", children: [
      "Price",
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "number",
          ...register("price", {
            required: true,
            valueAsNumber: true,
            min: 0.5
          })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "mt-2", children: [
      "Description ",
      /* @__PURE__ */ jsx("span", { className: "text-secondary text-sm", children: "(optional)" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          placeholder: "Talk about the product. Mention available sizes, variants, etc.",
          ...register("description", { maxLength: 720 })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-5 gap-2 my-2", children: [
      existingImages.map((img, i) => {
        return /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: img.thumbnail,
              alt: `Existing ${i + 1}`,
              className: "w-full aspect-square object-cover rounded-lg"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "absolute right-0 bottom-0 p-1 bg-red-500 text-white rounded-lg rounded-lb-0 rounded-rt-0",
              type: "button",
              onClick: () => {
                setExistingImages(
                  (prev) => prev.filter((it) => it !== img)
                );
              },
              children: /* @__PURE__ */ jsx("div", { className: "i-lucide-trash-2" })
            }
          )
        ] }) }, img.url);
      }),
      imagesToUpload.map((img, i) => {
        return /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: URL.createObjectURL(img),
              alt: `To upload ${i + 1}`,
              className: "w-full aspect-square object-cover rounded-lg"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "absolute right-0 bottom-0 p-1 bg-red-500 text-white rounded-lg rounded-lb-0 rounded-rt-0",
              type: "button",
              onClick: () => {
                setImagesToUpload(
                  (prev) => prev.filter((it) => it !== img)
                );
              },
              children: /* @__PURE__ */ jsx("div", { className: "i-lucide-trash-2" })
            }
          )
        ] }) }, img.name);
      })
    ] }),
    /* @__PURE__ */ jsxs(
      FileInput,
      {
        accept: "image/*",
        className: "w-[8.5rem]",
        multiple: true,
        onChange: handleImageSelect,
        disabled: !canUploadImage,
        children: [
          /* @__PURE__ */ jsx("div", { className: "i-lucide-image-plus opacity-40" }),
          " Add images"
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-secondary", children: "At least 1 image is required. You can add up to 5 images." }),
    /* @__PURE__ */ jsx("footer", { className: "mt-4", children: /* @__PURE__ */ jsx(Button, { disabled: saving, children: saving ? "Saving…" : editMode ? "Update product" : "Add product" }) })
  ] });
}
const loader$s = async ({ request, params }) => {
  const userId = await checkAuth(request);
  const product = await prisma.product.findFirst({
    where: { id: Number(params.id) },
    include: { category: true, seller: true }
  });
  if (!product) {
    throw notFound();
  }
  if (product.seller.userId !== userId) {
    throw forbidden();
  }
  const categories = await prisma.category.findMany();
  return { categories, school: values.meta(), product };
};
const action$m = async ({ request, params }) => {
  if (request.method !== "PATCH") {
    throw methodNotAllowed();
  }
  const userId = await checkAuth(request);
  const data = await request.json();
  await prisma.product.update({
    where: { id: Number(params.id), seller: { userId } },
    data: {
      name: data.name,
      categoryId: data.category,
      price: data.price,
      images: data.images,
      description: data.description
    }
  });
  return redirect(`/market/${params.id}`);
};
const meta$m = ({ data }) => {
  return [
    { title: `Edit ${data == null ? void 0 : data.product.name} | ${data == null ? void 0 : data.school.shortName} ✽ gctuvc` },
    {
      name: "description",
      content: data == null ? void 0 : data.product.description
    }
  ];
};
function ProductDetail$1() {
  const { product } = useLoaderData();
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto min-h-[60vh]", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-3", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-lg", children: "Add new product" }),
    /* @__PURE__ */ jsx(ProductForm, { product })
  ] }) }) });
}
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$m,
  default: ProductDetail$1,
  loader: loader$s,
  meta: meta$m
}, Symbol.toStringTag, { value: "Module" }));
async function getModerators() {
  return await prisma.user.findMany({
    where: { role: "moderator" },
    select: { id: true }
  });
}
const USERNAME_REGEX = /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/g;
const MENTION_REGEX = /@(?=[a-zA-Z0-9._]{4,20}(?:\s|$))(?!.*[_.]{2})[a-zA-Z0-9][a-zA-Z0-9._]{2,18}[a-zA-Z0-9]/igm;
const loader$r = async () => {
  return json({ school: values.meta() });
};
const action$l = async ({ request }) => {
  if (request.method !== "POST") {
    throw json({}, { status: 405 });
  }
  const userId = await checkAuth(request);
  const data = await request.json();
  const community = await prisma.community.create({
    data: { ...data, createdById: userId, status: "pending-approval" }
  });
  const notification = await prisma.notification.create({
    data: {
      message: `A new community (${data.name}) is pending approval.`,
      entityId: community.id,
      entityType: "community",
      actorId: userId
    }
  });
  const moderators = await getModerators();
  for (const mod of moderators) {
    await prisma.notificationSubscriber.create({
      data: {
        notificationId: notification.id,
        userId: mod.id
      }
    });
  }
  return redirect("/communities/created?successful=1");
};
const meta$l = ({ data }) => {
  return [
    { title: `Start a Community | ${data == null ? void 0 : data.school.shortName} ✽ gctuvc` },
    { name: "description", content: "Put people together and make wonders" }
  ];
};
function CreateCommunity() {
  const { handleSubmit, register } = useForm();
  const fetcher = useFetcher();
  async function createCommunity(data) {
    fetcher.submit(JSON.stringify(data), {
      encType: "application/json",
      method: "POST"
    });
  }
  return /* @__PURE__ */ jsxs("div", { className: "mt-2 container mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl", children: "Start a community" }),
    /* @__PURE__ */ jsx("p", { className: "text-secondary", children: "Before proceeding, please make sure the community you're about to create does not already exist." }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-2", children: /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(createCommunity), children: [
      /* @__PURE__ */ jsxs("label", { className: "mb-2", children: [
        "Name",
        /* @__PURE__ */ jsx(Input, { maxLength: 32, ...register("name", { required: true }) })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "mb-2", children: [
        "Handle",
        /* @__PURE__ */ jsx(
          Input,
          {
            maxLength: 32,
            ...register("handle", {
              pattern: USERNAME_REGEX,
              required: true
            })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "text-secondary text-sm", children: "This is like the username of the community." })
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        "Description",
        /* @__PURE__ */ jsx(
          Textarea,
          {
            maxLength: 512,
            placeholder: "Talk about the community.",
            ...register("description", {
              required: true,
              setValueAs(value) {
                return value.trim();
              }
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "mb-2", children: [
        "Phone",
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "tel",
            ...register("modPhone", { pattern: /\d{10}/, required: true })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "text-secondary text-sm", children: "For verification and correspondence purposes." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Button, { disabled: fetcher.state === "submitting", children: fetcher.state === "submitting" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "i-svg-spinners-180-ring-with-bg inline-block" }),
        " ",
        "Submitting…"
      ] }) : /* @__PURE__ */ jsx(Fragment, { children: "Create community" }) }) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-secondary", children: "This submission will go through an approval process. You'll receive an email and a notification when the community is approved." })
    ] }) }) })
  ] });
}
const route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$l,
  default: CreateCommunity,
  loader: loader$r,
  meta: meta$l
}, Symbol.toStringTag, { value: "Module" }));
function usePostPeople(postId) {
  const [people, setPeople] = React.useState([]);
  const fetcher = useFetcher();
  React.useEffect(() => {
    fetcher.load(`/people?postId=${postId}`);
  }, [postId, fetcher.load]);
  React.useEffect(() => {
    if (fetcher.data) {
      setPeople(fetcher.data.people);
    }
  }, [fetcher.data]);
  return people;
}
function PostPeople({ post }) {
  const people = usePostPeople(post.id);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "text-sm text-secondary font-medium ms-1 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "i-lucide-users-2" }),
      " People",
      /* @__PURE__ */ jsx("span", { className: "bg-zinc-200 dark:bg-neutral-800 rounded-full px-2", children: post.people })
    ] }),
    /* @__PURE__ */ jsx("ul", { children: people.map((person) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 py-1 px-2 rounded-lg hover:bg-zinc-100 items-center hover-bg-light", children: [
      /* @__PURE__ */ jsx(Link, { to: `/p/${person.username}`, children: /* @__PURE__ */ jsx(Avatar, { size: 22, name: person.username }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        person.username,
        " ",
        person.id === post.user.id && /* @__PURE__ */ jsx("span", { className: "bg-zinc-200 dark:bg-neutral-800 rounded-full px-2 text-sm text-secondary font-medium", children: "OP" })
      ] })
    ] }) }, person.id)) })
  ] });
}
async function createPost(data, userId) {
  const media = data.media;
  const path = await getPath(data.parentId);
  const post = await prisma.post.create({
    data: {
      content: data.content,
      userId,
      upvotes: 1,
      parentId: data.parentId,
      people: 1,
      tags: data.tags,
      path,
      communityId: data.communityId
    }
  });
  await Promise.all(
    media.map(
      (item) => prisma.media.create({ data: { ...item, postId: post.id } })
    )
  );
  await prisma.vote.create({
    data: {
      postId: post.id,
      userId,
      up: true
    }
  });
  return post;
}
async function getPath(id) {
  if (!id) {
    return;
  }
  const parent = await prisma.post.findFirst({
    where: { id },
    select: { parentId: true }
  });
  return [await getPath(parent == null ? void 0 : parent.parentId), id].filter(Boolean).join("/");
}
const processor$1 = remark().use(strip);
async function renderStripped(content, maxLength) {
  const stripped = (await processor$1.process(content)).toString().replaceAll("\n", " ");
  {
    const truncated = stripped.substring(0, maxLength);
    return stripped.length > maxLength ? `${truncated}…` : truncated;
  }
}
async function createPostNotification(post, author) {
  if (!post.parentId) return;
  const op = await prisma.post.findFirst({
    where: { id: post.parentId }
  });
  const summary = await renderStripped(op.content, 42);
  const message = [`@${author == null ? void 0 : author.username}`];
  if (op.userId !== author.id) {
    if (op.path) {
      message.push("replied to your comment:");
    } else {
      message.push("commented on:");
    }
    message.push(summary);
    const data = {
      message: message.join(" "),
      actorId: author.id,
      entityId: post.id,
      entityType: "post"
    };
    const notification = await prisma.notification.create({
      data
    });
    await prisma.notificationSubscriber.create({
      data: {
        userId: op.userId,
        notificationId: notification.id
      }
    });
  }
  const usernames = post.content.match(MENTION_REGEX) || [];
  const cleaned = usernames.map((u) => u.replace(/^@/, "").trim());
  const mentions = cleaned.filter((username) => username !== author.username);
  const mentionedUsers = await prisma.user.findMany({
    where: {
      username: { in: mentions },
      id: { not: op.userId }
    },
    select: { id: true }
  });
  const type = op.path ? "comment" : "post";
  const mentionsNotification = await prisma.notification.create({
    data: {
      message: `@${author.username} mentioned you in a ${type}: ${summary}`,
      actorId: author.id,
      entityId: post.id,
      entityType: "post"
    }
  });
  for (const mentionedUser of mentionedUsers) {
    await prisma.notificationSubscriber.create({
      data: {
        userId: mentionedUser.id,
        notificationId: mentionsNotification.id
      }
    });
  }
}
async function includeVotes(posts, request) {
  try {
    const userId = await checkAuth(request);
    const votes = userId ? await prisma.vote.findMany({
      where: { userId, postId: { in: posts.map(({ id }) => id) } },
      select: { up: true, postId: true }
    }) : [];
    const postVoteIndex = {};
    for (const vote of votes) {
      postVoteIndex[vote.postId] = vote.up;
    }
    for (const post of posts) {
      post.vote = postVoteIndex[post.id];
    }
  } catch {
  }
  return posts;
}
const loader$q = async ({ request, params }) => {
  const postId = Number(params.id);
  const post = await prisma.post.findFirst({
    where: { id: postId },
    include: { user: true, media: true, community: true }
  });
  if (!post) {
    throw new Response("Not found", { status: 404 });
  }
  post.content = await render(post.content);
  const comments = await prisma.post.findMany({
    where: { parentId: post.id },
    include: { user: true, media: true }
  });
  for (const comment of comments) {
    comment.content = await render(comment.content);
  }
  let vote;
  try {
    const userId = await checkAuth(request);
    const voteRecord = await prisma.vote.findFirst({
      where: { userId, postId }
    });
    vote = voteRecord == null ? void 0 : voteRecord.up;
  } catch {
  }
  return json({
    comments: await includeVotes(comments, request),
    meta: values.meta(),
    post: { ...post, vote }
  });
};
const action$k = async ({ request, params }) => {
  const userId = await checkAuth(request);
  switch (request.method) {
    case "DELETE": {
      const postId = Number(params.id);
      const post = await prisma.post.findFirst({ where: { id: postId } });
      await prisma.post.delete({ where: { id: postId, userId } });
      if (post == null ? void 0 : post.parentId) {
        await updatePostProps(post.parentId);
      }
      if (!(post == null ? void 0 : post.parentId)) {
        return redirect("/discussions");
      }
      return null;
    }
    case "POST": {
      const data = await request.json();
      const post = await createPost(data, userId);
      const user = await prisma.user.findFirst({
        where: { id: userId }
      });
      await createPostNotification(post, user);
      await updatePostProps(data.parentId);
      return json({}, { status: 201 });
    }
  }
  return json({}, { status: 405 });
};
async function updatePostProps(postId) {
  const comments = await prisma.post.count({
    where: { parentId: postId }
  });
  const people = await prisma.user.count({
    where: {
      Post: {
        some: { OR: [{ id: postId }, { parentId: postId }], deleted: false }
      }
    }
  });
  await prisma.post.update({
    where: { id: postId },
    data: { commentsCount: comments, people }
  });
}
const meta$k = ({ data }) => {
  const summary = data == null ? void 0 : data.post.content.substring(0, 72);
  return [
    {
      title: `@${data == null ? void 0 : data.post.user.username} posted in Discussions | ${data == null ? void 0 : data.meta.shortName} ✽ gctuvc`
    },
    { name: "description", content: `${summary}…` }
  ];
};
function Discussion() {
  const { comments, post } = useLoaderData();
  const { user } = useRouteLoaderData("root") || {};
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto min-h-[60vh]", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-2", children: [
      /* @__PURE__ */ jsx(PostContent$1, { post }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2 mt-4", children: user ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Link, { to: `/p/${user.username}`, children: /* @__PURE__ */ jsx(Avatar, { name: (user == null ? void 0 : user.username) || "" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
          PostInput,
          {
            parent: post,
            level: 1
          }
        ) })
      ] }) : /* @__PURE__ */ jsx(LoginComment, {}) }),
      /* @__PURE__ */ jsx("div", { className: "mt-2", children: comments.map((comment, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(
          PostItem,
          {
            post: comment,
            level: 1
          }
        ),
        i < comments.length - 1 && /* @__PURE__ */ jsx("hr", { className: "me-2 ms-12 dark:border-neutral-800" })
      ] }, comment.id)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "cols-span-1 hidden lg:block", children: /* @__PURE__ */ jsx(PostPeople, { post }) })
  ] }) });
}
const route17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$k,
  default: Discussion,
  loader: loader$q,
  meta: meta$k
}, Symbol.toStringTag, { value: "Module" }));
const loader$p = async ({ request }) => {
  const school = values.get("id");
  return { email: new URL(request.url).searchParams.get("email"), school };
};
const meta$j = () => {
  return [{ title: "Account Created ✽ Virtual-Campus" }];
};
function AccountCreated() {
  const { email, school } = useLoaderData();
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto h-[60vh]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[24rem] rounded-lg border  bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800", children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-2 text-2xl font-bold", children: "Account created" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "A verification link has been sent to this email:",
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-blue-600 dark:text-blue-500", children: email })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-2", children: "You may not be able to add or edit content on Virtual-Campus until you verify your account." }),
    school === "knust" && /* @__PURE__ */ jsx(KnustLoginDirection, {}),
    /* @__PURE__ */ jsxs("div", { className: "mt-2 text-secondary", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "underline",
          target: "_blank",
          href: "https://wa.me/233209792039",
          rel: "noreferrer",
          children: "Click here"
        }
      ),
      " ",
      "to send a DM if you need help."
    ] })
  ] }) });
}
const route18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AccountCreated,
  loader: loader$p,
  meta: meta$j
}, Symbol.toStringTag, { value: "Module" }));
const loader$o = async () => {
  return { school: values.meta() };
};
const action$j = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response(null, { status: 405 });
  }
  const { email } = await request.json();
  const user = await prisma.user.findFirst({ where: { email } });
  if (!user) {
    return json({});
  }
  const hourAgo = dayjs().subtract(1, "hour").toDate();
  const validToken = await prisma.passwordResetRequest.findFirst({
    where: { userId: user.id, used: false, createdAt: { gte: hourAgo } }
  });
  if (validToken) {
    return json({});
  }
  const resetRequest = await prisma.passwordResetRequest.create({
    data: {
      userId: user.id,
      token: randomStr(24)
    }
  });
  const link = [
    `https://gctuvc.com/reset-password?`,
    `email=${email}`,
    `&token=${resetRequest.token}`
  ].join("");
  await send({
    to: user.email,
    from: "m@gctuvc.com",
    subject: "Reset Password ✽ gctuv",
    text: `Hi 👋🏽,

You requested to change your password. Click this link to continue: ${link}.

All the best!`
  });
  return json({});
};
const meta$i = () => {
  return [{ title: "Forgot Password ✽ gctuvc" }];
};
function ForgotPassword() {
  const { school } = useLoaderData();
  const { handleSubmit, register } = useForm();
  const fetcher = useFetcher();
  async function sendRequest(data) {
    fetcher.submit(JSON.stringify(data), {
      encType: "application/json",
      method: "POST"
    });
  }
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("div", { className: "min-h-[60vh]", children: /* @__PURE__ */ jsx("div", { className: "lg:max-w-[24rem] mx-auto", children: /* @__PURE__ */ jsxs(
    "form",
    {
      className: "bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-800 p-4",
      onSubmit: handleSubmit(sendRequest),
      children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-bold text-2xl mb-2", children: [
          "Forgot ",
          /* @__PURE__ */ jsx("br", {}),
          "Password"
        ] }),
        fetcher.data ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "mt-2", children: "Reset link has been sent to your email." }),
          school.id === "gctu" && /* @__PURE__ */ jsx(KnustLoginDirection, {})
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("label", { className: "block mt-2", children: [
            "Email",
            /* @__PURE__ */ jsx(Input, { ...register("email", { required: true }) }),
            /* @__PURE__ */ jsx("small", { className: "text-secondary", children: "A reset link will be sent to this address if it's valid." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Button, { disabled: fetcher.state === "submitting", children: fetcher.state === "submitting" ? "Sending..." : "Send" }) })
        ] })
      ]
    }
  ) }) }) });
}
const route19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$j,
  default: ForgotPassword,
  loader: loader$o,
  meta: meta$i
}, Symbol.toStringTag, { value: "Module" }));
const loader$n = async ({ request }) => {
  const userId = await checkAuth(request);
  const sellerProfile = await prisma.sellerProfile.findFirst({
    where: { userId }
  });
  return { school: values.meta(), sellerProfile };
};
const action$i = async ({ request }) => {
  if (!["POST", "PATCH"].includes(request.method)) {
    return json(null, { status: 405 });
  }
  const userId = await checkAuth(request);
  const data = await request.json();
  switch (request.method) {
    case "POST": {
      await prisma.sellerProfile.create({ data: { ...data, userId } });
      break;
    }
    case "PATCH": {
      const profile = await prisma.sellerProfile.findFirst({
        where: { userId },
        select: { id: true }
      });
      if (!profile) {
        break;
      }
      await prisma.sellerProfile.update({ where: { id: profile.id }, data });
    }
  }
  return redirect("/market");
};
const meta$h = ({ data }) => {
  return [
    { title: `Your Market Profile | ${data == null ? void 0 : data.school.shortName} ✽ gctuvc` },
    {
      name: "description",
      content: "Set up your market profile to be able to sell on gctuvc."
    }
  ];
};
function MarketProfile() {
  const { sellerProfile } = useLoaderData();
  const { handleSubmit, register, setValue, watch } = useForm({
    defaultValues: {
      phone: (sellerProfile == null ? void 0 : sellerProfile.phone) || "",
      whatsapp: (sellerProfile == null ? void 0 : sellerProfile.whatsapp) || "",
      instagram: (sellerProfile == null ? void 0 : sellerProfile.instagram) || "",
      snapchat: (sellerProfile == null ? void 0 : sellerProfile.snapchat) || "",
      businessName: (sellerProfile == null ? void 0 : sellerProfile.businessName) || ""
    }
  });
  const fetcher = useFetcher();
  function save(data) {
    fetcher.submit(JSON.stringify(data), {
      method: sellerProfile ? "PATCH" : "POST",
      encType: "application/json"
    });
  }
  const $phone = watch("phone");
  const $whatsapp = watch("whatsapp");
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto min-h-[60vh]", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-3", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-lg", children: "Market profile" }),
    /* @__PURE__ */ jsx("p", { children: "Set up your market profile to be able to sell on gctuvc. These details allow customers to identify and reach you." }),
    /* @__PURE__ */ jsxs("form", { className: "mt-2", onSubmit: handleSubmit(save), children: [
      /* @__PURE__ */ jsxs("label", { children: [
        "Phone",
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "tel",
            ...register("phone", {
              required: true,
              pattern: /^\d{10,}$/
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-secondary", children: "This number will be shown to customers for calls." }),
      /* @__PURE__ */ jsxs("label", { className: "mt-2", children: [
        "Whatsapp number ",
        /* @__PURE__ */ jsx("span", { className: "text-secondary", children: "(optional)" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "tel",
            ...register("whatsapp", {
              pattern: /^\d{10,}$/
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-secondary", children: [
        /* @__PURE__ */ jsxs("label", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              className: "border rounded bg-zinc-200 dark:bg-neutral-700",
              checked: ($phone == null ? void 0 : $phone.length) > 0 && $phone === $whatsapp,
              onChange: (e) => {
                if (e.target.checked) {
                  setValue("whatsapp", $phone);
                }
              }
            }
          ),
          "Same as phone number"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm", children: "A link to your Whatsapp DM will be shown on product details." })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "mt-2", children: [
        "Instagram handle",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-secondary", children: "(optional)" }),
        /* @__PURE__ */ jsx(Input, { type: "text", ...register("instagram") })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "mt-2", children: [
        "Snapchat handle ",
        /* @__PURE__ */ jsx("span", { className: "text-secondary", children: "(optional)" }),
        /* @__PURE__ */ jsx(Input, { type: "text", ...register("snapchat") })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "mt-2", children: [
        "Business name ",
        /* @__PURE__ */ jsx("span", { className: "text-secondary", children: "(optional)" }),
        /* @__PURE__ */ jsx(Input, { type: "text", ...register("businessName") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-secondary", children: "This will be shown on product details." }),
      /* @__PURE__ */ jsx("footer", { className: "mt-2", children: /* @__PURE__ */ jsx(Button, { disabled: fetcher.state === "submitting", children: fetcher.state === "submitting" ? /* @__PURE__ */ jsx(Fragment, { children: "Saving…" }) : /* @__PURE__ */ jsx(Fragment, { children: "Save profile" }) }) })
    ] })
  ] }) }) });
}
const route20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$i,
  default: MarketProfile,
  loader: loader$n,
  meta: meta$h
}, Symbol.toStringTag, { value: "Module" }));
const ROUNDS = process.env.NODE_ENV === "production" ? 12 : 4;
async function hash(password) {
  return await bcrypt.hash(password, ROUNDS);
}
async function gctuvcre(password, hash2) {
  return await bcrypt.gctuvcre(password, hash2);
}
const restrictedUsernames = [
  "frimp",
  "gctuvc",
  "gctucv.com",
  "admin",
  "sysadmin",
  "info",
  "username",
  "user",
  "welcome",
  "moderator",
  "hello"
];
const loader$m = async () => {
  const school = values.get("shortName");
  const emailExtensions = values.get("emailExtensions");
  return { emailExtensions, school };
};
const action$h = async ({ request }) => {
  var _a2;
  if (request.method !== "POST") {
    return new Response(null, { status: 405 });
  }
  const { password, email, username } = await request.json();
  for (const restrictedUsername of restrictedUsernames) {
    if (username === restrictedUsername) {
      return json(
        {
          type: "conflict",
          field: "username",
          message: "Username already exists."
        },
        { status: 403 }
      );
    }
  }
  const emailExtensions = values.get("emailExtensions");
  if (!emailExtensions.some((ext) => email.endsWith(ext))) {
    return json(
      {
        type: "invalid-email",
        message: "Invalid email. Use your school email."
      },
      { status: 403 }
    );
  }
  let user;
  try {
    user = await prisma.user.create({ data: { email, username } });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      const [field] = (_a2 = error.meta) == null ? void 0 : _a2.target;
      return json(
        { type: "conflict", field, message: `${field} already exists` },
        { status: 403 }
      );
    }
    return json(
      { type: "unknown-error", message: "something wrong happened" },
      { status: 500 }
    );
  }
  await prisma.authCredential.create({
    data: { password: await hash(password), userId: user.id }
  });
  await sendEmailVerification(email);
  return redirect(`/account-created?email=${user.email}`);
};
const meta$g = ({ data }) => {
  return [{ title: `Create Account | ${data == null ? void 0 : data.school} ✽ compa` }];
};
function CreateAccount() {
  const { emailExtensions } = useLoaderData();
  const { formState, getFieldState, handleSubmit, register, setError } = useForm();
  const fetcher = useFetcher();
  const actionData = useActionData();
  const submit = useSubmit();
  function createAccount(data) {
    submit(JSON.stringify(data), {
      method: "POST",
      encType: "application/json"
    });
  }
  const emailState = getFieldState("email", formState);
  const usernameState = getFieldState("username", formState);
  React.useEffect(() => {
    if (!actionData) {
      return;
    }
    if (actionData.type === "conflict") {
      setError(actionData.field, { message: actionData.message });
    }
  }, [actionData, setError]);
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("div", { className: "min-h-[60vh]", children: /* @__PURE__ */ jsx("div", { className: "lg:max-w-[24rem] mx-auto", children: /* @__PURE__ */ jsxs(
    "form",
    {
      className: "bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-800 p-4",
      onSubmit: handleSubmit(createAccount),
      children: [
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-2xl mb-2", children: "Create Account" }),
        /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            "Username",
            usernameState.error && /* @__PURE__ */ jsx("small", { className: "text-red-500 pl-2", children: usernameState.error.message })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              ...register("username", {
                required: true,
                pattern: USERNAME_REGEX
              })
            }
          ),
          /* @__PURE__ */ jsx("small", { className: "text-secondary", children: "This can never be changed." })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block mt-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            "Email",
            " ",
            emailState.error && /* @__PURE__ */ jsx("small", { className: "text-red-500 pl-2", children: emailState.error.message })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              ...register("email", {
                required: true,
                validate(email) {
                  return emailExtensions.some((ext) => email.endsWith(ext)) || "Invalid email. Use your school email.";
                },
                setValueAs(v) {
                  return v.toLowerCase();
                }
              })
            }
          ),
          /* @__PURE__ */ jsxs("small", { className: "text-secondary", style: { lineHeight: "1rem" }, children: [
            "Your school email. You'll need to verify your account.",
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block mt-2", children: [
          "Password",
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "password",
              ...register("password", { required: true, minLength: 8 })
            }
          ),
          /* @__PURE__ */ jsx("small", { className: "text-secondary", children: "Minimum of 8 characters" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Button, { disabled: fetcher.state === "submitting", children: fetcher.state === "submitting" ? "Creating account..." : "Create an account" }) }),
        /* @__PURE__ */ jsxs("p", { className: "mt-2", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsx(Link, { className: "underline font-medium text-rose-500", to: "/login", children: "Log in" }),
          " ",
          "instead."
        ] })
      ]
    }
  ) }) }) });
}
const route21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$h,
  default: CreateAccount,
  loader: loader$m,
  meta: meta$g
}, Symbol.toStringTag, { value: "Module" }));
const loader$l = async ({ request }) => {
  const email = new URL(request.url).searchParams.get("email");
  return json({ email });
};
const action$g = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  if (!email || !token) {
    return json({ type: "invalid-request" }, { status: 400 });
  }
  const user = await prisma.user.findFirst({ where: { email } });
  if (!user) {
    return json({ type: "no-user" }, { status: 400 });
  }
  const dayAgo = dayjs().subtract(1, "day").toDate();
  const resetRequest = await prisma.passwordResetRequest.findFirst({
    where: { userId: user.id, token, used: false, createdAt: { gte: dayAgo } }
  });
  if (!resetRequest) {
    return json({ type: "invalid-token" }, { status: 400 });
  }
  const { password } = await request.json();
  await prisma.authCredential.update({
    where: { userId: user.id },
    data: { password: await hash(password) }
  });
  await prisma.passwordResetRequest.update({
    where: { id: resetRequest.id },
    data: { used: true }
  });
  return redirect("/login?password-changed=true");
};
const meta$f = () => {
  return [{ title: "Reset Password ✽ gctuvc" }];
};
function ResetPassword() {
  const submit = useSubmit();
  const navigation = useNavigation();
  const actionData = useActionData();
  const { handleSubmit, register } = useForm();
  const { email } = useLoaderData();
  function resetPassword(data) {
    submit(JSON.stringify(data), {
      method: "POST",
      encType: "application/json"
    });
  }
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("div", { className: "min-h-[60vh]", children: /* @__PURE__ */ jsx("div", { className: "lg:max-w-[24rem] mx-auto", children: /* @__PURE__ */ jsxs(
    "form",
    {
      className: "bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-800 p-4",
      onSubmit: handleSubmit(resetPassword),
      children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-bold text-2xl mb-2", children: [
          "Reset ",
          /* @__PURE__ */ jsx("br", {}),
          "Password"
        ] }),
        (actionData == null ? void 0 : actionData.type) === "invalid-request" && /* @__PURE__ */ jsxs("div", { className: "p-2 rounded-lg bg-zinc-100 mb-2", children: [
          "This reset link is invalid/expired. Request another",
          " ",
          /* @__PURE__ */ jsx(Link, { className: "underline font-medium", to: "/forgot-password", children: "from here" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "You're changing the password for",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: email })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block mt-2", children: [
          "Password",
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "password",
              ...register("password", { required: true, minLength: 8 })
            }
          ),
          /* @__PURE__ */ jsx("small", { className: "text-secondary", children: "Minimum of 8 characters" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Button, { disabled: navigation.state === "submitting", children: navigation.state === "submitting" ? "Updating..." : "Reset password" }) })
      ]
    }
  ) }) }) });
}
const route22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$g,
  default: ResetPassword,
  loader: loader$l,
  meta: meta$f
}, Symbol.toStringTag, { value: "Module" }));
const loader$k = async ({ request }) => {
  const userId = await checkAuth(request);
  const notifications = await prisma.notificationSubscriber.findMany({
    where: { userId },
    include: { notification: true },
    orderBy: { notification: { createdAt: "desc" } }
  });
  for (const notification of notifications) {
    notification.notification.message = await render(
      notification.notification.message
    );
  }
  return json({ school: values.meta(), notifications });
};
const meta$e = ({ data }) => {
  return [
    { title: `Notifications | ${data == null ? void 0 : data.school.shortName} ✽ gctuvc` },
    {
      name: "notifications",
      content: "Find out about all your unread notifications"
    }
  ];
};
function Notifications() {
  const { notifications } = useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto min-h-[60vh]", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl mb-2", children: "Notifications" }),
    /* @__PURE__ */ jsx("ul", { children: notifications.map((notification) => {
      const notificationType = notification.notification.entityType;
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        NavLink,
        {
          to: `/notifications/${notification.notification.id}`,
          className: clsx(
            "flex hover:bg-zinc-100 dark:hover:bg-neutral-800 px-2 py-1",
            {
              "opacity-60": notification.read
            }
          ),
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: clsx("me-2 text-secondary mt-1", {
                  "i-lucide-message-square": notificationType === "post",
                  "i-lucide-users": notificationType === "community"
                })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-1 gap-2 max-sm:block", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-1", children: parse(notification.notification.message) }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-secondary", children: postTime(notification.notification.createdAt) })
            ] })
          ]
        }
      ) }, notification.id);
    }) }),
    notifications.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-secondary font-medium flex gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "i-lucide-coffee" }),
      " Fresh. You've got nothing to worry about."
    ] })
  ] });
}
const route23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Notifications,
  loader: loader$k,
  meta: meta$e
}, Symbol.toStringTag, { value: "Module" }));
const action$f = async ({ request, params }) => {
  if (request.method !== "DELETE") {
    throw new Response(null, { status: 405 });
  }
  const userId = await checkAuth(request);
  await prisma.repository.delete({ where: { userId, id: Number(params.id) } });
  return json({});
};
const route24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$f
}, Symbol.toStringTag, { value: "Module" }));
const loader$j = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  if (!email || !token) {
    return new Response(null, { status: 400 });
  }
  const verificationRequest = await prisma.emailVerificationRequest.findFirst({
    where: { email, token }
  });
  if (!verificationRequest) {
    return new Response(null, { status: 400 });
  }
  await prisma.user.update({
    where: { email },
    data: { verified: true }
  });
  return redirect("/login?verified=true");
};
const route25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$j
}, Symbol.toStringTag, { value: "Module" }));
const loader$i = async () => {
  const communities = await prisma.community.findMany({
    where: { status: "activated" },
    orderBy: { name: "asc" }
  });
  return json$1({ communities, school: values.meta() });
};
const meta$d = ({ data }) => {
  return [
    { title: `Communities | ${data == null ? void 0 : data.school.shortName} ✽ gctuvc` },
    {
      name: "description",
      content: "Find people with similar interests with Communities. It's an opportunity to engage with like-minds; start conversations, share ideas and grow together."
    }
  ];
};
function Communities() {
  const { communities } = useLoaderData();
  const { user } = useRouteLoaderData("root") || {};
  return /* @__PURE__ */ jsxs("div", { className: "container min-h-[60vh]", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold flex-1 text-xl mb-2", children: "Communities" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3", children: /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-2", children: [
      /* @__PURE__ */ jsx("p", { children: "Find people with similar interests with Communities. It's an opportunity to engage with like-minds; start conversations, share ideas and grow together." }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-secondary", children: "If you'd like to lead a community, click Start Community to get started." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-2", children: user ? /* @__PURE__ */ jsx(Anchor, { to: "/communities/new", children: "Start a community" }) : /* @__PURE__ */ jsxs("div", { className: "text-secondary", children: [
      "You need to",
      " ",
      /* @__PURE__ */ jsx(Link, { className: "underline", to: "/login", children: "log in" }),
      " ",
      "first to start a community."
    ] }) }),
    /* @__PURE__ */ jsx("ul", { className: "mt-2", children: communities.map((community) => {
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: `/communities/${community.handle}`, children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 hover:bg-zinc-100 dark:hover:bg-neutral-800 rounded-lg p-2", children: [
        /* @__PURE__ */ jsx(
          Avatar,
          {
            name: community.handle,
            variant: "marble",
            className: "!rounded-lg overflow-hidden",
            square: true
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-medium", children: community.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-secondary font-mono", children: [
            "Open community • ",
            community.members,
            " members"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-secondary text-sm", children: ellipsize$1(community.description, 60) })
        ] })
      ] }) }) }, community.id);
    }) })
  ] });
}
const route26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Communities,
  loader: loader$i,
  meta: meta$d
}, Symbol.toStringTag, { value: "Module" }));
function DiscussionsEmpty() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      version: "1.1",
      id: "Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 1080 838",
      xmlSpace: "preserve",
      className: "text-secondary opacity-40 dark:opacity-70",
      children: [
        /* @__PURE__ */ jsx("title", { children: "No discussions" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M605.439,773.77c1.778,0,3.033,0,4.494,0c0.196-0.786,0.442-1.387,0.486-2.003c2.018-28.406,3.769-56.833,6.085-85.214\n	c2.56-31.369,5.275-62.734,8.585-94.03c3.362-31.79,7.174-63.543,11.435-95.225c5.791-43.053,11.791-86.105,23.019-128.181\n	c1.583-5.931,4.547-11.493,6.872-17.226c0.757,0.214,1.513,0.427,2.269,0.641c-0.955,6.248-1.633,12.553-2.908,18.736\n	c-12.415,60.213-22.201,120.866-28.422,182.01c-6.405,62.948-11.567,126.023-17.226,189.047\n	c-1.026,11.427-1.828,22.874-2.768,34.745c22.953,0,45.693,0,68.275,0c0-23.955-0.565-47.903,0.131-71.814\n	c1.076-36.949,2.74-73.888,4.656-110.805c2.261-43.568,4.962-87.114,7.652-130.658c1.971-31.91,4.152-63.807,6.419-95.698\n	c0.601-8.46,1.855-16.873,2.823-25.307c0.485-4.226,3.113-6.449,7.041-7.396c8.038-1.94,15.904-0.834,23.595,1.681\n	c1.053,0.344,1.492,2.307,2.433,3.316c1.135,1.217,2.504,2.215,4.806,2.96c-8.214,144.24-12.198,288.986-15.964,434.377\n	c18.502,0,36.556,0,55.307,0c0-19.652-0.598-39.438,0.124-59.175c1.534-41.934,3.467-83.859,5.772-125.758\n	c2.58-46.893,5.637-93.761,8.708-140.626c1.873-28.582,4.122-57.14,6.302-85.702c0.367-4.804,1.113-9.59,1.903-14.348\n	c1.157-6.97,3.671-9.543,10.432-10.807c11.495-2.148,22.746,0.157,34.044,1.512c0.046,0.445,0.093,0.89,0.139,1.335\n	c-4.051,0.689-8.084,1.511-12.156,2.029c-4.097,0.521-8.233,0.739-11.572,1.023c0.64,29.523,1.518,58.601,1.832,87.685\n	c0.315,29.144,0.069,58.294,0.069,85.969c1.129-26.507,2.001-54.516,3.608-82.484c1.48-25.753,3.648-51.469,5.787-77.179\n	c0.32-3.852,2.137-7.579,3.262-11.364c0.474,0.02,0.949,0.04,1.423,0.06c0.178,2.286,0.587,4.581,0.497,6.856\n	c-0.943,23.796-1.948,47.589-2.971,71.382c-1.523,35.439-3.074,70.876-4.614,106.314c-2.249,51.741-4.386,103.487-6.791,155.221\n	c-1.368,29.435-3.174,58.849-4.82,88.956c20.394,0,41.454,0,61.924,0c0.666-18.635,1.093-37.687,2.081-56.711\n	c2.005-38.581,4.381-77.143,6.476-115.72c1.653-30.43,3.572-60.856,4.552-91.31c1.425-44.281,2.047-88.586,3.162-132.878\n	c0.242-9.639,1.015-19.269,1.778-28.885c0.186-2.337,1.303-4.599,1.993-6.896c0.544,0.023,1.088,0.045,1.632,0.068\n	c0.676,7.369,1.932,14.738,1.928,22.107c-0.015,31.818-0.145,63.641-0.733,95.454c-0.434,23.462-1.641,46.91-1.737,70.476\n	c2.232-18.228,4.824-36.42,6.62-54.691c3.716-37.804,6.432-75.684,6.1-113.71c-0.054-6.154-0.713-12.3-0.934-18.455\n	c-0.126-3.519-1.716-4.948-5.234-5.052c-3.586-0.107-7.155-0.766-10.715-1.826c9.935-1.354,19.78-3.758,29.837-1.338\n	c5.395,1.298,6.659,5.652,7.015,10.305c0.634,8.297,1.32,16.612,1.411,24.925c0.295,27.157,0.966,54.331,0.324,81.471\n	c-1.043,44.115-2.897,88.212-4.615,132.308c-1.92,49.257-3.955,98.51-6.192,147.753c-0.649,14.277-2.163,28.515-3.324,43.329\n	c1.255,0,3.019-0.003,4.782,0c22.992,0.047,45.984-0.002,68.974,0.207c6.296,0.057,12.684,0.584,18.656,6.516\n	c-4.475,0.85-8.048,2.09-11.63,2.121c-29.49,0.257-58.981,0.353-88.473,0.365c-15.163,0.006-30.326-0.21-45.488-0.407\n	c-49.641-0.645-99.282-1.347-148.923-1.988c-28.981-0.374-57.962-0.711-86.944-0.994c-38.153-0.373-76.307-0.719-114.462-1\n	c-43.156-0.318-86.313-0.467-129.468-0.881c-11.231-0.108-22.455-0.93-33.68-2.18c23.913-7.969,48.634-4.86,73.061-5.749\n	c-0.086-0.456-0.04-0.881-0.205-0.991c-10.386-6.94-10.546-8.304-5.59-19.875c25.026-58.422,49.864-116.925,74.857-175.362\n	c15.77-36.871,31.698-73.673,47.548-110.509c0.65-1.511,1.236-3.05,2.054-5.078c-25.268,3.273-46.621-7.714-68.969-17.067\n	c1.643,6.661,3.03,13.005,4.788,19.245c2.661,9.446,0.115,16.982-7.61,22.938c-2.503,1.93-4.966,3.954-7.199,6.184\n	c-6.916,6.907-13.634,14.013-20.624,20.843c-1.32,1.29-3.535,1.664-5.338,2.46c-0.124-1.919-1.061-4.361-0.224-5.662\n	c2.942-4.577,6.026-9.25,9.918-12.988c6.473-6.216,13.553-11.811,20.494-17.526c4.633-3.814,6.22-8.451,4.636-14.207\n	c-1.986-7.214-3.917-14.445-6.022-21.624c-0.339-1.157-1.238-2.504-2.259-3.049c-6.561-3.499-13.229-6.8-19.862-10.165\n	c-0.467,0.347-0.934,0.693-1.4,1.04c1.91,7.279,3.711,14.589,5.773,21.824c1.092,3.831,2.426,7.626,4.031,11.27\n	c1.907,4.332,0.933,7.781-2.48,10.709c-4.548,3.902-9.835,7.167-13.6,11.705c-5.57,6.713-10.162,14.253-14.949,21.585\n	c-0.639,0.978,0.049,2.801,0.068,4.233c0.098,7.581,1.514,15.443-0.012,22.684c-3.18,15.089-19.185,19.2-29.914,8.046\n	c-4.457-4.634-8.145-10.123-11.586-15.598c-10.66-16.96-22.073-33.264-36.03-47.782c-6.631-6.897-14.358-9.868-23.499-10.353\n	c-11.972-0.636-23.958-1.091-35.912-1.971c-19.733-1.453-38.364-6.573-54.898-17.867c-2.558-1.748-4.802-1.934-7.36-0.594\n	c-10.159,5.32-20.273,10.727-30.478,15.957c-3.119,1.598-1.918,3.467-1.107,5.748c4.838,13.606,9.759,27.19,14.174,40.935\n	c1.229,3.825,0.838,8.169,1.247,12.941c5.13-4.622,4.902-10.408,4.528-16.083c-0.37-5.63-1.16-11.232-0.793-17.409\n	c1.919,3.097,4.794,5.979,5.547,9.337c1.362,6.074,2.5,12.542,1.858,18.648c-1.253,11.904-11.92,17.931-22.76,12.734\n	c-5.485-2.63-10.617-7.016-14.52-11.752c-16.733-20.304-25.296-44.331-30.178-69.844c-3.529-18.443-4.448-37.022-2.163-55.681\n	c0.57-4.653-1.654-6.891-5.638-6.88c-3.688,0.01-7.673,0.606-11.009,2.1c-23.692,10.607-47.246,21.523-70.859,32.306\n	c-3.26,1.489-6.605,2.79-10.418,3.285c1.684-1.202,3.335-2.455,5.058-3.6c25.919-17.224,54.255-29.707,82.636-42.099\n	c1.372-0.599,2.706-1.343,4.136-1.74c6.278-1.747,10.957-4.785,12.284-11.919c0.623-3.349,2.692-6.484,7.941-6.439\n	c-0.512,3.439-0.981,6.588-1.551,10.413c1.936-0.702,3.587-1.249,5.198-1.893c40.067-16.022,80.704-30.286,123.089-38.93\n	c24.71-5.04,49.67-8.927,74.83-4.412c9.485,1.702,19.437,4.636,27.5,9.686c20.72,12.976,40.536,27.402,60.647,41.345\n	c11.772,8.161,23.225,16.794,35.158,24.707c20.431,13.547,41.309,26.311,66.623,31.426c2.017-3.94,4.472-8.224,6.456-12.717\n	c4.435-10.044,8.562-20.225,12.97-30.282c1.663-3.795,3.793-7.384,5.64-11.101c0.927-1.865,1.699-3.808,2.263-5.084\n	c8.502,3.795,17.538,7.829,27.208,12.145c1.802-8.216,3.287-15.497,5.015-22.721c1.625-6.794,3.444-13.544,5.294-20.282\n	c1.094-3.985,3.929-6.89,7.969-6.097c9.721,1.908,19.295,4.568,28.915,6.981c0.509,0.128,0.89,0.769,1.771,2.03\n	c-9.599-2.96-9.609,3.925-11.245,9.34c-14.583,48.244-24.243,97.556-30.71,147.442c-5.35,41.268-9.854,82.667-13.638,124.109\n	c-2.8,30.664-3.966,61.482-5.617,92.245c-0.848,15.793-1.172,31.615-1.715,47.425C605.386,769.966,605.439,771.762,605.439,773.77z\n	 M178.116,478.76c1.574-1.499,2.54-2.408,3.494-3.328c14.341-13.838,31.106-23.887,49.366-31.606\n	c5.454-2.306,10.243-2.018,15.403,1.664c10.006,7.141,21.342,12.039,33.485,13.666c15.477,2.073,31.125,2.886,46.705,4.171\n	c10.299,0.849,20.968,0.877,29.263,8.158c5.983,5.252,11.841,10.894,16.623,17.217c9.833,13.002,18.659,26.764,28.419,39.826\n	c3.811,5.101,8.663,9.615,13.708,13.541c3.722,2.897,7.299,1.521,9.487-2.745c1.185-2.311,1.967-4.982,2.265-7.567\n	c1.025-8.884-0.852-17.274-5.434-24.933c-3.161-5.283-6.828-10.262-10.025-15.525c-6.73-11.083-14.307-21.799-19.703-33.51\n	c-8.403-18.238-1.703-32.052,17.411-38.32c15.806-5.183,31.308-3.057,46.241,3.533c10.503,4.634,20.736,9.875,31.148,14.721\n	c16.307,7.59,32.635,15.247,50.581,18.165c7.942,1.292,16.169,1.846,22.745-4.189c1.733-1.59,3.446-4.781,2.991-6.726\n	c-0.445-1.9-3.46-3.674-5.717-4.589c-9.08-3.679-18.598-6.384-27.415-10.583c-21.907-10.434-41.33-24.881-60.963-38.968\n	c-21.514-15.437-43.076-30.814-64.857-45.87c-9.857-6.814-21.051-10.476-33.072-11.763c-22.315-2.389-44.251,0.349-66.039,4.663\n	c-43.785,8.67-85.641,23.518-126.972,40.038c-3.229,1.291-4.265,3.375-4.702,6.231c-1.685,11.019-3.994,22-4.78,33.087\n	C166.282,438.221,169.564,458.616,178.116,478.76z M610.156,438.342C562.137,551.27,514.64,662.97,466.806,775.464\n	c36.442,0.583,71.496,1.143,106.43,1.702c-0.553-8.124-1.914-15.944-1.467-23.66c1.895-32.732,3.342-65.538,6.818-98.117\n	c4.149-38.886,9.887-77.615,15.532-116.325C598.967,505.821,604.652,472.7,610.156,438.342z M450.48,770.898\n	c9.966,2.291,10.018,2.192,13.486-6.071c18.278-43.554,36.719-87.04,54.88-130.643c32.42-77.839,64.682-155.744,96.988-233.63\n	c0.806-1.944,1.355-3.995,2.106-6.242c-3.233-1.614-6.071-3.032-8.268-4.129c-2.765,9.867-4.535,19.456-8.096,28.326\n	c-15.98,39.807-31.819,79.692-48.919,119.023c-30.11,69.253-61.136,138.108-91.682,207.171\n	C457.22,753.195,454.05,761.945,450.48,770.898z M694.562,674.234c0.16,0.006,0.32,0.011,0.48,0.017\n	c1.533-17.223,2.922-34.459,4.629-51.665c4.124-41.579,8.708-83.115,12.523-124.721c3.935-42.929,7.309-85.911,10.623-128.893\n	c0.708-9.182,0.103-18.466,0.103-27.79c-5.389-0.089-7.983,1.679-8.28,6.856c-0.506,8.803-1.684,17.565-2.298,26.364\n	c-2.155,30.887-4.325,61.773-6.242,92.675c-3.411,54.99-6.704,109.987-9.904,164.99C695.38,646.106,695.093,660.177,694.562,674.234\n	z M429.102,504.624c0.268,0.075,0.531,0.202,0.572,0.151c0.279-0.349,0.601-0.704,0.745-1.115c2.787-7.943,7.93-14.157,14.228-19.55\n	c3.92-3.357,7.933-6.634,11.555-10.293c1.032-1.043,1.518-3.489,1.102-4.967c-3.196-11.329-6.655-22.585-10.096-33.845\n	c-0.463-1.516-1.005-3.948-1.985-4.215c-7.34-1.998-14.799-3.568-22.889-1.433c2.995,10.512,6.974,20.121,12.974,28.783\n	c2.437,3.518,2.072,6.069-0.839,9.178c-4.306,4.598-8.143,9.642-12.101,14.559c-3.465,4.305-3.66,8.388,0.27,12.821\n	C425.247,497.64,427.007,501.336,429.102,504.624z M414.639,482.936c4.684-5.967,9.254-11.604,13.552-17.44\n	c0.754-1.024,1.036-3.304,0.411-4.294c-6.768-10.726-11.697-22.159-13.935-35.482c-3.722,1.742-7.16,2.97-10.197,4.845\n	c-8.666,5.349-10.662,10.941-7.59,20.698C400.615,463.128,407.87,472.995,414.639,482.936z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M447.96,186.349c3.437,1.249,6.701,1.903,9.401,3.508c12.298,7.309,24.219,15.276,36.692,22.263\n	c14.041,7.866,29.089,13.308,45.319,14.414c25.781,1.756,44.096-9.892,56.171-32.165c8.536-15.745,10.248-32.863,9.863-50.388\n	c-0.131-5.965-0.021-11.934-0.021-19.175c4.451,5.219,6.724,10.167,7.243,15.752c1.337,14.396,4.85,28.228,10.922,41.303\n	c6.797,14.637,16.455,26.378,33.597,29.127c11.855,1.902,23.205-0.42,34.132-5.051c19.032-8.066,34.645-20.956,49.505-34.978\n	c16.243-15.328,29.207-33.249,41.675-51.605c3.752-5.524,5.31-6.393,11.259-6.931c-0.715,2.881-0.924,5.66-2.062,7.985\n	c-6.652,13.598-13.505,27.098-20.32,40.616c-6.999,13.884-12.371,28.323-15.25,43.653c-1.396,7.434-0.503,14.571,2.177,21.566\n	c0.571,1.489,1.051,3.013,1.711,4.919c-4.783,0.043-7.149-2.373-8.542-6.025c-3.419-8.964-3.922-18.091-1.735-27.456\n	c1.996-8.548,3.703-17.164,4.537-26.261c-3.896,3.719-7.733,7.502-11.699,11.146c-17.091,15.705-35.653,29.148-58.353,35.49\n	c-29.846,8.339-53.843-2.603-67.709-30.243c-0.955-1.904-2.676-3.424-4.04-5.123c-1.254,1.821-2.909,3.483-3.7,5.486\n	c-8.622,21.836-22.426,38.454-45.686,45.493c-11.227,3.397-22.641,3.192-34.141,1.235c-3.168-0.539-6.518-0.017-9.784,0.019\n	c-0.093,0.571-0.186,1.141-0.279,1.712c6.218,6.377,12.468,12.722,18.645,19.138c9.876,10.26,18.799,21.254,24.281,34.551\n	c6.5,15.765,0.675,30.207-14.35,36.283c-5.053,2.043-10.216,2.628-16.542,0.496c3.897-1.926,6.955-3.433,10.008-4.948\n	c1.787-0.886,3.627-1.684,5.341-2.694c10.265-6.043,13.069-13.623,9.309-24.902c-4.137-12.411-12.857-21.698-21.471-30.949\n	c-23.738-25.494-50.497-47.364-79.977-65.927C450.542,195.451,446.194,193.434,447.96,186.349z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M215.812,540.215c-1.02,5.383-3.729,7.658-7.38,9.364c-16.096,7.522-32.412,14.635-48.129,22.885\n	c-17.536,9.205-34.577,19.38-48.135,34.309c-0.872,0.96-2.081,2.181-3.186,2.236c-1.823,0.091-3.972-0.263-5.406-1.261\n	c-0.636-0.443-0.45-3.421,0.375-4.374c3.575-4.133,7.177-8.369,11.393-11.8c21.749-17.702,46.684-29.88,72.215-40.962\n	c6.25-2.713,12.49-5.463,18.83-7.951C209.088,541.601,212.035,541.17,215.812,540.215z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M126.964,440.335c1.309,4.758,2.714,8.276,3.149,11.91c0.411,3.433-2.576,5.075-5.504,3.065\n	c-2.542-1.744-4.576-4.227-7.004-6.545c-3.123,1.115-6.054,6.346-10.006,1.3c-3.305-4.221,1.212-6.456,2.78-9.875\n	c-0.441-0.525-1.436-1.173-1.551-1.95c-0.328-2.224-0.928-4.763-0.143-6.646c0.389-0.933,4.085-1.576,5.408-0.818\n	c3.316,1.899,6.243,1.874,9.701,0.704c1.353-0.458,3.885,0.005,4.633,0.993c0.863,1.14,0.696,3.402,0.325,5.029\n	C128.444,438.853,127.195,439.992,126.964,440.335z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M547.342,156.1c-0.011,3.22-2.835,4.919-4.92,2.712c-4.268-4.519-8.262-9.426-11.583-14.671\n	c-2.984-4.711-4.991-10.055-7.269-15.191c-0.718-1.619-1.331-3.493-1.225-5.203c0.085-1.362,1.045-3.278,2.155-3.796\n	c1.123-0.524,3.268-0.091,4.321,0.74c1.779,1.404,3.455,3.25,4.467,5.265c4.643,9.252,9.051,18.623,13.505,27.969\n	C547.142,154.657,547.203,155.526,547.342,156.1z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M115.287,531.898c1.017-1.456,1.848-3.495,3.364-4.567c1.366-0.967,3.968-1.713,5.14-1.032\n	c1.395,0.81,2.192,3.166,2.618,4.998c0.511,2.199,0.814,4.65,0.353,6.81c-0.388,1.82-1.826,3.527-3.112,5.013\n	c-1.336,1.545-3.07,2.743-4.578,4.147c-0.343,0.32-0.379,0.97-0.722,1.289c-2.296,2.132-4.096,6.571-7.758,4.296\n	c-1.665-1.035-1.348-5.361-1.774-8.218c-0.108-0.729,0.381-1.546,0.687-2.653c-3.99-1.22-10.362-1.293-7.767-7.421\n	C104.253,528.622,110.376,532.016,115.287,531.898z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M861.039,174.054c1.945,1.565,4.199,2.493,4.473,3.827c0.333,1.621-0.458,4.52-1.706,5.249\n	c-7.951,4.641-16.122,8.917-24.335,13.087c-1.147,0.582-3.703,0.468-4.231-0.287c-0.831-1.187-1.234-3.707-0.508-4.752\n	c2.045-2.941,4.318-6.164,7.3-7.92C847.94,179.776,854.385,177.205,861.039,174.054z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M174.544,540.334c-2.307-1.221-7.013-0.114-6.529-5.565c0.26-2.925,0.528-6.003,4.603-5.515\n	c3.419,0.409,7.376,0.787,7.309,5.581C179.887,537.724,179,540.565,174.544,540.334z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "transparent",
            d: "M178.116,478.76c-8.552-20.144-11.834-40.538-10.344-61.542c0.786-11.087,3.095-22.068,4.78-33.087\n	c0.437-2.856,1.472-4.94,4.702-6.231c41.331-16.52,83.187-31.368,126.972-40.038c21.787-4.314,43.724-7.052,66.039-4.663\n	c12.022,1.287,23.215,4.949,33.072,11.763c21.781,15.056,43.342,30.433,64.857,45.87c19.633,14.086,39.056,28.534,60.963,38.968\n	c8.816,4.199,18.335,6.904,27.415,10.583c2.257,0.915,5.272,2.689,5.717,4.589c0.456,1.946-1.258,5.136-2.991,6.726\n	c-6.576,6.035-14.803,5.481-22.745,4.189c-17.946-2.919-34.274-10.576-50.581-18.165c-10.411-4.846-20.645-10.086-31.148-14.721\n	c-14.933-6.589-30.435-8.716-46.241-3.533c-19.114,6.268-25.814,20.081-17.411,38.32c5.396,11.711,12.972,22.427,19.703,33.51\n	c3.196,5.263,6.864,10.242,10.025,15.525c4.582,7.659,6.459,16.049,5.434,24.933c-0.298,2.585-1.08,5.256-2.265,7.567\n	c-2.188,4.266-5.764,5.642-9.487,2.745c-5.044-3.926-9.896-8.44-13.708-13.541c-9.759-13.062-18.586-26.823-28.419-39.826\n	c-4.782-6.324-10.64-11.965-16.623-17.217c-8.294-7.281-18.964-7.309-29.263-8.158c-15.58-1.285-31.228-2.098-46.705-4.171\n	c-12.143-1.626-23.479-6.525-33.485-13.666c-5.16-3.682-9.949-3.97-15.403-1.664c-18.26,7.719-35.025,17.768-49.366,31.606\n	C180.655,476.352,179.69,477.261,178.116,478.76z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "transparent",
            d: "M610.156,438.342c-5.504,34.359-11.189,67.479-16.037,100.721\n	c-5.645,38.71-11.383,77.439-15.532,116.325c-3.476,32.58-4.923,65.386-6.818,98.117c-0.447,7.716,0.914,15.536,1.467,23.66\n	c-34.935-0.559-69.989-1.119-106.43-1.702C514.64,662.97,562.137,551.27,610.156,438.342z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "transparent",
            d: "M450.48,770.898c3.57-8.953,6.74-17.703,10.495-26.194c30.547-69.064,61.573-137.918,91.682-207.171\n	c17.1-39.331,32.939-79.216,48.919-119.023c3.561-8.87,5.331-18.46,8.096-28.326c2.197,1.097,5.035,2.514,8.268,4.129\n	c-0.751,2.247-1.3,4.298-2.106,6.242c-32.306,77.886-64.568,155.791-96.988,233.63c-18.16,43.603-36.602,87.089-54.88,130.643\n	C460.498,773.089,460.446,773.188,450.48,770.898z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "transparent",
            d: "M694.562,674.234c0.531-14.057,0.818-28.128,1.635-42.168c3.201-55.003,6.493-110,9.904-164.99\n	c1.917-30.902,4.086-61.788,6.242-92.675c0.614-8.799,1.792-17.561,2.298-26.364c0.297-5.176,2.891-6.944,8.28-6.856\n	c0,9.324,0.605,18.608-0.103,27.79c-3.314,42.982-6.688,85.965-10.623,128.893c-3.814,41.607-8.399,83.142-12.523,124.721\n	c-1.707,17.205-3.096,34.442-4.629,51.665C694.882,674.245,694.722,674.239,694.562,674.234z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "transparent",
            d: "M429.102,504.624c-2.095-3.288-3.855-6.984-6.464-9.926c-3.93-4.433-3.735-8.516-0.27-12.821\n	c3.958-4.917,7.795-9.961,12.101-14.559c2.911-3.109,3.276-5.66,0.839-9.178c-6.001-8.662-9.979-18.271-12.974-28.783\n	c8.089-2.135,15.548-0.565,22.889,1.433c0.98,0.267,1.522,2.699,1.985,4.215c3.441,11.259,6.9,22.515,10.096,33.845\n	c0.417,1.477-0.069,3.924-1.102,4.967c-3.622,3.659-7.635,6.936-11.555,10.293c-6.298,5.394-11.441,11.607-14.228,19.55\n	c-0.144,0.411-0.466,0.766-0.745,1.115C429.633,504.826,429.37,504.699,429.102,504.624z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "transparent",
            d: "M414.639,482.936c-6.769-9.941-14.024-19.809-17.759-31.673c-3.072-9.757-1.076-15.349,7.59-20.698\n	c3.038-1.875,6.475-3.103,10.197-4.845c2.237,13.323,7.167,24.757,13.935,35.482c0.625,0.99,0.343,3.271-0.411,4.294\n	C423.893,471.333,419.323,476.969,414.639,482.936z"
          }
        )
      ]
    }
  );
}
function TagsFilter({ label, path }) {
  const [filters, setFilters] = React.useState(DEFAULT_SELECTIONS);
  const navigate = useNavigate();
  const location2 = useLocation();
  const queryParams = React.useMemo(
    () => parse$1(location2.search.replace(/^\?/, "")),
    [location2.search]
  );
  const filterCount = React.useMemo(
    () => Object.values(filters).flat().length,
    [filters]
  );
  const q = React.useMemo(
    () => Object.entries(filters).filter(([id, values2]) => values2.length > 0).flatMap(
      ([id, values2]) => values2.map((v, i) => `tags[${id}]=${encodeURIComponent(v)}`)
    ).join("&"),
    [filters]
  );
  React.useEffect(() => {
    const tags = queryParams.tags;
    if (!tags) {
      return;
    }
    const currentTags = Object.fromEntries(
      Object.entries(tags).map(([k, v]) => [k, Array.isArray(v) ? v : [v]])
    );
    setFilters({ ...DEFAULT_SELECTIONS, ...currentTags });
  }, [queryParams]);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const { tags, ...rest } = queryParams;
      const newParams = [q, stringify(rest)].filter(Boolean).join("&");
      const to = [path, newParams].join("?");
      const from = `${location2.pathname}${location2.search || "?"}`;
      if (from === to) {
        return;
      }
      navigate(to);
    }, 50);
    return () => clearTimeout(timeout);
  }, [path, q, navigate, location2.pathname, location2.search, queryParams]);
  return /* @__PURE__ */ jsx("div", { className: "flex justify-between mb-2", children: /* @__PURE__ */ jsx(
    TagInput,
    {
      className: clsx("!w-auto !h-auto rounded-lg", {
        "!bg-blue-600 text-white": filterCount > 0
      }),
      value: filters,
      onDone: setFilters,
      children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center font-medium", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block i-lucide-list-filter opacity-60" }),
        label,
        " ",
        filterCount > 0 && /* @__PURE__ */ jsx("span", { className: "px-2 rounded-full bg-blue-800 text-sm", children: filterCount })
      ] })
    }
  ) });
}
function createTagsQuery(tagsParam = {}) {
  const tags = Object.entries(tagsParam).flatMap(
    ([id, selection]) => {
      if (Array.isArray(selection)) {
        return selection.map((s) => ({
          tags: { contains: `${id}:${selection}` }
        }));
      }
      return { tags: { contains: `${id}:${selection}` } };
    }
  );
  const tagsFilter = tags.length ? tags : [];
  return tagsFilter;
}
const PAGE_SIZE = 50;
const loader$h = async ({ request }) => {
  var _a2;
  const searchQuery = new URL(request.url).search.substring(1);
  const queryParams = qs.parse(searchQuery);
  const tagsFilter = createTagsQuery(queryParams.tags);
  const $lt = (_a2 = queryParams.createdAt) == null ? void 0 : _a2.$lt;
  const timestampFilter = $lt ? { lt: new Date($lt) } : void 0;
  let memberships = [];
  try {
    const userId = await checkAuth(request);
    memberships = (await prisma.communityMember.findMany({
      where: { userId },
      select: { communityId: true }
    })).map((m) => m.communityId);
  } catch {
  }
  const posts = await prisma.post.findMany({
    take: PAGE_SIZE,
    where: {
      parentId: null,
      OR: [{ communityId: null }, { communityId: { in: memberships } }],
      AND: [...tagsFilter],
      createdAt: timestampFilter
    },
    include: { user: true, media: true, community: true },
    orderBy: { createdAt: "desc" }
  });
  for (const post of posts) {
    post.content = await renderSummary(post.content);
  }
  return json(
    { school: values.meta(), posts: await includeVotes(posts, request) },
    {
      headers: {
        "Set-Cookie": await withUserPrefs(request, { lastBase: "discussions" })
      }
    }
  );
};
const action$e = async ({ request }) => {
  const userId = await checkAuth(request);
  const data = await request.json();
  await createPost(data, userId);
  return json({}, { status: 201 });
};
const meta$c = ({ data }) => {
  return [
    { title: `Discussions | ${data == null ? void 0 : data.school.shortName} ✽ gctuvc` },
    {
      name: "description",
      content: `Find out about all the conversations going on in ${data == null ? void 0 : data.school.shortName}. Share ideas and learn from each other.`
    }
  ];
};
function Discussions() {
  var _a2;
  const { posts } = useLoaderData();
  const { user } = useRouteLoaderData("root") || {};
  const contentRef = React.useRef(null);
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto min-h-[60vh]", ref: contentRef, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        !user && /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxs("p", { className: "text-secondary", children: [
          "You must be",
          " ",
          /* @__PURE__ */ jsx(Link, { className: "underline text-reset", to: "/login", children: "logged in" }),
          " ",
          "to create a discussion."
        ] }) }),
        /* @__PURE__ */ jsx(PostInput, {})
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "mb-4 dark:border-t-neutral-800" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(TagsFilter, { label: "Filter discussions", path: "/discussions" }) }),
      posts.map((post, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(PostItem, { limit: true, post }),
        i < posts.length - 1 && /* @__PURE__ */ jsx("hr", { className: "me-2 ms-12 dark:border-neutral-700" })
      ] }, post.id)),
      /* @__PURE__ */ jsx(Paginated, { fromDate: (_a2 = posts[posts.length - 1]) == null ? void 0 : _a2.createdAt }),
      posts.length === 0 && /* @__PURE__ */ jsxs("div", { className: "min-h-[40vh] flex flex-col items-center text-secondary", children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-[20rem] w-full", children: /* @__PURE__ */ jsx(DiscussionsEmpty, {}) }),
        /* @__PURE__ */ jsx("div", { className: "font-mono", children: "Nothing here!" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm", children: "If anyone is gonna start talking, it's you." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "cols-span-1", children: /* @__PURE__ */ jsx("div", { children: " " }) })
  ] }) });
}
function Paginated({ fromDate }) {
  var _a2;
  const fetcher = useFetcher();
  const location2 = useLocation();
  function handleLoadMore() {
    fetcher.load(
      `/discussions?createdAt[$lt]=${fromDate}&${location2.search.substring(1)}`
    );
  }
  if (!fromDate) {
    return null;
  }
  if (fetcher.data) {
    const done = fetcher.data.posts.length < PAGE_SIZE;
    const posts = fetcher.data.posts;
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      posts.map((post, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(PostItem, { limit: true, post }),
        i < posts.length - 1 && /* @__PURE__ */ jsx("hr", { className: "me-2 ms-12 dark:border-neutral-700" })
      ] }, post.id)),
      done ? /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-2 text-secondary", children: [
        /* @__PURE__ */ jsx("div", { className: "i-lucide-arrow-down-right-square" }),
        " fin"
      ] }) : /* @__PURE__ */ jsx(Paginated, { fromDate: (_a2 = posts[posts.length - 1]) == null ? void 0 : _a2.createdAt })
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-2", children: fetcher.state === "loading" ? /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-2 text-secondary", children: [
    /* @__PURE__ */ jsx("span", { className: "i-svg-spinners-180-ring-with-bg" }),
    " Loading more…"
  ] }) : /* @__PURE__ */ jsxs(
    "button",
    {
      className: "px-2 py-1 rounded-lg border dark:border-neutral-700 font-medium inline-flex items-center gap-2 text-secondary hover:bg-zinc-100 dark:hover:bg-neutral-800 transition-[background] duration-200",
      onClick: handleLoadMore,
      type: "button",
      children: [
        /* @__PURE__ */ jsx("div", { className: "i-lucide-chevron-down" }),
        " Load more…"
      ]
    }
  ) });
}
const route27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$e,
  default: Discussions,
  loader: loader$h,
  meta: meta$c
}, Symbol.toStringTag, { value: "Module" }));
const loader$g = async ({ params }) => {
  const eventId = Number(params.id);
  try {
    const event = await prisma.eventItem.findFirstOrThrow({
      where: { id: eventId },
      include: { poster: true, user: true }
    });
    return { event, school: values.meta() };
  } catch (err) {
    throw json({}, { status: 404 });
  }
};
const action$d = async ({ request, params }) => {
  if (request.method !== "DELETE") {
    throw json(null, { status: 405 });
  }
  const userId = await checkAuth(request);
  await prisma.eventItem.delete({ where: { id: Number(params.id), userId } });
  return redirect("/events");
};
const meta$b = ({ data }) => {
  var _a2;
  return [
    { title: `${data == null ? void 0 : data.event.title} | ${data == null ? void 0 : data.school.shortName} ✽ gctuvc` },
    {
      name: "description",
      content: (data == null ? void 0 : data.event.shortDescription) || (data == null ? void 0 : data.event.description.substring(0, 30))
    },
    { name: "og:image", content: (_a2 = data == null ? void 0 : data.event.poster) == null ? void 0 : _a2.url }
  ];
};
function EventDetail() {
  const { event } = useLoaderData();
  const { user } = useRouteLoaderData("root") || {};
  const submit = useSubmit();
  function shareEvent() {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.shortDescription || void 0,
        url: window.location.href
      });
    }
  }
  function handleEventDelete() {
    const yes = confirm(
      "Are you sure you want to delete this event This cannot be undone."
    );
    if (!yes) {
      return;
    }
    submit(null, { action: `/events/${event.id}`, method: "DELETE" });
  }
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto min-h-[60vh]", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-4", children: /* @__PURE__ */ jsxs("article", { className: "col-span-1 lg:col-span-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-xs font-mono mt-2 text-secondary", children: [
      "Posted ",
      /* @__PURE__ */ jsx(PostTime, { time: event.createdAt }),
      " by",
      " ",
      /* @__PURE__ */ jsx(Username, { user: event.user })
    ] }),
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-2xl", children: event.title }),
    /* @__PURE__ */ jsx("h2", { className: "text-secondary", children: event.shortDescription }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 mt-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 font-medium text-secondary items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "i-lucide-calendar" }),
          dayjs(event.date).format("dddd, DD MMM[.]")
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 font-medium text-secondary items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "i-lucide-clock" }),
          timeToString(event.startTime),
          " — ",
          event.endTime ? timeToString(event.endTime) : "till you drop"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 font-medium text-secondary items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "i-lucide-map" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { children: event.venue }),
            event.mapsLink && /* @__PURE__ */ jsx(
              "a",
              {
                target: "_blank",
                href: event.mapsLink,
                className: "underline text-zinc-800 dark:text-white",
                rel: "noreferrer",
                children: "View on map"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-lg:mt-4 lg:text-end flex gap-2 items-start", children: [
        /* @__PURE__ */ jsxs(
          Anchor,
          {
            to: `/downloads/events/${event.id}`,
            className: "shrink-0",
            variant: "neutral",
            children: [
              /* @__PURE__ */ jsx("div", { className: "i-lucide-calendar-plus opacity-50" }),
              "Add to calendar"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            className: "shrink-0",
            variant: "primary",
            onClick: shareEvent,
            children: [
              /* @__PURE__ */ jsx("div", { className: "i-lucide-share opacity-50" }),
              "Share event"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 whitespace-pre-wrap", children: event.description }),
    event.eventLink && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h3", { className: "mt-2 text-secondary font-medium", children: "Event link" }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { className: "underline", href: event.eventLink, children: event.eventLink }) })
    ] }),
    event.poster && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-secondary font-medium mt-4", children: "Poster" }),
      /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-2", children: /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: event.poster.url,
          alt: event.title,
          className: "rounded-lg"
        }
      ) }) })
    ] }),
    (user == null ? void 0 : user.id) === event.user.id && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Button, { onClick: handleEventDelete, variant: "neutral", children: "Delete event" }) })
  ] }) }) });
}
const route28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$d,
  default: EventDetail,
  loader: loader$g,
  meta: meta$b
}, Symbol.toStringTag, { value: "Module" }));
const meta$a = () => {
  return [{ title: "Add Event ✽ gctuvc" }];
};
function AddEvent() {
  const { register, handleSubmit, setValue, watch, getFieldState, formState } = useForm();
  const [showOptional, setShowOptional] = React.useState(true);
  const [uploading, setUploading] = React.useState(false);
  const submit = useSubmit();
  const navigation = useNavigation();
  async function createPost2(data) {
    if (data.poster) {
      setUploading(true);
      const media = await uploadMedia(data.poster);
      data.poster = media;
      setUploading(false);
    }
    submit(
      JSON.stringify({
        ...data,
        date: dayjs(data.date).startOf("day").add(data.startTime, "seconds").toDate()
      }),
      {
        method: "post",
        encType: "application/json",
        action: "/events"
      }
    );
  }
  function handleFileSelect(e) {
    const files = e.target.files;
    if (files) {
      const posterFile2 = files[0];
      setValue("poster", posterFile2);
    }
  }
  const posterFile = watch("poster");
  const dateField = getFieldState("date", formState);
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto min-h-[60vh]", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-3", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: "New Event" }),
    /* @__PURE__ */ jsx("p", { className: "text-secondary text-sm", children: "Only fields marked with * are required." }),
    /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setShowOptional(!showOptional),
        className: clsx(
          "flex items-center gap-1 bg-zinc-200 dark:bg-neutral-800 rounded-full px-2 py-1 text-sm font-medium",
          { "!bg-blue-600 text-white": !showOptional }
        ),
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: clsx("opacity-60", {
                "i-lucide-eye-off": showOptional,
                "i-lucide-eye": !showOptional
              })
            }
          ),
          showOptional ? "Hide" : "Show",
          " optional fields"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("form", { className: "mt-2", onSubmit: handleSubmit(createPost2), children: [
      /* @__PURE__ */ jsxs("label", { children: [
        "Title*",
        /* @__PURE__ */ jsx(
          Input,
          {
            maxLength: 60,
            ...register("title", {
              required: true,
              setValueAs(value) {
                return value.trim();
              }
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "mt-2 block", children: [
        "Date*",
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "date",
            ...register("date", {
              required: true,
              valueAsDate: true,
              validate(date) {
                return dayjs(date).isAfter(dayjs().startOf("day")) || "Date must be in the future";
              }
            })
          }
        ),
        dateField.error && /* @__PURE__ */ jsx("span", { className: "text-xs text-red-600 dark:text-red-400", children: dateField.error.message })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mt-2", children: [
        /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("label", { children: [
          "Time start*",
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "time",
              ...register("startTime", {
                required: true,
                setValueAs(value) {
                  return timeFromString(value);
                }
              })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("label", { className: clsx({ hidden: !showOptional }), children: [
          "Time end",
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "time",
              ...register("endTime", {
                setValueAs(value) {
                  return timeFromString(value);
                }
              })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-secondary", children: '"till you drop" will be used in the absence of this' })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: clsx("block mt-2", { hidden: !showOptional }), children: [
        "Short description",
        /* @__PURE__ */ jsx(Input, { maxLength: 60, ...register("shortDescription") }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-secondary", children: [
          "eg. From the Pinegrove boys",
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "block mt-2", children: [
        "Description*",
        /* @__PURE__ */ jsx(
          Textarea,
          {
            maxLength: 512,
            ...register("description", {
              required: true,
              setValueAs(value) {
                return value.trim();
              }
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        "Location*",
        /* @__PURE__ */ jsx(
          Input,
          {
            ...register("venue", {
              required: true,
              setValueAs(value) {
                return value.trim();
              }
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("label", { className: clsx("mt-2 block", { hidden: !showOptional }), children: [
        "Maps link",
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "url",
            ...register("mapsLink", {
              setValueAs(value) {
                return value.trim();
              }
            })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-secondary", children: "Google maps link preferrably." })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: clsx("block mt-2", { hidden: !showOptional }), children: [
        "Event link",
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "url",
            ...register("eventLink", {
              setValueAs(value) {
                return value.trim();
              }
            })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-secondary", children: "Link to registration form, zoom/meet link or website for more details." })
      ] }),
      posterFile && /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: URL.createObjectURL(posterFile),
          alt: "poster",
          className: "max-w-[20rem] rounded-lg"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex gap-2", children: [
        /* @__PURE__ */ jsxs(
          FileInput,
          {
            className: "!w-[8rem]",
            max: 1,
            accept: "image/*",
            onChange: handleFileSelect,
            children: [
              /* @__PURE__ */ jsx("div", { className: "i-lucide-image-plus opacity-60" }),
              posterFile ? "Replace" : "Add",
              " poster"
            ]
          }
        ),
        posterFile && /* @__PURE__ */ jsxs(
          Button,
          {
            type: "button",
            variant: "neutral",
            onClick: () => setValue("poster", null),
            children: [
              /* @__PURE__ */ jsx("div", { className: "i-lucide-x opacity-60" }),
              " Remove poster"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Button, { disabled: navigation.state === "submitting" || uploading, children: navigation.state === "submitting" || uploading ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "i-svg-spinners-180-ring-with-bg" }),
        " ",
        "Submitting…"
      ] }) : /* @__PURE__ */ jsx(Fragment, { children: "Submit Event" }) }) })
    ] })
  ] }) }) });
}
const route29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AddEvent,
  meta: meta$a
}, Symbol.toStringTag, { value: "Module" }));
const action$c = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response(null, {
      status: 405,
      statusText: "Method Not Allowed"
    });
  }
  await checkAuth(request);
  const data = await request.json();
  await prisma.instructor.create({ data });
  return json({});
};
const route30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$c
}, Symbol.toStringTag, { value: "Module" }));
const action$b = async ({ request, params }) => {
  if (!["PATCH", "DELETE"].includes(request.method)) {
    return new Response(null, {
      status: 405,
      statusText: "Method Not Allowed"
    });
  }
  await checkAuth(request);
  if (request.method === "DELETE") {
    await prisma.schedule.delete({ where: { id: Number(params.id) } });
    return null;
  }
  const body = await request.json();
  const updated = await prisma.schedule.update({
    where: { id: Number(params.id) },
    data: {
      ...body,
      timeStart: timeFromString(body.timeStart),
      timeEnd: timeFromString(body.timeEnd)
    }
  });
  return { updated };
};
const route31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$b
}, Symbol.toStringTag, { value: "Module" }));
const loader$f = async ({ params }) => {
  const product = await prisma.product.findFirst({
    where: { id: Number(params.id) },
    include: { category: true, seller: { include: { user: true } } }
  });
  if (!product) {
    throw notFound();
  }
  return { school: values.meta(), product };
};
const action$a = async ({ request, params }) => {
  if (request.method !== "DELETE") {
    throw methodNotAllowed();
  }
  const userId = await checkAuth(request);
  await prisma.product.delete({
    where: { id: Number(params.id), seller: { userId } }
  });
  return redirect("/market");
};
const meta$9 = ({ data }) => {
  var _a2;
  const images = JSON.parse((data == null ? void 0 : data.product.images) || "[]");
  return [
    { title: `${data == null ? void 0 : data.product.name} | ${data == null ? void 0 : data.school.shortName} ✽ gctuvc` },
    {
      name: "description",
      content: data == null ? void 0 : data.product.description
    },
    { name: "og:image", content: (_a2 = images[0]) == null ? void 0 : _a2.url }
  ];
};
function ProductDetail() {
  const { product } = useLoaderData();
  const { user } = useRouteLoaderData("root") || {};
  const { instagram, phone, snapchat, whatsapp } = product.seller;
  const deleteFetcher = useFetcher();
  const images = JSON.parse(product.images);
  async function handleDelete() {
    const yes = confirm(
      "Are you sure you want to delete this item? This cannot be undone."
    );
    if (!yes) {
      return;
    }
    deleteFetcher.submit("", { method: "DELETE" });
  }
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "h-[30rem] bg-zinc-100 dark:bg-neutral-800 rounded-lg overflow-x-auto", children: /* @__PURE__ */ jsx("div", { className: "flex h-full gap-2", children: images.map((img) => /* @__PURE__ */ jsx(
      "img",
      {
        className: "h-full w-auto shrink-0 max-w-none",
        src: img.url,
        alt: product.name
      },
      img.thumbnail
    )) }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-4 mt-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-3", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl", children: product.name }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-zinc-100 dark:bg-neutral-800 font-mono font-medium px-1", children: [
            "GHS ",
            Number(product.price).toFixed(2)
          ] }),
          /* @__PURE__ */ jsx(
            Link,
            {
              className: "text-secondary",
              to: `/market?category=${product.category.id}`,
              children: product.category.title
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 whitespace-pre-wrap", children: product.description }),
        (user == null ? void 0 : user.id) === product.seller.userId && /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Anchor, { variant: "neutral", to: `/market/${product.id}/edit`, children: "Edit product" }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "neutral",
                onClick: handleDelete,
                disabled: deleteFetcher.state === "submitting",
                children: deleteFetcher.state === "submitting" ? "Deleting…" : "Delete"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-sm ms-2 text-secondary", children: "Only you can see this" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
        /* @__PURE__ */ jsx("header", { className: "text-secondary text-sm", children: "Posted by" }),
        /* @__PURE__ */ jsx("h2", { className: "font-bold", children: product.seller.businessName }),
        /* @__PURE__ */ jsx("div", { className: "leading-none font-mono", children: /* @__PURE__ */ jsx(Username, { user: product.seller.user }) }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4", children: [
          phone && /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              className: "flex gap-2 font-medium",
              href: `tel:${phone}`,
              target: "_blank",
              rel: "noreferrer",
              children: [
                /* @__PURE__ */ jsx("div", { className: "i-lucide-phone text-secondary" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "leading-none", children: phone }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-secondary", children: "Phone" })
                ] })
              ]
            }
          ) }),
          whatsapp && /* @__PURE__ */ jsx("li", { className: "mt-2", children: /* @__PURE__ */ jsxs(
            "a",
            {
              className: "flex gap-2 font-medium",
              href: `https://wa.me/${whatsapp.replace(/^\d/, "233")}`,
              target: "_blank",
              rel: "noreferrer",
              children: [
                /* @__PURE__ */ jsx("div", { className: "i-lucide-message-circle text-secondary" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "leading-none", children: whatsapp }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-secondary", children: "Whatsapp DM" })
                ] })
              ]
            }
          ) }),
          instagram && /* @__PURE__ */ jsx("li", { className: "mt-2", children: /* @__PURE__ */ jsxs(
            "a",
            {
              className: "flex gap-2 items-center font-medium",
              href: `https://instagram.com/${instagram}`,
              target: "_blank",
              rel: "noreferrer",
              children: [
                /* @__PURE__ */ jsx("div", { className: "i-lucide-instagram text-secondary" }),
                /* @__PURE__ */ jsxs("div", { className: "leading-none", children: [
                  "@",
                  instagram
                ] })
              ]
            }
          ) }),
          snapchat && /* @__PURE__ */ jsx("li", { className: "mt-2", children: /* @__PURE__ */ jsxs(
            "a",
            {
              className: "flex gap-2 font-medium",
              href: `https://snapchat.com/add/${snapchat}`,
              target: "_blank",
              rel: "noreferrer",
              children: [
                /* @__PURE__ */ jsx("div", { className: "i-lucide-ghost text-secondary" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "leading-none", children: snapchat }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-secondary", children: "Snapchat" })
                ] })
              ]
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxs(
      Link,
      {
        className: "font-medium text-secondary inline-flex items-center gap-2",
        to: `/market?seller=${product.seller.id}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "i-lucide-arrow-up-from-line" }),
          " See more products from this seller"
        ]
      }
    ) }) })
  ] });
}
const route32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$a,
  default: ProductDetail,
  loader: loader$f,
  meta: meta$9
}, Symbol.toStringTag, { value: "Module" }));
const loader$e = async () => {
  const categories = await prisma.category.findMany();
  return { school: values.meta(), categories };
};
const action$9 = async ({ request }) => {
  if (request.method !== "POST") {
    return json(null, { status: 405 });
  }
  const userId = await checkAuth(request);
  const sellerProfile = await prisma.sellerProfile.findFirst({
    where: { userId },
    select: { id: true }
  });
  if (!sellerProfile) {
    throw json({}, { status: 400 });
  }
  const data = await request.json();
  const product = await prisma.product.create({
    data: {
      name: data.name,
      sellerProfileId: sellerProfile.id,
      categoryId: data.category,
      price: data.price,
      images: data.images,
      description: data.description
    }
  });
  return redirect(`/market/${product.id}`);
};
const meta$8 = ({ data }) => {
  return [
    { title: `Add Product | Marketplace | ${data == null ? void 0 : data.school.shortName} ✽ gctuvc` },
    {
      name: "description",
      content: "Edit product"
    }
  ];
};
function AddProduct() {
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto min-h-[60vh]", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-3", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-lg", children: "Add new product" }),
    /* @__PURE__ */ jsx(ProductForm, {})
  ] }) }) });
}
const route33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$9,
  default: AddProduct,
  loader: loader$e,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
const processor = unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(exclude, { elements: ["table", "img"] }).use(rehypeSanitize).use(rehypeStringify);
async function renderBio(bio) {
  return (await processor.process(bio)).toString();
}
function exclude({ elements }) {
  return (tree) => {
    visit(tree, "element", (child, index, parent) => {
      if (elements.includes(child.tagName)) {
        parent.children.splice(index, 1);
      }
    });
  };
}
const loader$d = async ({ params }) => {
  const user = await prisma.user.findFirst({
    where: { username: params.username }
  });
  if (!user) {
    throw notFound();
  }
  user.bio = await renderBio(user.bio || "");
  const posts = await prisma.post.findMany({
    where: { userId: user.id, parentId: null },
    orderBy: { createdAt: "desc" },
    include: { user: true, media: true, community: true }
  });
  for (const post of posts) {
    post.content = await renderSummary(post.content);
  }
  const communities = await prisma.communityMember.count({
    where: { userId: user.id }
  });
  const seller = await prisma.sellerProfile.findFirst({
    where: { userId: user.id }
  });
  return { user, meta: values.meta(), posts, communities, seller };
};
const action$8 = async ({ params, request }) => {
  if (request.method !== "PATCH") {
    throw json({}, { status: 405 });
  }
  const userId = await checkAuth(request);
  const user = await prisma.user.findFirst({
    where: { id: userId }
  });
  if (!user) {
    throw json({}, { status: 404 });
  }
  if (user.username !== params.username) {
    throw json({}, { status: 403 });
  }
  const data = await request.json();
  await prisma.user.update({ where: { id: userId }, data: { bio: data.bio } });
  return json({});
};
const meta$7 = ({ data }) => {
  var _a2;
  return [
    { title: `@${(_a2 = data == null ? void 0 : data.user) == null ? void 0 : _a2.username} | ${data == null ? void 0 : data.meta.shortName} ✽ gctuvc` }
  ];
};
const pageLinks = [
  {
    title: "Posts",
    href: "",
    icon: "i-lucide-message-circle"
  },
  {
    title: "Communities",
    href: "communities",
    icon: "i-lucide-users-round",
    show: ({ communities }) => communities > 0
  },
  {
    title: "Catalog",
    href: "catalog",
    icon: "i-lucide-shopping-cart",
    show: ({ seller }) => Boolean(seller)
  }
];
function Profile() {
  const { user, posts, communities, seller } = useLoaderData();
  const outlet = useOutlet();
  const props = { communities, seller };
  const tabs = pageLinks.filter((link) => {
    var _a2;
    return ((_a2 = link.show) == null ? void 0 : _a2.call(link, props)) ?? true;
  });
  return /* @__PURE__ */ jsx("main", { className: "container mx-auto min-h-[60vh] mt-2", children: /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3", children: /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-2", children: [
      /* @__PURE__ */ jsx(Avatar, { name: user.username }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono font-medium", children: /* @__PURE__ */ jsx(Username, { user, showVerfied: true }) }),
        /* @__PURE__ */ jsxs("div", { className: "text-secondary text-sm font-medium", children: [
          "Joined ",
          /* @__PURE__ */ jsx(PostTime, { time: user.createdAt })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-secondary bg-zinc-200 dark:bg-neutral-800 inline px-1 py-0.5 rounded-lg font-medium text-sm", children: [
            posts.length,
            " discussions"
          ] }),
          /* @__PURE__ */ jsx(EditBio, {})
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 bio", children: parse(user.bio || "") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("ul", { className: "flex gap-2 my-2 ms-10", children: tabs.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        NavLink,
        {
          end: true,
          className: ({ isActive }) => clsx(
            "flex gap-2 items-center text-center font-medium flex-1 px-2 py-1 bg-zinc-100 dark:bg-neutral-800 rounded-lg text-secondary hover:bg-zinc-200 dark:hover:bg-neutral-700 transition-[background] duration-200",
            {
              "!bg-blue-600 !text-white": isActive
            }
          ),
          to: link.href,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: clsx("inline-block opacity-70", link.icon)
              }
            ),
            link.title
          ]
        }
      ) }, link.href)) }) }),
      outlet || /* @__PURE__ */ jsx(Posts, { posts })
    ] })
  ] }) }) });
}
function Posts({ posts }) {
  if (posts.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "p-4 text-secondary", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block i-lucide-signpost" }),
      " No posts published yet"
    ] });
  }
  return posts.map((post, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(PostItem, { limit: true, post }),
    i < posts.length - 1 && /* @__PURE__ */ jsx("hr", { className: "me-2 ms-12 dark:border-neutral-700" })
  ] }, post.id));
}
function EditBio() {
  const { username } = useParams();
  const { user: authUser } = useRouteLoaderData("root") || {};
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { bio: authUser == null ? void 0 : authUser.bio }
  });
  const fetcher = useFetcher();
  const [showForm, setShowForm] = React.useState(false);
  const isSelf = (authUser == null ? void 0 : authUser.username) === username;
  async function updateBio(data) {
    fetcher.submit(JSON.stringify(data), {
      method: "PATCH",
      encType: "application/json",
      action: `/p/${username}`
    });
    setShowForm(false);
  }
  React.useEffect(() => {
    if (!fetcher.data) {
      return;
    }
    setShowForm(false);
  }, [fetcher.data]);
  if (!isSelf) {
    return null;
  }
  const $bio = watch("bio");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        className: "flex items-center gap-1 text-secondary bg-zinc-200 dark:bg-neutral-800 inline px-1 py-0.5 rounded-lg font-medium text-sm",
        onClick: () => setShowForm(true),
        children: [
          /* @__PURE__ */ jsx("div", { className: "i-lucide-pencil" }),
          " Edit bio"
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      Modal,
      {
        className: "w-full max-w-[24rem]",
        open: showForm,
        onClose: () => setShowForm(false),
        children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(updateBio), children: [
          /* @__PURE__ */ jsx("header", { className: "px-2 py-1 font-bold", children: "Edit bio" }),
          /* @__PURE__ */ jsxs("div", { className: "px-2", children: [
            /* @__PURE__ */ jsx(Textarea, { maxLength: 240, ...register("bio") }),
            /* @__PURE__ */ jsxs("div", { className: "text-end text-xs text-secondary", children: [
              ($bio == null ? void 0 : $bio.length) || 0,
              "/240"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("footer", { className: "border-t dark:border-neutral-800 flex justify-end p-2 gap-2 mt-2", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "neutral",
                onClick: () => setShowForm(false),
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsx(Button, { disabled: fetcher.state === "submitting", children: "Save" })
          ] })
        ] })
      }
    )
  ] });
}
const route34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$8,
  default: Profile,
  loader: loader$d,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const waitQueue = new Queue();
const ENDPOINT = ["http://localhost:3003", "rooms"].join("/");
const queueHandle = queue(async (_, cb) => {
  const front = waitQueue.pop();
  if (front) return front;
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({ maxPeers: 2 }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const { roomId } = await res.json();
    waitQueue.enqueue(roomId);
    return roomId;
  } catch (err) {
    console.error("[boat] Error getting a room", err);
  }
});
async function getRoom() {
  return await queueHandle.push(null);
}
const loader$c = async ({ request }) => {
  await checkAuth(request);
  const roomId = await getRoom();
  return json({ roomId });
};
const route35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$c
}, Symbol.toStringTag, { value: "Module" }));
const loader$b = async () => {
  const programmes = await prisma.programme.findMany({
    orderBy: { name: "asc" }
  });
  return json(programmes);
};
const action$7 = async ({ request }) => {
  if (request.method !== "POST") {
    throw new Response(null, { status: 405 });
  }
  await checkAuth(request);
  const data = await request.json();
  const programmeData = {
    name: data.name,
    slug: slugify(data.name)
  };
  const programme = await prisma.programme.create({
    data: programmeData
  });
  return json({ programme });
};
const route36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$7,
  loader: loader$b
}, Symbol.toStringTag, { value: "Module" }));
const action$6 = async ({ params, request }) => {
  if (request.method !== "PATCH") {
    return json({ message: "Method not allowed" }, { status: 405 });
  }
  const postId = Number(params.post);
  const userId = await checkAuth(request);
  const data = await request.json();
  const existingVote = await prisma.vote.findFirst({
    where: { postId, userId }
  });
  if (existingVote) {
    await prisma.vote.update({
      where: { id: existingVote.id },
      data: { up: Boolean(data.up) }
    });
  } else {
    await prisma.vote.create({
      data: {
        up: Boolean(data.up),
        userId,
        postId
      }
    });
  }
  const upvotes = await prisma.vote.count({ where: { postId, up: true } });
  const downvotes = await prisma.vote.count({ where: { postId, up: false } });
  await prisma.post.update({
    where: { id: postId },
    data: { upvotes, downvotes }
  });
  return json({});
};
const route37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$6
}, Symbol.toStringTag, { value: "Module" }));
const loader$a = async ({ request }) => {
  const cookie = await userPrefs.parse(request.headers.get("Cookie")) || {};
  const { programme, year, level, sem } = cookie;
  if (programme && year && level) {
    const day = dayjs().day();
    return redirect(`/timetable/${year}/${programme}/${level}/${sem}/${day}`);
  }
  const programmes = await prisma.programme.findMany({
    orderBy: { name: "asc" }
  });
  const school = values.get("shortName");
  const schoolSem = values.get("semester.number");
  return { programmes, school, schoolSem };
};
const meta$6 = ({ data }) => {
  return [{ title: `Timetable | ${data == null ? void 0 : data.school} ✽ gctuvc` }];
};
function Timetable() {
  const { programmes, schoolSem } = useLoaderData();
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto min-h-[70vh] pt-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-5", children: /* @__PURE__ */ jsx("div", { className: "col-span-1 lg:col-span-3", children: /* @__PURE__ */ jsx(TimetableFilter, { currentSem: schoolSem, programmes }) }) }) });
}
const route38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Timetable,
  loader: loader$a,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const loader$9 = async ({ request }) => {
  const postId = new URL(request.url).searchParams.get("postId");
  if (!postId) {
    return new Response("Missing `postId`", { status: 400 });
  }
  const comments = await prisma.post.findMany({
    where: { parentId: Number(postId) },
    include: { user: true, media: true }
  });
  for (const comment of comments) {
    comment.content = await render(comment.content);
  }
  return json({ comments });
};
const route39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$9
}, Symbol.toStringTag, { value: "Module" }));
const loader$8 = async ({ request }) => {
  const courses = await prisma.course.findMany({ orderBy: { code: "asc" } });
  return json(courses);
};
const action$5 = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response(null, {
      status: 405,
      statusText: "Method Not Allowed"
    });
  }
  await checkAuth(request);
  const data = await request.json();
  const { code, name } = data;
  await prisma.course.create({
    data: { code, name, slug: slugify(`${code} ${name}`) }
  });
  return json({});
};
const route40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$5,
  loader: loader$8
}, Symbol.toStringTag, { value: "Module" }));
function FileMenu({ file }) {
  const { user } = useRouteLoaderData("root") || {};
  const fetcher = useFetcher();
  if ((user == null ? void 0 : user.id) !== file.userId) {
    return /* @__PURE__ */ jsx("div", { className: "size-8" });
  }
  const menuItems = [
    { id: "delete-file", title: "Delete file", icon: "i-lucide-trash" }
  ];
  function handleClick(actionId) {
    if (actionId === "delete-file") {
      const yes = confirm(
        "Are you sure you want to delete this file? This cannot be undone."
      );
      if (yes) {
        fetcher.submit("", {
          method: "DELETE",
          action: `/library/${file.id}`
        });
      }
    }
  }
  return /* @__PURE__ */ jsx(DD, { items: menuItems, onItemClick: handleClick });
}
const FILE_SIZE_LIMIT = 5 * 1024 * 1024;
const loader$7 = async ({ request }) => {
  const searchQuery = new URL(request.url).search.substring(1);
  const queryParams = qs.parse(searchQuery);
  const query = {};
  const tagsQuery = createTagsQuery(queryParams.tags);
  if (queryParams.q) {
    query.media = {
      filename: {
        contains: queryParams.q
      }
    };
  }
  const fullQuery = { AND: [query, ...tagsQuery] };
  const repository = await prisma.repository.findMany({
    where: fullQuery,
    include: { media: true, user: true },
    orderBy: { createdAt: "desc" }
  });
  const count = await prisma.repository.count({ where: fullQuery });
  return { school: values.meta(), repository, count, queryParams };
};
const action$4 = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  const userId = await checkAuth(request);
  const data = await request.json();
  for (const mediaData of data.media) {
    const media = await prisma.media.create({ data: { ...mediaData, userId } });
    await prisma.repository.create({
      data: {
        mediaId: media.id,
        tags: data.tags,
        userId
      }
    });
  }
  return json({}, { status: 201 });
};
const meta$5 = ({ data }) => {
  return [
    { title: `Library | ${data == null ? void 0 : data.school.shortName} | gctuvc` },
    {
      name: "description",
      content: "Find resources for your programme, course, level or anything about the school."
    }
  ];
};
function Library() {
  const { handleSubmit, setValue, watch, getValues, reset } = useForm({
    defaultValues: {
      files: [],
      tags: DEFAULT_SELECTIONS
    }
  });
  const { user } = useRouteLoaderData("root") || {};
  const { count, repository } = useLoaderData();
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const location2 = useLocation();
  const [q, setQ] = React.useState("");
  const [uploading, setUploading] = React.useState(false);
  const $files = watch("files");
  const $tags = watch("tags");
  function handleFileChange(event) {
    const files = Array.from(event.target.files || []);
    if (!files.length) {
      return;
    }
    if (files.some((file) => file.size > FILE_SIZE_LIMIT)) {
      alert("Some files you selected are too large. Maximum 5MB per file.");
      return;
    }
    setValue("files", [...$files, ...files].slice(0, 5));
  }
  function handleTagRemove(id, value) {
    const values2 = $tags[id].filter((it) => it !== value);
    const newTags = { ...$tags, [id]: values2 };
    setValue("tags", newTags);
  }
  async function uploadFiles() {
    const files = getValues("files");
    setUploading(true);
    const media = await Promise.all(files.map((file) => uploadMedia(file)));
    setUploading(false);
    const tags = getValues("tags");
    fetcher.submit(JSON.stringify({ media, tags: stringifySelections(tags) }), {
      method: "POST",
      encType: "application/json"
    });
  }
  React.useEffect(() => {
    if (fetcher.data) {
      reset();
    }
  }, [fetcher.data, reset]);
  React.useEffect(() => {
    const params = new URLSearchParams(location2.search);
    const q2 = params.get("q");
    setQ(q2 || "");
  }, [location2.search]);
  React.useEffect(() => {
    const params = new URLSearchParams(location2.search);
    const previousParams = params.toString();
    if (q) {
      params.set("q", q);
    } else {
      params.delete("q");
    }
    const from = `${location2.pathname}?${previousParams}`.replace(/\?$/, "");
    const to = `${location2.pathname}?${params.toString()}`.replace(/\?$/, "");
    if (to === from) {
      return;
    }
    const timeout = setTimeout(() => {
      navigate(to);
    }, 600);
    return () => clearTimeout(timeout);
  }, [location2.search, location2.pathname, navigate, q]);
  const tagsAdded = Boolean(Object.values($tags).flat().length);
  const editMode = Boolean($files.length);
  return /* @__PURE__ */ jsx("div", { className: "min-h-[60vh] container mx-auto", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-5", children: /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl", children: "Library" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs mb-2 ", children: /* @__PURE__ */ jsx("span", { className: "bg-zinc-100 dark:bg-neutral-800 font-medium px-2 rounded-lg text-secondary", children: editMode ? /* @__PURE__ */ jsx(Fragment, { children: "Adding files" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          count,
          " files in repository"
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: !editMode && user && /* @__PURE__ */ jsxs(
        FileInput,
        {
          className: "!bg-blue-600 text-white",
          onChange: handleFileChange,
          multiple: true,
          children: [
            /* @__PURE__ */ jsx("div", { className: "i-lucide-plus opacity-60" }),
            " Add files"
          ]
        }
      ) })
    ] }),
    editMode ? /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(uploadFiles), children: [
      /* @__PURE__ */ jsx("div", { className: "grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 flex-wrap", children: $files.map((file, index) => /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
        FileSelectItem,
        {
          file,
          onRemove: () => setValue(
            "files",
            $files.filter((_, i) => index !== i)
          )
        },
        file.name
      ) }, file.name)) }),
      tagsAdded && /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
        /* @__PURE__ */ jsx("header", { className: "font-medium text-secondary text-sm", children: "Tags" }),
        /* @__PURE__ */ jsx(TagSelect, { tags: $tags, onRemove: handleTagRemove })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-secondary text-sm flex gap-2", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "inline-block i-lucide-alert-triangle text-red-500 shrink-0 mt-1" }) }),
        /* @__PURE__ */ jsx("p", { children: "The names of the files will be retained when uploaded. To make it easy to search, rename the file appropriately before uploading." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-secondary text-sm gap-2 flex mt-2", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block i-lucide-hash text-blue-500 mt-0.5" }),
        /* @__PURE__ */ jsx("p", { children: "Add at least one tag to make filtering easier." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mt-2", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            disabled: !tagsAdded || fetcher.state === "submitting" || uploading,
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: clsx("i-lucide-upload opacity-60", {
                    "!i-svg-spinners-180-ring-with-bg": fetcher.state === "submitting" || uploading
                  })
                }
              ),
              " ",
              "Upload all"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          TagInput,
          {
            className: "!w-auto rounded-lg",
            value: $tags,
            onDone: (v) => setValue("tags", v),
            children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-lg bg-zinc-200 dark:bg-neutral-800 font-medium", children: [
              /* @__PURE__ */ jsx("div", { className: "i-lucide-hash opacity-60" }),
              "Add tags"
            ] })
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          onChange: (e) => setQ(e.target.value),
          placeholder: "Search for file",
          type: "search",
          value: q
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(TagsFilter, { label: "Filter resources", path: "/library" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-secondary mb-2 text-sm", children: "Showing most recent uploads" }),
      !user && /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxs("p", { className: "text-secondary", children: [
        "You must be",
        " ",
        /* @__PURE__ */ jsx(Link, { className: "underline text-reset", to: "/login", children: "logged in" }),
        " ",
        "to upload a file."
      ] }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("ul", { children: repository.map((file, i) => /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              target: "_blank",
              className: "grid grid-cols-4 hover:bg-zinc-100 dark:hover:bg-neutral-800 gap-2 p-2 rounded-lg",
              href: file.media.url,
              rel: "noreferrer",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2 col-span-3", children: [
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                    Thumbnail$1,
                    {
                      thumbnail: file.media.thumbnail,
                      contentType: file.media.contentType,
                      name: file.media.filename
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx("header", { className: "font-medium break-all", children: ellipsizeFilename(file.media.filename, 40) }),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Tags, { tags: file.tags }) }),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", { className: "text-secondary inline-flex text-xs items-center gap-1 font-mono", children: [
                      /* @__PURE__ */ jsx("div", { className: "i-lucide-arrow-up-from-line" }),
                      " ",
                      /* @__PURE__ */ jsx(Username, { user: file.user }),
                      " • ",
                      /* @__PURE__ */ jsx(PostTime, { time: file.createdAt })
                    ] }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex flex-col items-end", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium bg-zinc-100 dark:bg-neutral-800 rounded-lg px-1 text-center self-end text-sm", children: humanizeSize(file.media.size) }),
                  /* @__PURE__ */ jsx(FileMenu, { file })
                ] })
              ]
            }
          ),
          i < repository.length - 1 && /* @__PURE__ */ jsx("hr", { className: "me-2 ms-14 dark:border-neutral-700" })
        ] }, file.id)) }),
        repository.length === 0 && /* @__PURE__ */ jsxs("div", { className: "font-mono text-center text-secondary", children: [
          /* @__PURE__ */ jsx("div", { className: "i-lucide-land-plot inline-block" }),
          " Nothing here!"
        ] })
      ] })
    ] })
  ] }) }) });
}
const route41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$4,
  default: Library,
  loader: loader$7,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
const loader$6 = async ({ request }) => {
  const cookies = await userPrefs.parse(request.headers.get("Cookie")) || {};
  if (cookies.lastBase) {
    return redirect(`/${cookies.lastBase}`);
  }
  return redirect("/discussions");
};
const route42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$6
}, Symbol.toStringTag, { value: "Module" }));
const loader$5 = async () => {
  const events = await prisma.eventItem.findMany({
    where: { date: { gt: dayjs().startOf("week").toDate() } },
    orderBy: { date: "asc" },
    include: { user: true, poster: true }
  });
  return { events, school: values.meta() };
};
const action$3 = async ({ request }) => {
  const userId = await checkAuth(request);
  const { poster, ...data } = await request.json();
  if (poster) {
    const media = await prisma.media.create({ data: poster });
    data.posterId = media.id;
  }
  const event = await prisma.eventItem.create({
    data: { ...data, date: new Date(data.date), userId }
  });
  return redirect(`/events/${event.id}`);
};
const meta$4 = ({ data }) => {
  return [
    { title: `Events | ${data == null ? void 0 : data.school.shortName} ✽ gctuvc` },
    {
      name: "description",
      content: "All the events happening on (and off) campus. Find them here."
    }
  ];
};
function Events() {
  const { events } = useLoaderData();
  const { user } = useRouteLoaderData("root") || {};
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto min-h-[60vh]", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-3", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl", children: "Events" }),
    /* @__PURE__ */ jsxs("header", { className: "mb-2 flex justify-between", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "bg-zinc-200 dark:bg-neutral-800 rounded-full px-2 py-0.5 inline font-medium text-sm", children: [
        events.length,
        " events"
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Anchor, { to: "/events/add", className: clsx({ "!hidden": !user }), children: [
        /* @__PURE__ */ jsx("div", { className: "i-lucide-plus opacity-60" }),
        " Add event"
      ] }) })
    ] }),
    !user && /* @__PURE__ */ jsxs("p", { className: "text-secondary mb-2", children: [
      "You must be",
      " ",
      /* @__PURE__ */ jsx(Link, { className: "underline text-reset", to: "/login", children: "logged in" }),
      " ",
      "to add an event."
    ] }),
    /* @__PURE__ */ jsx("ul", { children: events.map((event) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(EventItem, { event }) }, event.id)) }),
    events.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center text-secondary mt-8", children: "No events at the moment. You can add an event if you spotted any so every can see." })
  ] }) }) });
}
function EventItem({ event }) {
  const isPast = dayjs(event.date).startOf("day").add(event.startTime, "seconds").isBefore(dayjs());
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: `/events/${event.id}`,
      className: clsx(
        "flex gap-4 hover:bg-zinc-100 dark:hover:bg-neutral-800 dark:hover:bg-opacity-50 px-2 rounded-lg",
        { "opacity-60": isPast }
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "w-4 relative", children: [
          /* @__PURE__ */ jsx("div", { className: "h-full bg-zinc-200 dark:bg-neutral-700 w-[2px] mx-auto" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-neutral-700 size-4 rounded-full" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 mb-8", children: [
          /* @__PURE__ */ jsxs("header", { className: "font-mono text-secondary text-sm", children: [
            dayjs(event.date).format("ddd, DD MMM[.]"),
            " ",
            timeToString(event.startTime),
            " —",
            " ",
            event.endTime ? timeToString(event.endTime) : "till you drop",
            /* @__PURE__ */ jsx("br", {}),
            "@",
            event.venue
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-bold mt-2", children: event.title }),
          /* @__PURE__ */ jsx("p", { className: "text-secondary", children: event.shortDescription }),
          event.poster && /* @__PURE__ */ jsx("div", { className: "size-30 rounded-lg bg-zinc-200 dark:bg-neutral-800 md:hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: event.poster.url,
              alt: event.title,
              className: "object-cover w-full h-full rounded-lg"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 whitespace-pre-wrap", children: ellipsize(event.description, 80) }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs font-mono mt-2 text-secondary", children: [
            "Posted ",
            /* @__PURE__ */ jsx(PostTime, { time: event.createdAt }),
            " by",
            " ",
            /* @__PURE__ */ jsx(Username, { user: event.user })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "max-md:hidden", children: event.poster && /* @__PURE__ */ jsx("div", { className: "size-24 rounded-lg bg-zinc-200 dark:bg-neutral-800", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: event.poster.url,
            alt: event.title,
            className: "object-cover w-full h-full rounded-lg"
          }
        ) }) })
      ]
    }
  );
}
function ellipsize(str, length) {
  return str.length > length ? `${str.slice(0, length)}…` : str;
}
const route43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$3,
  default: Events,
  loader: loader$5,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const loader$4 = async ({ request }) => {
  let user = null;
  try {
    const userId = await checkAuth(request);
    user = await prisma.user.findFirst({ where: { id: userId } });
  } catch {
  }
  const sellerProfile = user ? await prisma.sellerProfile.findFirst({
    where: { userId: user.id }
  }) : null;
  const products = await prisma.product.findMany({
    where: { status: "available" },
    include: { category: true },
    orderBy: { createdAt: "desc" }
  });
  const categories = await prisma.category.findMany();
  return { categories, school: values.meta(), products, sellerProfile };
};
const meta$3 = ({ data }) => {
  return [
    { title: `Marketplace | ${data == null ? void 0 : data.school.shortName} ✽ gctuvc` },
    {
      name: "description",
      content: "Looking for something to buy or sell? This is the place."
    }
  ];
};
function Market() {
  const { categories, products, sellerProfile } = useLoaderData();
  const { user } = useRouteLoaderData("root") || {};
  return /* @__PURE__ */ jsxs("div", { className: "container min-h-[60vh]", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl", children: "Marketplace" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx(Input, { type: "search", placeholder: "Search product" }),
        /* @__PURE__ */ jsxs(Select, { children: [
          /* @__PURE__ */ jsx("option", { value: "all", children: "All Categories" }),
          categories.map((category) => /* @__PURE__ */ jsx("option", { value: category.id, children: category.title }, category.id))
        ] })
      ] })
    ] }),
    sellerProfile && /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-2", children: [
      /* @__PURE__ */ jsx(Anchor, { to: "/market/profile", variant: "neutral", children: "Edit profile" }),
      /* @__PURE__ */ jsx(Anchor, { to: `/p/${user == null ? void 0 : user.username}/catalog`, variant: "neutral", children: "View catalog" }),
      /* @__PURE__ */ jsx(Anchor, { to: "/market/add", children: "Add Product" })
    ] }),
    !sellerProfile && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-2", children: /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "p-2 rounded-lg bg-zinc-100 dark:bg-neutral-800 border dark:border-neutral-700", children: [
      /* @__PURE__ */ jsx("header", { className: "font-bold", children: "Have a product?" }),
      /* @__PURE__ */ jsx("div", { className: "mb-2 text-secondary", children: "Do you have anything to sell? You're welcome to upload any number of products (used or new) you have." }),
      user ? /* @__PURE__ */ jsx(Anchor, { to: "/market/profile", children: "Create seller profile" }) : /* @__PURE__ */ jsx(Anchor, { to: "/login", children: "Log in first" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: products.map((product) => {
      return /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(ProductItem, { product }) }, product.id);
    }) })
  ] });
}
const route44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Market,
  loader: loader$4,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function ParlonLogo() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "300",
      viewBox: "0 0 622 135",
      fill: "none",
      className: "inline-block",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Parlon" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "fill-current",
            d: "M506.591 67.3899H531.677V77.0469C539.521 69.7949 549.622 66.1689 561.98 66.1689H562.757C572.673 66.1689 580.11 68.3149 585.068 72.6069C590.026 76.8249 592.505 81.9679 592.505 88.0359V123.445H566.975V95.6949C566.975 91.2549 565.606 87.8509 562.868 85.4829C560.13 83.0409 556.06 81.8199 550.658 81.8199C544.96 81.8199 540.409 83.2259 537.005 86.0379C533.601 88.7759 531.899 92.4389 531.899 97.0269V123.445H506.591V67.3899Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "fill-current",
            d: "M453.66 124.222H445.779C438.971 124.222 432.94 123.63 427.686 122.446C422.432 121.188 418.214 119.634 415.032 117.784C411.85 115.934 409.223 113.714 407.151 111.124C405.079 108.46 403.673 105.833 402.933 103.243C402.193 100.727 401.823 98.0999 401.823 95.3619V93.4749C401.823 90.6629 402.193 88.0359 402.933 85.5939C403.673 83.0779 405.042 80.5249 407.04 77.9349C409.112 75.3449 411.739 73.1619 414.921 71.3859C418.103 69.5359 422.321 68.0189 427.575 66.8349C432.829 65.7249 438.86 65.1699 445.668 65.1699H453.66C482.816 65.1699 497.394 74.6049 497.394 93.4749V95.3619C497.394 114.602 482.816 124.222 453.66 124.222ZM432.792 104.908C436.196 107.72 441.82 109.126 449.664 109.126C457.582 109.126 463.243 107.72 466.647 104.908C470.051 102.022 471.753 98.6179 471.753 94.6959V94.1409C471.753 90.1449 470.051 86.8149 466.647 84.1509C463.243 81.4129 457.619 80.0439 449.775 80.0439H449.664C441.746 80.0439 436.085 81.3759 432.681 84.0399C429.351 86.7039 427.686 90.0709 427.686 94.1409V94.6959C427.686 98.6179 429.388 102.022 432.792 104.908Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "fill-current",
            d: "M392.824 46.2999V123.667H367.516V46.2999H392.824Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "fill-current",
            d: "M305.563 123.445H280.255V67.3899H305.341V77.2689C306.451 75.7889 307.783 74.3459 309.337 72.9399C310.965 71.4599 313.666 69.9799 317.44 68.4999C321.214 66.9459 325.432 66.1689 330.094 66.1689H331.315C339.751 66.1689 346.004 68.4259 350.074 72.9399C354.144 77.4539 356.179 83.5219 356.179 91.1439V94.3629H331.759C331.759 90.4409 330.723 87.2219 328.651 84.7059C326.579 82.1899 323.323 80.9319 318.883 80.9319H318.772C314.628 80.9319 311.372 82.2639 309.004 84.9279C306.71 87.5179 305.563 90.6999 305.563 94.4739V123.445Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "fill-current",
            d: "M238.69 115.453C236.766 117.599 233.547 119.597 229.033 121.447C224.519 123.223 218.34 124.111 210.496 124.111H209.053C199.433 124.111 192.292 122.409 187.63 119.005C182.968 115.527 180.637 111.124 180.637 105.796V105.13C180.637 99.9499 182.598 96.0649 186.52 93.4749C190.516 90.8109 197.102 89.1089 206.278 88.3689L234.139 85.9269C236.729 85.7049 238.024 84.7429 238.024 83.0409C238.024 82.1529 237.802 81.4129 237.358 80.8209C236.692 80.3029 235.175 79.7849 232.807 79.2669C230.291 78.7489 226.739 78.4899 222.151 78.4899H221.596C218.71 78.4899 216.231 78.6379 214.159 78.9339C212.087 79.3039 210.533 79.6739 209.497 80.0439C208.461 80.4879 207.647 81.0429 207.055 81.7089C206.389 82.4489 205.982 82.9669 205.834 83.2629C205.76 83.7069 205.686 84.1879 205.612 84.7059H182.08V84.4839C182.08 82.6339 182.228 81.0429 182.524 79.7109C182.894 78.2309 183.782 76.5659 185.188 74.7159C186.594 72.8659 188.518 71.3119 190.96 70.0539C193.476 68.7959 197.065 67.7229 201.727 66.8349C206.463 66.0209 212.05 65.6139 218.488 65.6139H224.815C231.623 65.6139 237.432 65.9839 242.242 66.7239C247.126 67.4639 250.826 68.3889 253.342 69.4989C255.932 70.6089 257.93 72.0519 259.336 73.8279C260.816 75.6039 261.704 77.1949 262 78.6009C262.296 80.0069 262.444 81.7089 262.444 83.7069V105.13C262.444 106.98 263.517 107.905 265.663 107.905H268.882V123.112H248.347C242.871 123.112 239.652 120.559 238.69 115.453ZM238.024 96.4719L213.937 99.9129C210.533 100.431 208.128 101.023 206.722 101.689C205.39 102.503 204.724 103.65 204.724 105.13V105.241C204.798 106.943 205.649 108.423 207.277 109.681C209.053 110.939 211.902 111.568 215.824 111.568C222.336 111.568 227.664 110.236 231.808 107.572C235.952 104.834 238.024 101.726 238.024 98.2479V96.4719Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "fill-current",
            d: "M133.152 98.1369H96.1892V124H69.6602V46.4109H133.152C159.496 46.4109 172.668 54.8099 172.668 71.6079V72.7179C172.668 89.6639 159.496 98.1369 133.152 98.1369ZM96.1892 64.0599V80.7099H132.708C140.922 80.7099 145.029 78.0089 145.029 72.6069V72.2739C145.029 66.7979 140.922 64.0599 132.708 64.0599H96.1892Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            transform: "translate(0 71.5735) rotate(-30.9778)",
            xmlSpace: "preserve",
            fontSize: "73",
            fill: "currentColor",
            letterSpacing: "0em",
            children: /* @__PURE__ */ jsx("tspan", { x: "0", y: "67.89", children: "🤭" })
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            transform: "translate(549.322 4) rotate(5.75692)",
            xmlSpace: "preserve",
            fontSize: "73",
            fill: "currentColor",
            letterSpacing: "0em",
            children: /* @__PURE__ */ jsx("tspan", { x: "0", y: "67.89", children: "🙈" })
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            transform: "translate(289 11.4199) rotate(-9.00013)",
            xmlSpace: "preserve",
            fontSize: "73",
            fill: "currentColor",
            letterSpacing: "0em",
            children: /* @__PURE__ */ jsx("tspan", { x: "0", y: "67.89", children: "😅" })
          }
        )
      ]
    }
  );
}
class BoatClient {
  constructor(endpoint2) {
    __publicField(this, "endpoint");
    __publicField(this, "client", null);
    __publicField(this, "device");
    __publicField(this, "onJoin", null);
    __publicField(this, "onLeave", null);
    __publicField(this, "peers", []);
    this.endpoint = endpoint2;
    this.device = new Device();
  }
  async connect(options) {
    const ws = new WebSocketTransport(this.endpoint);
    const client = new Peer(ws);
    this.client = client;
    this.client.on("open", async () => {
      const rtpCapabilities = await client.request("getRtpCapabilities");
      await this.device.load({ routerRtpCapabilities: rtpCapabilities });
      const data = await client.request("createProducerTransport", {
        rtpCapabilities
      });
      const transport = this.device.createSendTransport(data);
      transport.on("connect", async ({ dtlsParameters }, callback, errback) => {
        try {
          await client.request("connectProducerTransport", {
            dtlsParameters
          });
          callback();
        } catch (err) {
          errback(err);
        }
      });
      transport.on("produce", async ({ kind, rtpParameters }, callback, errback) => {
        try {
          const { id } = await client.request("produce", {
            id: transport.id,
            kind,
            rtpParameters
          });
          callback({ id });
        } catch (err) {
          errback(err);
        }
      });
      await transport.produce({
        track: options.stream.getVideoTracks()[0]
      });
      await transport.produce({ track: options.stream.getAudioTracks()[0] });
      const peers = await client.request("getPeers");
      for (const peer of peers) await this.admit(peer);
      await client.request("notifyJoin");
    });
    this.client.on("request", async (request, accept) => {
      var _a2;
      switch (request.method) {
        case "newPeer": {
          await this.admit(request.data);
          return accept();
        }
        case "disconnectPeer": {
          const peerId = request.data.peerId;
          const peer = this.peers.find((p) => p.id === peerId);
          if (peer) {
            for (const track of peer.stream.getTracks()) track.stop();
            this.peers = this.peers.filter((p) => p.id !== peerId);
          }
          await ((_a2 = this.onLeave) == null ? void 0 : _a2.call(this, peerId));
          return accept();
        }
      }
    });
  }
  async disconnect() {
    if (!this.client) return;
    await this.client.request("disconnect");
  }
  async admit(peerId) {
    var _a2;
    const client = this.client;
    if (!client) return;
    const data = await client.request("createConsumerTransport");
    const transport = this.device.createRecvTransport(data);
    transport.on("connect", async ({ dtlsParameters }, callback, errback) => {
      try {
        await client.request("connectConsumerTransport", {
          transportId: transport.id,
          dtlsParameters
        });
        callback();
      } catch (err) {
        errback(err);
      }
    });
    const trackInfos = await client.request("consume", {
      peerId,
      rtpCapabilities: this.device.rtpCapabilities
    });
    const stream = new MediaStream();
    for (const info of trackInfos) {
      const consumer = await transport.consume({
        id: info.id,
        producerId: info.producerId,
        rtpParameters: info.rtpParameters,
        kind: info.kind
      });
      stream.addTrack(consumer.track);
    }
    const peerInfo = { id: peerId, stream };
    this.peers.push(peerInfo);
    await ((_a2 = this.onJoin) == null ? void 0 : _a2.call(this, peerInfo));
    await client.request("resumeConsume");
  }
  on(event, callback) {
    switch (event) {
      case "join":
        this.onJoin = callback;
        break;
      case "leave":
        this.onLeave = callback;
        break;
    }
  }
}
const WAIT_TIME = 1e4;
const ParlonContext = React.createContext({
  call: () => {
  },
  peerStream: null,
  selfStream: null,
  setShyMode: (shyMode) => {
  },
  shyMode: true,
  status: "idle",
  requestCamera: () => {
  },
  peer: null,
  end: () => {
  },
  muted: false,
  setMuted: (muted) => {
  }
});
function ParlonProvider({ children }) {
  const { user } = useRouteLoaderData("root") || {};
  const [selfStream, setSelfStream] = React.useState(null);
  const [peerStream, setPeerStream] = React.useState(null);
  const [shyMode, setShyMode] = React.useState(true);
  const [muted, setMuted] = React.useState(false);
  const [status, setStatus] = React.useState("idle");
  const [peer, setPeer] = React.useState(null);
  const boat = React.useRef(null);
  const reset = React.useCallback(() => {
    setStatus("idle");
    setPeer(null);
    setPeerStream(null);
  }, []);
  const requestCamera = React.useCallback(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => setSelfStream(stream)).catch(console.error);
  }, []);
  const call = React.useCallback(async () => {
    var _a2;
    if (!(user && selfStream)) return;
    setStatus("connecting");
    (_a2 = boat.current) == null ? void 0 : _a2.disconnect();
    const res = await fetch("/parlon/call");
    const { roomId } = await res.json();
    const base = "ws://localhost:3003";
    const prefix = shyMode ? "shy:" : "";
    const endpoint2 = [base, "join", roomId, prefix + user.username].join("/");
    const conn = new BoatClient(endpoint2);
    conn.on("join", (peer2) => {
      setStatus("connected");
      setPeer({ id: peer2.id });
      setPeerStream(peer2.stream);
    });
    conn.on("leave", () => {
      var _a3;
      reset();
      (_a3 = boat.current) == null ? void 0 : _a3.disconnect();
      boat.current = null;
    });
    await conn.connect({ stream: selfStream });
    boat.current = conn;
    const id = setTimeout(() => {
      if (!conn.peers.length) {
        reset();
        boat.current = null;
        conn.disconnect();
      }
    }, WAIT_TIME);
    return () => clearTimeout(id);
  }, [user, selfStream, shyMode, reset]);
  const end = React.useCallback(() => {
    var _a2;
    (_a2 = boat.current) == null ? void 0 : _a2.disconnect();
    reset();
  }, [reset]);
  React.useEffect(() => {
    for (const track of (selfStream == null ? void 0 : selfStream.getAudioTracks()) || []) {
      track.enabled = !muted;
    }
  }, [muted, selfStream]);
  const providerValue = {
    call,
    peer,
    peerStream,
    requestCamera,
    selfStream,
    setShyMode,
    shyMode,
    status,
    end,
    muted,
    setMuted
  };
  return /* @__PURE__ */ jsx(ParlonContext.Provider, { value: providerValue, children });
}
function useParlon() {
  return React.useContext(ParlonContext);
}
function useCountdown(seconds) {
  const [time, setTime] = React.useState(seconds);
  const intervalId = React.useRef(null);
  const start = React.useCallback(() => {
    setTime(seconds);
    intervalId.current = setInterval(() => {
      setTime((t) => t - 1);
    }, 1e3);
  }, [seconds]);
  const stop = React.useCallback(() => {
    clearInterval(intervalId.current);
  }, []);
  React.useEffect(() => {
    if (time === 0) {
      stop();
    }
  }, [time, stop]);
  return { time, start, stop };
}
function PeerVideoPanel() {
  const { peerStream, peer, status, call, end } = useParlon();
  const videoRef = React.useRef(null);
  const ding = React.useRef(null);
  const { time, start: startCountdown, stop } = useCountdown(10);
  const [shy, peerNickname] = React.useMemo(() => {
    if (!peer) return [false, null];
    if (peer.id.startsWith("shy:")) {
      return [true, peer.id.slice(4)];
    }
    return [false, peer.id];
  }, [peer]);
  React.useEffect(() => {
    var _a2;
    if (!videoRef.current || !peerStream) return;
    (_a2 = ding.current) == null ? void 0 : _a2.play();
    if (shy) startCountdown();
    const stream = new MediaStream();
    stream.addTrack(peerStream.getAudioTracks()[0]);
    videoRef.current.srcObject = stream;
    const id = setTimeout(
      () => {
        stream.addTrack(peerStream.getVideoTracks()[0]);
      },
      shy ? 1e4 : 0
    );
    return () => {
      clearTimeout(id);
      stop();
    };
  }, [peerStream, shy, startCountdown, stop]);
  if (status !== "connected") {
    return /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-zinc-200 aspect-[5/4] dark:bg-neutral-800 flex justify-center items-center", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: status === "idle" ? /* @__PURE__ */ jsxs(
      "button",
      {
        className: "bg-blue-500 text-white p-4 rounded-full aspect-square leading-none font-bold text-2xl",
        type: "button",
        onClick: () => call(),
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            "Find ",
            /* @__PURE__ */ jsx("br", {}),
            "the one"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-sm opacity-60", children: "Tap here" })
        ]
      }
    ) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2 font-medium items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "i-svg-spinners-pulse-3 text-red-500 text-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "text-secondary text-sm", children: "A moment! Searching…" })
    ] }) }) });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx(
        "rounded-lg bg-zinc-200 aspect-[5/4] dark:bg-neutral-800 flex flex-col justify-between relative",
        { "!bg-neutral-800": shy }
      ),
      children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            ref: videoRef,
            autoPlay: true,
            className: "w-full h-full rounded-lg overflow-hidden object-cover",
            style: { transform: "scaleX(-1)" },
            playsInline: true
          }
        ),
        /* @__PURE__ */ jsxs(
          "header",
          {
            className: "justify-between flex items-start p-2 absolute top-0 left-0 w-full rounded-t-lg",
            style: {
              background: "linear-gradient(0deg, transparent 0%, rgba(0,0,0,0.4) 100%)"
            },
            children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "font-mono text-white", children: [
                "@",
                peerNickname
              ] }) }),
              shy && time > 0 && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-secondary", children: "Reveal in" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-mono text-white", children: time })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx("footer", { className: "flex justify-end p-2 absolute bottom-0 left-0 w-full rounded-b-lg", children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "px-2 py-1 rounded-full bg-red-500 flex items-center gap-2 font-medium text-white",
            onClick: end,
            children: [
              /* @__PURE__ */ jsx("div", { className: "i-lucide-phone-off" }),
              " Hang up"
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("audio", { ref: ding, id: "ding", src: "/zasplat_connected_ding.mp3" })
      ]
    }
  );
}
function SelfVideoPanel() {
  const { user } = useRouteLoaderData("root") || {};
  const {
    muted,
    setMuted,
    selfStream: stream,
    peerStream,
    shyMode,
    setShyMode
  } = useParlon();
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    if (!videoRef.current || !stream) return;
    const ms = new MediaStream();
    ms.addTrack(stream.getVideoTracks()[0]);
    videoRef.current.srcObject = ms;
  }, [stream]);
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-zinc-200 aspect-[5/4] dark:bg-neutral-800 relative", children: [
    /* @__PURE__ */ jsx(
      "video",
      {
        ref: videoRef,
        autoPlay: true,
        className: "w-full h-full rounded-lg overflow-hidden object-cover",
        style: { transform: "scaleX(-1)" },
        playsInline: true
      }
    ),
    /* @__PURE__ */ jsxs(
      "header",
      {
        className: "justify-between flex items-start p-2 absolute top-0 left-0 w-full rounded-t-lg",
        style: {
          background: "linear-gradient(0deg, transparent 0%, rgba(0,0,0,0.4) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "font-mono font-medium text-white leading-none", children: [
              "@",
              user == null ? void 0 : user.username,
              /* @__PURE__ */ jsx("span", { className: "opacity-50", children: "•you" })
            ] }),
            muted && /* @__PURE__ */ jsx("p", { className: "text-sm opacity-70 text-white", children: "You're muted" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: clsx(
                  "flex gap-2 items-center rounded-full px-2 py-1 bg-zinc-300 dark:bg-neutral-700 font-medium duration-200",
                  { "!bg-green-500 text-white": shyMode }
                ),
                type: "button",
                disabled: peerStream !== null,
                onClick: () => setShyMode(!shyMode),
                children: [
                  /* @__PURE__ */ jsx("div", { children: "🙈" }),
                  " Shy mode ",
                  shyMode ? "on" : "off"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: clsx(
                  "aspect-square rounded-full p-2 bg-blue-500 text-xl text-white duration-200",
                  { "bg-red-500": muted }
                ),
                type: "button",
                onClick: () => setMuted(!muted),
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: clsx({
                      "i-lucide-mic": !muted,
                      "i-lucide-mic-off": muted
                    })
                  }
                )
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const loader$3 = async () => {
  return json({
    school: values.meta(),
    available: values.get("id") === "gctu"
  });
};
const meta$2 = ({ data }) => {
  return [
    { title: `Parlon | ${data == null ? void 0 : data.school.shortName} | gctuvc` },
    {
      name: "description",
      content: "Make friends, find love, learn from random people on campus"
    }
  ];
};
function Parlon() {
  const { available } = useLoaderData();
  if (!available) {
    return /* @__PURE__ */ jsx("div", { className: "container", children: "Parlon is not available in your school yet. Please check back later." });
  }
  return /* @__PURE__ */ jsx(ParlonProvider, { children: /* @__PURE__ */ jsx(ParlonContent, {}) });
}
function ParlonContent() {
  const { selfStream: stream } = useParlon();
  return /* @__PURE__ */ jsxs("div", { className: "container min-h-[60vh]", children: [
    /* @__PURE__ */ jsxs("header", { className: "text-center mb-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-center", children: /* @__PURE__ */ jsx(ParlonLogo, {}) }),
      /* @__PURE__ */ jsx("p", { className: "text-secondary leading-tight", children: "Make friends, find love, learn from random people on campus" })
    ] }),
    stream ? /* @__PURE__ */ jsx(Panels, {}) : /* @__PURE__ */ jsx(GetStarted, {})
  ] });
}
function GetStarted() {
  const { requestCamera } = useParlon();
  const { user } = useRouteLoaderData("root") || {};
  if (!user) {
    return /* @__PURE__ */ jsxs("div", { className: "rounded-lg max-w-[30rem] aspect-[5/4] flex items-center justify-center flex-col mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Anchor, { to: "/login", type: "button", onClick: requestCamera, children: [
        /* @__PURE__ */ jsx("div", { className: "i-lucide-lock" }),
        " Login"
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "text-secondary text-sm text-center mx-8", children: "You need to log in or create an account to be able to use Parlon. It'll only take a few minutes to create an account if you're new here." })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg max-w-[30rem] aspect-[5/4] flex items-center justify-center flex-col mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Button, { type: "button", onClick: requestCamera, children: [
      /* @__PURE__ */ jsx("div", { className: "i-lucide-camera" }),
      " Enable Camera"
    ] }) }),
    /* @__PURE__ */ jsxs("p", { className: "text-secondary text-sm text-center mx-8", children: [
      "Your camera is not shown immediately to the other person unless you turn off ",
      /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Shy mode" })
    ] })
  ] });
}
function Panels() {
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "grid-cols-1", children: /* @__PURE__ */ jsx(PeerVideoPanel, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "grid-cols-1", children: [
      /* @__PURE__ */ jsx(SelfVideoPanel, {}),
      /* @__PURE__ */ jsx("div", { className: "mx-2 text-sm text-secondary leading-tight mt-1", children: "Enabling Shy mode will hide your video from the other person for 10 seconds when connected. You can use the voice channel to introduce yourselves before you're revealed." })
    ] })
  ] });
}
const route45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Parlon,
  loader: loader$3,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const loader$2 = async ({ request }) => {
  const post = new URL(request.url).searchParams.get("postId");
  if (!post) {
    return new Response("Missing post query param", { status: 400 });
  }
  const postId = Number(post);
  const people = await prisma.user.findMany({
    where: {
      Post: {
        some: { OR: [{ id: postId }, { parentId: postId }], deleted: false }
      }
    }
  });
  return json({ people });
};
const route46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
const loader$1 = async () => {
  return json({ school: values.meta() });
};
const meta$1 = ({ data }) => {
  return [
    { title: `Games | ${data == null ? void 0 : data.school.shortName} | gctuvc` },
    {
      name: "description",
      content: "Coming soon…"
    }
  ];
};
function Games() {
  return /* @__PURE__ */ jsx("div", { className: "container min-h-[60vh]", children: /* @__PURE__ */ jsx("div", { children: "Wait a little, it's gonna be fun…" }) });
}
const route47 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Games,
  loader: loader$1,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const loader = async () => {
  const school = values.get("shortName");
  return { school };
};
const action$2 = async ({ request }) => {
  if (request.method !== "POST") {
    return json(null, {
      status: 405,
      statusText: "Method Not Allowed"
    });
  }
  const { email, password } = await request.json();
  const user = await prisma.user.findFirst({
    where: { OR: [{ email }, { username: email }] }
  });
  if (!user) {
    return json(
      { type: "invalid-credentials", message: "Invalid email or password" },
      { status: 400 }
    );
  }
  const authCredential = await prisma.authCredential.findFirst({
    where: { userId: user.id }
  });
  if (!authCredential) {
    return json(
      { type: "invalid-credentials", message: "Invalid email or password" },
      { status: 400 }
    );
  }
  const passwordMatch = await gctuvcre(password, authCredential.password);
  if (!passwordMatch) {
    return json(
      {
        type: "invalid-credentials",
        message: "Invalid email/username or password"
      },
      { status: 400 }
    );
  }
  if (!user.verified) {
    return json(
      { type: "unverified-account", message: "Unverified account" },
      { status: 400 }
    );
  }
  const token = signUser(user);
  return json(
    { type: "success", message: "Login successful" },
    {
      headers: {
        "Set-Cookie": await authCookie.serialize({ token }),
        Location: "/"
      },
      status: 302
    }
  );
};
const meta = ({ data }) => {
  return [{ title: `Login | ${data == null ? void 0 : data.school} ✽ gctuvc` }];
};
function Login() {
  const { handleSubmit, register, watch } = useForm();
  const actionData = useActionData();
  const submit = useSubmit();
  const navigation = useNavigation();
  async function login(data) {
    submit(JSON.stringify(data), {
      method: "POST",
      encType: "application/json"
    });
  }
  const $email = watch("email");
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("div", { className: "min-h-[60vh]", children: /* @__PURE__ */ jsx("div", { className: "lg:max-w-[24rem] mx-auto", children: /* @__PURE__ */ jsxs(
    "form",
    {
      className: "bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-800 p-4",
      onSubmit: handleSubmit(login),
      children: [
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-2xl mb-2", children: "Login" }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg p-2 bg-blue-50 text-blue-500 my-2 dark:bg-blue-700 dark:bg-opacity-10 dark:text-blue-400", children: [
          /* @__PURE__ */ jsx("i", { className: "i-lucide-hand inline-block" }),
          " If this is your first time here, you might need to create an account."
        ] }),
        actionData && /* @__PURE__ */ jsxs("div", { className: "p-2 rounded-lg bg-red-50 text-red-500 dark:bg-red-700 dark:bg-opacity-10 dark:text-red-400 mb-2", children: [
          actionData.type === "invalid-credentials" && (actionData == null ? void 0 : actionData.message),
          actionData.type === "unverified-account" && /* @__PURE__ */ jsxs(Fragment, { children: [
            "You need to verify your email to be able to login. Check your inbox.",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "underline font-medium dark:text-red-200",
                href: `/resend-verification?email=${$email}`,
                children: "Resend email"
              }
            ),
            " ",
            "if you can't find it."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Email or username",
          /* @__PURE__ */ jsx(
            Input,
            {
              ...register("email", {
                required: true,
                setValueAs(v) {
                  return v.toLowerCase();
                }
              })
            }
          ),
          /* @__PURE__ */ jsx("small", { className: "text-secondary", children: "Your school email" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block mt-2", children: [
          "Password",
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "password",
              ...register("password", { required: true })
            }
          ),
          /* @__PURE__ */ jsxs("small", { className: "text-secondary", children: [
            "Forgot your password?",
            " ",
            /* @__PURE__ */ jsx(Link, { className: "underline", to: "/forgot-password", children: "Click here to reset" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Button, { disabled: navigation.state === "submitting", children: navigation.state === "submitting" ? "Please wait…" : "Login" }) }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              className: "underline font-medium text-green-500",
              to: "/create-account",
              children: "Create an account"
            }
          ),
          " ",
          "to start interacting on virtual-campus."
        ] })
      ]
    }
  ) }) }) });
}
const route48 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$2,
  default: Login,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const endpoint = new aws.Endpoint(process.env.MY_AWS_UPLOAD_ENDPOINT);
const s3 = new S3Client({
  endpoint,
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY
  },
  region: process.env.MY_AWS_REGION
});
const DIR = process.env.MY_AWS_BUCKET_DIR || "gctu-dir";
async function upload(stream, filename, contentType) {
  return new Upload({
    client: s3,
    leavePartsOnError: false,
    params: {
      ACL: "public-read",
      Bucket: process.env.MY_AWS_BUCKET,
      Key: [DIR, filename].join("/"),
      ContentType: contentType,
      CacheControl: "max-age=31536000",
      Body: Readable.from(stream)
    }
  }).done();
}
const uploadHandler = unstable_composeUploadHandlers(
  async ({ name, contentType, data, filename }) => {
    if (name !== "file") {
      return;
    }
    const buffer = await asyncIterableToBuffer(data);
    const fn = mangle(filename || "unknown_");
    let thumbnailUrl;
    if (contentType.startsWith("image/")) {
      const thumbnailBuffer = Buffer.copyBytesFrom(buffer);
      const thumbnail = await sharp(thumbnailBuffer).resize(300).toBuffer();
      const thumbnailUpload = await upload(
        thumbnail,
        `thumbnails/${fn}`,
        contentType
      );
      thumbnailUrl = thumbnailUpload.Location;
    }
    const uploaded = await upload(buffer, fn, contentType);
    return JSON.stringify({
      url: uploaded.Location,
      contentType,
      filename,
      thumbnail: thumbnailUrl,
      size: buffer.length
    });
  }
);
const action$1 = async ({ request }) => {
  const userId = await checkAuth(request);
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const media = JSON.parse(formData.get("file"));
  if (!media) {
    return json({ error: "No media uploaded" }, { status: 400 });
  }
  return { ...media, userId };
};
function mangle(filename) {
  const rstr = randomStr(4);
  const timestamp = Date.now();
  const parts = filename.split(".");
  const ext = parts.pop();
  return `${parts.join(".")}-${timestamp}_${rstr}.${ext}`;
}
async function asyncIterableToBuffer(asyncIterable) {
  const chunks = [];
  for await (const chunk of asyncIterable) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}
const route49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1
}, Symbol.toStringTag, { value: "Module" }));
const action = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, { status: 405 });
  }
  const { content } = await request.json();
  const rendered = await render(content);
  return json({ rendered });
};
const route50 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BXkWr_7x.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/module-Do5bProg.js", "/assets/components-B61dXm5I.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BfUVrYdg.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/module-Do5bProg.js", "/assets/components-B61dXm5I.js", "/assets/clsx-B-dksMZM.js", "/assets/avatar-CnHNwoiQ.js", "/assets/username-Dv9jz7V0.js", "/assets/anchor-CpThXzRC.js"], "css": ["/assets/root-Bow9f8gZ.css"] }, "routes/downloads.timetable.$year.$programme.$level.$sem": { "id": "routes/downloads.timetable.$year.$programme.$level.$sem", "parentId": "root", "path": "downloads/timetable/:year/:programme/:level/:sem", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/downloads.timetable._year._programme._level._sem-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/timetable_.$year.$programme.$level.$sem.$day.add": { "id": "routes/timetable_.$year.$programme.$level.$sem.$day.add", "parentId": "routes/timetable_.$year.$programme.$level.$sem.$day", "path": "add", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/timetable_._year._programme._level._sem._day.add-DoPlCRLV.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/dayjs.min-DReL-Uwu.js", "/assets/index-B3TG-iMG.js", "/assets/clsx-B-dksMZM.js", "/assets/components-B61dXm5I.js", "/assets/index.esm-eIWaUr6p.js", "/assets/input-DaKQDKVv.js", "/assets/modal-Yn7LYWtH.js", "/assets/days-DkqQ87fy.js", "/assets/time-2AcYv75b.js", "/assets/large-select-mtqL2FVJ.js", "/assets/button-D3-ocrTF.js"], "css": [] }, "routes/timetable_.$year.$programme.$level.$sem.$day": { "id": "routes/timetable_.$year.$programme.$level.$sem.$day", "parentId": "root", "path": "timetable/:year/:programme/:level/:sem/:day", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/timetable_._year._programme._level._sem._day-BrMWxjFw.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/dayjs.min-DReL-Uwu.js", "/assets/clsx-B-dksMZM.js", "/assets/components-B61dXm5I.js", "/assets/index.esm-eIWaUr6p.js", "/assets/input-DaKQDKVv.js", "/assets/modal-Yn7LYWtH.js", "/assets/large-select-mtqL2FVJ.js", "/assets/select-D6U1yScx.js", "/assets/module-Do5bProg.js", "/assets/days-DkqQ87fy.js", "/assets/time-2AcYv75b.js", "/assets/button-D3-ocrTF.js", "/assets/timetable-filter-BRtNf1Ny.js", "/assets/anchor-CpThXzRC.js"], "css": [] }, "routes/communities_.$slug.members": { "id": "routes/communities_.$slug.members", "parentId": "routes/communities_.$slug", "path": "members", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/communities_._slug.members-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/p.$username.communities": { "id": "routes/p.$username.communities", "parentId": "routes/p.$username", "path": "communities", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/p._username.communities-Q3Uet4qQ.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/index-B3TG-iMG.js", "/assets/avatar-CnHNwoiQ.js", "/assets/ellipsize-CD66mNIP.js", "/assets/components-B61dXm5I.js"], "css": [] }, "routes/communities_.$slug.mod": { "id": "routes/communities_.$slug.mod", "parentId": "routes/communities_.$slug", "path": "mod", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/communities_._slug.mod-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/manifest[.]webmanifest": { "id": "routes/manifest[.]webmanifest", "parentId": "root", "path": "manifest.webmanifest", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/manifest_._webmanifest-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/communities_.created": { "id": "routes/communities_.created", "parentId": "root", "path": "communities/created", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/communities_.created-Cxpi1Vsd.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/clsx-B-dksMZM.js", "/assets/components-B61dXm5I.js", "/assets/anchor-CpThXzRC.js"], "css": [] }, "routes/downloads.events.$id": { "id": "routes/downloads.events.$id", "parentId": "root", "path": "downloads/events/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/downloads.events._id-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/discussions_.$id_.$": { "id": "routes/discussions_.$id_.$", "parentId": "root", "path": "discussions/:id/*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/discussions_._id_._-D0wvilyT.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/dayjs.min-DReL-Uwu.js", "/assets/index-B3TG-iMG.js", "/assets/components-B61dXm5I.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/modal-Yn7LYWtH.js", "/assets/post-time-BzanNHiO.js", "/assets/file-input-AkW8SXRP.js", "/assets/avatar-CnHNwoiQ.js", "/assets/index-CNXIhnF3.js", "/assets/tag-select-dLfp8U7r.js", "/assets/index.esm-eIWaUr6p.js", "/assets/textarea-D9GvzXla.js", "/assets/username-Dv9jz7V0.js", "/assets/post-item-C5ncU2kd.js", "/assets/post-content-CvrB0C3n.js"], "css": [] }, "routes/p.$username.catalog": { "id": "routes/p.$username.catalog", "parentId": "routes/p.$username", "path": "catalog", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/p._username.catalog-DjqUUFyU.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/components-B61dXm5I.js", "/assets/product-item-CiADGBNB.js"], "css": [] }, "routes/resend-verification": { "id": "routes/resend-verification", "parentId": "root", "path": "resend-verification", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/resend-verification-DPeSZk6M.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/knust-login-direction-Pq69LwRW.js", "/assets/components-B61dXm5I.js"], "css": [] }, "routes/communities_.$slug": { "id": "routes/communities_.$slug", "parentId": "root", "path": "communities/:slug", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/communities_._slug-B0IOtYhq.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/clsx-B-dksMZM.js", "/assets/components-B61dXm5I.js", "/assets/dayjs.min-DReL-Uwu.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/modal-Yn7LYWtH.js", "/assets/post-time-BzanNHiO.js", "/assets/file-input-AkW8SXRP.js", "/assets/avatar-CnHNwoiQ.js", "/assets/index-CNXIhnF3.js", "/assets/tag-select-dLfp8U7r.js", "/assets/index.esm-eIWaUr6p.js", "/assets/textarea-D9GvzXla.js", "/assets/username-Dv9jz7V0.js", "/assets/anchor-CpThXzRC.js", "/assets/post-item-C5ncU2kd.js"], "css": [] }, "routes/notifications_.$id": { "id": "routes/notifications_.$id", "parentId": "root", "path": "notifications/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/notifications_._id-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/market_.$id_.edit": { "id": "routes/market_.$id_.edit", "parentId": "root", "path": "market/:id/edit", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/market_._id_.edit-DUkLSacX.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/index-B3TG-iMG.js", "/assets/index.esm-eIWaUr6p.js", "/assets/file-input-AkW8SXRP.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/select-D6U1yScx.js", "/assets/textarea-D9GvzXla.js", "/assets/components-B61dXm5I.js", "/assets/product-form-gJiHdfNZ.js"], "css": [] }, "routes/communities_.new": { "id": "routes/communities_.new", "parentId": "root", "path": "communities/new", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/communities_.new-DUADRFP-.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/index-B3TG-iMG.js", "/assets/index.esm-eIWaUr6p.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/textarea-D9GvzXla.js", "/assets/username-regex-D55r8JyB.js", "/assets/components-B61dXm5I.js"], "css": [] }, "routes/discussions_.$id": { "id": "routes/discussions_.$id", "parentId": "root", "path": "discussions/:id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/discussions_._id-fjwt0sLt.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/dayjs.min-DReL-Uwu.js", "/assets/index-B3TG-iMG.js", "/assets/components-B61dXm5I.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/modal-Yn7LYWtH.js", "/assets/post-time-BzanNHiO.js", "/assets/file-input-AkW8SXRP.js", "/assets/avatar-CnHNwoiQ.js", "/assets/index-CNXIhnF3.js", "/assets/tag-select-dLfp8U7r.js", "/assets/index.esm-eIWaUr6p.js", "/assets/textarea-D9GvzXla.js", "/assets/username-Dv9jz7V0.js", "/assets/post-item-C5ncU2kd.js", "/assets/post-content-CvrB0C3n.js"], "css": [] }, "routes/account-created": { "id": "routes/account-created", "parentId": "root", "path": "account-created", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/account-created-RUXBj-h-.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/knust-login-direction-Pq69LwRW.js", "/assets/components-B61dXm5I.js"], "css": [] }, "routes/forgot-password": { "id": "routes/forgot-password", "parentId": "root", "path": "forgot-password", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/forgot-password-dzek_WEq.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/index-B3TG-iMG.js", "/assets/index.esm-eIWaUr6p.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/knust-login-direction-Pq69LwRW.js", "/assets/components-B61dXm5I.js"], "css": [] }, "routes/market_.profile": { "id": "routes/market_.profile", "parentId": "root", "path": "market/profile", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/market_.profile-DhoWfdWZ.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/index-B3TG-iMG.js", "/assets/index.esm-eIWaUr6p.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/components-B61dXm5I.js"], "css": [] }, "routes/create-account": { "id": "routes/create-account", "parentId": "root", "path": "create-account", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/create-account-BF_1ljxQ.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/index-B3TG-iMG.js", "/assets/index.esm-eIWaUr6p.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/username-regex-D55r8JyB.js", "/assets/components-B61dXm5I.js"], "css": [] }, "routes/reset-password": { "id": "routes/reset-password", "parentId": "root", "path": "reset-password", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/reset-password-DI1J-Jd7.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/index-B3TG-iMG.js", "/assets/index.esm-eIWaUr6p.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/components-B61dXm5I.js"], "css": [] }, "routes/notifications": { "id": "routes/notifications", "parentId": "root", "path": "notifications", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/notifications-Cz5cQa6r.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/dayjs.min-DReL-Uwu.js", "/assets/index-B3TG-iMG.js", "/assets/clsx-B-dksMZM.js", "/assets/index-CNXIhnF3.js", "/assets/post-time-BzanNHiO.js", "/assets/components-B61dXm5I.js"], "css": [] }, "routes/library_.$id": { "id": "routes/library_.$id", "parentId": "root", "path": "library/:id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/library_._id-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/verify-email": { "id": "routes/verify-email", "parentId": "root", "path": "verify-email", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/verify-email-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/communities": { "id": "routes/communities", "parentId": "root", "path": "communities", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/communities-bkBoRF_M.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/clsx-B-dksMZM.js", "/assets/components-B61dXm5I.js", "/assets/anchor-CpThXzRC.js", "/assets/avatar-CnHNwoiQ.js", "/assets/ellipsize-CD66mNIP.js"], "css": [] }, "routes/discussions": { "id": "routes/discussions", "parentId": "root", "path": "discussions", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/discussions-CqKSruZH.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/dayjs.min-DReL-Uwu.js", "/assets/clsx-B-dksMZM.js", "/assets/index-B3TG-iMG.js", "/assets/components-B61dXm5I.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/modal-Yn7LYWtH.js", "/assets/post-time-BzanNHiO.js", "/assets/file-input-AkW8SXRP.js", "/assets/avatar-CnHNwoiQ.js", "/assets/index-CNXIhnF3.js", "/assets/tag-select-dLfp8U7r.js", "/assets/index.esm-eIWaUr6p.js", "/assets/textarea-D9GvzXla.js", "/assets/username-Dv9jz7V0.js", "/assets/post-item-C5ncU2kd.js", "/assets/tags-filter-CPt830Xq.js"], "css": [] }, "routes/events_.$id": { "id": "routes/events_.$id", "parentId": "root", "path": "events/:id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/events_._id-DwuuZ3PA.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/clsx-B-dksMZM.js", "/assets/components-B61dXm5I.js", "/assets/dayjs.min-DReL-Uwu.js", "/assets/anchor-CpThXzRC.js", "/assets/button-D3-ocrTF.js", "/assets/post-time-BzanNHiO.js", "/assets/username-Dv9jz7V0.js", "/assets/time-2AcYv75b.js"], "css": [] }, "routes/events_.add": { "id": "routes/events_.add", "parentId": "root", "path": "events/add", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/events_.add-ByWknIBR.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/dayjs.min-DReL-Uwu.js", "/assets/index.esm-eIWaUr6p.js", "/assets/button-D3-ocrTF.js", "/assets/file-input-AkW8SXRP.js", "/assets/input-DaKQDKVv.js", "/assets/textarea-D9GvzXla.js", "/assets/time-2AcYv75b.js", "/assets/index-B3TG-iMG.js"], "css": [] }, "routes/instructors": { "id": "routes/instructors", "parentId": "root", "path": "instructors", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/instructors-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/lessons.$id": { "id": "routes/lessons.$id", "parentId": "root", "path": "lessons/:id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/lessons._id-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/market_.$id": { "id": "routes/market_.$id", "parentId": "root", "path": "market/:id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/market_._id-DRfXmqfT.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/clsx-B-dksMZM.js", "/assets/components-B61dXm5I.js", "/assets/anchor-CpThXzRC.js", "/assets/button-D3-ocrTF.js", "/assets/username-Dv9jz7V0.js"], "css": [] }, "routes/market_.add": { "id": "routes/market_.add", "parentId": "root", "path": "market/add", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/market_.add-D02QXVqd.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/index-B3TG-iMG.js", "/assets/index.esm-eIWaUr6p.js", "/assets/file-input-AkW8SXRP.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/select-D6U1yScx.js", "/assets/textarea-D9GvzXla.js", "/assets/components-B61dXm5I.js", "/assets/product-form-gJiHdfNZ.js"], "css": [] }, "routes/p.$username": { "id": "routes/p.$username", "parentId": "root", "path": "p/:username", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/p._username-jtqi6zAi.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/index-B3TG-iMG.js", "/assets/dayjs.min-DReL-Uwu.js", "/assets/components-B61dXm5I.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/modal-Yn7LYWtH.js", "/assets/post-time-BzanNHiO.js", "/assets/file-input-AkW8SXRP.js", "/assets/avatar-CnHNwoiQ.js", "/assets/index-CNXIhnF3.js", "/assets/tag-select-dLfp8U7r.js", "/assets/index.esm-eIWaUr6p.js", "/assets/textarea-D9GvzXla.js", "/assets/username-Dv9jz7V0.js", "/assets/post-item-C5ncU2kd.js"], "css": [] }, "routes/parlon.call": { "id": "routes/parlon.call", "parentId": "routes/parlon", "path": "call", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/parlon.call-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/programmes": { "id": "routes/programmes", "parentId": "root", "path": "programmes", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/programmes-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/vote.$post": { "id": "routes/vote.$post", "parentId": "root", "path": "vote/:post", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/vote._post-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/timetable": { "id": "routes/timetable", "parentId": "root", "path": "timetable", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/timetable-CnwpWtN5.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/clsx-B-dksMZM.js", "/assets/components-B61dXm5I.js", "/assets/index.esm-eIWaUr6p.js", "/assets/input-DaKQDKVv.js", "/assets/modal-Yn7LYWtH.js", "/assets/large-select-mtqL2FVJ.js", "/assets/select-D6U1yScx.js", "/assets/timetable-filter-BRtNf1Ny.js"], "css": [] }, "routes/comments": { "id": "routes/comments", "parentId": "root", "path": "comments", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/comments-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/courses": { "id": "routes/courses", "parentId": "root", "path": "courses", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/courses-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/library": { "id": "routes/library", "parentId": "root", "path": "library", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/library-C6HLtEY7.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/index-B3TG-iMG.js", "/assets/components-B61dXm5I.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/modal-Yn7LYWtH.js", "/assets/dayjs.min-DReL-Uwu.js", "/assets/tag-select-dLfp8U7r.js", "/assets/index.esm-eIWaUr6p.js", "/assets/file-input-AkW8SXRP.js", "/assets/post-time-BzanNHiO.js", "/assets/tags-filter-CPt830Xq.js", "/assets/username-Dv9jz7V0.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/events": { "id": "routes/events", "parentId": "root", "path": "events", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/events-BaG5qMgF.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/clsx-B-dksMZM.js", "/assets/components-B61dXm5I.js", "/assets/dayjs.min-DReL-Uwu.js", "/assets/anchor-CpThXzRC.js", "/assets/post-time-BzanNHiO.js", "/assets/username-Dv9jz7V0.js", "/assets/time-2AcYv75b.js"], "css": [] }, "routes/market": { "id": "routes/market", "parentId": "root", "path": "market", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/market-CbiXPtiY.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/clsx-B-dksMZM.js", "/assets/components-B61dXm5I.js", "/assets/anchor-CpThXzRC.js", "/assets/input-DaKQDKVv.js", "/assets/product-item-CiADGBNB.js", "/assets/select-D6U1yScx.js"], "css": [] }, "routes/parlon": { "id": "routes/parlon", "parentId": "root", "path": "parlon", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/parlon-CI9ejquP.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/index-B3TG-iMG.js", "/assets/clsx-B-dksMZM.js", "/assets/components-B61dXm5I.js", "/assets/anchor-CpThXzRC.js", "/assets/button-D3-ocrTF.js"], "css": [] }, "routes/people": { "id": "routes/people", "parentId": "root", "path": "people", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/people-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/games": { "id": "routes/games", "parentId": "root", "path": "games", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/games-B4GlQUuE.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js"], "css": [] }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-D9mgBBLs.js", "imports": ["/assets/jsx-runtime-CAOzMBF_.js", "/assets/clsx-B-dksMZM.js", "/assets/index-B3TG-iMG.js", "/assets/index.esm-eIWaUr6p.js", "/assets/button-D3-ocrTF.js", "/assets/input-DaKQDKVv.js", "/assets/components-B61dXm5I.js"], "css": [] }, "routes/media": { "id": "routes/media", "parentId": "root", "path": "media", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/media-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/md": { "id": "routes/md", "parentId": "root", "path": "md", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/md-l0sNRNKZ.js", "imports": [], "css": [] } }, "url": "/assets/manifest-29ba8992.js", "version": "29ba8992" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false, "unstable_fogOfWar": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/downloads.timetable.$year.$programme.$level.$sem": {
    id: "routes/downloads.timetable.$year.$programme.$level.$sem",
    parentId: "root",
    path: "downloads/timetable/:year/:programme/:level/:sem",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/timetable_.$year.$programme.$level.$sem.$day.add": {
    id: "routes/timetable_.$year.$programme.$level.$sem.$day.add",
    parentId: "routes/timetable_.$year.$programme.$level.$sem.$day",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/timetable_.$year.$programme.$level.$sem.$day": {
    id: "routes/timetable_.$year.$programme.$level.$sem.$day",
    parentId: "root",
    path: "timetable/:year/:programme/:level/:sem/:day",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/communities_.$slug.members": {
    id: "routes/communities_.$slug.members",
    parentId: "routes/communities_.$slug",
    path: "members",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/p.$username.communities": {
    id: "routes/p.$username.communities",
    parentId: "routes/p.$username",
    path: "communities",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/communities_.$slug.mod": {
    id: "routes/communities_.$slug.mod",
    parentId: "routes/communities_.$slug",
    path: "mod",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/manifest[.]webmanifest": {
    id: "routes/manifest[.]webmanifest",
    parentId: "root",
    path: "manifest.webmanifest",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/communities_.created": {
    id: "routes/communities_.created",
    parentId: "root",
    path: "communities/created",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/downloads.events.$id": {
    id: "routes/downloads.events.$id",
    parentId: "root",
    path: "downloads/events/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/discussions_.$id_.$": {
    id: "routes/discussions_.$id_.$",
    parentId: "root",
    path: "discussions/:id/*",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/p.$username.catalog": {
    id: "routes/p.$username.catalog",
    parentId: "routes/p.$username",
    path: "catalog",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/resend-verification": {
    id: "routes/resend-verification",
    parentId: "root",
    path: "resend-verification",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/communities_.$slug": {
    id: "routes/communities_.$slug",
    parentId: "root",
    path: "communities/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/notifications_.$id": {
    id: "routes/notifications_.$id",
    parentId: "root",
    path: "notifications/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/market_.$id_.edit": {
    id: "routes/market_.$id_.edit",
    parentId: "root",
    path: "market/:id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "routes/communities_.new": {
    id: "routes/communities_.new",
    parentId: "root",
    path: "communities/new",
    index: void 0,
    caseSensitive: void 0,
    module: route16
  },
  "routes/discussions_.$id": {
    id: "routes/discussions_.$id",
    parentId: "root",
    path: "discussions/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route17
  },
  "routes/account-created": {
    id: "routes/account-created",
    parentId: "root",
    path: "account-created",
    index: void 0,
    caseSensitive: void 0,
    module: route18
  },
  "routes/forgot-password": {
    id: "routes/forgot-password",
    parentId: "root",
    path: "forgot-password",
    index: void 0,
    caseSensitive: void 0,
    module: route19
  },
  "routes/market_.profile": {
    id: "routes/market_.profile",
    parentId: "root",
    path: "market/profile",
    index: void 0,
    caseSensitive: void 0,
    module: route20
  },
  "routes/create-account": {
    id: "routes/create-account",
    parentId: "root",
    path: "create-account",
    index: void 0,
    caseSensitive: void 0,
    module: route21
  },
  "routes/reset-password": {
    id: "routes/reset-password",
    parentId: "root",
    path: "reset-password",
    index: void 0,
    caseSensitive: void 0,
    module: route22
  },
  "routes/notifications": {
    id: "routes/notifications",
    parentId: "root",
    path: "notifications",
    index: void 0,
    caseSensitive: void 0,
    module: route23
  },
  "routes/library_.$id": {
    id: "routes/library_.$id",
    parentId: "root",
    path: "library/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route24
  },
  "routes/verify-email": {
    id: "routes/verify-email",
    parentId: "root",
    path: "verify-email",
    index: void 0,
    caseSensitive: void 0,
    module: route25
  },
  "routes/communities": {
    id: "routes/communities",
    parentId: "root",
    path: "communities",
    index: void 0,
    caseSensitive: void 0,
    module: route26
  },
  "routes/discussions": {
    id: "routes/discussions",
    parentId: "root",
    path: "discussions",
    index: void 0,
    caseSensitive: void 0,
    module: route27
  },
  "routes/events_.$id": {
    id: "routes/events_.$id",
    parentId: "root",
    path: "events/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route28
  },
  "routes/events_.add": {
    id: "routes/events_.add",
    parentId: "root",
    path: "events/add",
    index: void 0,
    caseSensitive: void 0,
    module: route29
  },
  "routes/instructors": {
    id: "routes/instructors",
    parentId: "root",
    path: "instructors",
    index: void 0,
    caseSensitive: void 0,
    module: route30
  },
  "routes/lessons.$id": {
    id: "routes/lessons.$id",
    parentId: "root",
    path: "lessons/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route31
  },
  "routes/market_.$id": {
    id: "routes/market_.$id",
    parentId: "root",
    path: "market/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route32
  },
  "routes/market_.add": {
    id: "routes/market_.add",
    parentId: "root",
    path: "market/add",
    index: void 0,
    caseSensitive: void 0,
    module: route33
  },
  "routes/p.$username": {
    id: "routes/p.$username",
    parentId: "root",
    path: "p/:username",
    index: void 0,
    caseSensitive: void 0,
    module: route34
  },
  "routes/parlon.call": {
    id: "routes/parlon.call",
    parentId: "routes/parlon",
    path: "call",
    index: void 0,
    caseSensitive: void 0,
    module: route35
  },
  "routes/programmes": {
    id: "routes/programmes",
    parentId: "root",
    path: "programmes",
    index: void 0,
    caseSensitive: void 0,
    module: route36
  },
  "routes/vote.$post": {
    id: "routes/vote.$post",
    parentId: "root",
    path: "vote/:post",
    index: void 0,
    caseSensitive: void 0,
    module: route37
  },
  "routes/timetable": {
    id: "routes/timetable",
    parentId: "root",
    path: "timetable",
    index: void 0,
    caseSensitive: void 0,
    module: route38
  },
  "routes/comments": {
    id: "routes/comments",
    parentId: "root",
    path: "comments",
    index: void 0,
    caseSensitive: void 0,
    module: route39
  },
  "routes/courses": {
    id: "routes/courses",
    parentId: "root",
    path: "courses",
    index: void 0,
    caseSensitive: void 0,
    module: route40
  },
  "routes/library": {
    id: "routes/library",
    parentId: "root",
    path: "library",
    index: void 0,
    caseSensitive: void 0,
    module: route41
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route42
  },
  "routes/events": {
    id: "routes/events",
    parentId: "root",
    path: "events",
    index: void 0,
    caseSensitive: void 0,
    module: route43
  },
  "routes/market": {
    id: "routes/market",
    parentId: "root",
    path: "market",
    index: void 0,
    caseSensitive: void 0,
    module: route44
  },
  "routes/parlon": {
    id: "routes/parlon",
    parentId: "root",
    path: "parlon",
    index: void 0,
    caseSensitive: void 0,
    module: route45
  },
  "routes/people": {
    id: "routes/people",
    parentId: "root",
    path: "people",
    index: void 0,
    caseSensitive: void 0,
    module: route46
  },
  "routes/games": {
    id: "routes/games",
    parentId: "root",
    path: "games",
    index: void 0,
    caseSensitive: void 0,
    module: route47
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: route48
  },
  "routes/media": {
    id: "routes/media",
    parentId: "root",
    path: "media",
    index: void 0,
    caseSensitive: void 0,
    module: route49
  },
  "routes/md": {
    id: "routes/md",
    parentId: "root",
    path: "md",
    index: void 0,
    caseSensitive: void 0,
    module: route50
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
