import { ReactNodeLike } from 'prop-types';
import React from 'react';

import styles from './markdown-components.module.scss';

interface Props {
  children: ReactNodeLike;
}

const Blockquote = ({ children }: Props) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};

export default Blockquote;
