
import test from 'ava';
import delay from 'delay';

test('foo', t => {
	t.pass();
});

test('bar', async t => {
	t.plan(1);

	const bar = Promise.resolve('bar').then(delay(200));

	t.is(await bar, 'bar');
});
