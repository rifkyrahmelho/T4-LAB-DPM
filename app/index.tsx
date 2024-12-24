import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  const handleScoreChange = (team: string, action: string) => {
    if (team === 'A') {
      if (action === 'increment') setTeamA((prev) => Math.min(prev + 1, 10));
      if (action === 'decrement') setTeamA((prev) => Math.max(prev - 1, 0));
    } else if (team === 'B') {
      if (action === 'increment') setTeamB((prev) => Math.min(prev + 1, 10));
      if (action === 'decrement') setTeamB((prev) => Math.max(prev - 1, 0));
    }
  };

  const resetScores = () => {
    setTeamA(0);
    setTeamB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Score Tracker</Text>
      <View style={styles.scoreContainer}>
        <View style={styles.team}>
          <Text style={styles.teamName}>Team A</Text>
          <Text style={styles.score}>{teamA}</Text>
          <View style={styles.buttons}>
            <Button title="+" onPress={() => handleScoreChange('A', 'increment')} />
            <Button title="-" onPress={() => handleScoreChange('A', 'decrement')} />
          </View>
        </View>
        <View style={styles.team}>
          <Text style={styles.teamName}>Team B</Text>
          <Text style={styles.score}>{teamB}</Text>
          <View style={styles.buttons}>
            <Button title="+" onPress={() => handleScoreChange('B', 'increment')} />
            <Button title="-" onPress={() => handleScoreChange('B', 'decrement')} />
          </View>
        </View>
      </View>
      <Button title="Reset Match" onPress={resetScores} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  team: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});
