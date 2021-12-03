import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import TVMetaverseChatBotMessageLForm from './forms/t-v-metaverse-chat-bot-message-l';
import TVMetaversePersonLForm from './forms/t-v-metaverse-person-l';
import TVMetaversePersonMetaDataLForm from './forms/t-v-metaverse-person-meta-data-l';
import TVMetaverseRequestPersonDataLForm from './forms/t-v-metaverse-request-person-data-l';
import TVMetaverseSocialNetworkLForm from './forms/t-v-metaverse-social-network-l';
import TVMetaverseChatBotMessageEForm from './forms/t-v-metaverse-chat-bot-message-e';
import TVMetaversePersonEForm from './forms/t-v-metaverse-person-e';
import TVMetaversePersonMetaDataEForm from './forms/t-v-metaverse-person-meta-data-e';
import TVMetaverseRequestPersonDataEForm from './forms/t-v-metaverse-request-person-data-e';
import TVMetaverseSocialNetworkEForm from './forms/t-v-metaverse-social-network-e';
import TVMetaverseChatBotMessageModel from './models/t-v-metaverse-chat-bot-message';
import TVMetaversePersonAccountModel from './models/t-v-metaverse-person-account';
import TVMetaversePersonMetaDataModel from './models/t-v-metaverse-person-meta-data';
import TVMetaversePersonModel from './models/t-v-metaverse-person';
import TVMetaverseRequestPersonDataModel from './models/t-v-metaverse-request-person-data';
import TVMetaverseSocialNetworkModel from './models/t-v-metaverse-social-network';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    't-v-metaverse-chat-bot-message': TVMetaverseChatBotMessageModel,
    't-v-metaverse-person-account': TVMetaversePersonAccountModel,
    't-v-metaverse-person-meta-data': TVMetaversePersonMetaDataModel,
    't-v-metaverse-person': TVMetaversePersonModel,
    't-v-metaverse-request-person-data': TVMetaverseRequestPersonDataModel,
    't-v-metaverse-social-network': TVMetaverseSocialNetworkModel
  },

  'application-name': 'Metaverse',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Metaverse',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Metaverse',
          title: 'Metaverse'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        metaverse: {
          caption: 'Metaverse',
          title: 'Metaverse',
          't-v-metaverse-chat-bot-message-l': {
            caption: 'Chat bot message',
            title: ''
          },
          't-v-metaverse-request-person-data-l': {
            caption: 'Request person data',
            title: ''
          },
          't-v-metaverse-social-network-l': {
            caption: 'Social network',
            title: ''
          },
          't-v-metaverse-person-meta-data-l': {
            caption: 'Person meta data',
            title: ''
          },
          't-v-metaverse-person-l': {
            caption: 'Person',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    't-v-metaverse-chat-bot-message-l': TVMetaverseChatBotMessageLForm,
    't-v-metaverse-person-l': TVMetaversePersonLForm,
    't-v-metaverse-person-meta-data-l': TVMetaversePersonMetaDataLForm,
    't-v-metaverse-request-person-data-l': TVMetaverseRequestPersonDataLForm,
    't-v-metaverse-social-network-l': TVMetaverseSocialNetworkLForm,
    't-v-metaverse-chat-bot-message-e': TVMetaverseChatBotMessageEForm,
    't-v-metaverse-person-e': TVMetaversePersonEForm,
    't-v-metaverse-person-meta-data-e': TVMetaversePersonMetaDataEForm,
    't-v-metaverse-request-person-data-e': TVMetaverseRequestPersonDataEForm,
    't-v-metaverse-social-network-e': TVMetaverseSocialNetworkEForm
  },

});

export default translations;
