/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function Fig17(props) {
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
        <Path d="M10.82 23.7c-.817-.68-1.92-1.227-1.418-2.505M9.402 22.187c-.79-1.057-2.25-1.5-1.653-3.827M7.418 18.88c-.894-1.017-.963-2.505-.992-4.016M7.323 16.187c-2.018-1.467-2.216-7.04 4.11-6.993M10.583 8.958c1.308-1.571 2.615-1.413 3.922-.472M14.032 7.824c1.587-.311 3.133-.88 4.961.378 1.762 1.175 2.66 2.669 2.032 4.725-.237-.755-.535-1.198-.898-1.323" />
        <Path d="M19.01 9.335c1.548 1.396.856 2.619.534 3.675-.102-.91-.187-1.762-1.57-3.24.058 1.438-.248 2.648-.902 3.64.133-1.402-.283-2.255-.668-3.14-.54.797-1.193 1.463-1.136 2.94-.769-1.695-.276-2.358-.134-3.307-1.112.283-1.286 1.924-1.637 3.307-.3.983-.656 1.952-2.004 2.673-.3 1.113.068 1.557.167 2.272.01.715-.138 1.157-.836.635-.494-.347-1.67-.114-.701 1.77.445.46.89 1.357 1.336.568 1.054.992 1.495 3.059 3.508 2.372M14.065 9.101c-2.725.986-.657 3.441-2.64 5.613M11.359 11.24c-.957.782-1.349 2.034-1.236 3.708M10.357 10.671c-.937.652-1.835 1.37-1.203 4.811M20.914 13.01c.265.229.358.974.267 2.272l.2 1.102c.545.825.257 2.483-.166 4.276-.307 2.999-1.915 3.104-3.81 2.573" />
        <Path d="M20.98 13.344l-1.97.267c-.258.2-.176.401.1.602l2.038-.167M16.638 14.747c.136-.245.253-.49-.134-.735-1.163-.127-1.838.43-2.573.902zM21.148 15.449c-.582.079-1.204-.163-1.704.568.233.704.016 1.151.802 2.171.565 1.524-.156 1.169-.702 1.07-1.086.77-1.606-.595-.701-.669M21.315 16.15c-.073.563-.833.438-1.504.401M17.34 15.983c-1.53-.568-2.062.084-2.84.435M17.373 16.651c-.635.291-1.27.473-1.905.234" />
        <Path d="M15.92 16.384c-.204-.463.957-.84 1.085-.017.056.374-.984.68-1.086.017zM20.483 15.569c-.18.294-.272.596.033.935M20.546 20.176c-.126.81-1.22.888-3.173.317M14.316 17.353c-.426.158-.814.362-1.02.785M14.032 16.802c-.409.165-.821.302-1.186.768M20.413 21.429c-.564.214-1.13.4-1.738.134M17.44 19.859l-.218 1.303M10.557 19.274c.268.328.842 1.02.652 1.22-.306.196-.642-.33-.418-.585M10.858 21.496c-.006 1.638.33 3.515-.501 4.577 1.888 2.515 4.82 4.501 7.517 3.675.495-.343 1.4-.76.2-3.742-.411-.997-.086-1.809.568-2.54M12.862 24.402c-.014.914-.112 1.71-.568 2.005M16.103 26.14c-.038 1.24.294 1.835.601 2.472M10.256 25.972c-1.154.401-2.364 1.137-3.608 2.072-1.271.132-2.18.625-3.207 1.002-.79 1.471-1.502 3.811-2.205 6.247 2.038 1.094 4.064 1.992 6.014 1.504.25-1.324.293-2.776-.167-4.544M3.408 29.046c1.433-.521 2.147.006 2.606.902M6.548 28.01c.555.017.97.207 1.17.669" />
        <Path d="M1.437 35.394L1.27 44.48c-.026.894.174 1.563.902 1.704 1.202 2.52 3.62 5.213 6.581 7.984l1.67 2.573 2.272 1.002 1.604.067c.97.091.613-.56.35-.544-.746.055-1.575-.302-2.321-.492" />
        <Path d="M14.633 57.276c1.012-.1 1.43-.307.84-.83-.958.16-1.987-.098-2.945-.44M15.502 56.408c.54-.303.861-.61.167-.936-.98.175-1.96.103-2.94-.1" />
        <Path d="M15.602 55.472c.143-.312.649-.733-.468-.668l-1.804-.033a2.023 2.023 0 01-1.17-1.136l1.437.267c1.074-.479.152-.709-.267-.902-.39-.109-.646-.4-.969-.768-.646.09-1.292.072-1.937-.368-2.037-4.208-4.144-7.909-6.883-7.116M5.379 44.949c.91-2.47 1.31-5.23 1.603-8.052M3.59 48.693c-.412.587-.403 1.682-.188 3.024.036.59.321 1.106 1.606 1.323" />
        <Path d="M3.307 52.236c.013.477-.825.567.426 1.607.862.943 2.246 1.157 3.732 1.228" />
        <Path d="M3.355 53.748c-.335.22-.803.273-.662 1.087 1.037 1.181 2.25 1.133 3.402 1.512 1.717.97 3.433 1.123 5.15.709M3.071 55.213c-.627 1.22-.726 2.891-.472 4.866M18.19 26.061c1.268 1.12 3.953.73 3.544 3.638" />
        <Path d="M21.78 28.282c1.259.466 2.566.704 2.6 6.804l-1.938.425" />
        <Path d="M22.017 33.29c.465 1.276.605 2.552.567 3.827-.427 1.637-1.96 1.218-3.213 1.323M16.584 38.865c-1.238.202-2.785.972-3.83 1.04-1.332.131-2.029-.239-3.21-1.04M11.528 40.614c-.895.502-1.78 1.051-2.551 2.173M11.812 48.031c-1.566-.17-3.267-.272-4.11-.803M20.222 38.724c-.83.756-1.233 1.512-1.701 2.268M21.025 38.913c-.886.65-1.349 1.808-1.606 3.212" />
        <Path d="M21.923 38.015c-.18 1.349-.454 2.601.094 4.677.295 1.486.97 3.103-1.89 3.497M21.78 45.622l.52 1.559M23.813 35.37l.377 4.913M23.246 41.37c1.53-1.437 3.298-2.638 4.346-3.45 1.385-1.422 2.048-2.604 2.693-3.78l1.134-.519c.342.058.615-.255.992.307.632.247 1.871.39.426.992-.833.062-1.198-.228-1.276-.732.086.554-.342.64-.945.567M12.284 50.016c-.925-.145-1.112.226-3.165-.709M32.86 34.92c-.522-.354-.576-.708-.472-1.063M30.876 39.102c-1.918 1.096-3.628 3.648-5.433 5.528M24.734 45.48c-1.1.88-2.018.97-2.74.213" />
        <Path d="M30.663 33.81c.279-.876.043-1.538.993-2.693v-.709c-.58-.401-.31-.803-.095-1.205.654-.327 1.307-.23 1.96.071.393.458.26.857.095 1.252l-.023.52c1.138 1.113.948 2.049 1.228 3.047-.66 1.493-1.472 1.62-2.315 1.772-.555.726-.088.715.26.898.878.036 1.712-.456 2.528-1.488.16-1.112-.14-1.184-.473-1.182M33.664 30.55c-.662.11-1.323.132-1.985-.07M31.703 31.14c1.033.202 1.42.081 1.842-.023M31.49 29.392c.73.28 1.41.205 2.079.048" />
        <Path d="M35.364 35.298c.309.187.554.432.119 1.3-.604.557-1.421.954-2.528 1.133-1.079-.255-.517-.666-.355-1.039" />
        <Path d="M35.53 36.621c.082.234.422.241.047.874-.586.298-.992.725-1.984.733-.702-.018-.395-.31-.473-.497" />
        <Path d="M35.577 37.566c.062.16.285.188 0 .638-.506.38-1.117.498-1.748.567-.45-.128-.286-.333-.26-.52" />
        <Path d="M34.986 38.606l.048 1.913c-.484.336-2.419 1.294-4.04-.142l-.236-5.504M31.065 39.338c1.358.383 2.665.404 3.898-.095M30.781 35.842c.294.344.932.431 1.465.307M23.103 49.616c.945 1.167.406 1.604-1.053 1.88" />
        <Path d="M23.019 51.163c.826.606.801 1.637.568 2.773-1.512-.505-2.644 1.381-4.31 1.403M23.687 53.936c.28.607 1.128 1.743.167 2.505-1.852-.974-5.82.623-8.787 1.002M23.92 56.408l.602 3.374M15.735 57.377l.168 3.006M41.955 16.66c-1.132-.377-2.196-2.811.378-3.639-1.831.188-.883-2.65.567-3.213-.753.091-1.646-1.578 2.032-2.504.782-2.37 2.255-1.857 3.78-1.134M48.192 5.65c.978-.992 2.581-.85 3.118.331.205-.808 2.3-.634 2.315.662M52.964 7.21c1.478-.618 2.973-1.272 2.976 1.181M55.374 8.91c1.603-.654 2.749-.59 2.598 1.513M57.972 10.045c.988-.038 1.938-.035 1.323 1.653M57.925 11.226c1.838.752 2.272 1.705 1.465 2.835M58.586 13.541c1.773 1.241 1.28 1.767.709 2.268M58.256 15.1c1.639 1.539 1.872 2.588.614 3.118M58.208 17.462c.543 1.06 1.366 2.27.095 2.363" />
        <Path d="M57.641 19.069c1.274 1.954.565 2.026-.661 1.606-.69.783-1.277 1.896-2.693.378l-.473-1.842c1.222.286 1.3-.715 1.56-1.512.284-.906-.17-2.042-1.465-.898-1.761-.082-1.496-1.428-.33-2.173-1.701.479-1.428-.747-.804-1.56-1.095.676-2.075-.066-1.512-1.511-1.094 1.1-1.659-.114-1.37-1.087-1.059 1.277-2.847.896-2.93-.52-1.284 1.878-2.736.903-3.496-.472M53.72 19.163c-.395.978-.73 1.308-1.063 1.607M51.027 21.81c-.537.728-1.263 1.33-2.552 1.558" />
        <Path d="M48.995 22.423c-.778 1.809-2.977 1.313-3.78 1.087-1.05-.406-1.043-1.559-1.37-2.362-.674-1.254-.94-2.333-1.18-3.402M44.2 10.683c-.839 1.156-1.413 2.6-1.56 4.512" />
        <Path d="M43.066 13.328l1.275.048-.165.637-1.276.048M46.562 13.423c-.17.196-.267.403 0 .661.61-.125 1.343-.15 2.268-.023l-.59-.733c-.787-.157-1.266-.06-1.678.095zM44.081 17.77c-1.082.404-2.082.144-1.96-1.512.094-1.221 1.331-1.645 2.338-.615.552-.143 1.103-.23 1.654.308-.453 2.837 3.753 3.273 3.426-.024l3.165.26M46.184 15.927c1.031-1.916 2.947-.774 3.378.047" />
        <Path d="M44.46 15.738c.035.358.225.432-.52 2.788-.447.77.208 1.547 1.11.85 1.007.71 1.493-.326.496-.85M44.743 20.132c-.239.457-.434.901 1.3.803.635-.001 1.221-.253 1.795-.567-.77.558-1.056 1.553-2.386 1.607-1.154.067-.285-.635-.26-1.016M47.672 19.99c.112.366.418.634.78.874M47.129 16.092h1.37c-.54.864-1.018 1.085-1.37 0zM43.845 16.163c-.155.607-1.036.932-.945-.07zM47.941 23.7c-.099.61-1.062 4.955 2.907 5.98 1.461.136 5.32-2.88 4.844-5.612-.521-.705-1.004-1.678-1.436-3.007M47.908 26.574c1.334 1.222 2.125.723 2.94.3M48.209 25.538c.579.69 1.113.713 1.603.067M47.741 23.968c-1.4 2.033-3.51 2.5-5.512 3.207l-4.444 6.582 4.51 2.305M42.997 33.055c-2.245 7.035 1.588 7.786 7.216 6.682M48.91 39.035c3.262.045 6.798 2.823 10.424-.033" />
        <Path d="M43.064 39.069c.2 1.637.4 1.89.601 5.044.211.524.54 1.047 1.804 1.57M44.033 44.949c.184 1.143.214 2.365-.134 3.775M39.422 34.659c-.724 1.754-1.447 4.989-2.171 7.617M38.453 42.81c-3.029-1.268-6.294 1.481-9.488 3.007l-1.236.034c-1.501-.202-2.073-.79-2.405-1.303-.206-.545-1.012-1.073-.568.802l.501.567c-.335.39-.902.78-1.77 1.17-.974.266-1.773.182-2.573.1-.713-.156-.847.045-.401.601 1.176.048 2.33.231 3.207-.133" />
        <Path d="M20.546 47.788c-.586.012-.624.815.295.698 1.03.25 3.09.143 3.748-.597M21.664 49.178c-.059.835 1.068.414 3.552.387.658-.27 1.431-.814 2.714-1.042 1.123-.243 1.014-.865 1.019-1.453" />
        <Path d="M25.608 48.173c-.936.644-2.178 1.15-2.815 1.003-.501.052-1.064-.007-1.626.001-.512.086-.832-.474-.366-.661M27.913 46.402c-.58.048-.897.283-1.17.551M28.698 48.156c3.24-.466 5.975-.636 10.19-1.67 1.447-.071 1.519-.876 1.67-1.638.855-2.014 1.847-4.097 2.372-5.946M55.726 23.968l1.336 1.136 4.544 1.87 2.505 1.37" />
        <Path d="M62.775 29.08c.78-.893 1.559-1.717 2.339.701.544 3.552.818 5.845 1.102 8.185-2.067.622-4.068.318-6.047-.3a20.062 20.062 0 01.167-5.212M59.768 28.177c.434-.618 1.115-.927 1.904-1.102M55.325 27.275c.987-.594 1.468-1.333 1.837-2.104M64.98 38.3c-.426 2.707-1.21 5.19-2.138 7.584-.362.939-.46 2.062-2.205 2.038-3.282 1.823-7.453 2.34-11.66 2.806-1.7.682-2.955 1.837-5.58 1.537-.978-.358-1-.674-.534-.969.769.152 1.537.154 2.306-.133" />
        <Path d="M42.897 51.296c-.952-.278-1.228-.557-.668-.835.94.268 1.827.205 2.706.1M42.329 50.428c-.885-.53-.542-.855-.334-1.203.935.804 1.87.645 2.806.601M41.961 49.091c-.3-.701-.575-1.309 1.223-1.332.236.224.2.346-.42.865.431.608 1.281.297 2.004.267.77-.093 1.521-.195 1.737-.535l-.802-.568c-.934-1.463-.012-1.345.334-1.002l.602.635c.459-.051 1.04-.01 2.205.468 3.281-1.115 5.72-2.483 9.855-3.341M60.202 37.699c-.723 1.44-.899 4.31-1.37 6.849.276.198.573.483.936 1.035M49.913 42.41l2.605 2.74M54.456 42.41l2.673 2.271M62.574 46.987l.535 1.47M61.94 47.688c1.62 1.164 1.64 1.991 1.603 2.806M60.67 48.156c.762 1.313 3.598.508 3.709 7.05M61.606 51.931c.834 1.127 1.531 2.127 3.307 4.11-.759 1.007-2.208 1.415-4.21-.77-6.798 2.811-9.394.58-10.89-2.972M57.797 50.929c.634 1.146 1.306 2.312 2.64 3.808" />
        <Path d="M53.688 57.21c.392.308.5 1.375.635 2.372.205-1.109.314-2.444.768-2.974M52.184 55.64a9.18 9.18 0 00-4.643.2c-1.46-.255-2.942-.416-4.577.033-1.264-.069-1.76-.564-2.239-1.069-.62.434-1.273.869-2.505 1.303-2.827.2-5.4.273-6.816-.234-.607-.927-1.42-1.11-2.472-.434l-1.737.4c.422-2.335.998-4.624.568-7.215M30.034 48.857c-.139 2.21-.262 4.43-.835 6.381M31.504 48.958c-.014 2.235-.361 4.137.1 6.848M38.988 47.989c.143 2.48-.005 4.844.534 7.483M40.224 48.156c.12 2.175.069 4.21.601 6.715M27.696 55.84l-.234 3.975M34.277 57.343l.602 2.472M36.182 56.942l-.2 2.606M43.398 52.399c-.679 1.942-.293 4.816-.334 7.316M64.579 56.374c.235.722.48 1.412.367 3.174M27.71 45.693c-.024-1.123.218-2.024-.141-3.426M24.167 37.897c.968.602 1.937.273 2.906.165-.465-2.551-.583-4.882-.355-6.992M23.93 30.385c.56-1.237 1.071-2.473 2.056-3.71 1.003-.485 1.493-.344 1.96-.354M27.12 27.951l1.346-2.15c2.05-.15 3.996-.513 5.67-1.417-.154 1.342-2.304 4.19 2.386 4.843 1.87.217 3.504-.448 5.126-1.158M38.672 19.376c-.311 5.106-5.266 1.25-4.56-.118 1.45-.829 3.04-.794 4.56.118zM35.057 19.896c.882.091 1.79.305 2.552-.142" />
        <Path d="M43.113 19.541c-.134 1.155-.052 2.904-.898 2.103.096 1.08-.567.646-.921.827.076 1.257-.524 1.354-1.323 1.11-.398 1.383-.864.776-1.323.402-.413.86-.921 1.338-1.772.448-.503.301-.978.748-1.724-.165-.484.56-1.07.097-1.677-.59-.497-.227-.993.602-1.489-1.323-.926.503-1.078-.155-.874-1.347-1.425.26-.76-2.583-.364-4.336.236.62.44 1.775.79 1.596.045.544.168 1.004.897.803.195-.781.565-.858.945-.898.102-.893.652-.713 1.04-.921-.177-.459-.03-.723.425-.803" />
        <Path d="M42.262 17.557c-.529-.223-.69.105-.59.827-.58-.777-.56.243-.803.472-.246-.255-.457-.613-.945-.141.087-.874-.667-1.143-.803-.922-.16-.543-.842-.833-1.323-.614" />
        <Path d="M37.514 15.974c1.19.322.134 1.907-.354 1.04-.236-.564-.614-.744-.709-.402M35.813 17.06c-1.452-.293-.954-1.838.142-1.653" />
        <Path d="M35.459 15.43c.106-.713.257-1.567-.756-2.078-.567-.204-1.512-.236-2.268-.047l-.496.401" />
        <Path d="M34.183 13.447s-.01.74-.708.732c-.699-.008-.686-.78-.686-.78M36.97 13.376c1.272-.505 2.109-.303 2.883 0" />
        <Path d="M37.727 13.281s.02.863.685.827c.664-.036.732-.78.732-.78M30.758 16.494c.31-.345.634-3.497.78-5.693.397-.758-.044-3.072 1.984-3.048.776.243 1.47.689 3.803-.165 3.165.019 3.974 1.054 4.134 3.496" />
        <Path d="M30.994 15.927c-.894-1.894-1.016-2.946.165-2.575-.226-1.237-1.58-1.823-.354-3.898-.631-.175-.589-.901-.543-1.63.307.323.614.702.921.354-.884-2.633 1.554-3.09 2.244-1.204-.497-1.465.252-2.312.969-1.607-.122-.883.918-1.162 2.079-.189.385-1.077 1.3-.63 2.173-.307 1.367.886 1.718.147 2.173-.425.46.317 1.137.526.638 1.323 1.138-.268 1.713.134 1.843 1.063.442-.08.873-.132.945.59" />
        <Path d="M31.514 12.572c.992-.223 1.984-.426 2.976-.401.148-.316.15-.59-.141-.78-.969-.024-1.938.136-2.906.614M37.113 11.439c.014.204-.214.409.26.614.79-.064 1.563-.135 2.905.047-.097-.618-.574-.666-1.04-.732zM33.545 9.596c1.315.067 2.63.106 3.946-.26M42.333 22.045c-.073 3.566 2.959 2.088 4.678 2.74M44.223 24.597c-.262.704-.453 1.394-1.323 2.22" />
        <Path d="M42.57 23.888l-.048 1.512c-1.94 2.981-6.348 3.255-8.268 1.512.29-.696.544-1.463.709-2.41M36.38 25.306c-.413.766.536 1.084.52 1.984M40.821 23.746c.502.326.11 1.357.804 1.748M54.69 17.203c-.21.321-.65.335-.501 1.136.45.195.337-.24.35-.568" />
      </G>
    </Svg>
  );
}

export default Fig17;
