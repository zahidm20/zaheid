import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Zaheid&apos;s Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Zahid Maulana, Fullstack Devoloper and Mobile Developer"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Zaheid. A Frontend Developer and Mobile Developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="zaheid"
      />

      <link
        rel="icon"
        href="/papikon.ico"
      />
    </Head>
  );
}
