import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {Card} from 'react-native-shadow-cards';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});

export default class App extends Component {
  render() {
    const chart_wh = 250;
    const series = [123, 50];
    const sliceColor = ['#4CAF50', '#FF9800'];

    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <Card style={styles.chart}>
            <Text style={styles.title}>Daily</Text>
            <Text style={styles.endtitle}>submitted</Text>
            <PieChart
              chart_wh={chart_wh}
              series={series}
              sliceColor={sliceColor}
            />
            <Text style={styles.title}>total</Text>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

var textstyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  topBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },

  chart: {
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    margin: 10,
  },
  endtitle: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
    backgroundColor: 'yellow',
  },

  otherContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

AppRegistry.registerComponent('test', () => test);
