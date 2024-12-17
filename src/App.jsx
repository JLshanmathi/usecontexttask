import React, {useState} from 'react'
import CartCard from './components/CartCard'

export const UserContext = React.createContext()

function App() {
  
  const [product, setProduct] = useState([
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBu9iPNiAQZ55RbQnEmtGdsetv3qE3jQe3A&s",
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "image": "https://www.sahivalue.com/product-images/apple-iphone-x-new-1+%281%29.png/293890000045361362/600x600"
  },
  {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOB8qzCdLF_45V1j3_rrIR0Z5YSyQS5Vq7Q&s"
  },
  {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "image": "https://images.jdmagicbox.com/quickquotes/images_main/f19-pro-ram-8-gb-256-gb-crystal-silver-270695744-9a5de.png"
  },
  {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQeain8DKKNqkHRB0U8PvDRFIcGtG9Q_Rxg&s"
  }
  ])

  return <>
    <UserContext.Provider value={{product, setProduct}}>
      <div className="container my-5">
        <CartCard/>
      </div>
    </UserContext.Provider>
  </>
}

export default App