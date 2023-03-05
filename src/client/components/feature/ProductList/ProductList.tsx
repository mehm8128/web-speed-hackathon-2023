import type { FC } from 'react';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

import type { FeatureSectionFragmentResponse } from '../../../graphql/fragments';
import { DeviceType, GetDeviceType } from '../../foundation/GetDeviceType';
import { ProductGridList } from '../ProductGridList';
import { ProductListSlider } from '../ProductListSlider';

type Props = {
  featureSection: FeatureSectionFragmentResponse;
  index: number;
};

export const ProductList: FC<Props> = memo(({ featureSection, index }) => {
  return (
    <GetDeviceType>
      {({ deviceType }) => {
        switch (deviceType) {
          case DeviceType.DESKTOP: {
            return <ProductListSlider featureSection={featureSection} index2={index} />;
          }
          case DeviceType.MOBILE: {
            return <ProductGridList featureSection={featureSection} index={index} />;
          }
        }
      }}
    </GetDeviceType>
  );
}, isEqual);

ProductList.displayName = 'ProductList';
