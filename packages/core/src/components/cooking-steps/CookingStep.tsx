import React from 'react';
import {AppView} from 'components/layout/AppView';
import {CenteredRow, Row} from 'components/layout/Row';
import styled from '@emotion/native';
import {Dot} from 'components/dot/Dot';
import {useAppTheme} from 'theme/hooks';
import {AppText} from 'components/app-text/AppText';
import {ColMedium, RowMedium} from 'components/layout/Spacer';

export interface CookingStepProps {
  label: string;
  descriptions: string[];
  isFirst?: boolean;
  isLast?: boolean;
}

export const CookingStep: React.FC<CookingStepProps> = ({
  label,
  descriptions,
  isFirst,
  isLast,
}) => {
  const {tertiary} = useAppTheme();
  return (
    <AppView>
      <CenteredRow>
        <TimelineContainer>
          {!isFirst && <Timeline />}
          <TimelineDot size={12} color={tertiary.color} />
          {!isLast && <Timeline />}
        </TimelineContainer>
        <RowMedium />
        <AppText variant="h3" style={{marginTop: -5}}>
          {label}
        </AppText>
      </CenteredRow>
      <Row>
        <TimelineContainer>{!isLast && <Timeline />}</TimelineContainer>
        <RowMedium />
        {descriptions.map(description => (
          <>
            <AppText>{description}</AppText>
            <ColMedium />
          </>
        ))}
      </Row>
      {!isLast && (
        <Row>
          <TimelineContainer>
            <Timeline />
          </TimelineContainer>
          <ColMedium />
        </Row>
      )}
    </AppView>
  );
};

const Timeline = styled(AppView)`
  width: 2px;
  flex-grow: 1;
  border-width: 1px;
  border-color: ${({theme}) => theme.tertiary.color};
  background-color: ${({theme}) => theme.tertiary.color};
`;

const TimelineDot = styled(Dot)``;

const TimelineContainer = styled(AppView)`
  flex-basis: 12px;
  align-items: center;
`;
