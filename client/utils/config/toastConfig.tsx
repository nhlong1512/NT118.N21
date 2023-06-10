import { ErrorToast, SuccessToast, ToastConfig } from 'react-native-toast-message'

const toastConfig: ToastConfig = {
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 15
      }}
      text2Style={{
        fontSize: 14
      }}
    />
  ),
  success: (props) => (
    <SuccessToast
      {...props}
      text1Style={{
        fontSize: 15
      }}
      text2Style={{
        fontSize: 14
      }}
    />
  )
}

export default toastConfig
