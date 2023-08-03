// app correto


// na aula foi usado  o index mas como estou com expo estou indo pelo App.js, comando abaixo foi usado no index:
//AppRegistry.registerComponent(appName, () => Navigator)





import React from 'react';
import { View, StyleSheet } from 'react-native';
import TaskList from './src/screens/Tasklist';

const App = () => {
  return (
    <View style={styles.container}>
      <TaskList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // sem esse flex nao mostra o background
  },
});

export default App;
