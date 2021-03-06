import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DATA } from '../data';
import { THEME } from '../theme';

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');
  const post = DATA.find((p) => p.id === postId);

  const removeHandler = () => {
    Alert.alert(
      'Delete a post',
      'Are you sure ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => console.log('OK Pressed'),
          style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.img} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <View style={styles.postButton}>
        <Button title="delete" color={THEME.DANGER_COLOR} onPress={removeHandler} />
      </View>
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date');
  return {
    headerTitle: `Post  ${new Date(date).toLocaleDateString()}`,
    headerStyle: {
      backgroundColor: THEME.HEADER_POST,
    },
    headerTintColor: '#ffffff',
  };
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular',
  },
  postButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
