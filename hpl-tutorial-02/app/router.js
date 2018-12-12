import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('members');
    this.route('member', { path: '/members/:id' });

    this.route('officers');
    this.route('officer', { path: '/officers/:id' });
});

export default Router;