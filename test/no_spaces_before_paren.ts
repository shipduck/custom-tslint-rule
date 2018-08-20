import 'mocha';
import { assert } from 'chai';
import lint, { Linter } from 'tslint';

describe('no_spaces_before_paren', () => {
	it('basic', () => {
		const linter = new Linter({
			fix: false,
		});
	});
});
