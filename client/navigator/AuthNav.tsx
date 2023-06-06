import { StackNavigationProp} from '@react-navigation/stack'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import VerificationScreen from "../screens/VerificationScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import SuccessChangePasswordScreen from "../screens/SuccessChangePasswordScreen";


export type AuthNavParamsList = {
  SignIn: undefined
  SignUp: undefined
  ForgotPassword: undefined
  Verification: undefined
  ChangePassword: undefined
  SuccessChangePassword: undefined
}

export type AuthNavigationProp = StackNavigationProp<AuthNavParamsList>

const Stack = createNativeStackNavigator<AuthNavParamsList>()

function AuthNav() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen
        name="SuccessChangePassword"
        component={SuccessChangePasswordScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthNav
