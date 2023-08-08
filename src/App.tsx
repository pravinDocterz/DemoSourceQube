/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NativeBaseProvider,Text,View} from 'native-base';
import React,{useEffect} from 'react';
import {Platform} from 'react-native';
import MainContainer from './screens/main/MainContainer';
import ScreenTwo from './screens/screen2/ScreenTwo';

declare const document: any;

const App=() => {
	useEffect(() => {
		if(Platform.OS==='web') {
			document.title='TestDemo WebApp';
		}
		// StatusBar.setBarStyle(Platform.OS === 'ios' ? 'dark-content' : 'default');
	},[]);
	return (
		<NativeBaseProvider>
			{/*<MainContainer/>*/}
			<ScreenTwo />
		</NativeBaseProvider>
	);
};

export default App;
