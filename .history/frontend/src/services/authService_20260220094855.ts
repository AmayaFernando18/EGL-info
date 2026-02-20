import type { User } from '../types';

export async function getCurrentUser(): Promise<User | null> {
  try {
    const userStr = localStorage.getItem('genco_user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

export async function login(username: string, _password: string): Promise<User> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const user: User = {
        id: '1',
        username,
        name: username.charAt(0).toUpperCase() + username.slice(1),
        email: `${username}@egl.lk`,
        department: 'Generation',
        role: 'Employee'
      };
      localStorage.setItem('genco_user', JSON.stringify(user));
      resolve(user);
    }, 500);
  });
}

export function logout(): void {
  localStorage.removeItem('genco_user');
}
