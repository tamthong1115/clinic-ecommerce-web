import * as Icon from "react-icons/bs";
import dt from "../assets/img/dt.jpg";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

const AdsApp = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        if (windowWidth < 768) {
            setIsVisible(true);
        } else setIsVisible(false);
    }, [windowWidth]);

    // update windowWidth when it changes
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        !isVisible ?
            <div className={'flex justify-center items-center p-5 w-full h-full bg-white'}>
                <div className={'lg:w-2/3 md:max-lg:w-3/4 h-full bg-white'}>
                    <div className="w-full h-full flex justify-around items-center lg:p-5 md:max-lg:p-1">
                        <div className={'w-3/5 text-4xl text-emerald-600 flex flex-col justify-between'}>
                            <div>
                                Trải nghiệm App chăm sóc sức khỏe của chúng tôi miễn phí trong 14 ngày.
                            </div>
                            <div className={'w-full text-emerald-600 text-lg mt-10'}>
                                Tải ngay hôm nay
                                <div className={'w-full flex flex-row justify-start items-center'}>
                                    <Link to={''}
                                          className={'min-w-40 md:max-lg:w-1/2 bg-emerald-600 rounded-md p-2 text-white flex flex-row justify-around items-center mr-1'}>
                                        <div className={'h-full flex flex-row justify-around items-center'}>
                                            <Icon.BsGooglePlay size={30}/>
                                            <div className={'text-left ml-1.5'}>Get it on <br/><strong>Google Play</strong>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to={''}
                                          className={'min-w-40 md:max-lg:w-1/2 bg-emerald-600 rounded-md p-2 text-white flex flex-row justify-around items-center ml-1'}>
                                        <div className={'h-full flex flex-row justify-around items-center'}>
                                            <Icon.BsApple size={30}/>
                                            <div className={'text-left ml-1.5'}>Get it on <br/><strong>App
                                                Store</strong></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={'w-2/5'}>
                            <img src={dt} alt={'smartphone'}/>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className={'flex justify-center items-center w-full h-ful bg-white p-2'}>
                <div className={'w-10/12/12 flex justify-center items-center'}>
                    {/*this is a text*/}
                    <div className={'w-1/2 p-2 text-emerald-600 text-xl'}> Trải nghiệm App chăm sóc sức khỏe của chúng
                        tôi ngay.
                    </div>
                    {/*this is a download button*/}
                    <div className={'w-1/2 flex justify-center items-center p-2'}>
                        <Link to={''}
                              className={'w-3/4 bg-emerald-600 rounded-md p-2 text-white flex flex-row justify-around items-center mr-1'}>
                            <Icon.BsCloudArrowDown size={30}/>
                            <div className={'text-left'}><strong>Download now</strong></div>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
export {AdsApp};