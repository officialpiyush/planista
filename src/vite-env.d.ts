/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />

interface ImportMetaEnv {
  VITE_REALM_APP_ID: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
