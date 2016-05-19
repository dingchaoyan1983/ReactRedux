export function generateRandomGeoPoint(center, distance) {
  let y0 = center.lat;
  let x0 = center.lng;
  let rd = distance / 111300; //about 111300 meters in one degree

  let u = Math.random();
  let v = Math.random();

  let w = rd * Math.sqrt(u);
  let t = 2 * Math.PI * v;
  let x = w * Math.cos(t);
  let y = w * Math.sin(t);

  let newlat = y + y0;
  let newlon = x + x0;

  return {
    'lat': newlat.toFixed(5),
    'lng': newlon.toFixed(5)
  };
}
