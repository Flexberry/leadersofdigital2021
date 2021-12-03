import { Serializer as SocialNetworkSerializer } from
  '../mixins/regenerated/serializers/t-v-metaverse-social-network';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SocialNetworkSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
