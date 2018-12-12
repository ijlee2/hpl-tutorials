import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | officer', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:officer');
    assert.ok(route);
  });
});
