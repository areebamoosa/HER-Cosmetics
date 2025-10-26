import React, { useState } from 'react'
import Product from '../Cosmetics-Page/Product'
import main from '../../assets/prod.webp'
import hovImg from '../../assets/hov.webp'
import black from '../../assets/black.webp'
import peach from '../../assets/peach.webp'
import { Link } from 'react-router-dom'

export const productsDetails = [
  {
    id: 1,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main,
    hoverImg: hovImg,
    smallImgs: [black, peach, main, peach]
  },
  {
    id: 2,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main,
    hoverImg: hovImg,
    smallImgs: [black, peach, main, peach]
  },
  {
    id: 3,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main,
    hoverImg: hovImg,
    smallImgs: [black, peach, main, peach]
  },
  {
    id: 4,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main,
    hoverImg: hovImg,
    smallImgs: [black, peach, main, peach]
  },
  {
    id: 1,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main,
    hoverImg: hovImg,
    smallImgs: [black, peach, main, peach]
  },
  {
    id: 2,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main,
    hoverImg: hovImg,
    smallImgs: [black, peach, main, peach]
  },
  {
    id: 3,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main,
    hoverImg: hovImg,
    smallImgs: [black, peach, main, peach]
  },
  {
    id: 4,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main,
    hoverImg: hovImg,
    smallImgs: [black, peach, main, peach]
  },
  {
    id: 1,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main,
    hoverImg: hovImg,
    smallImgs: [black, peach, main, peach]
  },
  {
    id: 2,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main,
    hoverImg: hovImg,
    smallImgs: [black, peach, main, peach]
  },
  {
    id: 3,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main,
    hoverImg: hovImg,
    smallImgs: [black, peach, main, peach]
  },
  {
    id: 4,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main,
    hoverImg: hovImg,
    smallImgs: [black, peach, main, peach]
  }

]

const AllProducts = () => {

  return (
    <>
      <div className='grid grid-cols-4 gap-15 m-6'>
        {productsDetails.map((prod, index) => (
          <Link to ={`/product/${prod.id}`} key={prod.id} >
          <Product  {...prod} />
          </Link>
        ))}
      </div>
    </>
  )

}

export default AllProducts