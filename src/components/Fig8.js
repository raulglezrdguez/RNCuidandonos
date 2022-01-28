/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function Fig8(props) {
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
        <Path d="M8.486 24.57c.299-.58.09-1.159.067-1.738-7.864-11.536 10.07-17.276 11.359-5.279" />
        <Path d="M10.758 22.565c-2.584 1.527-2.56-4.335-.802-2.236l3.608-.704.134-.869 2.94-.534.4.668c.447-.278.845-.764 1.47-.267l-.066-.669 2.205-.467.267 2.405-2.005.468-.4-1.604" />
        <Path d="M17.172 18.957l-.067 1.937-3.34.869-.201-2.205M17.222 13.919c-.61.924-1.93.73-2.93 1.04M16.253 15.643c-.898-.203-1.795.395-2.693.638M18.426 14.793c-.417.01-.834.22-1.252.543M19.584 16.234c-.635-.062-1.207.063-1.654.567.029.173-.135.314.236.543.524-.357 1.028-.577 1.489-.496M15.686 16.801c-.929.205-1.88.388-2.504.898.17.378.319.812.732.52.518-.436 1.167-.643 1.937-.638.286-.298.111-.545-.165-.78zM11.198 22.872c.169 2.237 1.413 2.266 2.693 2.22M14.717 24.88c1.556.998 3.117 1.864 4.796-.78 1.448-.936.727-2.515.59-3.92" />
        <Path d="M18.686 22.636c-.5 2.158-1.598 1.175-2.575.827.869-.442 1.764-1.312 2.575-.827zM18.852 20.32l.189.78c-.529.306-.694.394-.922.52M14.528 20.32c.651.108 1.279.051 1.867-.283M19.064 19.376c.395-.065.866.047 1.087-.425M14.387 25.849l-.638 1.323M17.239 25.839c-.417 1.35-.695 2.938-1.704 3.274-3.167-.663-7.255-3.672-7.183-4.477-1.362.865-2.908 2.097-4.443 3.308-1.081 2.426-1.892 5.168-2.439 8.218 2.323.777 4.756 1.334 7.784.702-.783-2.842.14-6.674-3.107-8.085M4.544 28.812c-.73 1.597-.65 3.888-.802 5.98" />
        <Path d="M5.011 26.941l-.367-2.038-1.437-.233-2.071 1.27.768 7.683" />
        <Path d="M4.577 24.903L2.94 26.04H1.203M3.007 26.006l.367 3.14M2.138 36.596l3.074 18.375M3.274 36.797c.088 4.046.152 8.135 2.205 8.62 3.284 1.174 9.692-.189 14.767-.468 1.937-.71 2.689-.392 2.74.534.22.043-.247 1.635.868-.334.287.234.621.874.668-.935.262.178.652.632.067-1.003l-1.337-1.403c-.517-.569-2.478.27-4.276.2-3.89-.163-10.566-2.555-11.56-.4M8.724 36.959c.111.79.504 2.073 0 3.855M9.827 33.526c.898 2.16 1.796 4.212 2.693 5.009M15.686 29.652c.872.57.775 2.301 1.087 3.544M18.899 33.999c.093 2.393.368 4.864-.378 6.898M6 45.716c.398 1.355 1.02 2.709.71 4.063 2.483-.296 3.525-1.186 3.873-2.362M6.804 53.134c-1.567-4.46 1.73-3.397 4.677-4.3" />
        <Path d="M15.45 45.338l-10.442 9.97c-1.935 1.537.479 5.591.756 8.41M18.843 25.037c2.461.691.987 4.955 2.472 7.417l-1.67.935M19.544 29.38c.235 3.475-.221 6.95 1.136 10.424M20.513 33.022c.297.756.323 1.459-.267 2.038 1.005-1.169 4.77-1.17 7.216-2.339l2.238.067c1.586.02.717.403-.033.768l-1.236.1" />
        <Path d="M28.698 33.623l.234 2.573c-.676.174-1.05-.02-1.637-.735M27.662 35.895c-2.424.924-4.733 2.315-7.316 2.606M28.43 32.62l-.1-2.572c1.326-1 2.651-.878 3.976-.1l.2 2.94c-.626.63-1.199.94-1.737 1.036-.21.273-1.286.625.301.735-.434.339-.803.67.334.835-.37.415-.735.828.2.635-.156.275-.984.848.335.467l1.303-1.002c-.012-.906.115-1.765-.401-2.84l-.334-.5M28.264 30.182c1.524.513 2.94.618 4.109-.2" />
        <Path d="M32.273 31.385c-1.311.732-2.553.562-3.775.234 1.078-.388 2.254-.554 3.775-.234zM32.473 33.99c-.405.31-.792.65-1.37.702M32.707 34.759c-.412.337-.824.756-1.236.668M32.774 35.46c-.5.334-.87.536-1.103.602M27.629 32.654l.802-.969M28.965 36.129c.733.733 1.553.683 2.372.634M22.517 38l-3.808 3.808M23.445 41.907l3.6-4.053 9.17-.389c.266.278.742-.142.668 1.27l-3.007 9.154c-.296.58-.36 1.289-1.737 1.27l-12.562.467c-1.594-.172-.92-.736-.801-1.203l1.737-2.272c-.636-.313-1.148-.647.134-1.27M23.057 43.732c.384.313.928.429.78 1.394M23.67 43.165c.36.207.736.377.851 1.134" />
        <Path d="M24.545 43.07l1.653-.614c1.02-1.265 2.772-1.526 3.142-.449.37 1.077-1.65 2.113-2.834 1.3l-1.725.637M20.552 46.141l2.268-.944" />
        <Path d="M24.221 42.176c5.65-6.442 10.36-2.146 10.09-.034-1.64 6.856-9.802 7.922-11.259 4.076" />
        <Path d="M24.555 42.844c2.65-4.172 8.447-3.969 8.52-.702.054 3.502-6.799 7.039-8.887 3.408" />
        <Path d="M27.83 45.283c-1.008.022-.691-.783-.134-.97.417-.006 1.135.735.133.97z" />
        <Path d="M29.14 44.898c-1.007.023-.69-.783-.133-.969.417-.006 1.134.734.133.97zM30.71 44.631c-1.007.023-.69-.783-.133-.969.417-.006 1.135.734.133.969zM30.443 43.662c-1.007.023-.69-.783-.133-.969.417-.006 1.134.734.133.97zM31.345 42.86c-1.007.023-.69-.783-.133-.969.417-.006 1.134.734.133.97z" />
        <Path d="M30.644 42.192c-1.008.023-.691-.783-.134-.969.418-.006 1.135.734.134.97z" />
        <Path d="M31.713 41.624c-1.008.023-.691-.783-.134-.969.418-.006 1.135.734.134.97zM32.28 43.295c-1.007.022-.69-.783-.133-.97.418-.006 1.135.735.134.97zM31.713 44.364c-1.008.023-.691-.783-.134-.97.418-.006 1.135.735.134.97zM28.906 46.335c-1.007.023-.69-.783-.133-.969.417-.007 1.135.734.133.969zM66.524 63.576c-.054-2.948 1.145-5.36-.473-8.977l-28.82.756M35.53 55.355l-30.144.756M16.631 54.126l-1.323 1.701c1.416 3.118 1.692 5.665 1.606 8.032M35.813 56.489c1.025 3.134.65 4.87.756 7.087M36.38 55.827c2.018 2.614 1.803 5.229 2.174 7.843M52.822 28.33l-21.639.66-.263.307M56.79 28.424h.946l8.599 26.458M58.02 35.936c0 1.271-4.313 1.034-6.285.52-.741.41-1.652 1.025-.566-.756 2.879-1.31 6.638-.625 6.85.236z" />
        <Path d="M51.547 36.645c.39 1.353 1.49 2.325.377 4.488-1.34 2.89-.572 4.935 1.229 6.568 1.59.453 3.181 1.13 4.772-.237 1.819-1.287 1.847-2.873 1.417-4.535" />
        <Path d="M56.933 37.212l1.984 1.086c.445.269.52.88.52 1.654l.141 2.032c.043.744-.05 1.184-.661 1.275l-1.69.303c-.584.1-.617-.588-.2-.728l1.087-.33c.352-.11.623-.297.614-.851l-.236-1.795c-.047-.61-.154-.94-.567-1.182l-1.229-.472c-.622-.225-.173-1.169.237-.992z" />
        <Path d="M57.714 40.171c-.272-.807-4.36-.814-4.828.184-.336 1.036 4.706 1.402 4.828-.184zM58.098 35.845c.627.09-.003 1.106-.134 1.754M57.897 38.768c-.075.812-.019 1.528.568 1.854M52.917 41.842c-.271 1.142-.664 2.235.897 4.11M54.996 42.078c-.654 1.717-.057 3.433.378 5.15M58.728 43.874c-.427 1.704-1.403 2.45-2.315 3.307M53.625 47.04c1.305-.786 2.68-.727 4.11 0M48.853 45.622c-.33 1.048-.652 2.098-1.842 3.024-2.388.435-4.668.493-6.804.047-1.27-.96-1.556-1.922-2.126-2.882" />
        <Path d="M36.9 42.976c.067 1.418.291 3.144 3.874 3.543 1.527 2.278 4.826.697 5.386-.141 2.73-.263 4.245-1.457 4.583-3.024" />
        <Path d="M45.074 42.55c.445.028.883.078.897 1.276.596.627 1.074.555 1.418-.33.618 1.372.916.566 1.228-.142.967 1.099.966.261 1.229-.047.926-.015 2.028.093.945-1.323 1.647-.363.862-1.03.047-1.701.758-1.52-.215-1.176-1.04-.992-.204-1.323-.724-1.323-1.559 0-.44-.237-.882-.887-1.323.425-1.115-.561-1.074.468-1.228 1.228.155.746-.014 1.302-.614 1.607zM46.444 42.362c.957-.791 1.745-1.751 3.543-1.701M46.373 41.346c.367-1.317.662-.545.969-.118" />
        <Path d="M47.365 42.267c.492-.275.927-.697 1.843.118.132-.327.045-.853.827-.59M42.664 43.425c-.772-1.82-1.033-1.598-1.181-.922-1.399-1.434-2.593-2.479-2.622-1.299-1.051-.06-2.61-.446-1.323.992-1.41.483-.81.76.212.993-.531 1.234-.082 1.292 1.276.26-.896 1.843.29 1.205.921 1.228.205-.588.401-1.197.85-1.11M41.86 43.165c-1.105-.33-2.3-.836-3.047-.449M39.971 44.795c3.017.556 6.08.612 9.284-.898" />
        <Path d="M41.176 44.795c.147-.927.689-1.3 1.464-1.347.89-.275 1.614-.817 2.788-.637.173.518.933.684-.354 2.078M41.932 43.708c.194.41.108.82.756 1.229M45.546 40.873c-1.565-1.485-4.19 1.224-2.197 2.127M44.696 40.26c-.77-3.28-4.259.926-2.197 1.558M42.664 39.314c-1.066-2.54-4.02 2.29-.874 2.174M44.294 40.684c.321.886-.302 1.004-.968 1.087M45.074 41.228c-.815-.009-1.223.27-.969 1.016M43.35 39.621c.058.693.184 1.456-.733 1.11M42.026 39.361c-.247.404-.468.97-.897.284M41.247 40.59c.247-.329.473-1.011.78-.402" />
        <Path d="M38.081 41.039c-.626-.362-.172-.725.378-1.087-2.343.393-.475-.517-.472-.85-.003-1.43.438-.994 1.063.212-.216-.969.083-1.527 1.748-.992-.84.43-1.703.86-.33 1.228" />
        <Path d="M40.09 38.18c-.158-.26-.895-.565.472-.708-1.151-.457-.447-.52.448-.544.131-.59.393-.858 1.087-.07.958-.914 1.266-.392 1.347.637.344-.12.581-.094.425.473M42.688 36.267c.513-.77 1.196-.645 1.96-.095" />
        <Path d="M43.42 38.842c.715-1.165 1.246-2.3 1.583-3.402.417-.55.834-.457 1.252.189l.236 1.748c-.708.964-1.53 1.356-2.362 1.701.59-.737 1.195-1.46 1.417-2.504M46.491 37.4c.378-.503.693-1.07.945-1.7.294-.435.585-.832.756.212.062 1.12.097 2.228-.827 2.977M47.389 37.094c-.466.995-1.27 1.75-2.174 2.433M41.27 37.637c.575.206 1.163.32 1.678.945M43.197 5.092c-1.008 1.028-.501 1.298-.334 1.737 1.112-.452 1.997-.933 3.776-1.303-1.273-.32-2.598-.715-3.442-.434z" />
        <Path d="M39.857 7.53c-.052 1.312-.015 5.283.5 6.65.109.816.14 1.708.936 1.837.636-.154 1.294-.24 2.105.133.85.008 5.63-3.095 3.34-7.483-.525-.574-1.36-1.211.602-1.27.826.273.82-.181.969-.5 1.384-.129 2.915 5.785-.668 7.884-.268.811-.578 1.081-.936.735-.217.23.13 1.349-.668.668.028.732-.357 1.288-.668.701-.19.901-.453 1.398-.902.401-.356.898-.713.877-1.07.535-.693.923-.824.158-1.102-.167-.307.542-.71.035-1.102-.368-.49.23-.98-.209-1.47-1.136-.78-1.124-.06-2.25.033-3.374-.177-1.78-1.047-3.525.067-5.279.763-1.031 1.823-2.04 3.202-2.275M46.304 5.46c1.082.349 1.814.898 2.272 1.603" />
        <Path d="M39.957 9.168c.675.102 1.096-.254 2.171.568-.15.807-.291 1.593-.701 3.007.085.587.68.287 1.102.066.354.052.94.607.501-.634M46.17 9.702c-.736-.217-1.492-.364-2.405.034M45.736 10.772c-.679-.384-1.358-.463-2.037-.134 0 0 .202.814.801.4.6-.413 1.236-.266 1.236-.266z" />
        <Path d="M41.594 10.571c-.532-.3-1.084-.441-1.704-.033 0 0 .691.245 1.136.4.444.156.568-.367.568-.367zM41.293 14.246c.84.13 2.22.487 2.606-.535-1.528 2.927-2.365 1.43-2.339.735M43.799 13.377c.072.367.444.658.868.936M47.941 11.54c1.663-3.03 1 3.027-.2 1.436l-.2 2.038M39.723 16.35c-1.247.714-2.531 1.352-4.043 1.538l-3.307 3.641c1.796-.177 2.923.448 2.94 2.406.414-.209.805-.324 1.303-.87M36.382 20.66c.146 2.835.253 5.846.568 7.918M32.44 21.596c-1.07.926-1.948 1.891-2.573 2.906" />
        <Path d="M30.736 24.636c-1.911-.465-3.68 1.34-5.512 2.138l-1.27-.467c-.255-.1-.911-.911-.835.701.057.483.499.718 1.102.635-.562.599-1.266 1.126-2.004 1.637-.463.62-.417.915.367.735-.662 1.119-.13 1.043.802.568.205.214-.03.961 1.336-.234-.208.597-.124.804.468.334l1.002-1.036c.936-.8 1.192-1.516.702-2.138M27.261 27.977c2.684-.769 5.386-1.086 7.985-3.976M24.422 28.545c-.493.468-.87.917-1.871 1.47M25.057 29.08c-.54.54-1.079 1.082-1.704 1.536M25.524 29.414c-.177.21-.332.399-.768.868M38.587 18.355c-.23 1.217-.335 2.413-.033 3.542M41.66 23.534c.153 2.088.484 3.286.903 4.042M47.54 23.033c.107 1.847.554 3.013 1.103 3.975M40.09 16.986c-.4.4-.6 1.002-.467 1.937l1.47-.3.1 1.102c.88-.08 1.76 1.57 2.64 2.439-.416-1.497-1.235-2.936-2.273-4.343M47.34 15.75l-.3 2.271c-2.446 2.34-2.586 3.142-3.275 4.31l3.308-2.54.167-1.335 1.203.735-.067-2.874c-.29-.581-.66-.6-1.036-.568zM48.476 16.35c.947.41 1.893.808 2.84 1.304.377.093.416.299 1.27.234.883.092 1.155.49 1.336.935 1.042 1.817 1.507 3.47 1.937 5.112-2.618-.953-3.11.434-4.042 1.336-.414-.474-.798-1.035-1.036-2.038-.438-.46-.866-.929-.868-1.737" />
        <Path d="M51.015 21.563c.085.585.151 1.178-.2 1.937-.04 1.551.067 3.03-.301 4.744M50.748 23.734c-.819-.095-1.33-.743-1.704-1.637" />
        <Path d="M55.258 23.8l1.67 5.513c.177.779.228 1.579-1.169 1.57-2.363.366-4.663.867-6.414 1.17-.878.176-1.756.272-2.372-.167-.52.069-1.074.005-1.337 1.102-.247.206-.572.934-.568-.534-.497.769-.457.197-.434-.334-.334.739-.387.216-.367-.635-.173-.151-.156-.507.384-1.103.292-.285.401-.52.985-.835.428-.181 2.518.556 4.176.034 1.424-.685 2.865-1.133 4.377-.669M51.95 25.204c.191 1.14.402 2.281 1.203 3.508" />
        <Path d="M46.07 32.153l1.003 2.071c.454 1.017-.123 1.223-.902 1.27M44.834 35.46l-10.824.435c-1.016.125-.913-.87-.702-1.971l1.136-.97" />
        <Path d="M44.2 31.017c-2.694-2.155-8.735-1.239-10.357.969 1.027 2.192 7.39 2.58 9.956.768-.327-2.837-7.115-1.651-8.42-.801" />
        <Path d="M35.547 33.456c.513.747-.485 1.393 4.076 1.236 4.104-.013 4.504-1.253 4.744-2.238" />
        <Path d="M40.157 32.153c.026.216.05.733.468.501-.13.618 1.74 1.087.935-.167.496.26.755.693 1.37-.067-.063-.527-.265-.915-1.47-.3-.698-1-.936-.275-1.303-.034-.64-.966-1.061-.621-1.436 0-.58-.481-1.146-.914-1.203.435-.081-.674-.624-.54-1.036-.635-.285.601-.36 1.073.501.969.956 1.054 1.168.539 1.337-.067 1.13 1.22 2.72.094.534-.568" />
        <Path d="M37.017 32.855c.365-.568.65-.65 1.27-.1-.036-.415.238-.519.6-.535.603.317 1.041.29 1.287-.15M40.625 32.587c.308.151.57-.152.835-.434M45.085 32.37c.035-.47.821-.973 1.604-1.136M44.634 32.237c.159-.645.459-1.329 1.37-1.353M44.317 31.485c.507-.535.942-1.26 1.837-1.236" />
      </G>
    </Svg>
  );
}

export default Fig8;