import { StyleSheet, View } from 'react-native';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard name={"Guram"} city={"Baku"} favorite_language={"CSharp"}/>
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