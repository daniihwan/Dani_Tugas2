import React from 'react';
import {
  View,
  Text,
  SectionList,
} from 'react-native';

import { schedules } from '../data/data';
import styles from '../styles/styles';

export default function JadwalScreen() {
  return (
    <SectionList
      style={styles.container}
      sections={schedules}
      keyExtractor={(item, index) => item.matkul + index}

      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {section.title}
          </Text>
        </View>
      )}

      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.courseName}>
            {item.matkul}
          </Text>

          <Text style={styles.courseInfo}>
            Ruangan : {item.ruang}
          </Text>

          <Text style={styles.courseInfo}>
            Jam : {item.jam}
          </Text>
        </View>
      )}

      ItemSeparatorComponent={() => (
        <View style={styles.separator} />
      )}

      ListHeaderComponent={() => (
        <View>
          <Text style={styles.pageTitle}>
            Jadwal Mingguan
          </Text>

          <Text style={styles.subTitle}>
            Jadwal Perkuliahan Semester Ganjil
          </Text>
        </View>
      )}

      contentContainerStyle={{
        paddingBottom: 20,
      }}
    />
  );
}