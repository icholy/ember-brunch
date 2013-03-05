// Create `window.describe` etc. for our BDD-like tests.
mocha.setup({
	ui: 'bdd',
	globals: [
				'navigator',	// mozilla
				'jQuery*',	// jquery JSONP
				'_gaq',	// google analytics
				'_gat'	// google analytics
			]
});
// Create another global variable for simpler syntax.
window.expect = chai.expect;
