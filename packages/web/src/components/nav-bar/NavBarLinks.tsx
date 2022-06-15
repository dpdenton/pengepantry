import React from 'react';
import {Row} from '@pengepantry/core/lib/components/layout/Row';
import {RowMedium} from '@pengepantry/core/lib/components/layout/Spacer';

export const NavBarLinks: React.FC = () => {
  return (
    <Row>
      <a href="/">Link 1</a>
      <RowMedium />
      <a href="/">Link 2</a>
      <RowMedium />
      <a href="/">Link 3</a>
    </Row>
  );
};
