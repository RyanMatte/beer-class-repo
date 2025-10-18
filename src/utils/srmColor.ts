// Returns hex color for SRM value (simplified)
export function getSRMColor(srm: number): string {
  // Example mapping, you can refine this
if (srm < 2) return "#FFFACD"; // Pale yellow
if (srm < 4) return "#F8F753"; // Light yellow
if (srm < 6) return "#F6A600"; // Gold
if (srm < 8) return "#E4A700"; // Deep gold
if (srm < 10) return "#D17A00"; // Amber
if (srm < 13) return "#BF5B00"; // Deep amber
if (srm < 17) return "#A66200"; // Copper
if (srm < 20) return "#8D4C00"; // Brownish copper
if (srm < 24) return "#5A2D0C"; // Brown
if (srm < 30) return "#3B1A08"; // Dark brown
if (srm < 40) return "#2D1B00"; // Very dark brown
if (srm < 50) return "#1A0D00"; // Near black
if (srm < 60) return "#0D0700"; // Black
if (srm == 998) return "#d05000"; // Special case
if (srm == 999) return "#310615"; // Special case
  return "#2D1B00";
}

// Returns 'black' or 'white' for best contrast
export function getContrastingTextColor(hex: string): string {
  // Remove hash if present
  hex = hex.replace("#", "");
  // Convert to RGB
  const r = parseInt(hex.substring(0,2), 16);
  const g = parseInt(hex.substring(2,4), 16);
  const b = parseInt(hex.substring(4,6), 16);
  // Calculate luminance
  const luminance = (0.299*r + 0.587*g + 0.114*b)/255;
  return luminance > 0.5 ? "black" : "white";
}