import CodeBlock from "@/components/codeBlock";
import { Layout } from "@/components/layout";
import { useFetchMarkdown } from "@/hooks/useFetchMarkdown";
import ReactMarkdown from "react-markdown";

export default function Device() {
  const markdown = useFetchMarkdown("/md/01/device.md");
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
