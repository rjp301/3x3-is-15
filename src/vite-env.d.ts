/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_EMAILJS_KEY: string;
  readonly VITE_SERVICE_ID: string;
  readonly VITE_TEMPLATE_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
