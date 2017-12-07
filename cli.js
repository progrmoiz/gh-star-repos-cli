#!/usr/bin/env node
'use strict';
const meow = require('meow');
const ghStarRepos = require('gh-star-repos');

const cli = meow(`
	Usage
	  $ gh-star-repos <username>
	  $ ghsr <username>

	Options
	  --token  Personal access token [Default: None]
	  --order  Sorting order ASC or DESC [Default: DESC]

	Examples
	  $ gh-star-repos progrmoiz
	  python-snippets 171
	  simple-blockchain-implementation 3
	  wiki-viewer 2
	  ... This will show all public repos.

	  $ gh-star-repos sindresorhus --token=foo
	  awesome 72955
	  awesome-nodejs 20244
	  awesome-electron 12929
	  quick-look-plugins 10102
	  pageres 8176
	  pure 4265
	  screenfull.js 3743
	  ... This will show all public repos.

	  $ gh-star-repos progrmoiz --order=ASC
	  linux-cheatsheet 0
	  position-playground 0
	  random-quote 0
	  ... This will show all public repos.
`);

const username = cli.input[0];

if (!username) {
	console.error('Specify a username');
	process.exit(1);
}

ghStarRepos(username, {
	token: cli.flags.token,
	order: cli.flags.order
})
.then(repos => {
	repos.forEach(repo => {
		console.log(repo.name, repo.stargazers_count);
<<<<<<< HEAD
	});
})
.catch(err => {
	console.error(err);
});
=======
	})
})
.catch(err => {
	console.error(err);
})
>>>>>>> 7e68b647f854e77e70e6fca13562ea6c2d07fb3a
