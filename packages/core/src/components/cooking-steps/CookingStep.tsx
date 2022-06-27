import React, {PropsWithChildren} from 'react';
import {Dot} from 'components/dot/Dot';
import {AppView} from 'components/layout/AppView';
import {AppText} from 'components/app-text/AppText';
import {CenteredRow, Row} from 'components/layout/Row';
import {ColSpacer, RowSpacer} from 'components/layout/Spacer';

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
  return (
    <AppView>
      <CenteredRow>
        <TimelineContainer>
          {!isFirst && <Timeline />}
          <Dot size={12} color={'red'} />
          {!isLast && <Timeline />}
        </TimelineContainer>
        <RowSpacer />
        <AppText variant="h3">{label}</AppText>
      </CenteredRow>
      <Row>
        <TimelineContainer>{!isLast && <Timeline />}</TimelineContainer>
        <RowSpacer />
        {descriptions.map(description => (
          <>
            <AppText>{description}</AppText>
            <ColSpacer />
          </>
        ))}
      </Row>
      {!isLast && (
        <Row>
          <TimelineContainer>
            <Timeline />
          </TimelineContainer>
          <ColSpacer />
        </Row>
      )}
    </AppView>
  );
};

const Timeline = () => {
  return <AppView className="w-px-2 bg-primary" />;
};

const TimelineContainer: React.FC<PropsWithChildren<{}>> = ({children}) => {
  return <AppView className="items-center basis-1">{children}</AppView>;
};
