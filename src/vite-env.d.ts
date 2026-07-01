/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ARK_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
