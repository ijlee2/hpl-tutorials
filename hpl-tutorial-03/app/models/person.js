import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    joinDate: DS.attr('date'),
    isActive: DS.attr('boolean'),
    isOfficer: DS.attr('boolean'),

    complexAttribute: DS.attr(), // array of objects, nested objects, etc.
});