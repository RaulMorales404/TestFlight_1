import {Foother} from '@components/footer/Foother';
import {CustomImputDate} from '@components/Inputs/CustomImputDate';
import {CustomImputText} from '@components/Inputs/CustomImputText';
import {
  Container,
  CustomText,
  FlexView,
  SearchButton,
  SearchButtonText,
  TabButton,
  Tabs,
  TabText,
} from '@components/styles/styles';

import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

export const SearchFlight = () => {
  const navigation = useNavigation();
  const [isSearching, setIsSearching] = useState(false);
  const [hasErrorSearching, stHasErrorSearching] = useState(false);
  const [activeTab, setActiveTab] = useState<'flight' | 'destination'>(
    'flight',
  );
  const [stateDestination, setStateDestination] = useState({
    origin: 'Mexico City',
    destination: 'Cancún',
    flightNumber: '500',
    dateDestine: 'Tuesday, Nov  21',
    dateflightNumber: 'Tuesday, Nov  21',
  });

  const goToProfile = () => {
    setIsSearching(false);
     navigation.navigate('ResultSearchFlight');
  };

  const updateState = (key: string, value: string | boolean) => {
    setStateDestination(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <View style={{flex: 1}}>
      <FlexView
        height="200px"
        width="100%"
        justifyContent="center"
        backgroundColor="#F7F7F7"
        alignItems="center">
        <CustomText
          fontSize="26px"
          fontWeight="700"
          textAlign="right"
          lineHeight="32px">
          Track your flight
        </CustomText>
        <CustomText
          fontSize="16px"
          fontWeight="400"
          textAlign="right"
          color="#000000"
          lineHeight="22px">
          Keep you informed in real time!
        </CustomText>
      </FlexView>
      <Container>
        <FlexView width="280px" alignSelf="center" marginBottom="25px">
          <Tabs>
            <TabButton
              active={activeTab === 'flight'}
              onPress={() => setActiveTab('flight')}>
              <TabText active={activeTab === 'flight'}>Flight Number</TabText>
            </TabButton>
            <TabButton
              active={activeTab === 'destination'}
              onPress={() => setActiveTab('destination')}>
              <TabText active={activeTab === 'destination'}>
                Destination
              </TabText>
            </TabButton>
          </Tabs>
        </FlexView>

        {activeTab === 'destination' ? (
          <FlexView width="100%" direction="column">
            <FlexView
              width="100%"
              justifyContent="space-between"
              direction="row">
              <CustomImputText
                title="Origin"
                subt={stateDestination.origin}
                changeColor={true}
                w="162px"
                updateState={updateState}
                keyInput="origin"
              />
              <CustomImputText
                title={'Destination'}
                subt={stateDestination.destination}
                changeColor={true}
                w="162px"
                keyInput="destination"
                updateState={updateState}
              />
            </FlexView>

            <CustomImputDate
              w="100%"
              title={'Date of departure'}
              text={stateDestination.dateflightNumber}
              changeColor={false}
              keyInput={'dateflightNumber'}
              updateState={updateState}
            />
          </FlexView>
        ) : (
          <FlexView width="100%" justifyContent="space-between" direction="row">
            <CustomImputText
              title={'Flight number'}
              subt={stateDestination.flightNumber}
              changeColor={false}
              keyInput={'flightNumber'}
              updateState={updateState}
            />
            <CustomImputDate
              w="200px"
              title={'Date of departure'}
              text={stateDestination.dateDestine}
              changeColor={false}
              keyInput={'dateDestine'}
              updateState={updateState}
            />
          </FlexView>
        )}
        <SearchButton
          backgroundColor={isSearching ? '#6e6e6e' : '#000'}
          onPress={() => goToProfile()}>
          <FlexView width="100%" justifyContent="center" direction="row">
            <SearchButtonText>Search Flight</SearchButtonText>
            {isSearching && <ActivityIndicator style={{marginLeft: 10}} />}
          </FlexView>
        </SearchButton>
       { hasErrorSearching && <CustomText
          fontSize="15px"
          fontWeight="600"
          marginTop="-10px"
          marginBottom="25px"
          color="#cf0000"
          textAlign="center"
          lineHeight="14px">
          No se encotraron Vuelos
        </CustomText>}

        {activeTab === 'destination' ? (
          <Foother
            text={'Looking for a specific flight? Try searching by'}
            textLink={'flight number'}
            w="220px"
          />
        ) : (
          <Foother
            text={'Can’t find your flight number? Try searching by'}
            textLink={'destination'}
          />
        )}
      </Container>
    </View>
  );
};
