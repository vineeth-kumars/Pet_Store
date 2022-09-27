import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable , ScrollView} from "react-native";
import Select from "./components/Select";
import ViewCards from "./components/ViewCards";
import Data from './Data';
import PetList from "./components/PetList";

export default function App() {
  const[selectedPet , setSelectedPet] = useState('')
  console.log(selectedPet);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Pet Store</Text>
      </View>
      
      <View style={styles.selectMainContainer}>
        <View style={styles.selectContainer}>
          <Select selectFunc={setSelectedPet}/>
        </View>
      </View>
      <View style={styles.listContainer}>
        <ScrollView>
          <PetList pet={selectedPet}/>
          </ScrollView>
         
          

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 125,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    backgroundColor: "red",
    borderColor: "#D53A19",
    borderWidth: 2,
    padding: 16,
    width: "100%",
    padding: 20,
    marginBottom: 20,
  },
  headerText: {
    color: "white",
    paddingLeft: 20,
  },
  selectMainContainer: {
    width: "80%",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
   
  },
  selectContainer: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "black",
    width: "100%",
  },
  listContainer: {
    paddingTop: 20,
    paddingBottom:60
   
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
