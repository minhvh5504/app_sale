import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1C4FD',
  },
  text__Logo: {
    position: 'absolute',
    paddingTop: '12%',
    paddingLeft: '5%',
    fontWeight: '800',
    fontSize: 30,
    color: 'black',
  },
  text__Task: {
    position: 'absolute',
    paddingTop: '20%',
    paddingLeft: '5%',
    fontWeight: '500',
    fontSize: 28,
    color: 'white',
  },
  text__Input: {
    marginBottom: '5%',
    paddingBottom: '2%',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingLeft: 20,
  },
  input__Text: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    paddingLeft: 15,
  },
  text__Bottom: {
    borderRadius: 25,
    paddingHorizontal: '11%',
    paddingVertical: '2%',
    backgroundColor: '#6490E4',
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
  },
  eye__Icon: {
    right: 10,
    position: 'absolute',
    marginTop: '-16.5%',
  },
})
export default styles
