import {StyleSheet} from 'react-native';
import COLORS from '../../assets/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 55,
    color: COLORS.background,
    justifyContent: 'center',
  },
  details: {
    fontSize: 20,
    padding: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#d3d3d3',
    borderRadius: 25,
    height: 60,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },

  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
  },
  confirmButton: {
    width: '85%',
    height: 45,
    marginTop: 25,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 10,
  },
  disabledConfirmButton: {
    width: '85%',
    height: 45,
    marginTop: 25,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gray,
    borderRadius: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '600',
  },
});
export default styles;
