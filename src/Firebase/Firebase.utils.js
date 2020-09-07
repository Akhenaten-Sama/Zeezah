import firebase from 'firebase/app'
import  'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyC8f76v8QnpSlg5yBmf98_q8SydIkzQvPI",
    authDomain: "zeez-the-plug.firebaseapp.com",
    databaseURL: "https://zeez-the-plug.firebaseio.com",
    projectId: "zeez-the-plug",
    storageBucket: "zeez-the-plug.appspot.com",
    messagingSenderId: "963392532122",
    appId: "1:963392532122:web:6b0194ab2a8b4bd9b67923",
    measurementId: "G-PYL8YDY0KP"
}


export const CreateUserProfileDocument = async (user, additionalData) => {
        if (!user) return;
        const userRef = firestore.doc(`users/${user.uid}`)
        const Snapshot = await userRef.get()

        if(!Snapshot.exists){
            const CreatedAt = new Date()
            const {displayName, email } = user

            try {
                    await userRef.set({
                            displayName,
                            email,
                            CreatedAt,
                            ...additionalData

                    })
                    
            } catch (error) {
                    console.log('error creating user', error.message)
                    
            }



        }
        return userRef
}


export const convertColleectionSnapShotToMap =(collections) => {
    const transFormedCollection = collections.docs.map(doc => {
            const {title, items} = doc.data()
            return{
                    routeName:encodeURI(title.toLowerCase()),
                    id:doc.id,
                    title,
                    items

            }
    })
   return transFormedCollection.reduce((acc, collection)=>{
            acc[collection.title.toLowerCase()] =collection
            return acc
    }, {})
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
 const google = new firebase.auth.GoogleAuthProvider()
 google.setCustomParameters({prompt: 'select_account'})
export const SighInWithGoogle = () => auth.signInWithPopup(google)
