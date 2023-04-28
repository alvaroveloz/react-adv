import { ProductButtons, ProductCard, ProductTitle } from "../components"
import { ProductImage } from "../components/ProductImage"
import { Product } from "../interfaces/interfaces"

const product: Product = {
  id: '1',
  title: 'Coffee Mug - Card!',
  img: './coffee-mug.png',
}

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <div style={ {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>

        {/* <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons />
        </ProductCard> */}

      <ProductCard product={product} >
          <ProductImage />
          <ProductTitle title={ product.title }/>
          <ProductButtons  />
      </ProductCard>
      </div>
    </div>
  )
}
