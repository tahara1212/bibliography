import { ArticleLayout } from "@/components/layouts/articleLayout";
import { Layout } from "@/components/layouts/layout";
import ReactMarkdown from 'react-markdown';
import { md } from '@/md/readable';

export default function Readable() {
  return (
    <Layout>
      <ArticleLayout>
        <ReactMarkdown>{md}</ReactMarkdown>
      </ArticleLayout>
    </Layout>
  )
}
