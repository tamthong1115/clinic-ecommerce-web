import { BsChevronLeft, BsSearch } from 'react-icons/bs';
import React from 'react';
import { useFormik } from 'formik';

interface SearchingFieldProps {
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchingField: React.FC<SearchingFieldProps> = ({ setIsSearching }) => {
  const handleRollBack = () => {
    setIsSearching(false);
  };
  const keyTags = ['Dịch vụ', 'Khám răng', 'Tổng quát'];

  const formData = useFormik({
    initialValues: {
      keyword: '',
    },
    onSubmit: async () => {
      try {
        console.log('Testing...');
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <div
        className={
          'w-screen h-screen absolute top-0 left-0 bg-white sm:bg-transparent p-3 sm:flex sm:items-start sm:justify-center'
        }
      >
        <div
          className={
            'w-full sm:w-[70%] h-max flex flex-col justify-around items-center sm:bg-white sm:shadow-md sm:shadow-gray-300 sm:p-3 sm:rounded-lg sm:mt-36  z-20'
          }
        >
          <div className={'w-full flex flex-row justify-around items-center'}>
            {/*previous button here*/}
            <div className={'w-[20%] sm:w-[15%] h-fit'}>
              <div
                className={'w-fit border border-gray-600 rounded-3xl p-2 ml-5'}
                onClick={handleRollBack}
              >
                <BsChevronLeft size={20} color={'black'} />
              </div>
            </div>
            {/*searching zone here*/}
            <div className={'w-[80%] sm:w-[85%] h-fit p-2'}>
              <form
                className={'w-full flex flex-row justify-center'}
                onSubmit={formData.handleSubmit}
              >
                <fieldset
                  className={'w-full flex flex-row justify-center items-center'}
                >
                  <input
                    type={'text'}
                    name={'keyword'}
                    className={
                      'border border-gray-600 p-2 rounded-3xl mr-5 w-[90%] outline-2 outline-emerald-600'
                    }
                    placeholder={'Nhập từ khóa tìm kiếm'}
                  />
                  <button
                    type="submit"
                    className={'border border-gray-600 p-2 rounded-3xl'}
                  >
                    <BsSearch size={20} color={'black'} />
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
          {/*searching tags here*/}
          <div className={'w-full h-fit mt-3 text-gray-600 text-sm px-3'}>
            #Từ khóa phổ biến lúc này
          </div>
          <div
            className={
              'w-full h-full flex flex-row justify-start items-center flex-wrap p-3'
            }
          >
            {keyTags.map((tag, i) => (
              <div
                key={i}
                className={
                  'w-fit h-fit p-2 m-2 border-2 border-gray-600 rounded-3xl'
                }
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            'hidden sm:block w-screen h-screen absolute top-0 left-0 bg-[#5d5d5d4d] z-10'
          }
          onClick={() => {
            console.log('clicked');
            handleRollBack();
          }}
        ></div>
      </div>
    </>
  );
};
export default SearchingField;
