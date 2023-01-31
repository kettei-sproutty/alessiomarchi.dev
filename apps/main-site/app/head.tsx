import React, { Fragment, type FC } from 'react'

const Head: FC = () => {
  return (
    <Fragment>
      <title>Next.js App Directory Playground</title>
      <meta
        name="description"
        content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
      />
    </Fragment>
  );
}

export default Head