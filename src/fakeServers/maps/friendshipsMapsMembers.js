import { generateRandomGeoPoint } from 'fakeServers/utils';

const center = {
  lat: 32.784844,
  lng: -96.801146
};

let friendshipsMapsMembers = {
  id: 1,
  type: 'member_locations',
  attributes: {
    map_points: generateMapPoints(5000, center, 20000)
  }
};

function generateMapPoints(points_count, center, distance) {
  let map_points = [];

  for(let i = 0; i< points_count; i++) {
    map_points.push(generateRandomGeoPoint(center, distance));
  }

  return map_points;
}

export default function friendshipsMapsMembersRoutes() {
  this.get('/api/friendships/maps/members', (request) => {
    return [
      200,
      {'content-type': 'application/json'},
      JSON.stringify({data: friendshipsMapsMembers})
    ];
  }, 300);
}
