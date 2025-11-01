import React, { useState } from 'react'
import Product from '../Cosmetics-Page/Product'
import { Link } from 'react-router-dom'
import main1 from '../../assets/pd1.webp'
import hov1 from '../../assets/pdh1.webp'
import main2 from '../../assets/pd2.webp'
import hov2 from '../../assets/pdh2.webp'
import main3 from '../../assets/pd3.webp'
import hov3 from '../../assets/pd3h.webp'
import s1 from '../../assets/pd3s-1.webp'
import s2 from '../../assets/pd3s-2.webp'
import s3 from '../../assets/pd3s-4.webp'
import main4 from '../../assets/pd4.webp'
import hov4 from '../../assets/pd4h.webp'
import s4 from '../../assets/pd4s-1.webp'
import main5 from '../../assets/pd5.webp'
import hov5 from '../../assets/pd5h.webp'
import s5 from '../../assets/pd5s-1.webp'
import s6 from '../../assets/pd5s-2.webp'
import s7 from '../../assets/pd5s-3.webp'
import s8 from '../../assets/pd5s-4.webp'
import main6 from '../../assets/pd6.webp'
import hov6 from '../../assets/pd6h.webp'
import main7 from '../../assets/pd7.webp'
import hov7 from '../../assets/pd7h.webp'
import s9 from '../../assets/pd7s-1.webp'
import s10 from '../../assets/pd7s-2.webp'
import s11 from '../../assets/pd7s-3.webp'
import s12 from '../../assets/pd7s-4.webp'
import main8 from '../../assets/pd8.webp'
import hov8 from '../../assets/pd8h.webp'
import s13 from '../../assets/pd8s-1.webp'
import s14 from '../../assets/pd8s-2.webp'
import s15 from '../../assets/pd8s-3.webp'

export const productsDetails = [
  {
    id: 1,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main1,
    hoverImg: hov1,
    category : "Cosmetics",
    smallImgs: [hov1, main1]
  },
  {
    id: 2,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main2,
    hoverImg: hov2,
    category : "Cosmetics",
    smallImgs: [hov2, main2]
  },
  {
    id: 3,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main5,
    hoverImg: hov5,
    category : "Cosmetics",
    smallImgs: [s5, s6, s7, s8]
  },
  {
    id: 4,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main4,
    hoverImg: hov4,
    category : "Cosmetics",
    smallImgs: [main4, hov4, s4]
  },
  {
    id: 5,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main3,
    hoverImg: hov3,
    category : "Cosmetics",
    smallImgs: [s1, s2, s3]
  },
  {
    id: 6,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main6,
    hoverImg: hov6,
    category : "Cosmetics",
    smallImgs: [main6, hov6]
  },
  {
    id: 7,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main7,
    hoverImg: hov7,
    category : "Cosmetics",
    smallImgs: [s9, s10, s11, s12]
  },
  {
    id: 8,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main8,
    hoverImg: hov8,
    category : "Cosmetics",
    smallImgs: [s13, s14, s15]
  },
  {
    id: 9,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main1,
    hoverImg: hov1,
    category : "Cosmetics",
    smallImgs: [hov1, main1]
  },
  {
    id: 10,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main2,
    hoverImg: hov2,
    category : "Cosmetics",
    smallImgs: [hov2, main2]
  },
  {
    id: 11,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main5,
    hoverImg: hov5,
    category : "Cosmetics",
    smallImgs: [s5, s6, s7, s8]
  },
  {
    id: 12,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main4,
    hoverImg: hov4,
    category : "Cosmetics",
    smallImgs: [main4, hov4, s4]
  }
]

const AllProducts = () => {

  return (
    <>
      <div className='grid grid-cols-4 gap-15 m-6'>
        {productsDetails.map((prod) => (
          <Product key={prod.id} {...prod} />
        ))}
      </div>
    </>
  )

}

export default AllProducts