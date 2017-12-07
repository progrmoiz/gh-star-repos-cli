# gh-star-repos-cli [![Build Status](https://travis-ci.org/progrmoiz/gh-star-repos-cli.svg?branch=master)](https://travis-ci.org/progrmoiz/gh-star-repos-cli) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
> :octocat: Get a Github user repos by star

## Install

```
$ npm install --global gh-star-repos-cli
```

## Usage

```
$ gh-star-repos --help

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
```


## License

MIT © [Moiz](https://github.com/progrmoiz)
