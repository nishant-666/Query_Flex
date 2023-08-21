import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string().url(),

    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
      (str) => process.env.VERCEL_URL ?? str,

      process.env.VERCEL ? z.string().min(1) : z.string().url()
    ),
    NEXT_PUBLIC_apiKey: z.string(),
    NEXT_PUBLIC_authDomain: z.string(),
    NEXT_PUBLIC_projectId: z.string(),
    NEXT_PUBLIC_storageBucket: z.string(),
    NEXT_PUBLIC_messagingSenderId: z.string(),
    NEXT_PUBLIC_appId: z.string(),
    NEXT_PUBLIC_OPENAI_API_KEY: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
    NEXT_PUBLIC_apiKey: z.string(),
    NEXT_PUBLIC_authDomain: z.string(),
    NEXT_PUBLIC_projectId: z.string(),
    NEXT_PUBLIC_storageBucket: z.string(),
    NEXT_PUBLIC_messagingSenderId: z.string(),
    NEXT_PUBLIC_appId: z.string(),
    NEXT_PUBLIC_OPENAI_API_KEY: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_PUBLIC_apiKey: process.env.NEXT_PUBLIC_apiKey,
    NEXT_PUBLIC_authDomain: process.env.NEXT_PUBLIC_authDomain,
    NEXT_PUBLIC_projectId: process.env.NEXT_PUBLIC_projectId,
    NEXT_PUBLIC_storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    NEXT_PUBLIC_messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    NEXT_PUBLIC_appId: process.env.NEXT_PUBLIC_appId,
    NEXT_PUBLIC_OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    // DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    // DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
