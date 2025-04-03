import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './src/screens/Intro';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Intro1 from './src/screens/Intro1';
import Intro2 from './src/screens/Intro2';
import Intro3 from './src/screens/Intro3';
import LoginSignUp from './src/screens/LoginSignUp';
import MedicalAdvisorHome from './src/screens/MedicalAdvisorHome';
import MedicalEquipmentService from './src/screens/MedicalEquipmentService';
import OPConsultationService from './src/screens/OPConsultationService';
import RehabilitationServices from './src/screens/RehabilitationServices';
import ITPatientService from './src/screens/ITPatientService';
import AmbulanceServiceCity from './src/screens/AmbulanceServiceCity';
import AmbulanceServiceEmergency from './src/screens/AmbulanceServiceEmergency';
import AmbulanceServiceWithoutCity from './src/screens/AmbulanceServiceWithoutCity';
import ArogyaSriServices from './src/screens/ArogyaSriServices';
import HealthInsuranceServices from './src/screens/HealthInsuranceServices';
import HomeCareService from './src/screens/HomeCareService';
import Profile from './src/screens/Profile';
import UpcomingServices from './src/screens/UpcomingServices';
import HamburgerMenu from './src/screens/HamburgerMenu';
import DoctorScreen from './src/screens/DoctorScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import HomeCSPhysiotherapy from './src/screens/HomeCSPhysiotherapy';
import HomeCSPharmacy from './src/screens/HomeCSPharmacy';
import HomeCSHomeCNursing from './src/screens/HomeCSHomeCNursing';
import HomeCSDayCNursing from './src/screens/HomeCSDayCNursing';
import HomeCSCareTaker from './src/screens/HomeCSCareTaker';
import ITPSDialysisS from './src/screens/ITPSDialysisS';
import ITPSMediM from './src/screens/ITPSMediM';
import ITPSOncologyS from './src/screens/ITPSOncologyS';
import ITPSSurgery from './src/screens/ITPSSurgery';
import ITPSConsultant from './src/screens/ITPSConsultant';
import OPCSpeciality from './src/screens/OPCSpeciality';
import OPCSpaciality from './src/screens/OPCSpaciality';
import RehabPulmanology from './src/screens/RehabPulmanology';
import RehabOrtho from './src/screens/RehabOrtho';
import RehabCardiac from './src/screens/RehabCardiac';
import RehabGariatric from './src/screens/RehabGariatric';
import RehabPaliativeCare from './src/screens/RehabPaliativeCare';
import MedicalEquipPurchase from './src/screens/MedicalEquipPurchase';
import MedicalEquipVendors from './src/screens/MedicalEquipVendors';
import ArogyaSSCMReliefFund from './src/screens/ArogyaSSCMReliefFund';
import ArogyaSSPMReliefFund from './src/screens/ArogyaSSPMReliefFund';
import ArogyaSSOncoServ from './src/screens/ArogyaSSOncoServ';
import ArogyaSSDiaServ from './src/screens/ArogyaSSDiaServ';
import ArogyaSSMediMana from './src/screens/ArogyaSSMediMana';
import HealthInSPurchase from './src/screens/HealthInSPurchase';
import HealthInSVendors from './src/screens/HealthInSVendors';
import Servicerequest from './src/screens/Servicerequest';


const Stack = createStackNavigator();

const App = () => {

    useEffect(() => {
        fetch('http://localhost:3991')
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Intro">
                <Stack.Screen name="Intro" component={Intro} />
                <Stack.Screen name="Intro1" component={Intro1} />
                <Stack.Screen name="Intro2" component={Intro2} />
                <Stack.Screen name="Intro3" component={Intro3} />
                <Stack.Screen name="LoginSignUp" component={LoginSignUp} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="MedicalAdvisorHome" component={MedicalAdvisorHome} />
                <Stack.Screen name="MedicalEquipmentService" component={MedicalEquipmentService} />
                <Stack.Screen name="ITPatientService" component={ITPatientService} />
                <Stack.Screen name="OPConsultationService" component={OPConsultationService} />
                <Stack.Screen name="RehabilitationServices" component={RehabilitationServices} />
                <Stack.Screen name="AmbulanceServiceCity" component={AmbulanceServiceCity} />
                <Stack.Screen name="AmbulanceServiceEmergency" component={AmbulanceServiceEmergency} />
                <Stack.Screen name="AmbulanceServiceWithoutCity" component={AmbulanceServiceWithoutCity} />
                <Stack.Screen name="ArogyaSriServices" component={ArogyaSriServices} />
                <Stack.Screen name="HealthInsuranceServices" component={HealthInsuranceServices} />
                <Stack.Screen name="HomeCareService" component={HomeCareService} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="UpcomingServices" component={UpcomingServices}/>
                <Stack.Screen name="HamburgerMenu" component={HamburgerMenu}/>
                <Stack.Screen name="DoctorScreen" component={DoctorScreen}/>
                <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
                <Stack.Screen name="HomeCSPhysiotherapy" component={HomeCSPhysiotherapy}/>
                <Stack.Screen name="HomeCSPharmacy" component={HomeCSPharmacy}/>
                <Stack.Screen name="HomeCSDayCNursing" component={HomeCSDayCNursing}/>
                <Stack.Screen name="HomeCSHomeCNursing" component={HomeCSHomeCNursing}/>
                <Stack.Screen name="HomeCSCareTaker" component={HomeCSCareTaker}/>
                <Stack.Screen name="ITPSMediM" component={ITPSMediM}/>
                <Stack.Screen name="ITPSDialysisS" component={ITPSDialysisS}/>
                <Stack.Screen name="ITPSOncologyS" component={ITPSOncologyS}/>
                <Stack.Screen name="ITPSSurgery" component={ITPSSurgery}/>
                <Stack.Screen name="ITPSConsultant" component={ITPSConsultant}/>
                <Stack.Screen name="OPCSpeciality" component={OPCSpeciality}/>
                <Stack.Screen name="OPCSpaciality" component={OPCSpaciality}/>
                <Stack.Screen name="RehabPulmanology" component={RehabPulmanology}/>
                <Stack.Screen name="RehabOrtho" component={RehabOrtho}/>
                <Stack.Screen name="RehabCardiac" component={RehabCardiac}/>
                <Stack.Screen name="RehabGariatric" component={RehabGariatric}/>
                <Stack.Screen name="RehabPaliativeCare" component={RehabPaliativeCare}/>
                <Stack.Screen name="MedicalEquipPurchase" component={MedicalEquipPurchase}/>
                <Stack.Screen name="MedicalEquipVendors" component={MedicalEquipVendors}/>
                <Stack.Screen name="ArogyaSSCMReliefFund" component={ArogyaSSCMReliefFund}/>
                <Stack.Screen name="ArogyaSSPMReliefFund" component={ArogyaSSPMReliefFund}/>
                <Stack.Screen name="ArogyaSSOncoServ" component={ArogyaSSOncoServ}/>
                <Stack.Screen name="ArogyaSSDiaServ" component={ArogyaSSDiaServ}/>
                <Stack.Screen name="ArogyaSSMediMana" component={ArogyaSSMediMana}/>
                <Stack.Screen name="HealthInSPurchase" component={HealthInSPurchase}/>
                <Stack.Screen name="HealthInSVendors" component={HealthInSVendors}/>
                <Stack.Screen name="Servicerequest" component={Servicerequest}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;