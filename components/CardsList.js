import { View,ScrollView } from "react-native";
import ViewCards from "./ViewCards";



export default function CardsList(props){

    const petsList = props.item.list
    
    return(
<View style={{ padding:10} }>
    <ScrollView>
        {petsList?.map((e)=>{

return(<ViewCards petDetails={e}/>)
})}</ScrollView>
    
</View>
    
    )
}