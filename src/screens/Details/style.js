import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatContainer: {
    paddingBottom: 60,
  },
  rowContainer: {
    flex: 0,
    flexDirection: 'row',
  },
  headertitle: {
    fontSize: 20,
    color: '#000',
    marginTop: 5,
    paddingStart: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    paddingStart: 5,
    marginTop: 5,
    justifyContent: 'center',
  },
  emptyList: {
    height: '50%',
    fontSize: 20,
    paddingStart: 5,
    marginTop: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
    alignSelf: 'center',
  },
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: COLORS.white,
  },
  imageContainer: {
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  itemContainer: {
    flex: 0.5,
    width: '80%',
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: COLORS.background,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  content: {
    fontSize: 16,
    marginStart: 5,
    justifyContent: 'center',
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
export default styles;
