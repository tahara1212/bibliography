import { useEffect, useState } from "react";

export const useFetchMarkdown = (path: string) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((md) => {
        setMarkdown(md);
      });
  }, [path]);

  return markdown;
};
