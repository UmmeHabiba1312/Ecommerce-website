import { type SchemaTypeDefinition } from 'sanity'
import heroImages from './heroImages'
import products from './products'
import mainLogo from './mainLogo'
import category from './category'
import logoImage from './logos'
import review from './review'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,heroImages,mainLogo,category,logoImage,review],
}
