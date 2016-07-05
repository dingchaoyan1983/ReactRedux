export default function friendshipsMapsBranchesRoutes() {
  this.get('/api/friendships/maps/branches', (request) => {
    return [
      200,
      {'content-type': 'application/json'},
      JSON.stringify({data: {
        id: 1,
        type: 'branch_location',
        attributes: {
          map_points: [{
            "lng": "-96.801146",
            "lat": "32.784844",
            "home_branch": true
          }, {
            "lng": "-96.8073776",
            "lat": "32.8632172",
            "home_branch": false
          }]
        }
      }})
    ];
  }, 300);
}
