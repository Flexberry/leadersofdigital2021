import { Serializer as PersonAccountSerializer } from
  '../mixins/regenerated/serializers/t-v-metaverse-person-account';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PersonAccountSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
