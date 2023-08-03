import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList,TouchableOpacity, Platform } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import todayImage from '../../assets/imgs/today.jpg';
import Task from '../components/Task';
import commonStyles from '../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class TaskList extends Component {
  state = {
    showDoneTask: true, //botao
    visibleTasks: [],
    tasks: [
      
      {
        id: Math.random(),
        desc: 'Comprar Livro de React',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: 'Ler Livro de React',
        estimateAt: new Date(),
        doneAt: null,
      },
     
    ],
  };

  // método botao pra deixar V ou F
  toggleFilter = () => {
    this.setState({ showDoneTask: !this.state.showDoneTask }, this.filterTasks); // callback
  };
  

  componentDidMount = () => {
    this.filterTasks()
  }

  filterTasks = () => {
    let visibleTasks = null;
    if (this.state.showDoneTask) {
      visibleTasks = [...this.state.tasks]; // clonando um array
    } else {
      const pending = (task) => task.doneAt === null; // status pra saber se está pendente
      visibleTasks = this.state.tasks.filter(pending); // vai pegar só as pendentes
    }
    this.setState({ visibleTasks });
  };
  


  //acao PAI pra apertar check LIST
 toggleTask = (taskId) => {
  const tasks = [...this.state.tasks];
  tasks.forEach((task) => {
    if (task.id === taskId) {
      task.doneAt = task.doneAt ? null : new Date();
    }
  });
  this.setState({ tasks });
};


  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMM');
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage}
         style={styles.background}>
         <View style={styles.iconBar}>
         <TouchableOpacity onPress={this.toggleFilter}>

          <Icon  name={this.state.showDoneTask ? 'eye': 'eye-slash'}  // condicap icone olho qdo é clicado
           size={20} color ={commonStyles.colors.secondary}/>
          </TouchableOpacity>

         </View>

          <View style={styles.titleBar}>
            <Text style={styles.title}>HOJE</Text>
            <Text style={styles.subtittle}>{today}</Text>
          </View>
        </ImageBackground>

        <View style={styles.taskList}>
          <FlatList
            data={this.state.tasks}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => <Task {...item} toggleTask={this.toggleTask}/>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1, // Ocupa todo o espaço disponível anteriormente "flex: 3"
  },
  taskList: {
    flex: 2, // Ocupa todo o espaço disponível anteriormente "flex: 7"
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    margin: 20,
  },
  subtittle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    margin: 20,
  },
  //botao
 iconBar: {
  flexDirection: 'row',
  marginHorizontal: 20,
  top: 40,
  justifyContent: 'space-between',
  marginTop: Platform.OS === 'ios' ? 40 : 10 //codicao pra usar o emulador IOS
  },
});
