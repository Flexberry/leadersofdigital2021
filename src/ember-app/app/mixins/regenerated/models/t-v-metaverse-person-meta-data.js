import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  url: DS.attr('string'),
  dateTime: DS.attr('date'),
  dataType: DS.attr('t-v-metaverse-data-type'),
  person: DS.belongsTo('t-v-metaverse-person', { inverse: null, async: false }),
  author: DS.belongsTo('t-v-metaverse-person', { inverse: null, async: false })
});

export let ValidationRules = {
  url: {
    descriptionKey: 'models.t-v-metaverse-person-meta-data.validations.url.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dateTime: {
    descriptionKey: 'models.t-v-metaverse-person-meta-data.validations.dateTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dataType: {
    descriptionKey: 'models.t-v-metaverse-person-meta-data.validations.dataType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  person: {
    descriptionKey: 'models.t-v-metaverse-person-meta-data.validations.person.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  author: {
    descriptionKey: 'models.t-v-metaverse-person-meta-data.validations.author.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PersonMetaDataE', 't-v-metaverse-person-meta-data', {
    url: attr('Url', { index: 0 }),
    dateTime: attr('Date time', { index: 1 }),
    dataType: attr('Data type', { index: 2 }),
    author: belongsTo('t-v-metaverse-person', 'Author', {
      esiaId: attr('Esia id', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'esiaId' }),
    person: belongsTo('t-v-metaverse-person', 'Person', {
      esiaId: attr('Esia id', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'esiaId' })
  });

  modelClass.defineProjection('PersonMetaDataL', 't-v-metaverse-person-meta-data', {
    url: attr('Url', { index: 0 }),
    dateTime: attr('Date time', { index: 1 }),
    dataType: attr('Data type', { index: 2 }),
    author: belongsTo('t-v-metaverse-person', 'Esia id', {
      esiaId: attr('Esia id', { index: 3 })
    }, { index: -1, hidden: true }),
    person: belongsTo('t-v-metaverse-person', 'Esia id', {
      esiaId: attr('Esia id', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
