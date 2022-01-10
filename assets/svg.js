import React from 'react';
import Svg, {
  Path,
  Defs,
  Filter,
  G,
  FeBlend,
  FeColorMatrix,
  FeGaussianBlur,
  FeOffset,
  FeFlood,
} from 'react-native-svg';

export default function BitcoinVector(props) {
  return (
    <Svg width="52" height="29" viewBox="0 0 52 29" fill="none" {...props}>
      <Path
        d="M51 2L48.1223 5.67647H46.6835L45.2446 2L43.446 8.98529L40.9281 6.04412L38.0504 3.10294L33.7338 13.3971L32.6547 7.14706L30.1367 27L24.741 5.67647V10.0882H22.9424L22.9424 15.2353L19.705 11.5588L18.6259 15.9706L16.1079 13.3971L10.3525 17.8088L7.47482 27L0.999998 17.8088"
        stroke="#21BF73"
      />
    </Svg>
  );
}

export function EthereumVector(props) {
  return (
    <Svg width="52" height="28" viewBox="0 0 52 28" fill="none" {...props}>
      <Path
        d="M1 24.8448L6.60748 20.9655L13.6168 27L18.2897 4.15517L27.1682 19.2414L31.3738 13.6379V4.15517L37.9159 9.75862L42.1215 2L51 17.0862"
        stroke="#D90429"
      />
    </Svg>
  );
}

export function BandVector(props) {
  return (
    <Svg width="60" height="37" viewBox="0 0 60 37" fill="none" {...props}>
      <G filter="url(#filter0_d_158_1832)">
        <Path
          d="M5 29L6.30435 15.4035L11.9565 29L13.2609 18.4737L18.913 22.4211V15.4035L23.6957 13.2105L28.913 20.6667L30.6522 4L37.1739 13.2105L42.8261 20.6667L47.1739 13.2105L55 18.4737"
          stroke="#D90429"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_158_1832"
          x="0.502441"
          y="0.626953"
          width="58.7764"
          height="36.3105"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <FeFlood flood-opacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="2" />
          <FeGaussianBlur stdDeviation="2" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.075 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_158_1832"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_158_1832"
            result="shape"
          />
        </Filter>
      </Defs>
    </Svg>
  );
}

export function TetherVector(props) {
  return (
    <Svg width="60" height="37" viewBox="0 0 60 37" fill="none" {...props}>
      <G filter="url(#filter0_d_158_1840)">
        <Path
          d="M55 4L53.6957 17.5965L48.0435 4L46.7391 14.5263L41.087 10.5789V17.5965L36.3043 19.7895L31.087 12.3333L29.3478 29L22.8261 19.7895L17.1739 12.3333L12.8261 19.7895L5 14.5263"
          stroke="#21BF73"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_158_1840"
          x="0.721191"
          y="0.0625"
          width="58.7764"
          height="36.3105"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <FeFlood flood-opacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="2" />
          <FeGaussianBlur stdDeviation="2" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.075 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_158_1840"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_158_1840"
            result="shape"
          />
        </Filter>
      </Defs>
    </Svg>
  );
}

export function TronVector(props) {
  return (
    <Svg width="52" height="28" viewBox="0 0 52 28" fill="none" {...props}>
      <Path
        d="M51 24.8448L45.3925 20.9655L38.3832 27L33.7103 4.15517L24.8318 19.2414L20.6262 13.6379V4.15517L14.0841 9.75862L9.8785 2L1 17.0862"
        stroke="#D90429"
      />
    </Svg>
  );
}
