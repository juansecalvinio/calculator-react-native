import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    fontSize: 70,
    fontWeight: '300',
    color: '#ffffff',
    textAlign: 'right',
  },
  smallResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
  },
});
