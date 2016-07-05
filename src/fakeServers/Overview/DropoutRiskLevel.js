

function random(digits) {
  return parseInt(Math.floor(Math.pow(10, digits) * Math.random()));
}

function generateData(time_frame) {
  return {
    id: time_frame,
    type: 'dropout-risk',
    attributes: {
      'total-students': random(4),
      'students-up-for-renewal': random(3),
      'risk-levels': [
        {
          'name': 'low-risk',
          'count': random(3),
          'potential-revenue-loss': random(4),
          'risk-percentage': random(2),
          'demographics': [
            {
              'age': '<20',
              'male': random(1),
              'female': random(1)
            },
            {
              'age': '20-29',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '30-39',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '40-49',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '50-59',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '60+',
              'male': random(2),
              'female': random(2)
            }
          ]
        },
        {
          'name': 'medium-risk',
          'count': random(3),
          'potential-revenue-loss': random(4),
          'risk-percentage': random(2),
          'demographics': [
            {
              'age': '<20',
              'male': random(1),
              'female': random(1)
            },
            {
              'age': '20-29',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '30-39',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '40-49',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '50-59',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '60+',
              'male': random(2),
              'female': random(2)
            }
          ]
        },
        {
          'name': 'high-risk',
          'count': random(2),
          'potential-revenue-loss': random(3),
          'risk-percentage': random(2),
          'demographics': [
            {
              'age': '<20',
              'male': random(1),
              'female': random(1)
            },
            {
              'age': '20-29',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '30-39',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '40-49',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '50-59',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '60+',
              'male': random(2),
              'female': random(2)
            }
          ]
        },
        {
          'name': 'unknown-risk',
          'count': random(2),
          'potential-revenue-loss': 0,
          'risk-percentage': random(2),
          'demographics': [
            {
              'age': '<20',
              'male': random(1),
              'female': random(1)
            },
            {
              'age': '20-29',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '30-39',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '40-49',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '50-59',
              'male': random(2),
              'female': random(2)
            },
            {
              'age': '60+',
              'male': random(2),
              'female': random(2)
            }
          ]
        }
      ]
    }
  };
}

const risks =  [30, 60, 90].map(generateData);


export default function dropoutRiskLevelRoutes() {
  this.get('/api/friendships/reports/dropout', (request) => {
    let res = risks.find(function(item) {
      return item.id == request.queryParams.time_frame;
    });

    return [
      200,
      {'content-type': 'application/json'},
      JSON.stringify({data: res})
    ];
  }, 300);
}
