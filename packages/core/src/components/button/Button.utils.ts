import {Intent} from 'components/button/Button.types';
import classNames from 'classnames';

type WithCommon<T> = T & {__common__?: string};

const getElementClassName = (key: string, config: {[key: string]: string}) =>
  classNames(config[key], config.__common__);

const containerClassNameConfig: {[K in WithCommon<Intent>]: string} = {
  __common__:
    'text-center rounded px-10 py-2 hover:text-black ring-2 ring-white hover:ring-purple-600',
  neutral: 'bg-white border border-action-positive',
  negative: 'bg-action-positive',
  positive: 'bg-action-positive',
};

const textClassNameResolver: {[K in WithCommon<Intent>]: string} = {
  neutral: 'text-action-positive',
  negative: 'text-action-positive-inverse',
  positive: 'text-action-positive-inverse',
};

export const getContainerClassName = (intent: Intent = 'neutral') =>
  getElementClassName(intent, containerClassNameConfig);

export const getTextClassName = (intent: Intent = 'neutral') =>
  getElementClassName(intent, textClassNameResolver);
