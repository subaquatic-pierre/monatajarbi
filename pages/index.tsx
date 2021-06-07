/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import IndexView from 'views/IndexView';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';

const IndexPage = (): JSX.Element => {
  return <WithLayout component={IndexView} layout={Minimal} />;
};

export default IndexPage;
