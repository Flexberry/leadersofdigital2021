import { moduleForModel, test } from 'ember-qunit';

moduleForModel('t-v-metaverse-person', 'Unit | Serializer | t-v-metaverse-person', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:t-v-metaverse-person',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:t-v-metaverse-chat-message-type',
    'transform:t-v-metaverse-data-type',
    'transform:t-v-metaverse-sex',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
