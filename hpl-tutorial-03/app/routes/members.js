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
        ];
    },
});