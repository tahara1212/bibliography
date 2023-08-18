import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export const ArticleLayout = ({children}: Props) => {
  return (
    <article className="content mt-20">
      {children}
    </article>
  );
};
