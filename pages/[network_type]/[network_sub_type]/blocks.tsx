import type { NextPage } from 'next';
import React from 'react';

import type { PageParams } from 'lib/next/tx/types';

import BlocksNextPage from 'lib/next/blocks/BlocksNextPage';

type Props = {
  pageParams: PageParams;
}

const BlockPage: NextPage<Props> = () => {
  return (
    <BlocksNextPage/>
  );
};

export default BlockPage;

export { getStaticPaths } from 'lib/next/getStaticPaths';
export { getStaticProps } from 'lib/next/getStaticProps';