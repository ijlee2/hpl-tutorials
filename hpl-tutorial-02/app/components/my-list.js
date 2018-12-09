import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);

        this.set('people', [
            {
                firstName: 'Isaac',
                lastName: 'Lee',
            },
            {
                firstName: 'Fahad',
                lastName: 'Memon',
            },
            {
                firstName: 'Ja-Andre',
                lastName: 'Lamar',
            },
        ]);
    },
});
