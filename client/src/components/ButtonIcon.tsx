import { ReactElement } from 'react';

type Props = {
  icon: 'upload' | 'check' | 'cross';
  iconColor: `#${string}`;
}

const ButtonIcon = ({icon, iconColor}: Props) => {
  let iconComponent: ReactElement;

  switch (icon) {
    case 'upload':
      iconComponent = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6.99996 18C5.75223 18 4.55561 17.5259 3.67334 16.682C2.79107 15.8381 2.29541 14.6935 2.29541 13.5C2.29541 12.3065 2.79107 11.1619 3.67334 10.318C4.55561 9.47412 5.75223 9.00001 6.99996 9.00001C7.29464 7.68719 8.15672 6.5335 9.39654 5.79273C10.0104 5.42594 10.6986 5.17156 11.4217 5.04412C12.1449 4.91669 12.8888 4.91869 13.6111 5.05001C14.3333 5.18133 15.0198 5.43941 15.6312 5.80949C16.2427 6.17958 16.7672 6.65443 17.1747 7.20694C17.5823 7.75945 17.8649 8.37879 18.0065 9.02961C18.1481 9.68043 18.1459 10.35 18 11H19C19.9282 11 20.8185 11.3688 21.4748 12.0251C22.1312 12.6815 22.5 13.5718 22.5 14.5C22.5 15.4283 22.1312 16.3185 21.4748 16.9749C20.8185 17.6313 19.9282 18 19 18H18" stroke="#929AAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path fill={iconColor} d="M9 15L12 12M12 12L15 15M12 12V21" stroke="#929AAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      break;
    case 'check':
      iconComponent = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12L10 17L20 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      break;
    default:
      iconComponent = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill={iconColor} d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

  }


  return (iconComponent)
}

export default ButtonIcon;
