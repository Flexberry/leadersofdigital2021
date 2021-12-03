import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  esiaId: DS.attr('string'),
  name: DS.attr('string'),
  middleName: DS.attr('string'),
  surname: DS.attr('string'),
  birthday: DS.attr('date'),
  sex: DS.attr('t-v-metaverse-sex'),
  reputation: DS.attr('number'),
  personAccount: DS.hasMany('t-v-metaverse-person-account', { inverse: 'person', async: false })
});

export let ValidationRules = {
  esiaId: {
    descriptionKey: 'models.t-v-metaverse-person.validations.esiaId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.t-v-metaverse-person.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  middleName: {
    descriptionKey: 'models.t-v-metaverse-person.validations.middleName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surname: {
    descriptionKey: 'models.t-v-metaverse-person.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  birthday: {
    descriptionKey: 'models.t-v-metaverse-person.validations.birthday.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  sex: {
    descriptionKey: 'models.t-v-metaverse-person.validations.sex.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  reputation: {
    descriptionKey: 'models.t-v-metaverse-person.validations.reputation.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  personAccount: {
    descriptionKey: 'models.t-v-metaverse-person.validations.personAccount.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PersonE', 't-v-metaverse-person', {
    esiaId: attr('Esia id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    middleName: attr('Middle name', { index: 2 }),
    surname: attr('Surname', { index: 3 }),
    birthday: attr('Birthday', { index: 4 }),
    sex: attr('Sex', { index: 5 }),
    reputation: attr('Reputation', { index: 6 }),
    personAccount: hasMany('t-v-metaverse-person-account', 'Person account', {
      accountId: attr('Account id', { index: 0 }),
      socialNetwork: belongsTo('t-v-metaverse-social-network', 'Social network', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('PersonL', 't-v-metaverse-person', {
    esiaId: attr('Esia id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    middleName: attr('Middle name', { index: 2 }),
    surname: attr('Surname', { index: 3 }),
    birthday: attr('Birthday', { index: 4 }),
    sex: attr('Sex', { index: 5 }),
    reputation: attr('Reputation', { index: 6 })
  });
};
