import React, { useCallback, useEffect, useState } from 'react';
import { Animated, ImageSourcePropType } from 'react-native';

import { Small, Original } from './styles';

interface iLazyImageProps {
  smallSource: ImageSourcePropType;
  source: ImageSourcePropType;
  aspectRatio: number;
  shouldLoad: boolean;
}

const OriginalAnimated = Animated.createAnimatedComponent(Original);

export const LazyImage: React.FC<iLazyImageProps> = ({
  smallSource,
  source,
  aspectRatio,
  shouldLoad,
}: iLazyImageProps) => {
  const opacity = new Animated.Value(0);

  const [loaded, setLoaded] = useState(false);

  const handleAnimate = useCallback(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    });
  }, [opacity])

  useEffect(() => {
    if (shouldLoad) {
      setLoaded(true);
    }
  }, [shouldLoad]);


  return (
    <Small
      source={smallSource}
      ratio={aspectRatio}
      resizeMode="contain"
      blurRadius={2}>
      {loaded && (
        <OriginalAnimated
          source={source}
          ratio={aspectRatio}
          resizeMode="contain"
          onLoadEnd={handleAnimate}
        />
      )}
    </Small>
  )
}
