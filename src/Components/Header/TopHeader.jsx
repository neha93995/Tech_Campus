function TopHeader(){
    return(
        <div className="sticky border border-red-500 top-0 left-0 right-0 h-14 p-2 px-5 font-extrabold shadow-xl">
            
            {/*----------------- login user image */}
            <div className="bg-blue-600 rounded-full w-10 h-10 p-[2px]">
                <div className="flex gap-3 items-center">
                    <img src="https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg"  className="rounded-full"/>
                    <div className="text-blue-600 hidden sm:block">user</div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;