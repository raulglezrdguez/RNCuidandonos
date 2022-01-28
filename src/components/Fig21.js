/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function Fig21(props) {
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
        <Path d="M39.99 26.908c.444-3.654-2.55-8.486-3.207-10.023l-2.706-5.044c-.788-2.81-2.097-2.7-3.308-3.14-4.825-1.952-7.64-1.463-11.359-2.072-1.606-.385-3.119-.58-4.109.267a55.953 55.953 0 01-3.274 1.637c-.404.49-.84.98-1.37 1.47-.763.915.165.803.435.501.317-.228.631-.447 1.035-.935.602-.23 1.203-.304 1.804-1.036 2.353.078 2.965-.394 3.675-.835" />
        <Path d="M11.091 10.54c-.459.486.16.577.473.32.48-.273.918-.576 1.18-1.004.782-.336 1.654-.59 2.139-1.193M11.717 10.836c-.193.321.152.472.839-.118.499-.178.871-.37 1.087-.579M14.351 9.159l-.508.732c-.903 1.29.602.587 1.11-.153 1.25-.34 2.655-.61 3.308-1.217M17.84 8.867c4.17 1.467 8.559 3.395 12.06 3.441M30.435 11.106c-.654.708-.292 1.588-.033 2.605.828 3.145 2.229 7.18 3.641 10.49 2.33 2.015 4.309 2.83 6.014 2.707M25.608 20.44c-1.921.33-3.843.294-5.764.188-2.108.753-1.752-.96-.52-.827M19.324 20.888c-.87 1.695-3.115.565-1.677-.827M27.474 21.313c-2.908.894-5.075-.096-8.48.19" />
        <Path d="M25.537 21.715c.497.314 1.098.8 2.457.094.836-.11 1.677-.25 2.575-.732.215-1.043-1.198-.7-1.465-1.323M26.907 20.58c.777-.18 1.625-.543 2.528-1.039.24-.439.137-.741-.567-.803-1.087.612-2.592.995-4.37 1.229M26.482 18.88c-1.893.648-4.03 1.003-6.237 1.276M29.033 18.62c-.155-.47-.269-.986-.85-.969-1.223.636-2.326.973-3.426 1.3M25.348 16.588c.827.25 1.66.268 2.858 1.04-.609-.731-.278-1.898-2.48-1.89-.82-.294-1.83-.02-2.764.024-1.009.172-1.91.452-2.48 1.063l-2.552 2.338M26.104 18.03c-2.443-1.195-4.074.047-5.788 1.039M21.308 17.226c-.716.372-1.433 1.02-2.15 1.701" />
        <Path d="M19.726 19.21c-1.225-.728-1.784-.28-2.197.426-.625.2-1.692.601-1.11 2.268 1.094 1.232 2.191.057 2.314-.237M16.584 20.014c-1.168-.491-2.71 1.769-.567 2.646M16.371 22.045c-.812 1.673.829 2.434 1.748 1.489" />
        <Path d="M17.883 22.494c.375.82.579 1.638 1.3 2.457-.116.399-.103.718.283.803.217-.428.056-.657-.26-.803M18.639 24.03c.272-.552.752-.808 1.24-1.051M20.02 24.337c.056.21.167.32.379.248.493-.767 1.22-1.106 1.89-1.547-.768.255-1.559.193-2.268 1.299zM20.848 24.739c.76.17 1.474-1.023 2.681-1.182-.25.86-1.123 1.406-1.276 2.221M21.698 24.585c.11.287.193.586.638.72M22.289 24.207c.167.108.331.222.437.484M24.332 22.943l.803-.26M24.545 23.51l.992-.236M22.773 25.849c.446.145 1.07.11 1.701.07M19.513 25.802l.543.543c.285-.541.592-.894 1.063.118.056.874.106 1.744-.023 2.433 1.358.141 1.492.428 1.63.756l.732.047-.07.875c.504.067.864.375 1.18.756 1.447.77 1.872-.347 2.552-.993l-.142-.968M27.238 30.077c1.043-.598.906-1.418.992-2.197M20.269 26.156c.276.586.551.688.827.85M22.253 28.613c.292-.212.583-.316.874-.213M23.67 28.33c.133-.443.118-.847-.684-1.04M24.19 27.526c.74.35 1.494.801 2.174.732" />
        <Path d="M25.466 28.211c-.6 1.065-1.145 2.638-1.984 1.488.661-.197 1.323-.95 1.984-1.488zM20.458 26.723c-.399.229-.409.798-.307 1.465.016.726-.046 1.3-.898.354-.054 1.124.394 1.3.898 1.37.364.439.34.933-.614 1.56.025 1.108.777.701 1.086 1.511.472-1.214.747-.944.969-.283-.21.622-.505 1.244.26 1.866-.392.655-.798.924-1.252-.047-.375 1.85.947.905 1.417 1.795M30.45 21.195c.412.03.888.012.568.59-3.377.908-2.905.329-3.756.26M31.041 21.786c.426-.063.919-.306.922.78-.042.598.377 1.433 1.204-.402" />
        <Path d="M27.734 22.21c-.461.306-1.017 1.609.402 2.174.746.319 1.05.95 0 2.008-.235.365.094.94 1.086.33.317.866 1.085 1.12 1.678.78.243.532.406 1.018.212 1.3.429-.34.76-.192 1.063.094M29.6 28.14c.457.862.33 1.796.307 2.717M26.742 30.833c.575.268 1.15-.146 1.724-.52M27.167 30.928c-.11.596.535.292 1.228-.071M27.19 31.377c-.245.448.625.4 1.087.496" />
        <Path d="M36.924 34.14c-1.546-1.957-3.422-3.936-4.087-5.834l-.638.59c-.64 1.382-1.088 2.738-2.008 4.134-3.498 4.302-3.907-.023-3.331-1.228-.309.354-.682.683-1.488.85-.024.599.244 1.197-.355 1.796M33.144 30.054c.42.85.942 1.901 1.488 3M33.876 29.038c.65.977 1.507 1.984 2.599 3.024M32.742 28.188c.151-1.217.089-3.074.827-2.528.563 1.18 1.057 1.614 1.56 2.126M33.64 25.754c-.19-.438-.193-.707.307-.52.624.678 1.046.882 1.488 1.135M34.041 25.282c-.398-.553-.276-.875-.118-1.181M29.6 35.18c-.73.365-1.182 1.007-2.551.732M26.222 33.88c.036 1.136.073 2.272.662 3.592M25.419 32.7c-1.617-.457-1.399.37-1.323 1.819M24.001 33.29c-1.915.576-.171 1.834.213 5.127M23.364 34.944c-1.232.664-1.977 1.66-.095 4.441" />
        <Path d="M22.182 37.165c-.48.96-.934 1.895-1.535 2.976 1.14 1.415 2.119 2.19 3.071 2.859M24.214 39.55c-1.263 3.11-.193 6.33 3.969 5.835M31.207 40.85c.903 2.855 4.47 3.807 6.992 1.417M33.829 43.496c-2.037-.382-3.245.479-4.418 1.393M21.214 40.944l-1.252 3.969c-.436.96-.17 1.921.59 2.882l3.544 5.48M24.238 44.11c-.11.614-.41 1.165-.898 1.653M21.946 45.622c2.41-.464 2.47 3.741 3.71 5.291M27.498 45.55c.1.254.036 1.08 1.795 1.04.83-.284 1.695-.657 2.22-.212M32.459 46.023c-2.111-.361-3.672-.318-5.386.567" />
        <Path d="M32.033 47.83c-1.439-.99-3.134.07-4.7-1.098-1.134-.545-.747.922-.473 1.228.578.746.863 1.811 1.098 2.93M26.754 47.996c-1.202 1.13.05 2.42.035 3.839" />
        <Path d="M26.21 49.921c-.171.731-.502 1.342-.791 1.985.716.25 1.452.512 2.126.52.581.017.632.732.106.779-1.018.066-1.707-.198-2.421-.437M27.651 53.217c1.045.042.88.9.177 1.004-1.221 0-2.12-.181-2.775-.496" />
        <Path d="M27.817 54.22c.225.426.062.812-.662.816-1.3-.137-1.814-.38-2.209-.65" />
        <Path d="M26.813 55.012c.324-.01.622.47-.118.65-.632-.093-1.103-.057-2.02-.378-.359-.093-.736-.143-.697-1.122.203-.525.36-1.169.437-2.008.32-.538.73-.84 1.24-.874M24.994 55.544l-1.04 5.953M32.175 53.323c1.241.595 2.429.601 3.544-.189M38.648 50.252c.644-1.008.927-2.016 1.134-3.024M35.813 46.897c3.268-2.404 3.202-4.216 3.78-6.142M38.648 36.503c1.917 2.105 1.877 4.544 1.228 7.087M41.2 43.826c-.01 2.41-.094 4.82-.662 7.23" />
        <Path d="M27.356 55.071c4.572 2.775 8.783 2.822 17.67-3.26.466-.668 1.345-.813.284-3.118-.883-1.607-1.342-3.213-1.748-4.82M34.207 57.953c1.455 3.462 2.52.137 4.016-.945M35.577 59.607c-.262.868-.91 1.572-1.465 2.315M36.144 59.276c-.18.708-.08 1.522.094 2.362M45.736 54.203l.335 3.207M46.204 58.312l.167 2.238M46.438 49.893c.848 3.173 2.29 4.668 1.737 11.793" />
        <Path d="M46.739 50.661c.54-.827.232-1.05.2-1.47-.259.309-.286.579-1.035.97M46.973 49.192c-1.217-2.497-2.729-4.192-3.742-10.09-.106-1.365.25-4.125-.869-4.744.444-1.36-.01-2.683-.568-4.577-.454-2.36-.97-4.632-2.038-6.114M39.957 27.008c.396 2.613 1.564 6.185 2.305 9.288" />
        <Path d="M40.692 27.81c.004.3-.033.601-.468.902-1.28-.379-1.656-.757-2.272-1.136M60.5 36.976c-.798 1.349-4.347-3.985-6.52-5.977-.495.174-.911-.433-1.347-.85h-.732c-.51.015-.577-.48.023-.544l.686-.189" />
        <Path d="M51.594 29.688c-.257-.031-.495-.198-.72-.45-.216.031-.422.099-.698-.082-.498-.204-.4-.452-.059-.484.83.081 1.47.258 1.89.78" />
        <Path d="M54.216 30.42c-.526-.133-1.086-.616-1.642-1.051-.117-.26-.124-.52-.72-.78-.268-.134-.577-.31-.874-.472-.452.111-.935.037-1.418-.036-.31.021-.436.49.307.579" />
        <Path d="M49.574 28.07c-.725-.11-.699-.505.035-.52l1.937.035c.597.155 1.181.185 1.82.803.554.225 1.114.516 1.712 1.182 1.89 1.538 3.705 2.777 5.676 4.638.427.414 1.485.789 1.754 2.923.306 2.336.624 4.63.801 7.484-.072.356-.165.697-.5.835-1.092-.357-2.183-1.265-3.275-1.988.136-2.408.146-4.255.2-6.298" />
        <Path d="M59.551 41.558c-.182-.23-.213-.612-.635-.602.429-.256 1.206-1.11-.083-1.72.59-1.07-.517-1.666-1.704-2.072" />
        <Path d="M57.88 37.298c.186-1.162-1.912-1.784-2.505-1.052-.741-1.323-2.6-.963-2.823.3-1.31-.588-2.473.75-2.239 1.57-1.22-.214-1.307 1.295-.668 1.654-.454.295-.709 1.318.401 1.37.32-.864.094-1.488 1.821-2.973" />
        <Path d="M52.1 37.398c-.203.63-.301 2.11 1.571 1.554.302.495 1.269.944 2.122.016-.404 1.352.106 1.47.567 1.654-.454.391-.668.99-.183 1.12-.094.503-.598 2.044.852.885 1.196-.329.85 1.71-.435 1.67-.097.397-.42.744-.918 1.052M51.6 40.054l-1.053-.016M53.003 40.405c.495-.041 1.11.34 1.687.585M54.423 41.858c-.5-.424-1.048-.606-1.637-.584M53.922 41.691c-.172.432-.97.258-.852-.3M50.213 41.023c.37-.065.668-.256 1.203-.033.231.201.162.523-.05.902l-.485.802c-.001.442.074.97.836.735.36.37 1.086.14.534-.535M51.115 41.04c.017.725-.669.525-.668.067" />
        <Path d="M50.013 41.224c-.592 1.462-.392 2.086-.25 2.772.468 2.32.305 2.934 3.758 2.189M57.28 43.111c-.089.213-.14.432-.485.601" />
        <Path d="M50.614 44.397c.805-.257 1.218.434 2.272.385-.466.19-.803.44-1.777.39-.86-.068-.212-.362.012-.72M52.92 44.514c-.065.256-.06.519.317.819M56.578 44.275c.004.669.01 1.331.26 1.63.79 1.158-.66 2.678-2.15 4.205-.677.71-1.91 1.377-2.315-.047.21-1.7.377-2.693-.047-3.638" />
        <Path d="M52.562 47.559c-.682.166-1.43.914-2.173 1.63-.841.217-.576 1.195-.449 2.079M49.822 50.11c-1.522.073-.635 1.953-.543 3.237M48.924 51.291c-.376.973-.657 2.202-1.205 2.717M55.374 50.323c-.936.728-1.614 2.171-3.379.59M51.806 51.41c.482.764.76 1.327 1.583 2.433M53.862 55.59c.807 1.307 1.554 2.974 2.173 5.41M55.326 57.174c.536 1.277 1.071 2.44 1.607 4.134M50.483 53.536c.881 1.43 1.155 4.954 1.489 8.268M51.617 58.45c-1.652-.07-2.618-.46-3.33-.97M51.121 58.426c-.191.888-.279 1.793-.827 2.622M49.137 61c1.396-.138 1.561.491 2.008.946M56.885 45.858c.389-.258.758-.665 1.205-.449M58.35 46.118c-.324-1.152-.296-1.858 1.252-.638M58.94 44.937c.055-.829.307-1.066.473-1.56M63.311 44.606c.82.273.272 2.477.095 4.158-.199 4.724.38 8.583 1.819 11.48l-.733.379M63.028 55.662c.617 2.423 2.623 5.845.354 6.19M62.39 54.457c.276 2.08.49 4.14.33 6.095M61.964 59.182c.281.685.18 1.37.237 2.055M62.815 45.527c-.024 1.733-.214 3.498.047 5.174" />
        <Path d="M61.681 48.126c.378.142.756.48 1.134 1.063.189-.255.378-.36.567-.496M20.58 42.81c-.947-.051-1.893-.199-2.84-1.302a2861.8 2861.8 0 01-1.837-6.532c-.256-.665-.53-1.885-.1-2.255" />
        <Path d="M15.535 33.623c-2.998.06-5.829.127-7.951-.601-.269.408-.73.701-1.57.802l-.335.6c-.124.298-.751.715-.701-.2l.334-.801c.78-.143 1.227-.524 1.57-.702M4.928 34.592c-.443.09-.757.394-1.07.701-.287.474-.918.362-.233-.718.389.015.604-.259.868-.45.187.142.343.106.485-.018" />
        <Path d="M3.29 35.344c-.216.18-.434.463-.65-.084.184-.177.103-.66.317-.852.423-.243.846-.399 1.27-.935.255.031.387.16 1.018-.1" />
        <Path d="M2.623 35.227c-.277.756-.574.301-.485-.2.104-.629.357-1.102.902-1.554.514-.418.92-.835 1.637-1.253.408-.406.997-.707 1.938-.802 2.68-.44 5.689-.505 8.67-.601 1.073-.226 1.955.227 2.539 1.737l3.09 7M17.67 41.582c-.317.93.429 1.578 1.016 2.268M17.789 42.858c-.818 1.128.085 1.553.566 2.15" />
        <Path d="M17.505 43.968c-.605-.059-.742.508-.992.921l-.449-.212" />
        <Path d="M16.584 44.913c-.411 1.807-.69 3.741-2.315 4.394-2.547-.103-2.896-2.083-3.355-2.599.486-.883-.511-1.324-1.04-1.89-1.345.052-2.036-.28-1.559-1.299.3-.29.64-.393 1.064-.118 1.258.528.147-1.124 0-1.89.123-.807.48-1.264.85-1.7-.063-.607-.387-.953-.827-1.182.824-.401 1.639-.782 2.339-.874.65.016 1.378.189 1.606-.638 2.276.835 1.885 1.225 2.008 1.701-.933-.112-1.295.284-1.677.662.25 1.347.62 1.91.992 2.456.244.213.482.855-.26.71-.254-.118-.327-.008-.33.188M12.615 39.905c-.851-.077-1.255.367-1.748.709" />
        <Path d="M11.127 41.558c.489-.412 1.083-.988 1.795-.637-.213.76-1.016 1.101-1.063.496M14.174 40.117l1.323-.401M14.741 40.047c.088.442.345.595.874.283" />
        <Path d="M15.379 38.818c.204 1.151.408 1.422.945 2.386.516 5.383-2.754 4.5-3.048 4.536M15.733 43.212c-.559.816-1.59.754-2.575.78M13.217 43.448c-.17.347-.195.693.012 1.04M15.268 38.066c-.502-.899-.968-1.828-2.205-2.121M13.263 36.797c.178-.824-.387-1.112-1.32-1.136" />
        <Path d="M12.578 36.847c-.074-.958-.788-1.31-1.703-1.47.256.429.636.858.517 1.286-.111-1.02-1.066-.799-1.904-.751.399.203.9.268 1.052.801-1.006-.596-1.547.047-2.171.468l.835.2c-1.848.349-2.047 1.687-2.305 2.556.32-.181.507-.596.985-.5-.492.315-.78.748-.651 1.419.217-.163.434-.505.651-.3-.385.236-.616.61-.6 1.202.188-.263.378-.32.567-.317-.284.26-.475.623-.317 1.37.117-.216.126-.585.534-.385-.327.209-.356.583.117 1.236M8.87 43.78l.368.417M10.841 46.67c-1.191.142-1.355 1.038-1.22 2.154M9.505 47.671c-.362.104-.672.278-.769.735.432.342.44 1.247.635 1.905M8.72 48.39c-.945-.506-.553.526-.702.935-.135 1.736-.39 3.351-.969 4.644 1.335 1.097 2.616 1.269 3.91 1.654M7.617 54.487c-.775 1.062-.81 2.614-1.336 3.775.69 1.8 1.388 3.299 2.121 3.642M10.54 55.606c-.832 1.917-1.427 2.566-1.904 2.572M9.254 57.945c.53.69 1.058 2.086 1.587 3.14M9.689 51.864c.93 1.989 2.098 3.369 1.186 10.073M22.49 50.677c.314 2.707.665 5.488 1.228 8.694-.283.445-.62.561-.945.756" />
        <Path d="M22.82 57.339c-.234 1.502 1.4 3.874-2.976 3.449l-2.552 1.087M21.025 54.835c-.297 1.614.119 2.6-1.56 5.433M19.797 57.386c-.51 1.357-1.127 2.639-2.08 3.686M15.166 50.96l1.607 5.812M14.269 51.055l1.323 4.82M22.768 60.25l.551 1.587" />
      </G>
    </Svg>
  );
}

export default Fig21;
