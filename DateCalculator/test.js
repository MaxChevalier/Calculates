let assert = require('chai');
assert = assert.assert;
const { get_diff_date, calc_date } = require('../public/js/DateCalculator');

exports.DateTest = () => {
    it('get_diff_date should return the correct difference in days', function () {
        const date1 = new Date('2022-01-01');
        const date2 = new Date('2022-01-10');
        assert.equal(get_diff_date(date1, date2), 9);
      });
    
      it('calc_date should return the correct calculated date', function () {
        const date1 = new Date('2022-01-01');
        const nb_days = 5;
        const expectedDate = new Date('2022-01-06');
        assert.deepEqual(calc_date(date1, nb_days), expectedDate);
      });

  // Add more tests for other routes if needed
}