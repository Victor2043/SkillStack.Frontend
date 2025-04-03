export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    passwordHash: string;
    isActive: boolean; 
  }