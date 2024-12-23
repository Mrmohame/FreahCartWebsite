
// "use client";

// import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
// import { useEffect, useState } from "react";
// import {
//   HiChartPie,
//   HiClipboard,
//   HiCollection,
//   HiInformationCircle,
//   HiLogin,
//   HiPencil,
//   HiSearch,
//   HiShoppingBag,
//   HiUsers,
// } from "react-icons/hi";

// import { Accordion } from "flowbite-react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import UseProducts from "../Hook/UseProducts";


// export default function HomeNav() {
//   const [isOpen, setIsOpen] = useState(false);
// let [bestProduct,setBestProduct] =useState();
// let [rankedProduct,setRankedProduct] =useState();
//   const handleClose = () => setIsOpen(false);

// let [x,setX] = useState(false)

// let  {data,isError,error,isLoading}= UseProducts()
// // console.log(data?.data?.data,"mojanikf");

// // let x2 =  data?.data?.data?.filter((x,y) => y > 30 &&  y < Math.floor(Math.random()*data?.data?.data?.length)+30)
// // setBestProduct(x2)

// // let x3 =  data?.data?.data?.filter((x,y) => x.ratingsAverage == 4.8  )
// // setRankedProduct(x3)

// // function getData(){
// //     // axios.get("https://ecommerce.routemisr.com/api/v1/products")
// //     // .then(data => {


// //         console.log(x,"hello")
// //         // })
// //     // .catch(error => console.log(error))
// //     }


//     // function getRankedData(){
//     //     // axios.get("https://ecommerce.routemisr.com/api/v1/products")
//     //     // .then(data => {

//     //         // console.log(x,"hello2")})
//     //     // .catch(error => console.log(error))
//     //     }


// useEffect(() => {
//     // getData()
//     // getRankedData()
// setTimeout(() => {
//     setX(true)
// }, 500);

// },[])


//   return (
//     <>
//       <div className={`fixed ${x?`top-[10%]`:`top-0`} z-30 left-0 transition-all duration-[3000ms]`}>
//         <Button className="bg-yellow-900" onClick={() => setIsOpen(true)}>See Our Best</Button>
//       </div>
//       <Drawer className="z-50" open={isOpen} onClose={handleClose}>
//         <Drawer.Header  title="MENU" titleIcon={() => <></>} />
//         <Drawer.Items>
//           <Sidebar
//             aria-label="Sidebar with multi-level dropdown example"
//             className="[&>div]:bg-transparent [&>div]:p-0"
//           >
//             <div className="flex h-full flex-col justify-between py-2">
//               <div>
//                 <form className="pb-3 md:hidden">
//                   <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
//                 </form>
//                 <Sidebar.Items>

//                   <Sidebar.ItemGroup>

                   
//                     <Accordion collapseAll>
//       <Accordion.Panel>
//         <Accordion.Title> Best Products</Accordion.Title>
//         <Accordion.Content>

//    <ul className="ps-5">
//     {data?.data?.data?.filter((x,y) => y > 30 &&  y < Math.floor(Math.random()*data?.data?.data?.length)+30)?.map(product => {
//         return (
//           <Link to={`details/${product.id}/${product?.category?.name}`} className="flex flex-wrap gap-2 items-center justify-between">  <li className="cursor-pointer font-bold py-2 list-decimal text-black ">{product?.title?.split(" ").slice(0,2).join(" ")}</li>
//           <i class="fa-solid fa-certificate text-yellow-200"></i>
//           </Link>
       
//         )
//     })}
//     </ul> 
   
//         </Accordion.Content>
//       </Accordion.Panel>

//     </Accordion>

//                   </Sidebar.ItemGroup>

//                   <Sidebar.ItemGroup className="border-t-[4px] border-solid border-yellow-600 ">
                 
//                   <Accordion collapseAll>
//       <Accordion.Panel>
//         <Accordion.Title> Top Ranked </Accordion.Title>
//         <Accordion.Content>

//    <ul className="ps-5">
//     {data?.data?.data?.filter((x,y) => x.ratingsAverage == 4.8  )?.map(product => {
//         return (
//           <Link to={`details/${product.id}/${product?.category?.name}`} className="flex flex-wrap gap-2 items-center justify-between">  <li className="cursor-pointer font-bold py-2 list-decimal text-black ">{product?.title?.split(" ").slice(0,2).join(" ")}</li>
//  <i class="fa-solid fa-medal text-yellow-300"></i>
//           </Link>
//         )
//     })}
//     </ul> 
   
//         </Accordion.Content>
//       </Accordion.Panel>

//     </Accordion>
       
       
//                   </Sidebar.ItemGroup>


//                 </Sidebar.Items>
//               </div>
//             </div>
//           </Sidebar>
//         </Drawer.Items>
//       </Drawer>
//     </>
//   )


// }