import Product from './Product'
import main9 from '../../assets/pd9.webp'
import hov9 from '../../assets/pd9h.webp'
import main10 from '../../assets/pd10.webp'
import hov10 from '../../assets/pd10h.webp'
import main11 from '../../assets/pd11.webp'
import hov11 from '../../assets/pd11h.webp'
import main12 from '../../assets/pd12.webp'
import hov12 from '../../assets/pd12h.webp'
import main13 from '../../assets/pd13.webp'
import hov13 from '../../assets/pd13h.webp'
import main14 from '../../assets/pd14.webp'
import hov14 from '../../assets/pd14h.webp'
import main15 from '../../assets/pd15.webp'
import hov15 from '../../assets/pd15h.webp'
import main16 from '../../assets/pd16.webp'
import hov16 from '../../assets/pd16h.webp'

export const productsDetails = [
  {
    id: 21,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main13,
    hoverImg: hov13,
    smallImgs: [main13, hov13]
  },
  {
    id: 22,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main14,
    hoverImg: hov14,
    smallImgs: [main14, hov14]
  },
  {
    id: 23,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main15,
    hoverImg: hov15,
    smallImgs: [main15, hov15]
  },
  {
    id: 24,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main16,
    hoverImg: hov16,
    smallImgs: [main16, hov16]
  },
  {
    id: 25,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main9,
    hoverImg: hov9,
    smallImgs: [hov9, main9]
  },
  {
    id: 26,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main10,
    hoverImg: hov10,
    smallImgs: [hov10, main10]
  },
  {
    id: 27,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main11,
    hoverImg: hov11,
    smallImgs: [main11, hov11]
  },
  {
    id: 28,
    title: "True Brown K",
    price: 36,
    desc: "King Kylie matte lip kit",
    Img: main12,
    hoverImg: hov12,
    smallImgs: [main12, hov12]
  },

]

const AllProducts = () => {

  return (
    <>
      <div className='grid grid-cols-4 gap-4'>
        {productsDetails.map((prod) => (
          <Product key={prod.id} {...prod} />
        ))}
      </div>
    </>
  )







}

export default AllProducts