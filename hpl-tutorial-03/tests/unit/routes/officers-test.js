import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | officers', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:officers');
    assert.ok(route);
  });
});
