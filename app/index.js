import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image 
          source={require('../assets/images/emsiLogo.png')} 
          style={styles.logo}  
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleMain}>Student Card App</Text>
          <Text style={styles.titleSub}>EMSI CENTRE</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLine}>
          <Text style={styles.label}>Nom : </Text>
          <Text style={styles.value}>EZZIRANI</Text>
        </Text>
        <Text style={styles.infoLine}>
          <Text style={styles.label}>Prénom : </Text>
          <Text style={styles.value}>Anwar</Text>
        </Text>
        <Text style={styles.infoLine}>
          <Text style={styles.label}>Année universitaire : </Text>
          <Text style={styles.value}>2025 / 2026</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    gap: 15,
  },
  logo: {
    width: 100,
    height: 100
  },
  titleContainer: {
    flex: 1,
  },
  titleMain: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'hsla(177, 70%, 33%, 1.00)',
    marginBottom: 1,
  },
  titleSub: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'hsla(177, 70%, 33%, 1.00)',
  },
  infoContainer: {
    alignItems: 'flex-start',
    gap: 2,
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 5,
  },
  infoLine: {
    fontSize: 15,
    lineHeight: 24,
  },
  label: {
    color: '#6b7280',
    fontWeight: '500',
  },
  value: {
    color: '#3b82f6',
    fontWeight: 'bold',
    fontSize: 17,
  },
});