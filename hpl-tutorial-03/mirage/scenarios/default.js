export default function(server) {
    /*
        Seed your development database using your factories.
        This data will not be loaded in your tests.
    */

    // server.createList('post', 10);

    server.create('person', {
        firstName: 'Isaac',
        lastName: 'Lee',
        joinDate: '08/13/2015',
        isActive: true,
        isOfficer: true,
    });

    server.create('person', {
        firstName: 'Fahad',
        lastName: 'Memon',
        joinDate: '12/06/2016',
        isActive: false,
        isOfficer: false,
    });

    server.create('person', {
        firstName: 'Jessica',
        lastName: 'Sung',
        joinDate: '11/20/2018',
        isActive: true,
        isOfficer: false,
    });

    server.createList('person', 7);
}