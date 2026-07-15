import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Valid title</title>
        {/* Invalid: <html> is not allowed inside <head> */}
        <html lang="en" />
        <meta name="description" content="after invalid tag" />
      </Head>
      <h1 id="page">Head invalid tag</h1>
    </div>
  )
}
