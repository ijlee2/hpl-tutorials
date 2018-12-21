import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    firstName() {
        return faker.name.firstName();
    },
    lastName() {
        return faker.name.lastName();
    },
    joinDate() {
        return faker.date.past();
    },
    isActive() {
        return faker.random.boolean();
    },
    isOfficer() {
        return faker.random.boolean();
    },
});
