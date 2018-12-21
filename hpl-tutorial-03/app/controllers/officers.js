import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    officers: computed('model', function() {
        return this.get('model').filter(person => {
            return person.isActive && person.isOfficer;
        });
    }),
});
