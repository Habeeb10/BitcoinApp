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
        <filter
          id="filter0_d_158_1832"
          x="0.502441"
          y="0.626953"
          width="58.7764"
          height="36.3105"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
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
        </filter>
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

export function HomeIcon(props) {
  return (
    <Svg width="22" height="21" viewBox="0 0 22 21" fill="none" {...props}>
      <Path
        d="M11 0.775391L10.4235 1.31013L0 11.4289L1.1538 12.549L2.18012 11.5504V20.5507H9.39638V12.767H12.6036V20.5507H19.8199V11.5504L20.847 12.5482L22 11.4289L11.5765 1.31013L11 0.775391ZM11 2.98908L18.2163 9.99441V18.9939H14.2072V11.2102H7.79277V18.9939H3.78373V9.99363L11 2.98908Z"
        fill="#6C757D"
      />
    </Svg>
  );
}

export function PortfolioIcon(props) {
  return (
    <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
      <Path
        d="M17.9994 10.7982H9.86331V2.75353C9.86331 2.65466 9.7815 2.57376 9.6815 2.57376H9.09061C7.89679 2.57183 6.71436 2.80332 5.61135 3.25491C4.50835 3.7065 3.50654 4.36929 2.66356 5.20513C1.83338 6.02344 1.17191 6.99344 0.715898 8.06121C0.241381 9.16867 -0.00211181 10.3595 1.37976e-05 11.5622C-0.0019411 12.7426 0.232179 13.9118 0.688904 15.0024C1.14563 16.093 1.81594 17.0835 2.66129 17.917C3.49535 18.7417 4.46804 19.3911 5.54982 19.8428C6.66987 20.312 7.87419 20.5528 9.09061 20.5507C10.2844 20.5526 11.4669 20.3211 12.5699 19.8695C13.6729 19.4179 14.6747 18.7551 15.5177 17.9193C16.3517 17.0946 17.0085 16.1328 17.4653 15.0632C17.9398 13.9557 18.1833 12.765 18.1812 11.5622V10.978C18.1812 10.8791 18.0994 10.7982 17.9994 10.7982ZM14.4018 16.8609C13.6981 17.5513 12.8635 18.0976 11.9458 18.4686C11.0282 18.8395 10.0456 19.0278 9.05425 19.0226C7.05204 19.0136 5.17029 18.2384 3.75443 16.8384C2.32948 15.4295 1.54542 13.5554 1.54542 11.5622C1.54542 9.56902 2.32948 7.69493 3.75443 6.28599C4.9953 5.05907 6.59297 4.31078 8.31791 4.14V12.3262H16.5972C16.4222 14.0408 15.6586 15.6295 14.4018 16.8609ZM19.9993 9.5488L19.9402 8.91511C19.7471 6.84552 18.8175 4.89278 17.3221 3.41868C15.8257 1.94187 13.8548 1.0279 11.7496 0.834498L11.1065 0.776073C10.9996 0.767085 10.9087 0.847981 10.9087 0.953595V9.58475C10.9087 9.68362 10.9905 9.76452 11.0905 9.76452L19.8175 9.74205C19.9243 9.74205 20.0084 9.65216 19.9993 9.5488ZM12.4496 8.24098V2.47489C13.8812 2.77117 15.195 3.4722 16.2313 4.4928C17.2699 5.51748 17.9812 6.8208 18.2767 8.22525L12.4496 8.24098Z"
        fill="#6C757D"
      />
    </Svg>
  );
}

export function RewardIcon(props) {
  return (
    <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
      <Path
        d="M18.5507 5.83863H14.9855C15.314 5.32753 15.5072 4.72089 15.5072 4.07127C15.5072 2.25376 14.0121 0.775391 12.1739 0.775391C11.1739 0.775391 10.2729 1.21484 9.66183 1.90745C9.05072 1.21484 8.14976 0.775391 7.14976 0.775391C5.31159 0.775391 3.81642 2.25376 3.81642 4.07127C3.81642 4.72089 4.00725 5.32753 4.33816 5.83863H0.772947C0.345411 5.83863 0 6.18016 0 6.60289V11.3795C0 11.4846 0.0869565 11.5706 0.193237 11.5706H1.15942V19.7864C1.15942 20.2091 1.50483 20.5507 1.93237 20.5507H17.3913C17.8188 20.5507 18.1642 20.2091 18.1642 19.7864V11.5706H19.1304C19.2367 11.5706 19.3237 11.4846 19.3237 11.3795V6.60289C19.3237 6.18016 18.9783 5.83863 18.5507 5.83863ZM10.4831 4.07127C10.4831 3.14938 11.2415 2.39945 12.1739 2.39945C13.1063 2.39945 13.8647 3.14938 13.8647 4.07127C13.8647 4.99316 13.1063 5.74309 12.1739 5.74309H10.4831V4.07127ZM7.14976 2.39945C8.08212 2.39945 8.84058 3.14938 8.84058 4.07127V5.74309H7.14976C6.21739 5.74309 5.45894 4.99316 5.45894 4.07127C5.45894 3.14938 6.21739 2.39945 7.14976 2.39945ZM1.64251 9.94654V7.46268H8.84058V9.94654H1.64251ZM2.80193 11.5706H8.84058V18.9266H2.80193V11.5706ZM16.5217 18.9266H10.4831V11.5706H16.5217V18.9266ZM17.6812 9.94654H10.4831V7.46268H17.6812V9.94654Z"
        fill="#6C757D"
      />
    </Svg>
  );
}

export function MarketIcon(props) {
  return (
    <Svg width="22" height="21" viewBox="0 0 22 21" fill="none" {...props}>
      <Path
        d="M21.7708 18.5282H2.0625V1.00011C2.0625 0.876514 1.95938 0.775391 1.83333 0.775391H0.229167C0.103125 0.775391 0 0.876514 0 1.00011V20.326C0 20.4495 0.103125 20.5507 0.229167 20.5507H21.7708C21.8969 20.5507 22 20.4495 22 20.326V18.7529C22 18.6293 21.8969 18.5282 21.7708 18.5282ZM5.09323 14.1939C5.18203 14.281 5.32526 14.281 5.41693 14.1939L9.37864 10.3288L13.0339 13.9355C13.1227 14.0226 13.2687 14.0226 13.3576 13.9355L21.2466 6.20236C21.3354 6.11528 21.3354 5.97202 21.2466 5.88494L20.1122 4.77258C20.0692 4.73076 20.011 4.7073 19.9504 4.7073C19.8898 4.7073 19.8316 4.73076 19.7885 4.77258L13.2 11.2304L9.55052 7.62932C9.50745 7.5875 9.44929 7.56404 9.38867 7.56404C9.32806 7.56404 9.26989 7.5875 9.22682 7.62932L3.96172 12.7613C3.91907 12.8036 3.89515 12.8606 3.89515 12.9201C3.89515 12.9795 3.91907 13.0365 3.96172 13.0788L5.09323 14.1939Z"
        fill="#6C757D"
      />
    </Svg>
  );
}

export function ProfileIcon(props) {
  return (
    <Svg width="19" height="21" viewBox="0 0 19 21" fill="none" {...props}>
      <Path
        d="M18.1533 16.9136C17.6794 15.8035 16.9915 14.7952 16.1282 13.9448C15.2675 13.092 14.2479 12.412 13.1257 11.9425C13.1156 11.9375 13.1056 11.935 13.0955 11.93C14.6609 10.8121 15.6785 8.99108 15.6785 6.93653C15.6785 3.533 12.8895 0.775391 9.4473 0.775391C6.00509 0.775391 3.21614 3.533 3.21614 6.93653C3.21614 8.99108 4.23373 10.8121 5.79906 11.9325C5.78901 11.9375 5.77896 11.94 5.76891 11.9449C4.64328 12.4145 3.63323 13.0877 2.76639 13.9473C1.90385 14.7984 1.21615 15.8065 0.741269 16.9161C0.274742 18.0024 0.023133 19.167 6.28291e-05 20.347C-0.000607786 20.3735 0.0040958 20.3999 0.0138966 20.4245C0.0236973 20.4492 0.0383969 20.4717 0.0571291 20.4907C0.0758614 20.5097 0.0982473 20.5248 0.122968 20.5351C0.147688 20.5454 0.174243 20.5507 0.201068 20.5507H1.70861C1.81916 20.5507 1.9071 20.4637 1.90961 20.3569C1.95986 18.439 2.73876 16.6428 4.11564 15.2814C5.54026 13.8728 7.43222 13.0977 9.4473 13.0977C11.4624 13.0977 13.3543 13.8728 14.779 15.2814C16.1558 16.6428 16.9347 18.439 16.985 20.3569C16.9875 20.4662 17.0754 20.5507 17.186 20.5507H18.6935C18.7204 20.5507 18.7469 20.5454 18.7716 20.5351C18.7963 20.5248 18.8187 20.5097 18.8375 20.4907C18.8562 20.4717 18.8709 20.4492 18.8807 20.4245C18.8905 20.3999 18.8952 20.3735 18.8945 20.347C18.8694 19.1594 18.6207 18.0042 18.1533 16.9136ZM9.4473 11.2096C8.29403 11.2096 7.2086 10.7649 6.39202 9.95748C5.57544 9.15007 5.12569 8.07684 5.12569 6.93653C5.12569 5.79623 5.57544 4.72299 6.39202 3.91559C7.2086 3.10818 8.29403 2.66348 9.4473 2.66348C10.6006 2.66348 11.686 3.10818 12.5026 3.91559C13.3192 4.72299 13.7689 5.79623 13.7689 6.93653C13.7689 8.07684 13.3192 9.15007 12.5026 9.95748C11.686 10.7649 10.6006 11.2096 9.4473 11.2096Z"
        fill="#6C757D"
      />
    </Svg>
  );
}

export function DodgeVector(props) {
  return (
    <Svg width="52" height="29" viewBox="0 0 52 29" fill="none" {...props}>
      <Path
        d="M1 27L3.8777 23.3235H5.31655L6.7554 27L8.55396 20.0147L11.0719 22.9559L13.9496 25.8971L18.2662 15.6029L19.3453 21.8529L21.8633 2L27.259 23.3235V18.9118H29.0576V13.7647L32.295 17.4412L33.3741 13.0294L35.8921 15.6029L41.6475 11.1912L44.5252 2L51 11.1912"
        stroke="#21BF73"
      />
    </Svg>
  );
}

export function BackIcon(props) {
  return (
    <Svg width="10" height="16" viewBox="0 0 10 16" fill="none" {...props}>
      <Path
        d="M9.33333 1.416L7.92976 0L0 8L7.92976 16L9.33333 14.584L2.80714 8L9.33333 1.416Z"
        fill="#212529"
      />
    </Svg>
  );
}

export function HistoryIcon(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12.3104 5.33024H10.9681C10.8453 5.33024 10.7448 5.4307 10.7448 5.55349V13.2363C10.7448 13.3088 10.7783 13.3758 10.8369 13.4177L15.4499 16.786C15.5504 16.8586 15.6899 16.8391 15.7625 16.7386L16.5606 15.6502C16.636 15.547 16.6136 15.4074 16.5132 15.3377L12.5336 12.4605V5.55349C12.5336 5.4307 12.4332 5.33024 12.3104 5.33024ZM18.4443 7.42884L22.8202 8.49768C22.9597 8.53117 23.0964 8.42512 23.0964 8.28279L23.1188 3.77582C23.1188 3.58884 22.9039 3.48279 22.7588 3.6L18.3606 7.03535C18.3274 7.06107 18.3021 7.09564 18.2876 7.1351C18.2731 7.17455 18.2701 7.21729 18.2789 7.2584C18.2876 7.2995 18.3078 7.33731 18.337 7.36746C18.3663 7.39761 18.4035 7.41889 18.4443 7.42884ZM23.1243 15.8316L21.542 15.2874C21.4868 15.2685 21.4265 15.272 21.3738 15.297C21.3211 15.322 21.2803 15.3667 21.2602 15.4214C21.2071 15.5637 21.1513 15.7033 21.0927 15.8428C20.596 17.0177 19.8843 18.0753 18.9746 18.9823C18.0749 19.8848 17.0087 20.6041 15.835 21.1005C14.6192 21.6145 13.3123 21.8784 11.9922 21.8763C10.6583 21.8763 9.3662 21.6167 8.14946 21.1005C6.9758 20.6041 5.90959 19.8848 5.00992 18.9823C4.10294 18.0753 3.39132 17.0177 2.89178 15.8428C2.38057 14.6263 2.11866 13.3196 2.12155 12C2.12155 10.666 2.38108 9.37117 2.89736 8.15442C3.39411 6.97954 4.10574 5.92186 5.0155 5.01489C5.91517 4.11243 6.98138 3.39309 8.15504 2.89675C9.3662 2.38047 10.6611 2.12093 11.995 2.12093C13.329 2.12093 14.6211 2.38047 15.8378 2.89675C17.0115 3.39309 18.0777 4.11243 18.9774 5.01489C19.262 5.30233 19.5299 5.60093 19.7755 5.91628L21.4443 4.61024C19.2481 1.80279 15.8295 -0.00278747 11.9895 3.23034e-06C5.30294 0.00279393 -0.0663569 5.43349 0.000619848 12.1228C0.0675966 18.6949 5.41178 24 11.995 24C17.1718 24 21.5811 20.7181 23.2611 16.1219C23.3029 16.0047 23.2415 15.8735 23.1243 15.8316Z"
        fill="#0063F5"
      />
    </Svg>
  );
}

export function BankdetailsIcon(props) {
  return (
    <Svg width="26" height="24" viewBox="0 0 26 24" fill="none" {...props}>
      <Path
        d="M24.3678 10.4685C25.3138 10.4685 25.7087 9.25314 24.9403 8.6929L13.2487 0.188277C13.0818 0.0659484 12.8802 0 12.6732 0C12.4662 0 12.2646 0.0659484 12.0976 0.188277L0.406083 8.6929C-0.362333 9.25008 0.0325898 10.4685 0.98163 10.4685H2.87665V21.9182H0.672426C0.537724 21.9182 0.427513 22.0284 0.427513 22.1631V23.7551C0.427513 23.8898 0.537724 24 0.672426 24H24.674C24.8087 24 24.9189 23.8898 24.9189 23.7551V22.1631C24.9189 22.0284 24.8087 21.9182 24.674 21.9182H22.4697V10.4685H24.3678ZM12.6732 2.34658L20.9727 8.3837H4.37368L12.6732 2.34658ZM5.08087 10.4685H8.66273V21.9182H5.08087V10.4685ZM10.867 10.4685H14.4488V21.9182H10.867V10.4685ZM20.2655 21.9182H16.653V10.4685H20.2655V21.9182Z"
        fill="#0063F5"
      />
    </Svg>
  );
}

export function NotificationIcon(props) {
  return (
    <Svg width="20" height="24" viewBox="0 0 20 24" fill="none" {...props}>
      <Path
        d="M9.84615 24C11.2 24 12.3077 22.8923 12.3077 21.5385H7.38462C7.38462 22.8923 8.49231 24 9.84615 24ZM17.2308 16.6154V10.4615C17.2308 6.68308 15.2246 3.52 11.6923 2.68308V0H8V2.68308C4.48 3.52 2.46154 6.67077 2.46154 10.4615V16.6154L0 19.0769V20.3077H19.6923V19.0769L17.2308 16.6154ZM14.7692 17.8462H4.92308V10.4615C4.92308 7.40923 6.78154 4.92308 9.84615 4.92308C12.9108 4.92308 14.7692 7.40923 14.7692 10.4615V17.8462Z"
        fill="#0063F5"
      />
    </Svg>
  );
}

export function SecurityIcon(props) {
  return (
    <Svg width="20" height="24" viewBox="0 0 20 24" fill="none" {...props}>
      <Path
        d="M9.81818 0L0 4.36364V10.9091C0 16.9636 4.18909 22.6255 9.81818 24C15.4473 22.6255 19.6364 16.9636 19.6364 10.9091V4.36364L9.81818 0ZM9.81818 11.9891H17.4545C16.8764 16.4836 13.8764 20.4873 9.81818 21.7418V12H2.18182V5.78182L9.81818 2.38909V11.9891Z"
        fill="#0063F5"
      />
    </Svg>
  );
}

export function HelpIcon(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M10.8 19.2H13.2V16.8H10.8V19.2ZM12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6ZM12 4.8C9.348 4.8 7.2 6.948 7.2 9.6H9.6C9.6 8.28 10.68 7.2 12 7.2C13.32 7.2 14.4 8.28 14.4 9.6C14.4 12 10.8 11.7 10.8 15.6H13.2C13.2 12.9 16.8 12.6 16.8 9.6C16.8 6.948 14.652 4.8 12 4.8Z"
        fill="#0063F5"
      />
    </Svg>
  );
}

export function TermsIcon(props) {
  return (
    <Svg width="22" height="24" viewBox="0 0 22 24" fill="none" {...props}>
      <Path
        d="M19.2 0H0V24H12V21.6H2.4V2.4H19.2V14.4H21.6V0H19.2ZM16.8 4.8H4.8V7.2H16.8V4.8ZM4.8 9.6H16.8V12H4.8V9.6ZM12 14.4H4.8V16.8H12V14.4ZM19.2 19.2H16.8V16.8H14.4V19.2H16.8V21.6H14.4V24H16.8V21.6H19.2V24H21.6V21.6H19.2V19.2ZM19.2 19.2H21.6V16.8H19.2V19.2Z"
        fill="#0063F5"
      />
    </Svg>
  );
}

export function OptionIcon(props) {
  return (
    <Svg
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M1 1L7 7L1 13" stroke="#6C757D" stroke-width="2" />
    </Svg>
  );
}
