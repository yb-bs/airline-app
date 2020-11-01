import { Role } from './role.enum';
import { SocialMedia } from './socialmedia.enum';

export interface User { 
    username: string, 
    socialMedia: SocialMedia, 
    role: Role }