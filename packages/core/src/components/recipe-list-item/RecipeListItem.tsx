import React, {useEffect, useRef} from 'react';
import {Icon} from 'icons/Icon';
import {useDefaultState} from 'utils/hooks';
import {Button} from 'components/button/Button';
import {AppView} from 'components/layout/AppView';
import {CenteredRow} from 'components/layout/Row';
import {AppText} from 'components/app-text/AppText';
import {AppImage} from 'components/app-image/AppImage';
import {AppAnimation} from 'components/app-image/AppImage.types';

export type Item = {
  id: string;
  url: string;
};

export type RecipeListItemProps = {
  item: Item;
  onAdd: (item: Item) => void;
  onPress?: () => void;
  isSelected?: boolean;
};

const RecipeListItemBase: React.FC<RecipeListItemProps> = ({
  item,
  onAdd,
  isSelected = false,
}) => {
  const imageRef = useRef<AppAnimation>(null);
  const selected = useDefaultState(isSelected, false);

  const handleClick = () => {
    imageRef.current?.scale(selected ? 1 : 0);
    onAdd(item);
  };

  useEffect(() => {
    imageRef.current?.scale(selected ? 0 : 1);
  }, [selected]);

  return (
    <AppView>
      <AppView className="shadow bg-white rounded-2">
        <AppImage ref={imageRef} url={item.url} />
        <AppView className="p-2">
          <CenteredRow className="justify-between">
            <Icon name="burgerMenu" />
            <AppView>
              <AppText variant="p2">Crazy house party</AppText>
              <AppText variant="p2">12 July 2021 - 09:00 pm</AppText>
            </AppView>
            <Button onPress={handleClick}>{selected ? 'REMOVE' : 'ADD'}</Button>
          </CenteredRow>
        </AppView>
      </AppView>
    </AppView>
  );
};

export const RecipeListItem = React.memo(RecipeListItemBase);
