import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import provinsiJson from "../data/38provinsi.json";
import githubgeoJson from "../data/githubgeojson.json";
import provinceColors from "../data/colorMappingEachProvince.json";
import L from "leaflet";



const center = [-2.5489, 117.148]
const zoom = 5
function DisplayPosition({ map }) {
    const [position, setPosition] = useState(() => map.getCenter())

    const onClick = useCallback(() => {
        map.setView(center, zoom)
    }, [map])

    const onMove = useCallback(() => {
        setPosition(map.getCenter())
    }, [map])

    useEffect(() => {
        map.on('move', onMove)
        return () => {
            map.off('move', onMove)
        }
    }, [map, onMove])

    return (
        <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            <button onClick={onClick}>reset</button>
        </p>
    )
}

const MepEksperiment = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });



    useEffect(() => {
        // Mengecek apakah browser mendukung geolocation
        if (navigator.geolocation) {
            // Mengambil lokasi
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // console.log(position);
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    console.log("Error retrieving location", error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);



    const [map, setMap] = useState(null)

    const displayMap = useMemo(
        () => (
            <MapContainer
                center={center}
                zoom={zoom}
                // scrollWheelZoom={false}
                className="w-full h-full rounded-[10px] border z-10 border-light-border dark:border-dark-border overflow-hidden"
                ref={setMap}>
                {/* <GeoJSON
                    // data={provinsiJson.data}
                    data={githubgeoJson}
                    // style={getStyle}
                    onEachFeature={(feature, layer) => {
                        layer.on({
                            // mouseover: () => setHoveredProvince(feature.properties.KODE_PROV),
                            // mouseout: () => setHoveredProvince(null),
                            click: (event) => console.log(feature)
                        });
                        layer.bindTooltip(`Provinsi ${feature.properties.PROVINSI}`, { permanent: false, direction: "top" });
                    }}
                /> */}

                {/* <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {location?.latitude && (
                    <Marker position={[location?.latitude, location?.longitude]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        ),
        [location?.latitude],
    )

    return (
        <div className='w-full h-[100vh]'>
            {map ? <DisplayPosition map={map} /> : null}
            {displayMap}
        </div>
    )


    // return (<div className='w-full g'>
    //     <div className='w-full h-[100vh]'>
    //         <MapContainer
    //             minZoom={1}
    //             maxZoom={12}
    //             center={[-2.5489, 117.148]} zoom={5}
    //             className="w-full h-full rounded-[10px] border z-10 border-light-border dark:border-dark-border overflow-hidden"
    //         >
    //             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    //             <Marker position={[-7.605862550349365, 111.45411420961638]}>
    //                 <Popup>
    //                     A pretty CSS3 popup. <br /> Easily customizable.
    //                 </Popup>
    //             </Marker>
    //         </MapContainer>
    //     </div>

    // </div>)
}

export default MepEksperiment