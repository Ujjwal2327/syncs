export function resolveUrl(url, defaultUrl) {
  const trimmedUrl = url.trim();
  try {
    new URL(trimmedUrl);
    return trimmedUrl;
  } catch {
    return defaultUrl;
  }
}

export function extractFirstLetters(str) {
  return str
    .split(" ")
    .map((word) => word[0]?.toUpperCase())
    .join("");
}