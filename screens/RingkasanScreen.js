import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { courses } from '../data/data';
import styles from '../styles/styles';

export default function RingkasanScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.pageTitle}>
        Jadwal Kuliah
      </Text>

      <Text style={styles.subTitle}>
        Mata Kuliah Semester Ini
      </Text>

      {courses.map((item) => (
        <View
          key={item.id}
          style={styles.card}
        >
          <Text style={styles.courseName}>
            {item.nama}
          </Text>

          <Text style={styles.courseInfo}>
            {item.kode} • {item.sks} SKS
          </Text>

          <Text style={styles.courseInfo}>
            Dosen : {item.dosen}
          </Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pertemuan')}
      >
        <Text style={styles.buttonText}>
          Lihat Daftar Pertemuan
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}