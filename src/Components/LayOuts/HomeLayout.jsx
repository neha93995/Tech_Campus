import SideHeader from "../Header/SideHeader";
import 'tailwindcss/tailwind.css';
import TopHeader from "../Header/TopHeader";


function HomeLayout({children}){
    return (
    <>
        <div className="flex ">
            <div className="h-[200vh] w-full  ">
                <TopHeader/>
            {
                children
            }
            </div>
             <SideHeader />
            

        </div>
    </>
    )

}

export default HomeLayout;