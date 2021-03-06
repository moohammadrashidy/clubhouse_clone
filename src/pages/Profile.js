import React from 'react'
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai';
import { BsAt, BsPlus, BsUpload } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import exploreStyle from '../style/explore.module.css'
import style from '../style/profile.module.css';

function Profile() {
    return (
        <>
            <div className={style.profileContainer}>
                <div className={exploreStyle.header}>
                    <div className={`${exploreStyle.head} text-right mb-0`}>
                        <Link to='/home'>
                            <img src="/images/arrow.png" className={exploreStyle.arrow_icon} />
                        </Link>
                        <div className={style.actionBtn}>
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting />
                        </div>
                    </div>
                </div>
                <img src="/images/profile.jfif" className={style.profile_image} />
                <h4>Mayank Chotaliya</h4>
                <p>@headerJS</p>
                <div className={style.follow}>
                    <p>
                        <span>12.5k</span>
                        {" "}followers
                    </p>
                    <p>
                        <span>50</span>
                        {" "} following
                    </p>
                </div>
                <button>Add a bio</button>
                <div className='mb-4'>
                    <button className='mb-0'>
                        <AiOutlineTwitter /> Twitter
                    </button>
                    <button>
                        <AiOutlineInstagram /> Instagram
                    </button>
                </div>
                <div className={style.nominated}>
                    <img src="/images/profile.jfif" />
                    <div>
                        <p>
                            Joined on 5-April-2021
                        </p>
                        <p>
                            Nominated by
                            <span>
                                {" "}dgfdsgfgdfg
                            </span>
                        </p>
                    </div>
                </div>
                <p>Member of</p>
                <button className={style.addMemberBtn}><BsPlus /></button>
            </div>
        </>
    )
}

export default Profile