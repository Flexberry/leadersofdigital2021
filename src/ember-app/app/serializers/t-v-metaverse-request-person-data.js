import { Serializer as RequestPersonDataSerializer } from
  '../mixins/regenerated/serializers/t-v-metaverse-request-person-data';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RequestPersonDataSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
