import { useEffect, useState } from 'react';

import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

const Support = () => {
  const [isCreate, setIsCreate] = useState(false);

  const handleCreateNew = () => {
    setIsCreate(true);
  };

  const handleCloseCreate = () => {
    setIsCreate(false);
  };

  const getConfigMotion = (isClosed: boolean) => {
    return {
      initial: {
        top: isClosed ? '-100px' : 0,
        opacity: isClosed ? 0 : 1,
      },
      animate: {
        top: isClosed ? 0 : '-100px',
        opacity: isClosed ? 1 : 0,
      },
      transition: {
        top: { duration: 0.3 },
        opacity: { duration: 0.3 },
      },
      exit: {
        top: isClosed ? '-100px' : 0,
        opacity: isClosed ? 0 : 1,
      },
    };
  };

  useEffect(() => {
    console.log(isCreate);
  }, [isCreate]);

  // press('#createBtn', (target: any) => {
  //   animate(target, { scale: 0.8 });
  //   return () => {
  //     animate(target, { scale: 1 });
  //   };
  // });

  return (
    <>
      <div
        className={
          'w-full h-full flex flex-col justify-center items-center relative'
        }
      >
        {/*In this page, we'll build a button which create new ticket for get support*/}
        <div className={'flex flex-col justify-center items-center m-2 p-2'}>
          <motion.div
            id={'createBtn'}
            className={
              'shadow-md shadow-gray-500 rounded-full py-1 px-2 border-2 border-emerald-600'
            }
            onClick={handleCreateNew}
          >
            Tạo mới
          </motion.div>
        </div>
        {/*List of tickets*/}
      </div>
      {/*Show new ticket dialog*/}

      <MotionConfig>
        <AnimatePresence initial={false}>
          {isCreate ? (
            <motion.div
              {...getConfigMotion(isCreate)}
              className={
                'w-[80%] h-max rounded-lg shadow-lg shadow-gray-500 bg-white absolute'
              }
            >
              {/*Title of ticket*/}
              <div
                className={
                  'w-full h-fit p-1 bg-emerald-600 text-center text-white font-bold'
                }
              >
                Tạo phiếu hỗ trợ mới
              </div>
              <form className={'w-full px-2 py-3'}>
                {/*Topic of ticket*/}
                <fieldset
                  className={
                    'w-full border-2 border-emerald-600 rounded-lg p-0.5'
                  }
                >
                  <legend>Chủ đề</legend>
                  <input
                    type={'text'}
                    placeholder={'Câu hỏi chủ đề của bạn là gì?'}
                    className={'w-full px-1 outline-none'}
                  />
                </fieldset>
                {/*Content of ticket*/}
                <fieldset
                  className={
                    'w-full min-h-40 border-2 border-emerald-600 rounded-lg p-0.5'
                  }
                >
                  <legend>Nội dung</legend>
                  <textarea
                    className={'w-full min-h-40 outline-none'}
                  ></textarea>
                </fieldset>
                {/*Action buttons*/}
                <div
                  className={
                    'w-full flex flex-row justify-around items-center mt-3'
                  }
                >
                  <button
                    type={'button'}
                    className={
                      'px-2 py-1 rounded-full border-2 border-emerald-600'
                    }
                    onClick={handleCloseCreate}
                  >
                    Thoát
                  </button>
                  <button
                    type={'submit'}
                    className={
                      'px-4 py-1 rounded-full border-2 border-emerald-600'
                    }
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
};
export default Support;
