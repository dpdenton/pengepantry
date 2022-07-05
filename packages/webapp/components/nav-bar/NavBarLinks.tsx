import React from 'react';
import {Row} from '@pengepantry/core/lib/components/layout/Row';
import {RowSpacer} from '@pengepantry/core/lib/components/layout/Spacer';
import Link from 'next/link';

export const NavBarLinks: React.FC = () => {
  return (
    <Row>
      <Link href="/">Home</Link>
      <RowSpacer />
      <Link href="/recipes">Recipes</Link>
    </Row>
  );
};