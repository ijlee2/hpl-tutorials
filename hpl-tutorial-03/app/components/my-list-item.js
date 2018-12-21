import Component from '@ember/component';

export default Component.extend({
    // For styling purposes (semantic HTML, too), we don't want Ember
    // to surround the <li> tag with the <div> tag
    tagName: '',

    init() {
        this._super(...arguments);

        this.set('isEditing', false);
    },

    actions: {
        editItem() {
            this.set('isEditing', true);
        },

        saveItem() {
            this.set('isEditing', false);
        },
    },
});