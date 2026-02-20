export function resolveAssetUrl(path: string): string {
  if (!path) return '';
  
  // If it's already a full URL, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // For local assets, prepend the base URL
  return path.startsWith('/') ? path : `/${path}`;
}
