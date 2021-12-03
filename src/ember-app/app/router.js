import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('t-v-metaverse-chat-bot-message-l');
  this.route('t-v-metaverse-chat-bot-message-e',
  { path: 't-v-metaverse-chat-bot-message-e/:id' });
  this.route('t-v-metaverse-chat-bot-message-e.new',
  { path: 't-v-metaverse-chat-bot-message-e/new' });
  this.route('t-v-metaverse-person-l');
  this.route('t-v-metaverse-person-e',
  { path: 't-v-metaverse-person-e/:id' });
  this.route('t-v-metaverse-person-e.new',
  { path: 't-v-metaverse-person-e/new' });
  this.route('t-v-metaverse-person-meta-data-l');
  this.route('t-v-metaverse-person-meta-data-e',
  { path: 't-v-metaverse-person-meta-data-e/:id' });
  this.route('t-v-metaverse-person-meta-data-e.new',
  { path: 't-v-metaverse-person-meta-data-e/new' });
  this.route('t-v-metaverse-request-person-data-l');
  this.route('t-v-metaverse-request-person-data-e',
  { path: 't-v-metaverse-request-person-data-e/:id' });
  this.route('t-v-metaverse-request-person-data-e.new',
  { path: 't-v-metaverse-request-person-data-e/new' });
  this.route('t-v-metaverse-social-network-l');
  this.route('t-v-metaverse-social-network-e',
  { path: 't-v-metaverse-social-network-e/:id' });
  this.route('t-v-metaverse-social-network-e.new',
  { path: 't-v-metaverse-social-network-e/new' });
});

export default Router;
