import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apollo: Apollo) {}

  login(email: string, password: string) {
    const LOGIN_MUTATION = gql`
      mutation LoginWithEmail($input: loginInput!) {
        loginWithEmail(input: $input) {
          tokens {
            access {
              token
            }
          }
          user {
            id
            email
            first_name
            username
          }
        }
      }
    `;

    return this.apollo.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        input: { email, password }
      }
    }).pipe(
      tap((response: any) => {
        if (response.errors) {
          throw new Error(response.errors[0].message);
        }

        const { token } = response.data.loginWithEmail.tokens.access;
        const { id, email, username } = response.data.loginWithEmail.user;

        // Save token, user ID, email, and username to local storage
        localStorage.setItem('token', token);
        localStorage.setItem('userId', id);
        localStorage.setItem('email', email);
        localStorage.setItem('username', username);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}
