import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
  Pressable,
  Dimensions,
} from 'react-native';

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { Search_bar } from '../searchBar/Search_bar';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const {width, height} = Dimensions.get("screen");

export const Add_grade = ({navigation}) => {

  const [studentRollNumber, setstudentRollNumber] = useState("");
  const [courseCode, setcourseCode] = useState("");
  const [grade, setgrade] = useState("");
  const [courseUnit, setcourseUnit] = useState("");
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}>
          <Logout_button onpress="" />
          
          <Text
          style={{
            position: 'absolute',
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: height/24,
            marginLeft: width/12,
          }}>
          Add Grade
        </Text>

        <Text style={styles.id_text0}>All fields are required</Text>

        <Text style={styles.id_text1}>Student Roll Number</Text>

        <TextInput
          style={styles.input_fields1}
          placeholder="Enter student roll number"
          onChangeText={(text) => {
            setstudentRollNumber(text);
          }}
          value={studentRollNumber}
        />

        <Text style={styles.id_text2}>Course Code</Text>

        <TextInput
          style={styles.input_fields2}
          placeholder="Enter course code"
          onChangeText={(text) => {
            setcourseCode(text);
          }}
          value={courseCode}
        />

        <Text style={styles.id_text3}>Grade</Text>

        <TextInput
          style={styles.input_fields3}
          placeholder="Enter grade (i.e., A+, A, B)"
          onChangeText={(text) => {
            setgrade(text);
          }}
          value={grade}
        />

        <Text style={styles.id_text4}>Course Unit</Text>

        <TextInput
          style={styles.input_fields4}
          placeholder="Enter course unit (i.e., 1, 2, 3, 4)"
          onChangeText={(text) => {
            setcourseUnit(text);
          }}
          value={courseUnit}
        />

        <Main_button
          text="Add Grade"
          onpress=""
          horizontal_padding={0}
          margintop={height/6.2}
          marginleft={width/6}
          marginright={width/6}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("admin")}
          horizontal_padding={0}
          margintop={height/50}
          marginleft={width/6}
          marginright={width/6}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

id_text0: {
  marginTop: height/40,
  marginLeft: width/11,
  fontSize: 15,
  fontWeight: '600',
  fontFamily: 'sans-serif-thin',
},

  id_text1: {
    marginTop: height/110,
    marginLeft: width/10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  id_text2: {
    marginTop: height/50,
    marginLeft: width/10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  id_text3: {
    marginTop: height/50,
    marginLeft: width/10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  id_text4: {
    marginTop: height/50,
    marginLeft: width/10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  input_fields1: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center"
  },

  input_fields2: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center"
  },

  input_fields3: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center"
  },

  input_fields4: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center"
  },

});