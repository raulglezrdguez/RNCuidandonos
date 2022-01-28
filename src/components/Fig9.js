/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function Fig9(props) {
  const stroke = props.stroke || '#000';
  const width = props.width || 64;
  const height = props.height || 64;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 67.733 67.733"
      {...props}>
      <G fill="none" stroke={stroke} strokeWidth={0.5}>
        <Path d="M25.39 2.653c-1.826-.713-3.652 0-5.478 2.138-8.1-3.242-17.754 10.064-13.607 20.923 2.424 6.346 5.48 6.786 4.119 15.292l2.405-2.004.134 2.405" />
        <Path d="M21.114 5.125c-7.074-1.177-9.628 2.763-11.025 9.02-2.418 5.614-3.773 8.976-.735 14.3" />
        <Path d="M14.7 10.003c1.509-4.7 5.107-5.52 10.357-3.274-12.735-1.518-2.449 11.398-14.366 19.31C22.223 21.37 19 5.13 26.192 8.333c5.922-2.928 3.263 9.333 15.368 9.755 2.787-.064 2.043-2.434.735-1.938 1.298-.998.139-1.618-.801-2.271M26.26 6.863c9.75-9.08 4.018 10.625 16.035 10.356" />
        <Path d="M34.344 8.667c2.45 6.147 4.9 6.604 7.35 6.815C38.91 5.373 30.172-.536 22.184 4.524M32.473 4.056c2.243 0 5.122 10.896 7.283 10.09M35.28 7.53c2.804 1.778 4.249 4.597 4.744 7.618M40.358 18.021c.125 1.092.137 2.183-.268 3.274M41.627 18.222c-.196 2.016.191 3.799-1.67 6.48M12.695 12.743c-1.175 6.918-4.788 8.08-3.407 14.165.135-7.02 3.627-4.845 6.08-10.891M15.168 23.233c-1.38 5.384-1.581 3.93-2.139 4.544-4.77-2.79-3.503 3.535-1.536 4.41.799.765 1.771 1.473 2.07 2.405-.49 1.85.544 2.93 1.805 1.804.628-.779-.317-1.96-1.737-1.804" />
        <Path d="M10.69 28.11c.87.578 2.206.494 2.607 2.072-.867 1.604 1.274 2.272.601 2.606-1.609.39-2.331-1.674-2.272-3.207M15.435 33.456c1.78 3.232 1.153 7.037-.802 11.159M16.771 35.861c2.186 3.705 4.71 6.623 8.486 6.615M25.257 41.875c2.351 2.074 5.222 2.512 8.82.668" />
        <Path d="M36.75 17.153c-2.701-.104-3.695.647-4.277 1.603.17 3.42.07 7.05 2.472 8.753-2.253 1.923-6.434 5.821-4.41 9.822 2.719 3.875 5.137 8.049 8.687 11.092 4.315 2.819 13.736-2.872 12.829-6.481-4.875-2.947-12.303 1.66-12.762 6.347M38.353 17.487c.863 2.5.25 5.247 1.871 8.085" />
        <Path d="M38.086 21.763c.061 1.724-.794 2.852-4.276 2.272.432 1.3 2.887.831 4.61 1.002M38.487 20.026c-1.085 1.572-5.022-.615-5.613 2.272M38.487 18.288c-3.386-.37-4.568.727-5.88 1.738" />
        <Path d="M36.95 23.968c-2.35.494-2.458-1.923-1.403-2.54 1.55-.624 2.953 1.481 1.403 2.54zM29.066 17.954c-.12.776.347 1.845-.735 2.139M26.86 20.36c1.013.133 1.015-.802.067-1.203-3.611-1.689-6.562-.471-9.287 1.737-.983.782-.325 1.44.668.735 2.258-1.44 5.048-1.966 8.553-1.27zM28.965 22.164c-3.761-1.072-7.481-1.902-10.457 1.57" />
        <Path d="M25.925 25.638c1.145-.53 1.804-1.364 2.239-2.338-5.955-2.732-4.397-.422-9.756 1.47.883.649 1.794 1.222 2.94 1.17M28.832 24.068c-.718 2.108-1.5 3.31-2.306 4.176M30.636 29.013c-1.374.347-.856 2.16.1 2.205M28.932 30.884c-.194.715-.64 1.556-1.37 2.539M35.28 28.11c.666.722 1.516 1.388-.669 2.974M33.843 31.518c-.265.519-.212.974-.033 1.403M33.61 30.817c-.63-.906-1.209.536-1.604.067" />
        <Path d="M24.914 25.796c-2.162.755-3.498-1.828-1.403-2.539 2.023-.577 3 1.811 1.403 2.54zM26.326 34.124c-1.99 1.09-.548 1.701-1.136 4.61M30.569 37.8c-1.26-.018-2.494-.89-3.842-2.139 1.713.75 2.407.224 3.074-.334M30.168 34.692c1.132-1.096 2.32-1.252 3.541-.835.403-.191.825-.201 1.404-.468 2.275-.02 1.53 1.777.334 1.971-2.304.25-4.367-.257-5.246.602M40.257 26.607c.723 2.857-1.319 5.131-2.037 8.386M42.095 33.423c-2.373 2.273-6.18 3.495-11.225 3.808M35.547 27.342c4.23-1.64 8.203-2.809 9.889.2M49.378 28.044c1.42.53 2.787 1.202 3.942 2.439.32 1.305.527 1.89.668 2.038l2.506 2.138c.626 1.614 1.326 3.52 2.305 6.548 2.339 6.324 4.678 9.117 7.016 12.562M49.578 28.679c-.692-2.11-4.413-.76-6.447-.502.413.348.757.96 1.87.902 1.195-.192 2.504-.507 1.838-1.336" />
        <Path d="M53.955 32.487l-1.604-1.603c-5.7-2.024-6.679-.593-8.987-.134l-3.274 1.67c.566.313.971.891 2.038.368l1.437-1.002c.482-.125-.03-.675-.1-1.036" />
        <Path d="M45.035 29.113c.2.368.463.698 1.102.802l.334.601M41.894 32.821c1.028 1.86 4.605-.888 4.344-1.27-.169 1.148 3.601 1.671 4.844.903-.953.572-.263.892-.167 1.303M55.893 37.064c-2.396-2.414-4.049-3.156-5.38-3.174-1.482-.014-3.24-.178-4.376.501-1.498.596-2.997 1.194-4.844 3.442.515.194 1.18.09 1.871-.067l1.336-1.504c.163-.568-.052-.663-.233-.801" />
        <Path d="M43.164 37.9c1.247-.189 2.501-.318 3.575-1.805 2.268.97 3.133.443 4.109.034 1.185 1.155 2.178 2.426 4.21 3.073-2.89-.72-6.425-1.997-7.484-1.136l-2.472 1.07c.13.536.716.799 1.737.801l1.07-1.002c.165-.297.088-.56-.368-.768" />
        <Path d="M46.94 39.97c1.546.291 2.392-.002 2.872-.6 1.047 1.272 2.094 1.445 3.14 1.302.658 1.545 1.315 1.648 1.972 2.005M59.601 44.982c.529 3-1.75 3.116-4.477 2.773M49.98 41.842c3.226 1.702-3.558 4.742-5.747 5.712M46.94 45.015c-2.891.928-6.524 2.375-3.408-.902M35.506 35.416c.327.172.622.387.638.993M41.577 37.235c-2.567-.356-5.134-.261-7.7-.26M30.805 37.448c2.358 1.115 5.11 1.4 8.032 1.323M40.443 38.984c1.308.08 2.615.22 3.922 0M37.372 39.456c-.29 1.032-1.03 1.615-1.606 2.362M44.767 40.637c-14.498 1.299-6.558 3.259-5.528 3.662M42.475 41.771c-3.81 2.461-3.706 3.795-3.921 5.22M44.768 48.824l9.187 3.742M47.975 47.588c.584.872 1.105 1.298 1.336-.3M49.077 48.256c.952 1.66 1.72-.428 1.404-1.503M50.08 48.824c2.069 2.125 1.59-1.836 2.238-3.107M51.383 49.359c.875 2.434 2.397 1.116 3.407.4M52.853 50.695c2.21 2.74 3.254 5.479 4.242 8.218M55.258 51.697c1.367.664 2.23 1.58 3.074 2.506M60.57 47.053c-.363 1.216-1.04 1.701-1.938 1.67M15.97 40.33c-2.998.52-10.887 3.535-3.119 13.843 4.492 4.506 3.595 10.308 7.323 11.292" />
        <Path d="M15.639 41.984c-6.195 6.537 1.89 11.322 2.976 12.756 2.12 2.022 1.018 6.812 9.828 6.993l.85 3.827" />
        <Path d="M31.278 43.59c3.423 2.3 1.217 8.757.803 9.875-.69 1.86-1.508 6.887-3.733 8.268M17.718 43.78c.028 2.054-.892 3.687-1.985 5.244M23.104 44.063c-.11.786-.022 1.442-.473 2.456M29.86 44.252c-1.797 1.482-.16 5.038-1.276 8.22M31.608 44.299l.662 2.504M30.852 46.094c-.418 2.057.258 3.019.52 4.394M28.206 57.15c-.415.955-.789 1.951-.708 3.402-1.925-1.193-3.168-3.238-4.63-5.008M10.3 43.543c-2.751 3.08-5.71 4.888-8.835 6.095M48.334 32.747l.378 1.087M49.751 36.503l.662 1.512M51.381 40.614l.638 1.228" />
        <Path d="M32.884 43.118c3.868 2.765 2.53 7.222 1.512 11.575-.345 3.723.383 8.683-1.418 10.725" />
      </G>
    </Svg>
  );
}

export default Fig9;
