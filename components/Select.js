import { useState , useRef} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Data from '../Data'
export default function Select(props) {
  const select = props.selectFunc
    const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const updateSelected = (itemValue, itemIndex) => {
    // setSelected(e);
    select(itemValue)
    
  };
  
  return (
    
    <View >
      <Picker
      mode="dropdown"
       ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={updateSelected}
      >
        <Picker.Item label="--Select Here--" value="Select Here" />
        {Data?.map((item)=>{
          return(<Picker.Item label={item.category} value={item.category} />)
          
        })}
        
      </Picker>
    </View>
  );
  
}
const styles = StyleSheet.create({
    selectMainContainer:{
        width:'80%',
        paddingBottom:50,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
      },
      selectContainer:{
        borderRadius:25,
        borderWidth:2,
        borderColor:'black',
        width:'100%',
      },
      divider:{
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
      }
})
