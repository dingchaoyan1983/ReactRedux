const defaultOptions = {
  center: {
    lat: 32.776483,
    lng: -96.8201738
  },
  zoom: 15,
  minZoom: 4,
  disableDefaultUI: true,
  styles: [
    {
       "featureType": "all",
       "elementType": "all",
       "stylers": [
           {
               "saturation": "0"
           }
       ]
    },
    {
       "featureType": "landscape",
       "elementType": "all",
       "stylers": [
           {
               "hue": "#ffbb00 "
           },
           {
               "saturation": "0"
           },
           {
               "lightness": "65"
           },
           {
               "gamma": "1.5"
           }
       ]
    },
    {
       "featureType": "poi",
       "elementType": "all",
       "stylers": [
           {
               "hue": "#00ff6a "
           },
           {
               "saturation": "-55"
           },
           {
               "lightness": "40"
           },
           {
               "gamma": 1
           }
       ]
    },
    {
       "featureType": "poi.attraction",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
    },
    {
       "featureType": "poi.business",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
    },
    {
       "featureType": "poi.medical",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
    },
    {
       "featureType": "poi.park",
       "elementType": "labels.text",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
    },
    {
       "featureType": "poi.sports_complex",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
    },
    {
       "featureType": "poi.sports_complex",
       "elementType": "labels.text",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
    },
    {
       "featureType": "road",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "on"
           }
       ]
    },
    {
       "featureType": "road",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
    },
    {
       "featureType": "road.highway",
       "elementType": "all",
       "stylers": [
           {
               "saturation": "-65"
           },
           {
               "lightness": "60"
           },
           {
               "gamma": 1
           },
           {
               "hue": "#ffef00 "
           }
       ]
    },
    {
       "featureType": "road.arterial",
       "elementType": "all",
       "stylers": [
           {
               "hue": "#FF0300 "
           },
           {
               "saturation": -100
           },
           {
               "lightness": 51.19999999999999
           },
           {
               "gamma": 1
           }
       ]
    },
    {
       "featureType": "road.local",
       "elementType": "all",
       "stylers": [
           {
               "hue": "#ff0300 "
           },
           {
               "saturation": -100
           },
           {
               "lightness": 52
           },
           {
               "gamma": 1
           }
       ]
    },
    {
       "featureType": "transit.station",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
    },
    {
       "featureType": "water",
       "elementType": "all",
       "stylers": [
           {
               "hue": "#0078ff "
           },
           {
               "saturation": "-80"
           },
           {
               "lightness": "35"
           },
           {
               "gamma": 1
           }
       ]
    }
  ]
};

export default defaultOptions;
