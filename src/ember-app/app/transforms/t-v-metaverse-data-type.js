import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import DataTypeEnum from '../enums/t-v-metaverse-data-type';

export default FlexberryEnum.extend({
  enum: DataTypeEnum,
  sourceType: 'TV.Metaverse.DataType'
});
