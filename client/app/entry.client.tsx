/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import AudioRecorder from "audio-recorder-polyfill"
import mpegEncoder from "audio-recorder-polyfill/mpeg-encoder"
import posthog from "posthog-js"

AudioRecorder.encoder=mpegEncoder;
AudioRecorder.prototype.mimeType="audio/mpeg";
window.MediaRecorder=AudioRecorder;


if(import.meta.env.NODE_ENV==="production"){
  posthog.init("",{
    api_host:"https://eu.posthog.com",
  })
}


startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
