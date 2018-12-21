import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | my-list', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        this.set('people', [
            {
                id: '0',
                firstName: 'Isaac',
                lastName: 'Lee',
                joinDate: '08/13/2015',
                isActive: true,
                isOfficer: true,
            },
            {
                id: '1',
                firstName: 'Fahad',
                lastName: 'Memon',
                joinDate: '12/06/2016',
                isActive: false,
                isOfficer: false,
            },
            {
                id: '2',
                firstName: 'Ja-Andre',
                lastName: 'Lamar',
                joinDate: '07/21/2016',
                isActive: true,
                isOfficer: true,
            },
            {
                id: '3',
                firstName: 'Jessica',
                lastName: 'Sung',
                joinDate: '11/20/2018',
                isActive: true,
                isOfficer: false,
            },
            {
                id: '4',
                firstName: 'Ryan',
                lastName: 'Comer',
                joinDate: '03/04/2018',
                isActive: true,
                isOfficer: false,
            },
            {
                id: '5',
                firstName: 'Pierce',
                lastName: 'Morrill',
                joinDate: '05/30/2017',
                isActive: false,
                isOfficer: false,
            },
        ]);

        await render(hbs`{{my-list people=people}}`);

        assert.strictEqual(
            this.element.querySelectorAll('[data-test-my-list]').length,
            1,
            'The user sees 1 list.'
        );

        assert.strictEqual(
            this.element.querySelectorAll('[data-test-person-name]').length,
            6,
            'The user sees 6 names.'
        );
        assert.strictEqual(
            this.element.querySelectorAll('[data-test-person-name]')[0].textContent.trim(),
            'Isaac Lee (Officer)',
            'The user sees the correct 1st name.'
        );
        assert.strictEqual(
            this.element.querySelectorAll('[data-test-person-name]')[1].textContent.trim(),
            'Fahad Memon',
            'The user sees the correct 2nd name.'
        );

        assert.strictEqual(
            this.element.querySelectorAll('[data-test-person-join-date]').length,
            6,
            'The user sees 6 join dates.'
        );

        assert.strictEqual(
            this.element.querySelectorAll('[data-test-button]').length,
            6,
            'The user sees 6 buttons.'
        );
    });
});