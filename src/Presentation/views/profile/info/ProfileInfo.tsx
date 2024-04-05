import React from 'react';
import { View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import useViewModel from './ViewModel';

interface Props extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'> { };

export const ProfileInfoScreen: React.FC<Props> = ({ navigation }) => {
    const { removeSession } = useViewModel();

    return (
        <View style={{ flex: 1 }}>
            {/* Botón para cerrar sesión */}
            <Button
                onPress={() => {
                    removeSession();
                    navigation.navigate('HomeScreen');
                }}
                title="Cerrar Sesión"
            />
        </View>
    );
};