# HPL Tutorials


## Instructions for Download
1. In terminal, go to your work directory (using `cd`) and type `git clone git@github.com:ijlee2/hpl-tutorials.git`.
1. Type `cd hpl-tutorials`.
1. Each folder inside `hpl-tutorials` is an Ember app that you can install and run locally. For example, to run the first tutorial, you can type `cd hpl-tutorial-01`, then `ember s`.
1. Once an app is running, visit `localhost:4200` on Chrome or Firefox.


## Summary

### #01 (Dec. 9th, 2018)
- Use `ember new` to create an Ember project
- Use `ember serve` (or `ember s`) to start the Ember app
- Understand Component-Driven Design (templates, components)
- Investigate why the default welcome page is rendered (see `app/templates/application.hbs`)
- Use `ember generate component` (or `ember g component`) to create 2 components, `my-list` and `my-list-item`
- Display the name of 1 person using `my-list` and `my-list-item` components
- Display the names of 3 people using `{{each}}` helper
- Update the stylesheet (`app/styles/app.css`)

To learn more, visit:
- [Handlebars](https://handlebarsjs.com/) (double curly brace notation, `each` helper)
- [Ember Templates 1](https://guides.emberjs.com/release/templates/handlebars-basics/) (skip section on helpers)
- [Ember Templates 2](https://guides.emberjs.com/release/templates/displaying-a-list-of-items/)
- [Ember Component 1](https://guides.emberjs.com/release/components/the-component-lifecycle/) (`init` method)

### #02 (Dec. 11th, 2018)
- Use `ember g route` to create `members` and `officers` routes
- Use `{{link-to}}` helper to navigate between routes
- Understand the purpose of `{{outlet}}`
- Use a route's `model()` to display data
- Use `ember install` to install addons (e.g. *ember-cli-sass*)

To learn more, visit:
- [Ember Route 1](https://guides.emberjs.com/release/routing/defining-your-routes/)
- [Ember Route 2](https://guides.emberjs.com/release/routing/specifying-a-routes-model/)

### #03 (Dec. 20th, 2018)
- Use a `controller` to filter data from a route's `model()`
- Define a `model`'s attributes
- Understand the purpose of an `adapter` and a `serializer`
- Use *Mirage* and *Faker.js* to create mock data
- Use *ember-test-selectors` to write integration and acceptance tests

To learn more, visit:
- [Ember Controller](https://guides.emberjs.com/release/controllers/)
- [Ember Model](https://guides.emberjs.com/release/models/defining-models/)
- [Ember CLI Mirage](https://www.ember-cli-mirage.com/docs/v0.4.x/quickstart/)
- [Faker.js](https://github.com/marak/Faker.js/)
- [Ember Test Selectors](https://github.com/simplabs/ember-test-selectors)
