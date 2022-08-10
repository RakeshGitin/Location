import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Text,TouchableOpacity } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Card} from 'react-native-shadow-cards';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const MYSearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.container}>
      <View  style={{marginBottom:30,}}>
      <Ionicons name="arrow-back" size={30}  style={{marginTop:8,marginLeft:10}} />
      <Text style={{marginLeft:195,fontSize:40,marginTop:-40,fontWeight:"1300",color:"gray",fontStyle:"italic"}}>Location</Text>
      <Text style={{marginLeft:50,marginTop:-20}}>{'\n'} add your adress here for more communication</Text>
      </View>
      

      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search for Location..."
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(false);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )}
      </View>
      <View  style={{ paddingTop:10,justifyContent:"flex-start",flexDirection:"row"}}>
        <TouchableOpacity>
        <Entypo  name="location-pin" size={25}  style={{ padding:1,  justifyContent:"flex-start",marginLeft:20,}}/>
        </TouchableOpacity>
      
      
      
      <TouchableOpacity 
      style={{padding:7}} onPress={()=>alert('Go to locationMap')}>
        <Text>Use The Current Location</Text>
        </TouchableOpacity>

        
     
      </View>
      <Text
      style={{marginLeft:"60%",marginTop:20, marginLeft:240,color:"#8A2BE2"}} onPress={()=>alert('Add new Adress')}>+ADD ADDRESS</Text>
      
      {/* cards view 2 */}
      <Card  style={{width:"95%",
                    height:70,
                    flexDirection:"row",
                    marginTop:10,
                    marginLeft:10,
                    }}>
                      
        <Card style={{backgroundColor: "#A230ED",
                      width:55,
                      height:70,
                      justifyContent:"center",
                      alignItems:"center"}}>
                        
        <Ionicons name="home" size={40} color="white"/>
        </Card>
        <Text style={styles.maintext}>Home</Text>
        <Text style={styles.addresscontainer}>{'\n'}21-2-02,sundarayy nagar,Arilova,{'\n'}Vishakapatnam,Andhra pradesh</Text>
        <Ionicons name="chevron-down-sharp" size={30} style={{marginTop:30,marginLeft:40}}/>
        <TouchableOpacity style={{height:18,width:85,marginTop:10,marginLeft:-80,marginRight:10,alignItems:"center",justifyContent:"center",borderRadius:5,backgroundColor:"black"}}>
                   <Text style={{color:"white",textsize:2}} onPress={()=>alert('This is Primary Location')}>Primary</Text> 
        </TouchableOpacity>

      </Card>
      
      <Card  style={{width:"92%",
                    height:70,
                    flexDirection:"row",
                    marginTop:15,
                    marginLeft:18
                    }}>
                      
        <Card style={{backgroundColor: "#A230ED",
                      width:55,
                      height:70,
                      justifyContent:"center",
                      alignItems:"center",
                      marginLeft:-7}}>
        <FontAwesome name="building" size={40} color="white"/>

        </Card>
        <Text style={styles.maintext}>Work</Text>
        <Text style={styles.addresscontainer}>{'\n'}21-2-02,sundarayy nagar,Arilova,{'\n'}Vishakapatnam,Andhra pradesh</Text>
        <Ionicons name="chevron-down-sharp" size={30} style={{marginTop:25,marginLeft:50}}/>

      </Card>

    
      
    </View>
    
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    margin: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "100%",
    height:110,


  },
  searchBar__unclicked: {
    padding: 1,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignItems: "center",
    marginLeft:10
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
    width: "90%",
    justifyContent:"center",
  },
  cardcontainer: {
    width:"80%",
    height:"10%",
    justifyContent:"flex-start",
    marginTop:50,

  },
  maintext:{
    fontWeight:"900",
    marginLeft:12,
    marginTop:5,

    
    
  },
  addresscontainer:{
    fontWeight:"400",
    marginLeft:-38,
    marginTop:15,
    fontSize:13
    
  }
  
});
export default MYSearchBar;
