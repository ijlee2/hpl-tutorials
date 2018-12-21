import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    members: computed('model', function() {
        return this.get('model').filterBy('isActive', true);
    }),
});