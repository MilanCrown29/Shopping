import auth from '@react-native-firebase/auth';

export default class FirebaseUtil {
  public static signIn = (email: string, password: string) => {
    return auth().signInWithEmailAndPassword(email, password);
  };
  public static signUp = (email: string, password: string) => {
   let userCred= await auth().createUserWithEmailAndPassword(email, password);
   await post(userCred.user ,ADD_STRIPE_USER);
   return userCred
  };
  public static signOut = () => {
    return auth().signOut();
  };
}