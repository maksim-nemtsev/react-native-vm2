import React from 'react';
import Platform, { View } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { THEME } from '../theme';
import { AntDesign } from '@expo/vector-icons';

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    IconComponent={AntDesign}
    iconSize={24}
    color={Platform.OS === 'android' ? '#ffffff' : THEME.MAIN_COLOR}
  />
);
