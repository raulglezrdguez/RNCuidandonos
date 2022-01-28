/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function Fig13(props) {
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
        <Path d="M7.937 65.843l.85-3.307M11.056 64.899c-2.58-2.358-3.05-3.705-2.835-5.15" />
        <Path d="M13.324 63.009c-6.387-1.45-6.097-6.152-6.237-8.221-.228-4.457.127-7.748.378-11.245 1.397-4.416 3.705-5.736 5.67-8.221l3.212-6.898c-.065-.693-.202-1.386 1.323-2.08-.204-1.836 2.105-3.134 3.497-4.63l.756-.283c.705-1.311 1.728-2.496 2.74-3.685.063-1.26.189-2.488.378-3.685-2.826 1.611-3.026 5.077-3.986 7.738M17.6 26.274c.327.801.736 1.173 1.252 1.347M16.347 28.471c.536.51 1.071.638 1.607.85M9.087 58.913c-.53-2.311.23-4.47 1.47-6.08M13.898 48.624c1.203-1.153 2.405-2 3.608-1.738" />
        <Path d="M25.057 14.346c4.913 1.724 2.702 15.628-1.27 16.972 1.094 1.078-1.513 7.395-2.272 7.55-1.126.203-2.21.104-3.274-.133M21.545 38.865c-.511 1.307-.83 2.642-.095 4.135.762.36 1.808.037 1.56 2.834.82.58 1.215 1.588 1.747 2.457M21.497 43.047c-2.152-.275-4.194-.882-7.134 1.205M17.765 42.834a11.388 11.388 0 01-3.142-1.44" />
        <Path d="M24.143 47.016l.071-2.977c-.74-.56-1.008-1.255-1.323-1.937M26.813 45.645c.408-1.327.607-2.743 1.417-3.898M26.175 41.936l1.063 2.197M29.033 41.984l.52 1.866M26.727 15.549c-1.595-9.092 3.8-11.011 6.014-11.426" />
        <Path d="M27.796 23.901c2.016 5.48 5.148 8.836 10.891 7.216-.286-.284-.26-.607.869-1.069l2.94-.668c.334.046.668-.087 1.002 1.07 5.878-.686 5.686-5.821 5.746-6.549-.079-5.253-1.143-10.834-2.271-16.437-1.095-3.43-3.672-3.713-6.148-4.21-2.74.123-5.479-.058-8.218 1.07-2.361 1.597-3.337 2.79-3.675 5.278-.823 6.491.557 11.715 2.205 15.97 1.163 1.86 2.322 3.726 5.746 3.675 3.49.21 6.22-.716 9.02-1.537 3.217-1.037 2.606-2.584 3.408-3.943" />
        <Path d="M46.906 16.35l-1.203-7.149c-.082-1.878-.891-3.438-3.809-4.076-2.628-.278-5.256-.576-7.884.535-2.514 1.163-3.655 2.914-3.675 5.145l.334 7.35c.4 1.734.473 3.623 4.143 3.808 2.418.459 2.748 1.107 3.274 1.738 2.93 2.018 3.539.451 4.61-.401.175-1.63 1.31-2.061 2.138-2.873 2.339-.888 2.159-2.495 2.072-4.076zM36.482 23.968l-3.274-1.27c-.52-.148-1.592-.168-1.002.936l1.203 2.071c1.312.773 2.556 1.32 3.34.334.474-.803.135-1.443-.267-2.071zM44.367 22.164c1.148-.566 1.87-.981 2.806-1.804.06 1.342.515 2.131-.4 3.286-.847 1.03-1.694 1.349-2.54.255z" />
        <Path d="M31.605 11.406l-.134 2.205c.475.48.724.28.935-.033zM34.077 11.306l.1 3.007M34.277 15.148l.167 2.773M36.215 13.879v-2.473M36.516 10.939l1.47-.134M38.22 11.106l.167 2.672M36.349 14.914l.133 2.406M36.616 17.72l1.804-.4M38.554 16.986v-2.372M41.828 10.538l-1.738.167M39.656 10.972l.234 2.272M40.024 14.079l1.67-.167M42.329 14.046l.133 2.639M42.128 17.22l-1.97.166M43.832 14.213l.234 1.136s-.756.195-.835-.067c-.08-.263.635-.501.635-.501M44.467 14.213l.134 1.136.768-.034M43.298 13.678l2.205-.2M42.596 12.776c-.03-.916.678-.552.768.067.114-.621.495-1.139.602-.034M44.734 13.21c.627.07.457-.459.401-.902-.29.544-.813.37-.868 0 .055-.512.88-.612.868 0M38.79 30.55l1.086 7.323 1.418 1.607 1.654-.378.708-1.654-.992-8.174M41.814 36.598l.472 2.598M27.73 26.74l1.47.335M30.703 29.046c-.312 1.456-1.01 3.576-3.241 6.014-.757-.618-1.876-.656-3.074-.568M27.529 34.993c.098.39.116.791-.401 1.27M25.324 35.861c2.655.406 3.449 1.957 3.808 3.776" />
        <Path d="M28.665 38.033c.884.09 2.083-.072 2.572.334.283-.51.523-1.099 1.236-.835l1.27 1.036M32.44 37.498c-.158-.76.536-1.064.768-.835l1.136.869" />
        <Path d="M33.075 36.563c2.026-2.372 2.664-3.588 3.908-5.011.461.503.905.908 1.303 1.035M31.27 38.367c.694.71 1.795 1.178 2.072 2.138 1.585.534 3.232.865 4.477 2.506 1.524-1.38 2.266-2.647 3.207-3.942M36.85 43.278c1.34-.501 2.5-.52 3.307.401M39.322 44.214c.601-.575 1.203-.513 1.804-.2M43.465 35.394l.668-.334c-.246-1.4.495-1.593 1.002-2.072.01-.994.259-2.068.802-3.24M45.135 33.089c1.558.07 2.32 1.557 4.01 2.204M44.166 35.126c.817 1.517 3.18 1.049 4.477 1.938M48.543 27.275c.78.532 1.559.518 2.338.435M47.44 9.702c4.743-2.07 4.176 2.43 3.809 6.682M48.944 17.921c2.429-2.354 4.544-2.701 5.646 3.441" />
        <Path d="M52.786 51.196c1.352-1.756 1.77-4.136 2.639-6.214 1.174-1.733 1.664-3.523 1.77-5.345.017-1.63.352-2.993.903-4.176 1.811-3.964.65-6.202-.2-8.62-.59-2.974-.643-5.457-3.275-5.546-3.89.48-2.39 7.285-2.038 9.622.881.943 2.105 1.405 3.876 1.102" />
        <Path d="M52.552 30.917c-1.62 2.325-2.17 4.983-2.372 7.75l-2.138 3.71M55.158 40.806c-1.118-1.21-2.577-1.566-4.043-1.904M55.793 42.009c-.828-.624-2.036-.58-3.208-.602-1.49-.379-1.606-1.033-2.305-1.57M47.247 52.709c1.288.307 2.95-.435 4.866-1.89-.944-3.04-1.733-6.08-5.244-9.119-3.347-2.387-5.189-1.423-5.764 2.363.75 3.139 2.133 6.239 4.3 9.496 1.666 3.72 3.053 7.406 5.669 11.245l.142 1.276M52.16 50.819c1.871 1.241 3.588 5.55 5.34 9.166 1.44 1.07 1.684 2.142 2.315 3.213M57.216 60.977c-.962.167-1.807.804-2.646 1.465M56.224 59.749c-1.412.3-2.453 1.097-3.496 1.89" />
        <Path d="M43.562 45.527c.543-.25.785-.636-.047-1.512-.293-.346-.29-.693.047-1.04.926-1.197.08-.944-.284-1.086-.842 1.633-.428 1.83-.472 2.552-.023 1.002.423.912.756 1.086zM37.75 55.45c1.561-.062 2.39-.855 3.213-1.655-.154-2.472-1.632-5.343-3.827-8.315-1.94-2.666-4.279-4.55-6.898-.709-.175.33-.32 1.164.284 3.402.848 3.04 2.344 7.888 3.685 8.127M40.963 53.843c1.8 3.067 3.939 4.781 5.292 9.638.41 1.618 1.154 2.128 1.937 2.504M46.208 63.576c-1.402.117-2.804.834-4.205 1.7M47.058 65.182l-1.134.85M46.066 62.442c.737-.598 1.42-1.466 2.031-2.693M42.05 49.685a4.888 4.888 0 00-1.607 1.606M33.356 55.638c.026 2.089 2.68 6.807 4.158 10.347M27.167 65.796c-.183-.348-.56-1.375-.992-2.598-1.085-1.872-2.67-7.33-2.788-8.647-.12-1.506-.406-3.288 1.843-4.252 1.768-.707 3.828.47 5.103 2.315.97 1.496 2.547 3.545 2.456 6.379-1.716 1.207-3.196 1.784-4.535 1.984" />
        <Path d="M29.246 61.97c1.156-.742 2.203-1.865 3.59-1.796 1.057 1.04 2.025 1.624 3.686 5.811M32.884 60.221l-.142-1.323M24.255 63.39c-2.629 1.353-5.022 2.303-6.415 1.537M21.782 66.063l-1.336-1.07" />
      </G>
    </Svg>
  );
}

export default Fig13;