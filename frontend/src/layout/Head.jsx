import Head from 'next/head'

const MainLayout = ({ children, page }) => {
  return (
    <>
        <Head>
            <title>{page}</title>
            <meta name="description" content="The best ToDo of the world" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {children}
    </>
  )
}

export default MainLayout