import { moduleForModel, test } from 'ember-qunit';

moduleForModel('t-v-metaverse-request-person-data', 'Unit | Model | t-v-metaverse-request-person-data', {
  // Specify the other units that are required for this test.
  needs: [
    'model:t-v-metaverse-chat-bot-message',
    'model:t-v-metaverse-person-account',
    'model:t-v-metaverse-person-meta-data',
    'model:t-v-metaverse-person',
    'model:t-v-metaverse-request-person-data',
    'model:t-v-metaverse-social-network',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
