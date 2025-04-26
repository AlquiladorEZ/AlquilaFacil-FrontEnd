import {AuthenticationService} from "./authentication.service.js";
import {defineStore} from "pinia";
import {SignInResponse} from "@/auth/model/sign-in.response.js";
import {SignUpResponse} from "@/auth/model/sign-up.response.js";

const authenticationService = new AuthenticationService();

export const useAuthenticationStore = defineStore( 'authentication', {
  state: () => ({ signedIn: false, userId: 0, username: ''}),
  getters: {
    isSignedIn: (state) => state['signedIn'],
    currentUserId: (state) => state['userId'],
    currentUsername: (state) => state['username'],
    currentToken: () => localStorage.getItem('token')
  },
  actions: {
    async signIn(signInRequest, router) {
      try {
        const response = await authenticationService.signIn(signInRequest);
        const signInResponse = new SignInResponse(
          response.data.id,
          response.data.username,
          response.data.token
        );
        this.signedIn = true;
        this.userId = signInResponse.id;
        this.username = signInResponse.username;
        localStorage.setItem('token', signInResponse.token);  
      } catch (error) {
        console.error('Error en signIn del store:', error);
        throw new Error('Correo o contraseña incorrectos');
      }
    },
    async signUp(signUpRequest, router) {
      try {
        const response = await authenticationService.signUp(signUpRequest);
        const signUpResponse = new SignUpResponse(response.data.message);
        this.signedIn = false;
        this.userId = 0;
        this.username = '';
        localStorage.removeItem('token');
        return signUpResponse.message;
      }
      catch(error) {
        console.error(error);
        router.push('/sign-in');
      }
    },
    async signInWithGoogle(router) {
      const googleUser = await authenticationService.signInWithGoogle();
      if (googleUser) {
        console.log('SESION INICIADA Google user:', googleUser);
        /*
        authenticationService.signIn(googleUser)
          .then(response => {
            let signInResponse = new SignInResponse(response.data.id, response.data.username, response.data.token);
            this.signedIn = true;
            this.userId = signInResponse.id;
            this.username = signInResponse.username;
            localStorage.setItem('token', signInResponse.token);
            console.log(signInResponse);
            router.push({name: 'home'});
          })
          .catch(error => {
            console.error(error);
            router.push({name: 'sign-in'});
          });
          */
      } else {
        console.error("Google sign-in failed.");
        router.push('/sign-in');
      }
    },
    async signUpWithGoogle(router) {
      const googleUser = await authenticationService.signInWithGoogle();
      if (googleUser) {
        console.log('REGISTRADO Google user:', googleUser);
        /*
        authenticationService.signUp(googleUser)
          .then(response => {
            let signUpResponse = new SignUpResponse(response.data.message);
            console.log(signUpResponse.message);
            this.signedIn = false;
            this.userId = 0;
            this.username = '';
            localStorage.removeItem('token');
            router.push({name: 'sign-in'});
          })
          .catch(error => {
            console.error(error);
            router.push({name: 'sign-in'});
          });
          */
      } else {
        console.error("Google sign-up failed.");
        router.push('/sign-in');
      }
      
    },
    async signOut(router) {
      this.signedIn = false;
      this.userId = 0;
      this.username = '';
      localStorage.removeItem('token');
      router.push('/sign-in');
    }
  },
});