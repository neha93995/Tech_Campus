import { Link } from "react-router-dom";
import HomeLayout from "../LayOuts/HomeLayout";
import { useContext, useEffect, useState } from "react";
import { FaCloudUploadAlt ,FaArrowLeft} from "react-icons/fa";
import { deleteUSerSkill, deleteUserSkill, getAllTopics, getUserEducationInfo, getUserPersonalInfo, getUserSkills, getUserSocialLinks, postUserEducationInfo, postUserPersonalInfo, postUserSkills, postUserSocialLinks, uploadAvatar } from "../API/ApiService";
import { AuthContext } from "../../Context/AuthContext";

function EditProfile() {

    const authContext = useContext(AuthContext);
    const [previewImage, setPreviewImage] = useState("https://t3.ftcdn.net/jpg/01/99/95/36/360_F_199953658_lzMYuyHVYFiMynfiMU8ZXquUC3crgUtH.jpg");
    const [personalInfo, setPersonalInfo] = useState(
        {
            fullname: "",
            location: "",
            birthDate: "",
            avatar: "",
            gender: "",
            description: "",
        }
    );

    const [eductionInfo, setEducationInfo] = useState({
        degree:"",
        branch:"",
        collage:"",
        percent:""
    });

    const [socialLinks, setSocialLinks] = useState({
        github:"",
        linkedin:"",
        leetcode:"",
        other:""
    });

    const [socialGetData, setSocialGetData] = useState([]);

    const [isDragging, setIsDragging] = useState(false);
    const [skills, setSkills] = useState([]);
    const [inputSkill, setInputSkill] = useState("");

    useEffect(()=>{

       getAlreadyHaveInfo();

    },[])

    const getAlreadyHaveInfo=()=>    {
          
       
        getPersonalInfo();
        getEducationInfo();
        getSocialInfo();
        getSkillsInfo();
       
    }

    const getPersonalInfo =()=>{
        getUserPersonalInfo(authContext.user.id)
        .then((res)=>
            {
                const data = res.data;
                if(res.data!=null)
                {
                    setPersonalInfo(data);
                    setPreviewImage(data.avatar);
                } 
            }
        )
        .catch((err)=>console.log(err));
    }

    const getEducationInfo=()=>{
        getUserEducationInfo(authContext.user.id)
        .then((res)=>
            {
                const data = res.data;
                if(res.data!=null)
                {
                    setEducationInfo(data[0]);
                } 
            }
        )
        .catch((err)=>console.log(err));
    }

    const getSocialInfo=()=>{
        
        getUserSocialLinks(authContext.user.id)
        .then((res)=>{
            const data = res.data;
            setSocialGetData(data);
            const newData ={};
            for( let item of data )
            {
                newData[item.plateform]=item.url; 
            }
            if(data!=null)
                {
                    setSocialLinks({
                                ...socialLinks,
                                ...newData
                            })
                }
            })
        .catch((err)=>console.log(err));
    }

    const getSkillsInfo=()=>{
        getUserSkills(authContext.user.id)
        .then(res=>{
            setSkills(res.data);
        })
        .catch((err)=>console.log(err))
    }

    function getImage(e) {
        e.preventDefault();
        const uploadedImage = e.target.files ? e.target.files[0] : e.dataTransfer.files[0];
        if (uploadedImage) {
            setPersonalInfo({
                ...personalInfo,
                avatar: uploadedImage
            });
    
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setPreviewImage(this.result);
            });
        }

    }

    
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        getImage(e);
    };


    const handlePersonalInformation = (e) => {

        setPersonalInfo({
            ...personalInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleEducation =(e)=>{
        setEducationInfo({
            ...eductionInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSocialLinks =(e)=>{
        setSocialLinks({
            ...socialLinks,
            [e.target.name]:e.target.value
        })
    }

    const handleSkills=()=>{

        const newObj = {
            skill_name:inputSkill,
            user:{
                id:authContext.user.id
            }
        }

        setSkills([
            ...skills,
            newObj
        ])

        setInputSkill("");
    }

    const handleSavePersonalInfo=()=>{  

        const formData = new FormData();
    
        // Append avatar file
        if (personalInfo.avatar) {
            formData.append('avatar', personalInfo.avatar);  
        }
        else{
            formData.append('avatar',"");
        }
        // formData.getAll
        
        // Append other personal info fields
        formData.append('fullname', personalInfo.fullname);
        formData.append('location', personalInfo.location);
        formData.append('birthDate', personalInfo.birthDate);
        formData.append('gender', personalInfo.gender);
        formData.append('description', personalInfo.description);
        formData.append('userId', authContext.user.id);
        
        formData.append('id', personalInfo.id || 0);
            
        
      
    
        postUserPersonalInfo(formData)
        .then((res) => {
            console.log("Personal information created successfully");
        })
        .catch((err) => console.log(err));
    
    }

    const handleSaveEducationInfo=()=>{
        setEducationInfo({
            ...eductionInfo,
            // user:authContext.user
            user:{
                id:authContext.user.id
            }
        })
        postUserEducationInfo(eductionInfo)
        .then((res)=>console.log("successfull  "))
        .catch((err)=>console.log(err))
    }

    const handleSaveSocialLinks=()=>{
        const postSocialLinks =socialGetData;
       

        for(let key in socialLinks)
        {
            if(socialLinks[key])
            {
                let isPresent = false;
                for(let item of postSocialLinks)
                    {
                        const plateform = item.plateform;
                        item.url = socialLinks[plateform];
                        if(plateform===key)
                        {
                            isPresent = true;
                        }
                       
                }
                if(!isPresent){
                    const newObj = {
                        plateform:key,
                        url:socialLinks[key],
                        user:{
                            id:authContext.user.id
                        }
                    }
    
                    postSocialLinks.push(newObj);
                }
            }
        }

        postUserSocialLinks(postSocialLinks)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));
  
        
    }

    const handleSaveSkills=()=>{
        postUserSkills(skills)
        .then((res)=>console.log("skills added successfully "))
        .catch((err)=>console.log(err))
    }
  

    const handleDeleteSkills=(id)=>{

        let newSkills = skills;

        newSkills = newSkills.filter((item)=>{
            return item.id!=id
        })

        setSkills(newSkills);

        deleteUserSkill(id)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));
    }

    

    return (
        <HomeLayout>
            <div className="p-5 text-white">
                <Link to='/profile'  className=' w-40 py-2 px-5 my-2 text-center bg-blue-600 text-xs font-bold text-white rounded-lg flex justify-between items-center gap-3 border'> <FaArrowLeft/> <span>Back to profile</span></Link>

                <div className="border  p-5" >
                    {/* ---------------------personal Information----------------------- */}
                    <div className=" font-semibold grid grid-cols-2">
                        <h1 className="text-lg">Personal Information</h1>
                        <div>
                            {/* ----------image upload--------------- */}
                            <div className="flex gap-5">
                                <img src={previewImage} alt="Profile" className="w-24 h-24 rounded-md m-auto" />
                                <label
                                    htmlFor="avatar"
                                    className={`cursor-pointer border border-dashed rounded-md h-24 p-4 w-full bg-white/5 ${isDragging ? 'bg-blue-200' : ''}`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    <div className="flex flex-col justify-center items-center text-gray-500">
                                        <FaCloudUploadAlt />
                                        {isDragging ? <p className="text-center ">Drop the file here</p> : <p className="text-center ">Drag and drop an image, or click to select</p>}
                                        <p className="text-xs ">.jpg, .jpeg, .png, .svg</p>
                                    </div>
                                </label>
                                <input className="hidden" type="file" id="avatar" accept=".jpg, .jpeg, .png, .svg" name="avatar" onChange={getImage} />
                            </div>

                            {/* -----------------more Information------------ */}
                            <div className="my-10 ">
                                <div className="my-5 grid grid-cols-2 gap-3">
                                    <div>
                                        <p>Name</p>
                                        <input type="text " placeholder="" name='fullname' onChange={handlePersonalInformation} value={personalInfo.fullname} className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    </div>
                                    <div>
                                        <p>Location</p>
                                        <input type="text " placeholder="" name='location' onChange={handlePersonalInformation} value={personalInfo.location} className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    </div>
                                    <div>
                                        <p>Birth Date</p>
                                        <input type="text " placeholder="" name='birthDate' onChange={handlePersonalInformation} value={personalInfo.birthDate} className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    </div>
                                    <div>
                                        <p>Gender</p>
                                        <select name='gender' onChange={handlePersonalInformation} value={personalInfo.gender} className="w-full bg-base-100 border rounded-md py-1 px-5 outline-none ">
                                            <option value="">select</option>
                                            <option value={'female'}>female</option>
                                            <option value={'male'}>male</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p>Description</p>
                                        <input type="text " onChange={handlePersonalInformation} value={personalInfo.description} name='description' placeholder="" className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-blue-500 py-1 px-5 rounded-md hover:bg-transparent border border-blue-600 hover:border-blue-600"  onClick={handleSavePersonalInfo}>Save</button>
                                    <button className="border border-blue-500 py-1 px-5 rounded-md mx-3 hover:bg-blue-600" onClick={()=>getPersonalInfo()}>Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    {/* ---------------------------Eduction---------------- */}

                    <div className="my-10 font-semibold grid grid-cols-2 ">
                        <h1 className="text-lg">Education</h1>
                        <div>
                            <div className=" ">
                                <div className=" grid grid-cols-2 gap-3">
                                    <div>
                                        <p>Higher degree</p>
                                        <input type="text " name='degree' onChange={handleEducation} value={eductionInfo.degree} className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    </div>
                                    <div>
                                        <p>Branch</p>
                                        <input type="text " name='branch' onChange={handleEducation} value={eductionInfo.branch} className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    </div>
                                    <div className="col-span-2">
                                        <p>Collage Name</p>
                                        <input type="text "  name='collage' onChange={handleEducation} value={eductionInfo.collage} className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    </div>
                                    <div>
                                        <p>Percent</p>
                                        <input type="text " name='percent' onChange={handleEducation} value={eductionInfo.percent}   className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    </div>
                                </div>
                                <div className="my-5">
                                    <button className="bg-blue-500 py-1 px-5 rounded-md hover:bg-transparent border border-blue-600 hover:border-blue-600 "  onClick={handleSaveEducationInfo} >Save</button>
                                    <button type="reset" className="border  border-blue-500 py-1 px-5 rounded-md mx-3 hover:bg-blue-600" onClick={()=>getEducationInfo()}>Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    {/* ---------------------Social Links----------------- */}

                    <div className="my-10 font-semibold grid grid-cols-2 ">
                        <h1 className="text-lg">Social Links</h1>
                        <div>
                            <div className=" ">
                                <div className=" grid grid-cols-2 gap-3">

                                
                                    <div>
                                        <p>Github</p>
                                        <input type="text" name='github' onChange={handleSocialLinks} value={socialLinks.github} className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    </div>
                                    <div>
                                        <p>Linkedin</p>
                                        <input type="text " name='linkedin' onChange={handleSocialLinks} value={socialLinks.linkedin} className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    </div>
                                    <div>
                                        <p>Leetcode</p>
                                        <input type="text "  name='leetcode' onChange={handleSocialLinks} value={socialLinks.leetcode} className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    </div>
                                    <div>
                                        <p>Other</p>
                                        <input type="text " name='other' onChange={handleSocialLinks} value={socialLinks.other}   className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    </div>
                                </div>
                                <div className="my-5">
                                    <button className="bg-blue-500 py-1 px-5 rounded-md hover:bg-transparent border border-blue-600 hover:border-blue-600 "  onClick={handleSaveSocialLinks}>Save</button>
                                    <button type="reset" className="border  border-blue-500 py-1 px-5 rounded-md mx-3 hover:bg-blue-600" onClick={()=>getSocialInfo()}>Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr/>

                    {/* -----------------skills------------------------- */}

                    <div className="my-10 font-semibold grid grid-cols-2 ">
                        <h1 className="text-lg">Skills</h1>
                        <div>
                            <div className=" ">
                                
                                    
                                <div className="flex gap-3 my-5">
                                    <input type="text " placeholder="Add Skills.............." name='github' onChange={(e)=>setInputSkill(e.target.value)} value={inputSkill} className="w-full bg-transparent border rounded-md py-1 px-5 outline-none" />
                                    <button onClick={handleSkills} className="bg-blue-500 py-1 px-5 rounded-md">add</button>
                                </div>

                                <div className="my-5">
                                    <button className="bg-blue-500 py-1 px-5 rounded-md hover:bg-transparent border border-blue-600 hover:border-blue-600 "  onClick={handleSaveSkills}>Save</button>
                                    <button type="reset" className="border  border-blue-500 py-1 px-5 rounded-md mx-3 hover:bg-blue-600" onClick={()=>getSkillsInfo()}>Cancle</button>
                                </div>
                                <div className=" flex flex-wrap gap-3">
                                    {
                                        skills.map((item, index)=>{
                                            return(
                                                <div key={index} className="bg-white/5 py-1 px-2 rounded-md flex gap-2 " > <p className="px-2">{item.skill_name} </p>  <button onClick={()=>handleDeleteSkills(item.id)} className="  h-full  hover:bg-base-200 text-xs px-2 ">x</button></div>
                                            )
                                        })
                                    }   
                                </div> 
                            </div>
                        </div>
                    </div>

                </div>

               
            </div>
        </HomeLayout>
    );
}

export default EditProfile;
