/**
 * QuickStay – centralised colour palette
 * These values mirror the CSS custom properties defined in index.css
 * and the Tailwind theme extension.
 *
 * Usage:  import { colors } from '../config/colors'
 */

export const colors = {
  /** Brand */
  primary: "#2563EB", // blue-600  – buttons, links, accents
  secondary: "#FBBF24", // amber-400 – highlights, stars, badges
  accent: "#F97316", // orange-500 – experience/about highlights

  /** Light mode */
  light: {
    bg: "#ffffff",
    bgMuted: "#f8fafc", // slate-50
    bgCard: "#ffffff",
    border: "#e2e8f0", // slate-200
    text: "#1e293b", // slate-800
    textMuted: "#64748b", // slate-500
    navBg: "rgba(255,255,255,0.80)",
    navText: "#374151", // gray-700
  },

  /** Dark mode */
  dark: {
    bg: "#0f172a", // slate-900
    bgMuted: "#1e293b", // slate-800
    bgCard: "#1e293b", // slate-800
    border: "#334155", // slate-700
    text: "#f1f5f9", // slate-100
    textMuted: "#94a3b8", // slate-400
    navBg: "rgba(15,23,42,0.85)",
    navText: "#e2e8f0", // slate-200
  },
};
