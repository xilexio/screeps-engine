var _ = require('lodash'),
    utils =  require('../../../utils'),
    driver = utils.getDriver(),
    C = driver.constants;

module.exports = function(object, intent, {roomObjects, bulk, gameTime}) {

    var target = roomObjects[intent.id];
    if(!target || target.type != 'powerBank' && target.type != 'powerSpawn') {
        return;
    }
    if(utils.dist(object, target) > 1) {
        return;
    }

    bulk.update(object, {ageTime: gameTime + C.POWER_CREEP_LIFE_TIME});

    object.actionLog.healed = {x: object.x, y: object.y};
};