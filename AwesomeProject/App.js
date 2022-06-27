/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{}}>
      {console.log(isDarkMode)}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{
        borderWidth: 2, width: '100%', height: '100%'
      }}>
        {/** View 1 */}
        <View style={{
          flexDirection: 'row',
          borderWidth: 1, width: '100%', height: '16.6%'
        }}>
          {/** red square */}
          <View style={{
            /**Cha cho con nằm giữa */
            justifyContent: 'center', alignItems: 'center',
            width: '33%', height: '100%', borderRightWidth: 1
          }}>
            {/**Ô vuông màu đỏ có bo góc */}
            <View style={{
              borderRadius: 15,
              width: '80%', height: '80%', backgroundColor: 'red'
            }}>

            </View>
          </View>
          {/** HÌnh chứa tên */}
          <View style={{
            height: '100%', width: '67%'
          }}>
            <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 20 }}>Nguyễn Long Nhật</Text>
            <Text>23-08-2001</Text>
          </View>
        </View>
        {/**View 2 */}
        <View style={{
          flexDirection: 'row',
          borderWidth: 1, width: '100%', height: '16.6%'
        }}>
          {/** Ô text */}
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '66%', height: '100%',
            borderRightWidth: 1
          }}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Xin Chào</Text>
          </View>
          {/** Ô chia ô */}
          <View style={{
            width: '34%', height: '100%'
          }}>
            <View style={{ height: '50%', width: '100%', backgroundColor: 'rgba(255, 25, 25, 0.2)' }}></View>
            <View style={{ height: '50%', width: '100%', backgroundColor: '#00ffff' }}></View>
          </View>
        </View>
        {/**View row 3 */}
        <View style={{
          flexDirection: 'row',
          width: '100%', height: '16.6%', borderWidth: 1
        }}>
          <View style={{ height: '100%', width: '33%', backgroundColor: '#FF869E' }}></View>
          <View style={{ height: '100%', width: '33%', backgroundColor: '#54BAB9' }}></View>
          <View style={{ height: '100%', flex: 1, backgroundColor: '#D8CCA3' }}></View>

        </View>
        {/** View row 4 */}
        <View style={{
          justifyContent: 'center', alignItems: 'center',
          height: '34%', width: '100%', backgroundColor: '#DFF6FF'
        }}>
          <View style={{
            width: '60%', height: '60%', backgroundColor: '#2E0249'
          }}>
            <View style={{
              position: 'absolute', right: -20, top: -20,
              height: '50%', aspectRatio: 1, backgroundColor: '#F47C7C'
            }}></View>
          </View>
        </View>

        {/**View Row 5 */}
        <View style={{
          justifyContent: 'center', alignItems: 'center',
          width: '100%', flex: 1, borderWidth: 1
        }}>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between',
            width: '80%', height: '50%'
          }}>
            <TouchableOpacity style={{
              justifyContent: 'center', alignItems: 'center',
              width: '45%', height: '100%', borderWidth: 2, borderRadius: 50,
              backgroundColor: '#7F8487'
            }}>
              <Text style={{ fontSize: 20, fontWeight: '800' }}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              justifyContent: 'center', alignItems: 'center',
              width: '45%', height: '100%', borderWidth: 2, borderRadius: 50,
              backgroundColor: '#79DAE8'
            }}>
              <Text style={{ fontSize: 20, fontWeight: '800', color: 'white' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
