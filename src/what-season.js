const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    let season;
  if(date == null){
    season = 'Unable to determine the time of year!';
    return season;
  }

  else if(isNaN(Date.parse(date)) == true || Object.values(date).length >= 1){
    throw Error ("Invalid date!");
  }

  else {
    let month = (date.getMonth() + 1);
    switch (month) {
        case 1:
        case 2:
        case 12:
            season = 'winter';
            break;
        case 3:
        case 4:
        case 5:
            season = "spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "autumn";
            break;
    }

    return season;
  }
}

module.exports = {
  getSeason
};
