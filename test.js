import test from 'ava';
import execa from 'execa';

test('connectivity test', async t => {
	t.truthy(await execa('./cli.js', ['progrmoiz']).stdout);
});

test('sorting test', async t => {
	const cmd = await execa('./cli.js', ['freeCodeCamp']);
	const firstLine = cmd.stdout.split('\n')[0];
	t.true(firstLine.includes('freeCodeCamp'));
});

test('order test', async t => {
	const cmd = await execa('./cli.js', ['freeCodeCamp', '--order=ASC']);
	const lastLine = cmd.stdout.split('\n').pop();
	t.true(lastLine.includes('freeCodeCamp'));
});
