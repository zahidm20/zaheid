import { FaFacebookF, FaInstagram, FaTiktok, FaDiscord, FaGithub, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import type { SocialMedia } from '@/types';

export const socialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaFacebookF,
    link: 'https://web.facebook.com/profile.php?id=100092340470359',
  },
  {
    SocialMediaIcon: FaInstagram,
    link: 'https://www.instagram.com/zaheidd',
  },
  {
    SocialMediaIcon: FaTiktok,
    link: 'https://tiktok.com/404',
  },
  {
    SocialMediaIcon: FaGithub,
    link: 'https://github.com/zahidm20',
  },
  {
    SocialMediaIcon: FaDiscord,
    link: 'https://discord.com/users/1266221017941020733',
  },
];

export const sharedSocialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaFacebook,
    link: `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaInstagram,
    link: `https://www.instagram.com/?url=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaWhatsapp,
    link: `https://wa.me/?text=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
];
