import { Serializer as PersonMetaDataSerializer } from
  '../mixins/regenerated/serializers/t-v-metaverse-person-meta-data';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PersonMetaDataSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
