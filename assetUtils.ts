
/**
 * Utility function to get the correct path for assets based on the current environment
 * This handles the GitHub Pages base path when deployed
 */
export const getAssetPath = (path: string): string => {
  // Strip leading slash if present
  const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Get base URL from import.meta.env.BASE_URL (set in vite.config.ts)
  const basePath = import.meta.env.BASE_URL || '/';
  
  // Combine paths ensuring no double slashes
  return `${basePath}${normalizedPath}`;
};
