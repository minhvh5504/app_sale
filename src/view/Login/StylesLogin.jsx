import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text__Logo: {
    position: 'absolute',
    paddingTop: '10%',
    paddingLeft: '5%',
    fontWeight: '800',
    fontSize: 30,
    color: 'black',
    opacity: 0.6,
  },
  text__Task: {
    position: 'absolute',
    paddingTop: '20%',
    paddingLeft: '5%',
    fontWeight: '900',
    fontSize: 28,
    color: '#238C98',
  },
  text__Input: {
    fontWeight: '700',
    marginBottom: '3%',
    paddingBottom: '1%',
    paddingLeft: 35,
    borderBottomWidth: 1,
    borderColor: '#1976D2',
    opacity: 0.7,
  },
  text__Bottom: {
    borderRadius: 10,
    paddingHorizontal: '30%',
    paddingVertical: '3%',
    backgroundColor: '#238C98',
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  input__Icon: {
    top: 35,
  },
  eye__Icon: {
    right: 10,
    position: 'absolute',
    marginTop: '-12%',
  },
})
export default styles
