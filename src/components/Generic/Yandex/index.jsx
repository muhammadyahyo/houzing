import React from 'react'
import { YMaps, Map,Placemark,  } from "react-yandex-maps";

const mapStyle = {
    position: 'relative',
    left: 0,
    top: 0,
    width: '100wh',
    height: '50vh',
    overflow: 'hidden',
};

const Yandex = ({center}) => {
  return (
    <YMaps
    //   enterprise
      query={{
        apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b",
        lang: "En",
        ns: "use-load-option",
        load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon,"
      }}
    >
      <Map
        style={mapStyle}
        state={{
          center: center || [41.2995, 69.2401],
          zoom: 16,
          controls: ["zoomControl", "fullscreenControl","routeButtonControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl", 'geoObject.addon.balloon', 'geoObject.addon.hint',"control.RouteButton"]}
      >
        <Placemark
        //   modules={["geoObject.addon.balloon",'geoObject.addon.hint']}
          geometry={center || [41.2995, 69.2401]}
          
        />
      </Map>
    </YMaps>
  );
}

export default Yandex