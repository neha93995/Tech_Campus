import SideHeader from "../Header/SideHeader";
import 'tailwindcss/tailwind.css';
import TopHeader from "../Header/TopHeader";


function HomeLayout({children}){
    return (
    <>
        <div className="flex ">
            <div className="h-[200vh] w-full border border-yellow-600 ">
                <TopHeader/>
            {
                children
            }
            </div>
             <SideHeader />
            {/* <div className="w-[20%] border border-b-blue-400">
            </div> */}

        </div>
    </>
    )

}

export default HomeLayout;