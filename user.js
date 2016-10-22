var user = {
  name: 'Kyle',
  location: 'Farmington',
  occupations: ['student', 'woodworker', 'product manager'],
  hobbies: [
    {
      name: 'woodworking',
      type: 'woodworking'
    },
    {
      name: 'soccer',
      type: 'sport'
    },
    {
      name: 'volleyball',
      type: 'sport'
    }
  ],
  family: [
    {
      name: 'Kelli',
      relation: 'wife',
      gender: 'female'
    },
    {
      name: 'McCoy',
      relation: 'son',
      gender: 'male'
    },{
      name: 'McKinley',
      relation: 'daughter',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'Parkstone',
      type: 'grill',
      rating: 5
    },
    {
      name: 'Red Iguana',
      type: 'mexican',
      rating: 5
    },
    {
      name: 'Sushi monster',
      type: 'japanese',
      rating: 5
    }
  ]
};
module.exports = user;
