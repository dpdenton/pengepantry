import {NavBarLinks} from 'components/nav-bar/NavBarLinks';
import {Avatar} from '@pengepantry/core/lib/components/avatar/Avatar';
import {AppText} from '@pengepantry/core/lib/components/app-text/AppText';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';
import {RowMedium} from '@pengepantry/core/lib/components/layout/Spacer';
import {CenteredRow} from '@pengepantry/core/lib/components/layout/Row';

export const NavBar = () => {
  return (
    <nav className="flex">
      <CenteredRow>
        <Avatar initials="PP" />
        <RowMedium />
        <AppView>
          <AppView>
            <AppText variant="h3">Penge</AppText>
          </AppView>
          <AppView>
            <AppText variant="h3">Pantry</AppText>
          </AppView>
        </AppView>
      </CenteredRow>
      <div className="ml-auto">
        <NavBarLinks />
      </div>
    </nav>
  );
};
