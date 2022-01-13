import React from 'react';
import {Image, Text, View} from 'react-native';
import {Container} from '../../common/container';
import {ProfileStyles as styles} from './styles';
import {Photo} from '../../../assets/images';
import {
  BankdetailsIcon,
  HelpIcon,
  HistoryIcon,
  NotificationIcon,
  OptionIcon,
  SecurityIcon,
  TermsIcon,
} from '../../../assets/svg';
import {ProfileCard} from './profilecard';

const ProfileList = [
  {
    icon: <HistoryIcon />,
    title: 'History',
    svg: <OptionIcon />,
  },
  {
    icon: <BankdetailsIcon />,
    title: 'Bank Details',
    svg: <OptionIcon />,
  },
  {
    icon: <NotificationIcon />,
    title: 'Notifications',
    svg: <OptionIcon />,
  },
  {
    icon: <SecurityIcon />,
    title: 'Security',
    svg: <OptionIcon />,
  },
  {
    icon: <HelpIcon />,
    title: 'Help and Support',
    svg: <OptionIcon />,
  },
  {
    icon: <TermsIcon />,
    title: 'Terms and Conditions',
    svg: <OptionIcon />,
  },
];

export default function Profile() {
  return (
    <Container>
      <View style={styles.profilecontainer}>
        <Image source={Photo} style={styles.photo} />
        <View style={styles.contactinfo}>
          <Text style={styles.agilan}>Agilan Senthil</Text>
          <Text style={styles.mail}>agilansenthilkumar@gmail.com</Text>
          <Text style={styles.phonenumber}>+91 9444977118</Text>
        </View>
      </View>
      <View style={styles.coincontainer}>
        {ProfileList.map((item, index) => {
          return (
            <ProfileCard
              key={index}
              icon={item.icon}
              title={item.title}
              svg={item.svg}
            />
          );
        })}
      </View>
    </Container>
  );
}

// onPress={() =>
//     navigation.navigate("items", {
//       details: item,
//     })
//   }
