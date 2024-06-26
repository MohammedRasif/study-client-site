import { useLoaderData } from "react-router-dom";
import { BsBookmarkStar } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";

const SeeDetails = () => {
    const details = useLoaderData()
    const {title,marks,date,assignment,photo,pdf,description,_id} = details

    return (
    <div className="card w-96  ml-[600px] pt-24">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="flex items-center">
        <BsCalendar2Date className="text-blue-800 "></BsCalendar2Date>
        <h1 className="pl-3">{date}</h1>
    </div>
    <div className="flex items-center">
        <BsBookmarkStar className="text-blue-800 "></BsBookmarkStar>
        <h1 className="pl-3">{marks}</h1>
    </div>
    <div className="flex items-center">
        <MdOutlineAssignment className="text-blue-800 "></MdOutlineAssignment>
        <h1 className="pl-3">{assignment}</h1>
    </div>
    <div className="flex items-center">
        <FaRegFilePdf className="text-blue-800 "></FaRegFilePdf>
        <h1 className="pl-3">{pdf}</h1>
    </div>
    <h1 className="text-2xl text-blue-800 font-bold">---------------o---------------</h1>
  </div>
</div>
    );
};

export default SeeDetails;