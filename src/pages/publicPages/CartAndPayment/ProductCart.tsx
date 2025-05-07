import PublicPaths from '../../../routes/public/pathPublic.ts';
import { Link } from 'react-router-dom';

const ProductCart = () => {
  return (
    <div
      className={
        'w-screen h-full flex flex-col justify-center items-center my-10'
      }
    >
      {/*title here*/}
      <p
        className={
          ' w-[90%] my-5 font-bold text-center text-xl text-emerald-600 border-b-2 border-emerald-600'
        }
      >
        GIỎ HÀNG CỦA BẠN
      </p>
      {/*option buttons here: payment and create new*/}
      <div className={'w-[30%] grid grid-cols-2 grid-rows-1 gap-4'}>
        <Link
          to={'/'}
          className={
            'rounded-full bg-emerald-600 text-white text-center p-2 font-bold'
          }
        >
          Hủy đặt
        </Link>
        <Link
          to={PublicPaths.BOOKING_CART_CREATE}
          className={
            'rounded-full bg-emerald-600 text-white text-center p-2 font-bold'
          }
        >
          Tạo mới
        </Link>
      </div>
      {/*show all booking list that are paid or not with status (PENDING, COMPLETE, CANCEL)'}'*/}
    </div>
  );
};

export default ProductCart;
