import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ChatMessageTypeEnum from '../enums/t-v-metaverse-chat-message-type';

export default FlexberryEnum.extend({
  enum: ChatMessageTypeEnum,
  sourceType: 'TV.Metaverse.ChatMessageType'
});
