import { IBodyPartIcon } from "src/interfaces/assets";

export function DigestMidMid({ style, customStyle }: IBodyPartIcon) {
  const { mixBlendMode, opacity, fillOpacity, backgroundFill, textFill, stroke } = customStyle;

  return (
    <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <g style={{ mixBlendMode }} opacity={opacity}>
        <rect x="0.5" y="0.5" width="79" height="89" rx="3.5" fill={backgroundFill} fillOpacity={fillOpacity} />
        {stroke && <rect x="0.5" y="0.5" width="79" height="89" rx="3.5" stroke="#5464F2" />}
      </g>
      <path
        d="M24.7848 37.436V50.078H23.4128V43.54H21.9708V49.49H20.6128V37.674H21.9708V42.364H23.4128V37.422L24.7848 37.436ZM17.9528 38.598H19.2968V46.998H14.4108V38.598H15.7688V41.566H17.9528V38.598ZM17.9528 42.714H15.7688V45.822H17.9528V42.714ZM34.9977 42.098C35.3197 40.754 35.3617 39.844 35.3757 39.06H32.3937V37.912H36.7757V38.556C36.7757 39.396 36.7757 40.614 36.3977 42.252L34.9977 42.098ZM29.3837 42.07C29.8317 40.726 29.9437 39.774 29.9857 39.06H27.5217V37.912H31.3997V38.402C31.3997 39.186 31.3997 40.474 30.7977 42.266L29.3837 42.07ZM37.9937 42.98V44.142H26.5697V42.98H31.7917V40.838H33.2197V42.98H37.9937ZM35.0817 44.982H36.5097V49.924H28.0397V44.982H29.4677V46.27H35.0817V44.982ZM35.0817 47.39H29.4677V48.762H35.0817V47.39ZM42.6094 42.49C45.0034 42.154 46.8094 40.81 46.8794 39.312H43.0294V38.15H52.3394V39.312H48.5174C48.5874 40.81 50.3934 42.154 52.7874 42.49L52.2694 43.624C50.1834 43.288 48.4894 42.294 47.6914 40.88C46.9074 42.28 45.2134 43.302 43.1274 43.624L42.6094 42.49ZM53.4034 45.71H48.3774V50.092H46.9354V45.71H41.9794V44.548H53.4174L53.4034 45.71ZM65.0163 37.436V50.092H63.5743V37.436H65.0163ZM58.6743 43.288C56.7843 43.288 55.4123 42.196 55.4123 40.628C55.4123 39.074 56.7843 37.982 58.6743 37.982C60.5643 37.982 61.9363 39.074 61.9363 40.628C61.9363 42.196 60.5643 43.288 58.6743 43.288ZM58.6743 39.172C57.5543 39.172 56.7983 39.732 56.7983 40.628C56.7983 41.524 57.5543 42.098 58.6743 42.098C59.7943 42.098 60.5503 41.524 60.5503 40.628C60.5503 39.732 59.7943 39.172 58.6743 39.172ZM62.8463 44.828C61.7263 45.052 60.5783 45.164 59.4583 45.262V49.7H58.0163V45.346C56.8263 45.388 55.7343 45.402 54.7263 45.402L54.5583 44.212C56.8263 44.212 60.0323 44.17 62.7483 43.764L62.8463 44.828Z"
        fill={textFill}
      />
    </svg>
  );
}