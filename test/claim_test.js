var claim = require('../lib/claim');
var expect = require('chai').expect;

describe('claim', function() {
	it('returns true', function () {
		var res = claim(1, 1);
		expect(res).to.be.true;
	});

	it('returns false', function () {
		var res = claim(1, 2);
		expect(res).to.be.false;
	});

	it('is true with similar arrays', function () {
		var res = claim([1,2], [1,2]);
		expect(res).to.be.true;
	});

	it('is false with same arrays', function () {
		var arr = [1, 2];
		var res = claim(arr, arr);
		expect(res).to.be.false;
	});

	it('is true with similar objects', function () {
		var res = claim({a: 1}, {a: 1});
		expect(res).to.be.true;
	});

	it('is false with same objects', function () {
		var obj = {a: 1};
		var res = claim(obj, obj);
		expect(res).to.be.false;
	});


});
