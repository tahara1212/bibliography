import { ArticleLayout } from "@/components/layouts/articleLayout";
import { Layout } from "@/components/layouts/layout";
import ReactMarkdown from 'react-markdown';
import { md } from '@/md/device';

export default function Device() {
  return (
    <Layout>
      <ArticleLayout>
        <ReactMarkdown>{md}</ReactMarkdown>
      </ArticleLayout>
    </Layout>
  )
}
