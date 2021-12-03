import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.metaverse.caption'),
          title: i18n.t('forms.application.sitemap.metaverse.title'),
          children: [{
            link: 't-v-metaverse-chat-bot-message-l',
            caption: i18n.t('forms.application.sitemap.metaverse.t-v-metaverse-chat-bot-message-l.caption'),
            title: i18n.t('forms.application.sitemap.metaverse.t-v-metaverse-chat-bot-message-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 't-v-metaverse-request-person-data-l',
            caption: i18n.t('forms.application.sitemap.metaverse.t-v-metaverse-request-person-data-l.caption'),
            title: i18n.t('forms.application.sitemap.metaverse.t-v-metaverse-request-person-data-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 't-v-metaverse-social-network-l',
            caption: i18n.t('forms.application.sitemap.metaverse.t-v-metaverse-social-network-l.caption'),
            title: i18n.t('forms.application.sitemap.metaverse.t-v-metaverse-social-network-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 't-v-metaverse-person-meta-data-l',
            caption: i18n.t('forms.application.sitemap.metaverse.t-v-metaverse-person-meta-data-l.caption'),
            title: i18n.t('forms.application.sitemap.metaverse.t-v-metaverse-person-meta-data-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 't-v-metaverse-person-l',
            caption: i18n.t('forms.application.sitemap.metaverse.t-v-metaverse-person-l.caption'),
            title: i18n.t('forms.application.sitemap.metaverse.t-v-metaverse-person-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})