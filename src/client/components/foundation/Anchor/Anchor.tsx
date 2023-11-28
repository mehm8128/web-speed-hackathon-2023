import type { ComponentProps, FC } from 'react';

import * as styles from './Anchor.styles';
import { Link } from 'react-router-dom';

type Props = Omit<ComponentProps<typeof Link>, 'className'>;

export const Anchor: FC<Props> = ({ children, to, ...rest }) => (
  <Link className={styles.container()} to={to} {...rest}>
    {children}
  </Link>
);
