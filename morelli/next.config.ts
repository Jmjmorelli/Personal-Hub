import type { NextConfig } from "next";
import { execSync } from "child_process";
import { resolve } from "path";

let lastUpdated = "";
try {
  lastUpdated = execSync("git log -1 --format=%cd --date=iso", {
    cwd: resolve(import.meta.dirname, ".."),
  }).toString().trim();
} catch {
  lastUpdated = new Date().toISOString();
}

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_LAST_UPDATED: lastUpdated,
  },
};

export default nextConfig;
