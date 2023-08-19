import { Layout } from "@/components/layout";
import ReactMarkdown from "react-markdown";
import { useFetchMarkdown } from "@/hooks/useFetchMarkdown";
import CodeBlock from "@/components/codeBlock";

export default function WhatTo() {
  const markdown = useFetchMarkdown("/md/01/whatTo.md");
  return (
    <Layout>
      <ReactMarkdown
        className="content"
        components={{
          code: CodeBlock,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Layout>
  );
}
