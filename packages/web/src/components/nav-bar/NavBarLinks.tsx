import React from 'react';
import {Row} from '@pengepantry/core/lib/components/layout/Row';
import {RowMedium} from '@pengepantry/core/lib/components/layout/Spacer';
import {Link} from 'react-router-dom';

export const NavBarLinks: React.FC = () => {
  return (
    <Row>
      <Link to="/">Home</Link>
      <RowMedium />
      <Link to="/menu">Menu</Link>
    </Row>
  );
};
