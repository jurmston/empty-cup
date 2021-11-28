import * as React from 'react'


interface UseLoadImageProps {
  crossOrigin?: string | null
  referrerPolicy?: string
  src?: string
  srcSet?: string
}

type ImageStatus = 'idle' | 'loading' | 'ready' | 'error'


export function useLoadImage({
  crossOrigin = null,
  referrerPolicy = '',
  src = '',
  srcSet = '',
}: UseLoadImageProps): ImageStatus {
  const [status, setStatus] = React.useState<ImageStatus>('idle');

  React.useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }

    setStatus('loading');

    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setStatus('ready');
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setStatus('error')
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }

    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet])

  return status
}
