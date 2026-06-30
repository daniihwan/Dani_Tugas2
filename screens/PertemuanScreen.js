import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { meetings } from '../data/data';
import styles from '../styles/styles';

export default function PertemuanScreen({ navigation }) {

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.courseName}>
        {item.matkul}
      </Text>

      <Text style={styles.courseInfo}>
        Pertemuan ke-{item.pertemuan}
      </Text>

      <Text style={styles.courseInfo}>
        Topik : {item.topik}
      </Text>

      <Text style={styles.courseInfo}>
        Tanggal : {item.tanggal}
      </Text>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={meetings}
      renderItem={renderItem}

      keyExtractor={(item) => item.id}

      ItemSeparatorComponent={() => (
        <View style={styles.separator} />
      )}

      ListHeaderComponent={() => (
        <View>
          <Text style={styles.pageTitle}>
            Daftar Pertemuan
          </Text>

          <Text style={styles.subTitle}>
            Semester Ganjil 2025/2026
          </Text>
        </View>
      )}

      ListEmptyComponent={() => (
        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'gray',
              fontSize: 16,
            }}
          >
            Data Pertemuan Kosong
          </Text>
        </View>
      )}

      ListFooterComponent={() => (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Jadwal')}
        >
          <Text style={styles.buttonText}>
            Lihat Jadwal Mingguan
          </Text>
        </TouchableOpacity>
      )}

      contentContainerStyle={{
        paddingBottom: 20,
      }}
    />
  );
}