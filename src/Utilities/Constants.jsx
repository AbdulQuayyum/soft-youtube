import { MdMusicNote, MdDeveloperMode, MdFitnessCenter, MdTheaterComedy, MdGraphicEq, MdCheckroom, MdFaceRetouchingNatural, MdSchool, MdLiveTv, MdSportsEsports, MdOndemandVideo, } from "react-icons/md"
import { RxDashboard } from "react-icons/rx"
import { TbCat, TbCode } from "react-icons/tb"
import { HiOutlinePhotograph } from "react-icons/hi"

export const Categories = [
    { name: 'New', icon: <RxDashboard size={24} />, },
    // { name: 'JS Mastery', icon: <TbCode size={24} />, },
    { name: 'Programming', icon: <TbCode size={24} />, },
    { name: 'Anime', icon: <HiOutlinePhotograph size={24} />, },
    { name: 'Cats', icon: <TbCat size={24} />, },
    // { name: 'ReactJS', icon: <TbCode size={24} />, },
    // { name: 'NextJS', icon: <TbCode size={24} />, },
    { name: 'Music', icon: <MdMusicNote size={24} /> },
    { name: 'Education', icon: <MdSchool size={24} />, },
    { name: 'Podcast', icon: <MdGraphicEq size={24} />, },
    { name: 'Movie', icon: <MdOndemandVideo size={24} />, },
    { name: 'Gaming', icon: <MdSportsEsports size={24} />, },
    { name: 'Live', icon: <MdLiveTv size={24} />, },
    { name: 'Sport', icon: <MdFitnessCenter size={24} />, },
    { name: 'Fashion', icon: <MdCheckroom size={24} />, },
    { name: 'Beauty', icon: <MdFaceRetouchingNatural size={24} />, },
    { name: 'Comedy', icon: <MdTheaterComedy size={24} />, },
    { name: 'Gym', icon: <MdFitnessCenter size={24} />, },
    { name: 'Crypto', icon: <MdDeveloperMode size={24} />, },
]

export const DemoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const DemoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const DemoVideoUrl = '/video/GDa8kZLNhJ4';
export const DemoChannelTitle = 'JavaScript Mastery';
export const DemoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const DemoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'

export const Logo = "/logo.png"