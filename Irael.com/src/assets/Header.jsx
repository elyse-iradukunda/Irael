


 function Header(){

return( 

    <>


    <nav className="bg-white w-100 h-20 font-serif sticky top"  >
    
        
    <div className="flex justify-between">
      <div>
        <ul className=" absolute  flex gap-2 h-6 mr-100 right-10 top-10">
        <li className="border-r border-black p-1  " > <a className=" text-white bg-green-600  p-1 rounded" href="#">Home</a> </li>
        <li className="border-r border-black p-1 hover:bg-gray-200 p-1 "><a className="text-green-700 border-b-2 border-transparent hover:border-green-600 transition-all duration-100 hover:border-r-0 hover:origin-right "  href="#">Services</a> </li>
        <li className="border-r border-black p-1 hover:bg-gray-200 p-1"> <a className=" text-green-700 border-b-2 border-transparent hover:border-green-600 transition-all duration-100 hover:border-r-0 hover:origin-right "  href="#">Portfolio</a></li>
        <li className="border-r border-black p-1 hover:bg-gray-200 p-1"> <a className=" text-green-700 border-b-2 border-transparent hover:border-green-600 transition-all duration-100 hover:border-r-0 hover:origin-right " href="#">About Us</a></li>
        <li className="border-r border-black p-1 hover:bg-gray-200 p-1"> <a className=" text-green-700 border-b-2 border-transparent hover:border-green-600 transition-all duration-100 hover:border-r-0 hover:origin-right " href="#">Contact Us </a></li>
      </ul>
      <div className="">
        <img src='./src/assets/irael.png' className="w-40 h-40" id="logo" />
        </div>
      </div>
    </div>
    
</nav>
<br />
    </>
);
 }

 export default Header