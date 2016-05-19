function randomNumber(bit) {
  return Math.floor(Math.random() * Math.pow(10, bit));
}
function generateData(time_frame) {
  return {
    id: time_frame,
    type: 'memberships_overview_performance',
    attributes: {
      snapshot: [
        {
          name: 'students',
          value: randomNumber(5),
          change: randomNumber(4),
          total: randomNumber(6),
          goal: randomNumber(6)
        },
        {
          name: 'shools',
          value: randomNumber(5),
          change: randomNumber(4),
          total: randomNumber(6),
          goal: randomNumber(6)
        },
        {
          name: 'teachers',
          value: randomNumber(5),
          change: randomNumber(4),
          total: randomNumber(6)
        },
        {
          name: 'classes',
          value: randomNumber(5),
          change: randomNumber(4),
          total: randomNumber(6)
        }
      ]
    }
  };
}

let performances = [30, 60, 90, 'quarter', 'year'].map(generateData);

export default function membershipsOverviewPerformanceRoutes() {
  this.get('/api/memberships/reports/overview', (request) => {
    let res = performances.find(function(item) {
      return item.id == request.queryParams.time_frame;
    });

    return [
      200,
      {'content-type': 'application/json'},
      JSON.stringify({data: res})
    ];
  }, 300);
}
