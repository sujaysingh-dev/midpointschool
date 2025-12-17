export default function ErrorPage(){
    return(
        <div className="bg-gray-100 h-screen flex items-center justify-center p-2 md:p-6 overflow-y-auto">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-red-600 font-bold">PAGE NOT FOUND</h1>
                <h1 className="text-red-500 text-2xl font-bold">404</h1>
            </div>
        </div>
    )
}