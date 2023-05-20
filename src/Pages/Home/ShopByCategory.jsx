import React, { useContext, useEffect, useState } from "react";

import Category from "./Category";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";




const ShopByCategory = () => {

 
  const [toys, setToys] = useState([]);
  // const [ftoy, setFtoy] = useState("Animal Toy");


  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);


//   const uniqueList = [
//     ...new Set(
//       toys.map((curElem) => {
//         return curElem.sub_category;
//       })
//     )
   
    
//   ];

//   const filterItems = (category)=>{
  
//   const updatedList = toys.filter(curEl =>{
//     return curEl.sub_category == category
// });

// setToys(updatedList)
    
// }

 
  
  

//   const title = uniqueList.map((curElem) => {
//     return (
//       <Tab key={curElem.index} onClick={() => filterItems(curElem)}>
//         {curElem}
//       </Tab>
//     );
//   });

  // const text = ftoy?.map((ft) => {
  //   return (
  //     <TabPanel >
  //       <Category ft={ft} />
  //     </TabPanel>
  //   );



// const handleSubCategory = (tab)=>{
//   setFtoy(tab)
// }
// console.log(ftoy)
  

  return (
    <div className="my-container">
      <h1 className="text-4xl mt-10 mb-5 text-center font-bold my-text-1">
        Shop By Category
      </h1>
      {/* <Tabs>
        <TabList>
         <Tab onClick={()=>handleSubCategory("Animal Toy")}> Animal Toy</Tab>
        <Tab onClick={()=>handleSubCategory("Bird Toy")}> Bird Toy</Tab>
        <Tab onClick={()=>handleSubCategory("Teddy Toy")}> Teddy Toy</Tab> 


        {title}
        </TabList> */}

        {
          toys?.map( ft=>
            
            <Category 
            key={ft.index}
            ft ={ft}
            />
          )
        }
      
      
      {/* </Tabs> */}
    </div>
  );
};

export default ShopByCategory;
