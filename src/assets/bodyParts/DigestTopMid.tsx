import { IBodyPartIcon } from "src/interfaces/assets";

export function DigestTopMid({ style, customStyle, id, onClick }: IBodyPartIcon) {
  const { mixBlendMode, opacity, fillOpacity, backgroundFill, textFill, stroke } = customStyle;

  return (
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} id={id} onClick={onClick}>
      <g style={{ mixBlendMode }} opacity={opacity}>
        <rect x="0.5" y="0.5" width="79" height="89" rx="3.5" fill={backgroundFill} fillOpacity={fillOpacity} />
        {stroke && <rect x="0.5" y="0.5" width="79" height="89" rx="3.5" stroke="#5464F2" />}
      </g>
      <path
        d="M34.3831 46.072H28.5311V40.374H34.3831V41.382H37.0151V39.436H38.4571V46.884H37.0151V45.064H34.3831V46.072ZM32.9831 41.522H29.9451V44.924H32.9831V41.522ZM34.3831 42.558V43.888H37.0151V42.558H34.3831ZM34.2431 47.234C36.8891 47.234 38.5131 48.13 38.5131 49.656C38.5131 51.182 36.8891 52.078 34.2431 52.078C31.6111 52.078 29.9871 51.182 29.9871 49.656C29.9871 48.13 31.6111 47.234 34.2431 47.234ZM34.2431 50.958C36.0491 50.958 37.0711 50.496 37.0711 49.656C37.0711 48.816 36.0491 48.368 34.2431 48.368C32.4371 48.368 31.4291 48.816 31.4291 49.656C31.4291 50.496 32.4371 50.958 34.2431 50.958ZM50.98 39.422V52.064H49.524V39.422H50.98ZM45.338 43.454C45.338 45.456 46.57 47.486 48.53 48.354L47.76 49.474C46.304 48.844 45.212 47.542 44.638 45.96C44.078 47.654 42.972 49.012 41.502 49.684L40.704 48.578C42.692 47.682 43.896 45.54 43.896 43.454V42.726H41.096V41.564H43.896V39.688H45.338V41.564H48.082V42.726H45.338V43.454Z"
        fill={textFill}
      />
    </svg>
  );
}
