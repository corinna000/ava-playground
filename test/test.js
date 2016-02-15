import test from 'ava';
import delay from 'delay';

var apple, banana, carrot;

test.beforeEach(t => {

  apple = 'apple';
  banana = 'banana';
  carrot = 'carrot';

});

test('apple', t => {
  t.plan(3);
  t.is(apple,'apple');
  t.is(banana,'banana');
  t.is(carrot,'carrot');
});

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    t.plan(1);

    const bar = Promise.resolve('bar').then(delay(200));

    t.is(await bar, 'bar');
});
