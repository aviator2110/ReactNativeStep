import { StyleSheet, View } from 'react-native';
import ProfileCard from './components/ProfileCard';
import Header from './components/Header';
import LikeCounter from './components/LikeCounter';
import HiddenText from './components/HiddenText';
import SelectedProfileCard from './components/SelectedProfileCard';
import Counter from './components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header title={"Наша команда"}/>
      <ProfileCard name='Аня' role='Frontend' avatar='https://i.pravatar.cc/302'/>
      <ProfileCard name='Дима' role='Backend' avatar='https://i.pravatar.cc/301'/>
      <ProfileCard name='Ваня' role='Devops' avatar='https://i.pravatar.cc/300'/> */}
      {/* <LikeCounter /> */}
      {/* <HiddenText text='Hidden text'/> */}
      {/* <SelectedProfileCard name='Аня' role='Frontend' avatar='https://i.pravatar.cc/302'/> */}
      {/* <Counter /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffb0079',
    alignItems: 'center',
    justifyContent: 'center',
  },
});