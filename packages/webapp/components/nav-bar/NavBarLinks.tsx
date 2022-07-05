import React from 'react';
import Link from 'next/link';
import {CenteredRow} from '@pengepantry/core/lib/components/layout/Row';
import {RowSpacer} from '@pengepantry/core/lib/components/layout/Spacer';

export const NavBarLinks: React.FC = () => {
  return (
    <CenteredRow className="ml-auto">
      <Link href={'/'}>Home</Link>
      <RowSpacer />
      <Link href={'/recipes'}>Recipes</Link>
    </CenteredRow>
  );
};
