import path from 'path'
import fs from "fs";
import Head from 'next/head'

import ContentScreen from '../screens/Content'

function content(data) {
  
  return (
    <>
      <Head>
        <title>charlesavoaja | Front end developer, writer and mentor | blog</title>
        <meta name="description" content="charlesavoaja | Front end developer, writer and mentor | blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentScreen data={data} />
    </>
  )
}

export async function getStaticProps() {
  const HNFilePath = path.join(process.cwd(), "data", "hashnode_content.json");
  const HNContent = fs.readFileSync(HNFilePath, "utf8");
  const hashNodeContent = JSON.parse(HNContent);

  return {
    props: {
      hashNodeContent
    }
  }
}

export default content
