import { useEffect } from "react";

export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} — IPC Zion Hall`
      : "IPC Zion Hall — Lingarajapuram";
  }, [title]);
}
