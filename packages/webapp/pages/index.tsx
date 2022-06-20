import type {NextPage} from 'next';
import Image from 'next/image';
import {importNoSSR} from './api/util';
import {AppSection} from '../components/app-section/AppSection';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';

const Button = importNoSSR(() =>
  import('@pengepantry/core/lib/components/button/Button').then(
    mod => mod.Button,
  ),
);

const AppText = importNoSSR(() =>
  import('@pengepantry/core/lib/components/app-text/AppText').then(
    mod => mod.AppText,
  ),
);

const Home: NextPage = () => {
  return (
    <div>
      <AppSection>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <AppView />
            <div>
              <AppText variant="hero">
                All The Best Curated Delicious Food and Drink
              </AppText>
            </div>
            <div>
              <AppText variant="p1">
                Are you looking for amazing recipe library? Don’t worry! We got
                it for you!
              </AppText>
            </div>
            <Button label="GET STARTED" />
          </div>
          <Image src="/images/hero-recipe.png" width={200} height={200} />
        </div>
      </AppSection>
    </div>
  );
};

export default Home;
