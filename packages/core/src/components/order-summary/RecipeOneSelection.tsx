import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import styled from '@emotion/native'
import { FlexRow } from 'components/layout/FlexRow'
import { useRecipeOne } from 'store/selectors/recipeSelectors'

export const RecipeOneSelection = () => {
  const scale = useRef(new Animated.Value(0)).current
  const recipe = useRecipeOne()

  useEffect(() => {
    Animated.timing(scale, {
      toValue: recipe ? 1 : 0,
      useNativeDriver: true,
    }).start()
  }, [recipe, scale])

  return (
    <OrderItem>
      <SelectionImageView
        source={{
          uri: 'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
        }}
        style={{
          width: '100%',
          height: 40,
          transform: [{ scale }],
        }}
      />
    </OrderItem>
  )
}

const OrderItem = styled(FlexRow)`
  width: 25%;
  flex-grow: 1;
  justify-content: center;
`

const SelectionImageView = styled(Animated.Image)``
