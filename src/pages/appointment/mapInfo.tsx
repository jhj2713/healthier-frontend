import { icon, divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { CurrentPinIcon } from "./mapIcon";

export const markerIcon = icon({ iconUrl: "/images/doctorAppointment/map-pin.svg" });

export const currentPositionIcon = icon({ iconUrl: "/images/doctorAppointment/current-pin.png", iconSize: [128, 128] });

// export const getMarkerIcon = (title: string) => {
//   return divIcon({
//     html: renderToStaticMarkup(<CurrentPinIcon title={title} />),
//   });
// };
