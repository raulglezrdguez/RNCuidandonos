/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function Fig25(props) {
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
        <Path d="M64.011 4.858C54.131 1.247 53.414.566 48.576 3.255c.223.645-.285 1.291 1.403 1.937 3.984-2.588 5.201-1.137 13.43 1.738" />
        <Path d="M48.57 3.241c-1.644-.113-2.704.765-3.59 1.323-.438 1.71 1.064 3.978 3.779 3.874 1.11-.985 1.136-2.106 1.276-3.212" />
        <Path d="M45.026 4.517c-.945-.121-1.672-.063-2.768 1.245.28 2.601 1.8 5.038 5.32 5.133 1.437-1.487 1.025-1.894 1.04-2.551M44.183 6.078c-.62.273-1.076.82-1.57 1.303M45.035 8.099l-1.203 1.286M46.94 9.335c-.195.496-.63.871-1.087 1.236" />
        <Path d="M45.64 3.997c-4.543-4.442-13.033-1.325-5.055 8.032 6.447 6.818 14.933 3.941 9.024-4.11M46.019 3.714c-1.173-1.209-2.655-2.054-3.638-2.552" />
        <Path d="M37.561.926c-6.065 4.455-3.16 8.804 1.229 13.135 4.934 4.589 10.28 5.584 12.52 3.118 2.474-3.055 1.288-6.459-1.512-10.016M32.317 6.548l-2.504 2.646M27.498 10.8l-2.315 2.221M31.372 9.997l-1.134 1.04M33.829 10.14l-2.126 2.125M36.758 13.021l-1.134 1.229M39.12 16.045l-1.7 1.984M39.546 19.022l-1.04.945M42.57 18.644l-1.276 1.653M48.24 19.778l-2.08 2.787M43.987 22.234l-1.323 1.749M40.869 26.109l-1.323 1.89M43.042 28.093L40.727 31.4M32.506 20.486l-.85.992M28.206 21.1l-1.18 1.749M25.23 27.951l-.898 1.323M31.136 28.66l-1.229 1.654M36.097 37.212l-.756 1.228M31.75 37.495l-.709 1.56M22.064 43.968l1.229 3.024M14.883 16.848c-.027-1.032.553-1.609 1.275-2.079-.506.802.371 3.416 2.6-.236 1.914 1.09 2.848.217 3.779-.661 1.48.916 2.957 1.785 4.252-.378 3.742 1.232 2.244-.277 2.173-1.04 1.961-.158 2.602.508 2.552 1.607 1.159.155 2.149.542 2.126 2.315 3.014.38 2.313 1.67 2.126 2.835.368.38.236.511 1.276 1.228-.272 1.88.642 1.73 1.18 2.22.158 1.134-.77.99-1.653.898-1.894-2.363-2.475-4.924-5.008-7.063-1.192-.416-1.97-.183-.614.661 1.079 1.572.76 2.867-.874 2.127.296-1.54-.465-1.689-1.347-1.678.262-1.653-.821-1.412-1.913-1.157.715 1.05-.264 1.616-.78 2.315-.213 1.298.637.645 1.11.685-.31.596-2.747 2.793-2.102-1.701-1.055.604-2.436.745-2.362 2.953.217 1.168.034 2.135-1.252 2.551 1.597.772.961 2.131.212 3.52 2.447 1.144 1.438 2.169.307 3.19 1.588 1.716 1.014 2.152 1.016 2.929-.603-.917-1.125-1.915-2.15-2.41-.081-.843.885-1.651-.897-2.551.103-1.106.16-2.099-.048-2.457-.354-.116-.708-.333-1.063-1.441-.167 1.324-1.23 2.983.45 3.614-.331 1.166-1.316 1.94.424 4.347-.167.992-.539 1.984.685 2.977.338 1.553-.017 2.514-.07 3.732-.413-1.891-1.064-3.395-2.292-3.969-.325-1.078-.059-1.713.095-2.433-1.005-1.006-1.636-2.066-1.323-3.26-.448.822-1.067 1.37-.922 3.142.844.772.903 1.543-.141 2.315.439 1.128 1.436 1.697.968 3.733.611 1.878 1.428 1.49 2.22 1.37-.543.636-1.335 1.899-2.952 0-.402-1.087-.135-1.588-.071-2.268-.684-1.072-2.108-.392-1.725-3.992-.9-1.82-.778-3.06-.236-4.064" />
        <Path d="M15.497 16.943c-1.322-.005-2.561.118-2.646 2.031-2.57.07-2.677 1.927-2.787 3.78-1.507 1.674-1.61.378-2.127-.047.065.787-.35 1.734.756 2.173-1.725 1.374-1.47 2.276-.567 3.024.907-2.171 1.536-.78 1.276.709-1.34 2.371-.616 3.71 0 5.102-1.165.952-1.706 1.868-.614 2.694.424-1.768 3.198-.83.85 2.126-1.66.999-1.246 1.763-.803 2.929M35.459 22.21c-1.085.14-2.15.167-3.355.97.457 1.262.376 2.584 1.867 3.732.709.873 3.085.337 2.126 2.622.863-.95.98.05 1.04 1.205M36.026 22.967c-1.33.067-2.641.174-3.662.921M36.522 25.353c-.74.58-1.63.75-2.622.638M29.506 25.589c.332.384.54.932.496 1.819-1.038.437-2.115.794-3.402.732M29.34 24.644c-1.66.201-3.276.335-5.362 1.205 1.054-.994 2.275-2.113 5.126-2.126.35.273.389.585.236.921zM32.506 29.818c-.763.277-1.416 1.278-.024 1.89M34.514 29.888c-.696-.04-.793.657-.992 1.3.357.035.502.04.496-.59" />
        <Path d="M36.427 29.818c.076.269.298.488.024.874-.27.115-.406.04-.236-.473M36.522 23.463c.537 4.493 5.1 7.792 1.7 14.127M37.278 36.314c1.42 1.225.697 4.059-1.087 4.205-2.83.202-7.82 2.29-8.551.095M36.522 33.645c-.523.206-.95-.069-1.417-.142-.577.658-1.204.561-1.843.283-1.21 1.166-2.602 1.38-4.063 1.229M36.57 34.495c-.89 1.47-2.577 1.643-4.466 1.488M29.246 34.282c.028.531.057 1.062-.284 1.654M23.252 16.35c-1.133-.687-2.04-.435-2.639 1.103-1.905-.134-2.803.738-3.107 2.205.118 1.05-.546 1.44-2.74.535.94.765 1.56 2.49 3.241 1.035.7-.871.575-2.47 2.64-2.138M14.098 19.424c-.553.298-.939.928-1.135 1.938-1.674-.466-1.518.564-1.27 1.67-.083 2.638-.621 1.974-1.036 2.205M14.433 22.665c-1.115.272-.986 1.568-.602 3.074.155 1.53-.983 1.55-1.837 1.904 1.081.576 2.102.635 3.007-.3M16.136 23.634c-.102.878-.162 1.778.435 3.007M11.326 28.612c-1.366 1.383.907 3.115-1.404 3.942M13.53 32.287c-1.172.49-1.315 5.877 2.172 5.646M11.96 36.997c.291 1.8-1.374 1.61-1.102 3.208M15.836 39.703c-.612.062-1.059.396-1.403.902.314.75.634 1.424 1.035 1.036-.342.824-.509 1.612.468 2.172.391 1.168-.244 1.515-.702 2.004.689.001 1.484.619 1.838-1.303-.324-.69-.713-1.38-.434-2.071M18.04 40.572c.079 1.025 1.46 7.418-2.371 9.187M26.393 43.078c-1.5.17-4.577.26-6.415-2.205M20.546 44.113c.817 2.217 2.574 4.512 4.444 6.816M32.106 43.545l-2.172 7.618" />
        <Path d="M34.945 40.806c-1.264 1.081-2.997 5.54.568 8.051 1.476 1.173 4.288 1.04 4.277 3.174" />
        <Path d="M35.48 48.824c.618-.605 1.964-.802.501-2.572-.809-1.364.236-1.978.769-.836.338 2.363 1.357 2.921 3.474.568-1.403.438-2.43.337-1.804-2.138-.586-1.157-.951-1.099-1.37-1.336.88-1.388.417-1.922.401-2.74M26.126 31.251c-.699.283-.794 1.076-.334 2.339-.058.378.343.757-.2 1.136.511.864 1.093.13 1.068-.635-.488-1.04-.921-2.063-.534-2.84zM25.19 38.868c.014.902-.497 1.757.401 2.74.451.607 1.209.25.802-.2-1.07-.914-.953-1.709-1.203-2.54zM29.85 42.593c-.088.63-.24 1.232-.033 1.988.118.576 1.113.588.869-.033a29.276 29.276 0 01-.835-1.955zM35.88 50.695c-1.126.216-2.283.493-3.674 1.236M30.67 53.1c-.771 1.799-2.085 1.335-3.375.97M25.09 53.3c-1.604.207-3.207.49-4.81-.166M20.346 54.67c.144 1.46.889 1.641 1.737 1.604-.297 2.195.77 2.025 1.77 1.971.493.243.778 1.04.736 2.706.202 1.307 1.545.92 1.203-.267l-.502-1.57c-.227-.782-.17-1.298 1.103-.668-.054-1.202.516-1.068 1.069-.97.522-.582.498-1.073.501-1.57M23.42 55.138c-.106 2.024 1.078.85.968 2.472M34.478 53.668l-.368 2.673c-.19.71.733.844.936.033.18-.976-.354-1.809-.568-2.706zM22.726 65.607c-1.688-4.983-4.113-9.597-6.804-14.08M15.063 51.992l1.001-.937c.528-.539-.259-1.032-.661-1.276" />
        <Path d="M14.455 51.192c.91-.84 1.156-1.713.286-2.641-1.222-1.258-1.996-2.157-2.551-2.882-.294-.605-.525-1.171-.378-1.512-.027-1.204.143-1.747.236-2.551" />
        <Path d="M12.01 42.526l.719.685c.577.617 1.46-.027.785-1.286l-.618-1.12c-.776-1.009-1.94.078-2.122.335l-.935 2.506M10.925 40.722c-.51-.282-1.37-.288-2.005 1.22l-.919 2.756M9.087 41.424c-.639-.172-1.744.425-2.088 1.837l-.802 2.556" />
        <Path d="M6.966 43.278c-.78.057-1.182-.004-1.554.969-.239.882-.606 1.679-.601 2.723-.017 1.047.378 2.115 1.253 3.207" />
        <Path d="M4.71 47.32c-.528.522-1.262 1.276-.751 2.707.697 1.555 4.492 3.37 6.916 2.723M11.56 54.17c-1.325-.38-1.93-.758-2.373-1.136-5.55 3.67-3.916 9.538-2.472 12.461M10.323 53.802c1.41 2.607 2.206 7.54 3.208 11.693" />
        <Path d="M7.951 55.773c-.39.931-.767 1.992 0 3.809-.175 1.046-.278 2.093-.1 3.14.384 1.323 1.57.675 1.203.033-.246-.472-.59-1.265-.501-2.472-.287-3.116-1.078-1.006-.602-4.51zM14.065 55.84l.835 1.503M16.003 58.279l1.002 3.04M39.404 50.583c.972-.176 2.068-.656 1.7 2.457M41.01 50.866c8.126-1.59 8.588 11.596 9.214 14.741M38.554 58.378c.62 2.21 1.467 4.52 3.212 7.23-.616-2.183-.828-4.163-.945-6.096M25.702 65.465c-.41-2.57 2.394-1.57 2.315-.141M30.333 62.253c.297 1.061-.105 1.51 1.086 3.354M32.459 63.056l-.19 2.504M37.136 65.513c-1.184-2.248-.736-3.226-.898-4.678.04 1.536-.537 2.455.284 4.772" />
        <Path d="M43.94 55.402c.19.803.564 1.352.472 2.551-.055.917.764.616.756.19-.13-1.426-.746-1.961-1.228-2.741zM47.838 57.008c-.69.54-.998 1.619.236 1.701-1.432.493-.41 1.791.614 1.465M47.365 53.843c2.024-.825 2.193 1.363 1.016 2.126" />
        <Path d="M49.09 55c.986.392 1.459 1.398.33 2.363 2.054 1.1.783 3.646.237 3.945" />
      </G>
    </Svg>
  );
}

export default Fig25;