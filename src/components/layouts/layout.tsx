import Head from "next/head";
import { Navigation } from "@/components/elements/navigation";
import { Header } from "@/components/elements/header";
import { HEADER_HEIGHT, MAX_WIDTH, TITLE } from "@/const/util";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export const Layout = ({children}: Props) => {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={TITLE} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={`mx-auto max-w-[1440px]`}>
        <div className="flex">
          <main className={`w-[calc(70%-100px)] my-10 mr-24 bg-white`}>
            {children}
          </main>
          <Navigation />
        </div>
      </div>
    </>
  );
}
