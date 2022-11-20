import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import sneakers from './sneakers';
import newlyAdded from './newlyAdded';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    sneakers,
    newlyAdded
  ]),
})
