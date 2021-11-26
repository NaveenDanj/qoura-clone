import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import {QuestionModelProvider} from './components/Contexts/CreateQuestionContext';

import { Provider } from 'react-redux';
import Store from './Redux/Store';
import * as firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD_490biGR5-arnlT0FW7YDT8P_YN1Paoc",
  authDomain: "quora-clone-cf95e.firebaseapp.com",
  projectId: "quora-clone-cf95e",
  storageBucket: "quora-clone-cf95e.appspot.com",
  messagingSenderId: "168054134035",
  appId: "1:168054134035:web:cfaa5fa28776d5090076e6",
  measurementId: "G-MR4RHC7JFC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={Store}>
          <QuestionModelProvider>
            <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </SafeAreaProvider>
          </QuestionModelProvider>
        </Provider>
      </ApplicationProvider>
    );
  }
}
