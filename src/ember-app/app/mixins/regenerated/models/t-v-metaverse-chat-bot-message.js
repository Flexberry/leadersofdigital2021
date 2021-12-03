import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  dateTime: DS.attr('date'),
  text: DS.attr('string'),
  chatMessageType: DS.attr('t-v-metaverse-chat-message-type'),
  person: DS.belongsTo('t-v-metaverse-person', { inverse: null, async: false })
});

export let ValidationRules = {
  dateTime: {
    descriptionKey: 'models.t-v-metaverse-chat-bot-message.validations.dateTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  text: {
    descriptionKey: 'models.t-v-metaverse-chat-bot-message.validations.text.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  chatMessageType: {
    descriptionKey: 'models.t-v-metaverse-chat-bot-message.validations.chatMessageType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  person: {
    descriptionKey: 'models.t-v-metaverse-chat-bot-message.validations.person.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ChatBotMessageE', 't-v-metaverse-chat-bot-message', {
    dateTime: attr('Date time', { index: 0 }),
    text: attr('Text', { index: 1 }),
    chatMessageType: attr('Chat message type', { index: 2 }),
    person: belongsTo('t-v-metaverse-person', 'Person', {
      esiaId: attr('Esia id', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'esiaId' })
  });

  modelClass.defineProjection('ChatBotMessageL', 't-v-metaverse-chat-bot-message', {
    dateTime: attr('Date time', { index: 0 }),
    text: attr('Text', { index: 1 }),
    chatMessageType: attr('Chat message type', { index: 2 }),
    person: belongsTo('t-v-metaverse-person', 'Esia id', {
      esiaId: attr('Esia id', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
