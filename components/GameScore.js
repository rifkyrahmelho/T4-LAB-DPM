import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameScore = ({ teamA, teamB }) => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const incrementScoreA = () => {
    if (scoreA < 10) {
      setScoreA(scoreA + 1);
    }
  };

  const decrementScoreA = () => {
    if (scoreA > 0) {
      setScoreA(scoreA - 1);
    }
  };

  const incrementScoreB = () => {
    if (scoreB < 10) {
      setScoreB(scoreB + 1);
    }
  };

  const decrementScoreB = () => {
    if (scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const renderWinnerMessage = () => {
    if (scoreA === 10) {
      return <Text style={styles.winner}>Team {teamA} Wins!</Text>;
    } else if (scoreB === 10) {
      return <Text style={styles.winner}>Team {teamB} Wins!</Text>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Futsal Match</Text>
      <Text style={styles.teamName}>{teamA}: {scoreA}</Text>
      <Text style={styles.teamName}>{teamB}: {scoreB}</Text>

      {renderWinnerMessage()}

      <View style={styles.buttonContainer}>
        <Button title={`+ ${teamA}`} onPress={incrementScoreA} disabled={scoreA >= 10} />
        <Button title={`- ${teamA}`} onPress={decrementScoreA} disabled={scoreA <= 0} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title={`+ ${teamB}`} onPress={incrementScoreB} disabled={scoreB >= 10} />
        <Button title={`- ${teamB}`} onPress={decrementScoreB} disabled={scoreB <= 0} />
      </View>

      <Button title="Reset Game" onPress={resetScores} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamName: {
    fontSize: 18,
    margin: 10,
  },
  winner: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default GameScore;
