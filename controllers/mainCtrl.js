var user = require('../user.js');

module.exports = {
  getName: function( req, res ) {
    res.status(200).send(JSON.stringify({name: user.name}));
  },
  getLocation: function( req, res ) {
    res.status(200).send(JSON.stringify({location: user.location}));
  },
  getOccupations: function( req, res ) {
    res.status(200).send(JSON.stringify({occupations: user.occupations}));
  },
  getHobbies: function( req, res ) {
    res.status(200).send(JSON.stringify(user.hobbies));
  },
  getLatestOccupation: function( req, res ) {
    var LatestOccupation = user.occupations.slice(-1)[0];
    res.status(200).send(JSON.stringify(LatestOccupation));
  },
  getFilteredHobbies: function( req, res ) {
    var specHobbies = [];
      for (var i = 0; i < user.hobbies.length; i++){
       if (user.hobbies[i].type === req.params.type) {
        specHobbies.push(user.hobbies[i]);
        }
      // return specHobbies;
      }
    res.status(200).send(JSON.stringify(specHobbies));
  }

}
