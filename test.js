import test from 'ava'
import execa from 'execa'

test(async t => {
	t.is(await execa('./cli.js', ['freeCodeCamp']), /* testing */)
});
