import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {
                id: '0',
                firstName: 'Isaac',
                lastName: 'Lee',
                joinDate: '08/13/2015',
                isActive: true,
                isOfficer: true,
            },
            {
                id: '2',
                firstName: 'Ja-Andre',
                lastName: 'Lamar',
                joinDate: '07/21/2016',
                isActive: true,
                isOfficer: true,
            },
        ];
    },
});