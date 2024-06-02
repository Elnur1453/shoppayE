import React, {memo} from 'react';
import {normalize} from 'theme/metrics';
import {SvgProps} from 'react-native-svg';
import {VectorResources} from 'assets/VectorResources';
import {Pressable, StyleProp, ViewStyle, Insets} from 'react-native';

type VectorResourcesType = typeof VectorResources;
export interface Resources extends VectorResourcesType {
  default: any;
}
export interface SvgImageProps extends SvgProps {
  source: any;
  isPressable?: boolean;
  pressableStyle?: StyleProp<ViewStyle>;
  pressableHitSlop?: null | Insets | number | undefined;
  onPress?: () => void;
}

export const SvgImage: React.FC<SvgImageProps> = memo(
  ({
    source,
    children,
    onPress,
    isPressable,
    pressableStyle,
    pressableHitSlop,
    ...props
  }) => {
    if (!source?.default) {
      return null;
    }

    if (props.width) {
      props.width = normalize('width', Number(props.width));
    }

    if (props.height) {
      props.height = normalize('width', Number(props.height));
    }

    if (isPressable) {
      return (
        <Pressable
          onPress={onPress}
          hitSlop={pressableHitSlop}
          style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, pressableStyle]}>
          {React.createElement(source.default, props, children)}
        </Pressable>
      );
    }

    return React.createElement(source.default, props, children);
  },
);
