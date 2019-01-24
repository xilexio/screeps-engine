const _ = require('lodash'),
    utils = require('../../../../utils'),
    driver = utils.getDriver(),
    C = driver.constants;

const fortifier = [
    {part: C.WORK, count: 15, boost: 'XLH2O'},
    {part: C.CARRY, count: 15},
    {part: C.MOVE, count: 15}
];

const makeBody = function(description) {
    return _.reduce(description, (result, segment) => {
        _.times(segment.count, () => {result.body.push(segment.part); result.boosts.push(segment.boost)});
        return result;
    }, { body: [], boosts: [] });
};

module.exports = {
    'fortifier': makeBody(fortifier)
};
