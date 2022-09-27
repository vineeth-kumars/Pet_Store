import Data from "../Data";
import {  View } from "react-native";

import CardsList from "./CardsList";

export default function PetList(props) {
  const petName = props.pet;
  const finalList = Data?.filter(function (item) {
    return item.category == petName;
  });
   
  

  return (
    <View >
      {finalList?.map((item)=>{
              console.log(item )
    
               
                    return(  
                        <CardsList item={item}/>
                        )
                
                })
            } 
           
    </View>
  );
}
