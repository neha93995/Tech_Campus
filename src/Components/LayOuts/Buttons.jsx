

export function Button1({children, onClick})
{
    return (
        <button  onClick={onClick} className="bg-transparent py-2 px-5 rounded-md hover:bg-blue-600 border border-blue-600 flex gap-3 items-center text-sm">{children}</button>
    )
}
export function Button2({children, onClick})
{
    return (
        <button  onClick={onClick} className=" py-2 px-5 rounded-md bg-blue-600 border border-blue-600 flex gap-3 items-center text-sm ">{children}</button>
    )
}
export function Button3({children, onClick})
{
    return (
        <button  onClick={onClick} className=" py-2 px-5 rounded-md border flex gap-3 items-center text-sm ">{children}</button>
    )
}