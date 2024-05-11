import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function LandingPage() {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Hub</Text>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Here!"
          placeholderTextColor="#000000"
        />
        
      </View>
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
     
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ee82ee',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#3a34eb',
    marginBottom: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#eeeeee',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
  },
 searchButton: {
    backgroundColor: '#060270',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#05C609',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
