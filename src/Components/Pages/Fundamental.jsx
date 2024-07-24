import HomeLayout from "../LayOuts/HomeLayout";
import { FaYoutube, FaCode } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function Fundamental() {
    return (
        <HomeLayout>
            <section className="p-5 text-white">
                <h1 className="text-2xl font-bold my-5">Most Asked DBMS Interview Questions</h1>
                <p className="text-sm w-[70%]">Explore essential DBMS interview questions curated to help you ace your next interview effortlessly. Gain valuable insights and boost your confidence with our carefully selected questions tailored for success in database management.<br /> <br />Dive in now and excel in your DBMS journey. Special thanks to Riti Kumari for helping us curating the sheets and the videos. You can subscribe to her Youtube Channel, she keeps posting amazing content. <br /> We will be adding descriptive blogs very very soon to all the topics, please bookmark this as of now.</p>

                <div className="my-10">
                    
                    <div className="collapse my-2 border rounded-xl bg-base-200 ">
                        <input type="checkbox" className="peer" />
                        <div
                            className="collapse-title text-white ">
                            
                            <div>Introduction</div>
                            {/* ------------------progress bar---------------- */}
                            {/* <div className="flex flex-col items-center ">
                                <div className="radial-progress text-blue-500 " style={{ "--value": 70 }} role="progressbar">70%</div>
                                
                            </div> */}
                        </div>
                        <div className="collapse-content ">
                            <div className="overflow-x-auto">
                            <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                            </div>
                        </div>
                    </div>
                    <div className="collapse my-2 border rounded-xl bg-base-200 ">
                        <input type="checkbox" className="peer" />
                        <div
                            className="collapse-title text-white ">
                            Hello world
                        </div>
                        <div className="collapse-content ">
                            <div className="overflow-x-auto">
                            <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                            </div>
                        </div>
                    </div>
                    <div className="collapse my-2 border rounded-xl bg-base-200 ">
                        <input type="checkbox" className="peer" />
                        <div
                            className="collapse-title text-white ">
                            Operator
                        </div>
                        <div className="collapse-content ">
                            <div className="overflow-x-auto">
                            <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                            </div>
                        </div>
                    </div>
                    <div className="collapse my-2 border rounded-xl bg-base-200 ">
                        <input type="checkbox" className="peer" />
                        <div
                            className="collapse-title text-white ">
                            Data Types
                        </div>
                        <div className="collapse-content ">
                            <div className="overflow-x-auto">
                            <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                            </div>
                        </div>
                    </div>
                    <div className="collapse my-2 border rounded-xl bg-base-200 ">
                        <input type="checkbox" className="peer" />
                        <div
                            className="collapse-title text-white ">
                            If Else
                        </div>
                        <div className="collapse-content ">
                            <div className="overflow-x-auto">
                            <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                            </div>
                        </div>
                    </div>
                    <div className="collapse my-2 border rounded-xl bg-base-200 ">
                        <input type="checkbox" className="peer" />
                        <div
                            className="collapse-title text-white ">
                            Loops
                        </div>
                        <div className="collapse-content ">
                            <div className="overflow-x-auto">
                            <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                                <Topic_Accordian></Topic_Accordian>
                            </div>
                        </div>
                    </div>

                    


                </div>
            </section>
        </HomeLayout>
    )
}

export default Fundamental;

function Topic_Accordian() {
    return (

        <div className="collapse my-2 border rounded-xl">
            <input type="checkbox" className="peer" />
            <div
                className="collapse-title text-white ">
                DBMS Introduction
            </div>
            <div className="collapse-content ">
                <div className="overflow-x-auto">
                    <table className="table text-center ">
                        {/* head */}
                        <thead className="p-3 text-white">
                            <tr>
                                <th className="border">status</th>
                                <th className="border">problem</th>
                                <th className="border">YouTube</th>
                                <th className="border">Practice</th>
                                <th className="border">Note</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td className="border">
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </td>
                                <td className="border">
                                    User input/output
                                </td>
                                <td className="border">
                                    <FaYoutube className="text-red-600 text-2xl m-auto" />
                                </td>
                                <td className="border">
                                    < FaCode className="text-blue-600 text-xl m-auto" />
                                </td>

                                <td className="border">
                                    < IoMdAdd className=" m-auto" />
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td className="border">
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </td>
                                <td className="border">
                                    Data type
                                </td>
                                <td className="border">
                                    <FaYoutube className="text-red-600 text-2xl m-auto" />
                                </td>
                                <td className="border">
                                    < FaCode className="text-blue-600 text-xl m-auto" />
                                </td>

                                <td className="border">
                                    < IoMdAdd className=" m-auto" />
                                </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="border">
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </td>
                                <td className="border">
                                    Loops
                                </td>
                                <td className="border">
                                    <FaYoutube className="text-red-600 text-2xl m-auto" />
                                </td>
                                <td className="border">
                                    < FaCode className="text-blue-600 text-xl m-auto" />
                                </td>

                                <td className="border">
                                    < IoMdAdd className=" m-auto" />
                                </td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <td className="border">
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </td>
                                <td className="border">
                                    If Else statement
                                </td>
                                <td className="border">
                                    <FaYoutube className="text-red-600 text-2xl m-auto" />
                                </td>
                                <td className="border">
                                    < FaCode className="text-blue-600 text-xl m-auto" />
                                </td>

                                <td className="border">
                                    < IoMdAdd className=" m-auto" />
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>



    )
}