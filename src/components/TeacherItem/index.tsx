import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri: 'https://avatars3.githubusercontent.com/u/20270550?s=460&u=02a2afc9c715b95067912e0cb5d88f83b655e820&v=4'}} 
                />
                <View style={styles.profileInfo}>
                    <Text  style={styles.name}>Bernardo Simões Pires</Text>
                    <Text  style={styles.subject}>Programação</Text>
                </View>
            </View>
            <Text style={styles.bio}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Sapiente repellendus vel autem asperiores nam ut doloremque corporis, explicabo praesentium amet! Aut repellendus nihil nisi aperiam maxime quasi porro fugit incidunt?
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 70,00</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem