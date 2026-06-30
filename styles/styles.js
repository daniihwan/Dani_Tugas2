import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 15,
  },

  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },

  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#555',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },

  courseName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  courseInfo: {
    fontSize: 14,
    color: '#666',
  },

  button: {
    backgroundColor: '#3B82F6',
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  separator: {
  height: 10,
  },   
  
  sectionHeader: {
  backgroundColor: '#E5E7EB',
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderRadius: 8,
  marginTop: 10,
  marginBottom: 10,
},

sectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
},

});

export default styles;