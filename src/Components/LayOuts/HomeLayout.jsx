import SideHeader from "../Header/SideHeader";
import 'tailwindcss/tailwind.css';
import TopHeader from "../Header/TopHeader";


function HomeLayout({children}){
    return (
    <>
        <div className="flex ">
            <SideHeader />
            <div className=" w-full  ">
            <TopHeader  type={"2"}/>
            {
                children
            }
            </div>
            

        </div>
    </>
    )

}

export default HomeLayout;