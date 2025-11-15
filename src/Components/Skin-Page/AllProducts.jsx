import Product from './Product'
import main1 from '../../assets/pd1.webp'
import hov1 from '../../assets/pdh1.webp'
import main2 from '../../assets/pd2.webp'
import hov2 from '../../assets/pdh2.webp'
import main4 from '../../assets/pd4.webp'
import hov4 from '../../assets/pd4h.webp'
import s4 from '../../assets/pd4s-1.webp'
import main5 from '../../assets/pd5.webp'
import hov5 from '../../assets/pd5h.webp'
import s5 from '../../assets/pd5s-1.webp'
import s6 from '../../assets/pd5s-2.webp'
import s7 from '../../assets/pd5s-3.webp'
import s8 from '../../assets/pd5s-4.webp'
import main9 from '../../assets/pd9.webp'
import hov9 from '../../assets/pd9h.webp'
import main10 from '../../assets/pd10.webp'
import hov10 from '../../assets/pd10h.webp'
import main11 from '../../assets/pd11.webp'
import hov11 from '../../assets/pd11h.webp'
import main12 from '../../assets/pd12.webp'
import hov12 from '../../assets/pd12h.webp'

export const productsDetails = [
  {
    id: 13,
    title: "Her's Skin Serum",
    price: 36,
    desc: "Hydrating Glow Serum",
    Img: main9,
    hoverImg: hov9,
    smallImgs: [hov9, main9]
  },
  {
    id: 14,
    title: "Her's Skin Serum",
    price: 56,
    desc: "Hydrating Glow Serum",
    Img: main10,
    hoverImg: hov10,
    smallImgs: [hov10, main10]
  },
  {
    id: 15,
    title: "Her's Skin Serum",
    price: 86,
    desc: "Hydrating Glow Serum",
    Img: main11,
    hoverImg: hov11,
    smallImgs: [main11, hov11]
  },
  {
    id: 16,
    title: "Her's Skin Serum",
    price: 36,
    desc: "Hydrating Glow Serum",
    Img: main12,
    hoverImg: hov12,
    smallImgs: [main12, hov12]
  },
  {
    id: 17,
    title: "Her's Skin Serum",
    price: 36,
    desc: "Hydrating Glow Serum",
    Img: main1,
    hoverImg: hov1,
    smallImgs: [hov1, main1]
  },
  {
    id: 18,
    title: "Her's Skin Serum",
    price: 36,
    desc: "Hydrating Glow Serum",
    Img: main2,
    hoverImg: hov2,
    smallImgs: [hov2, main2]
  },
  {
    id: 19,
    title: "Her's Skin Serum",
    price: 36,
    desc: "Hydrating Glow Serum",
    Img: main5,
    hoverImg: hov5,
    smallImgs: [s5, s6, s7, s8]
  },
  {
    id: 20,
    title: "Her's Skin Serum",
    price: 36,
    desc: "Hydrating Glow Serum",
    Img: main4,
    hoverImg: hov4,
    smallImgs: [main4, hov4, s4]
  }
]

const AllProducts = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-4'>
          {productsDetails.map((prod) => (
            <Product key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </>
  )
}

export default AllProducts