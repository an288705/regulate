import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function AddictionScreen({addictions}) {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Addiction</DataTable.Title>
          <DataTable.Title numeric>Streak</DataTable.Title>
        </DataTable.Header>
        {
            addictions.map((addiction,key)=>{
                return(
                    <DataTable.Row>
                        <DataTable.Cell>{addiction.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{addiction.streak}</DataTable.Cell>
                    </DataTable.Row>
                )
            })
        }
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 75,
  },
});