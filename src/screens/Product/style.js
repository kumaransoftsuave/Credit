import {StyleSheet} from 'react-native';
import COLORS from '../../assets/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
    padding: 10,
  },
  listContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 60,
  },
  card: {
    padding: 20,
    shadowColor: '#00000021',
    borderRadius: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  productText: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  monthlyLimit: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    width: '100%',
    color: COLORS.white,
    backgroundColor: COLORS.background,
  },
  toysName: {
    marginTop: 3,
    marginBottom: 3,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  toysPrice: {
    fontSize: 20,
    flexDirection: 'row',
  },
  onPressText: {
    fontSize: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: COLORS.black,
    borderRadius: 25,
    color: COLORS.white,
    backgroundColor: COLORS.background,
    width: '80%',
  },
});
export default styles;
