import {TextStyle, ViewStyle} from 'react-native';
import {colors} from 'theme/colors';

export type TTypesButton =
  | 'primary'
  | 'secondary'
  | 'outlined'
  | 'transparent'
  | 'dark';

type TStates = {
  pressed?: boolean;
  disabled?: boolean;
};

type ButtonTheme = {
  normal: typeof normal;
  pressed: typeof pressed;
  disabled: typeof disabled;
};

const normal = {
  primary: {
    component: {
      backgroundColor: colors.primary.base,
      borderWidth: 0,
    } as ViewStyle,
    text: {
      color: colors.white,
    } as TextStyle,
  },
  secondary: {
    component: {
      borderWidth: 0,
      backgroundColor: colors.primary.lightest,
    } as ViewStyle,
    text: {
      color: colors.primary.base,
    } as TextStyle,
  },
  outlined: {
    component: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.primary.base,
    } as ViewStyle,
    text: {
      color: colors.primary.base,
    } as TextStyle,
  },
  transparent: {
    component: {
      backgroundColor: colors.white,
      borderWidth: 0,
    } as ViewStyle,
    text: {
      color: colors.primary.base,
    } as TextStyle,
  },
  dark: {
    component: {
      backgroundColor: colors.inkBase,
      borderWidth: 0,
    } as ViewStyle,
    text: {
      color: colors.white,
    } as TextStyle,
  },
};

const pressed = {
  primary: {
    component: {
      backgroundColor: colors.primary.darkest,
      borderWidth: 0,
    } as ViewStyle,
    text: {
      color: colors.white,
    } as TextStyle,
  },
  secondary: {
    component: {
      borderWidth: 0,
      backgroundColor: colors.primary.lighter,
    } as ViewStyle,
    text: {
      color: colors.primary.darkest,
    } as TextStyle,
  },
  outlined: {
    component: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.primary.darkest,
    } as ViewStyle,
    text: {
      color: colors.primary.darkest,
    } as TextStyle,
  },
  transparent: {
    component: {
      backgroundColor: colors.primary.lightest,
      borderWidth: 0,
    } as ViewStyle,
    text: {
      color: colors.primary.base,
    } as TextStyle,
  },
  dark: {
    component: {
      backgroundColor: colors.inkPress,
      borderWidth: 0,
    } as ViewStyle,
    text: {
      color: colors.white,
    } as TextStyle,
  },
};

const disabled = {
  primary: {
    component: {
      backgroundColor: colors.skyLight,
      borderWidth: 0,
    } as ViewStyle,
    text: {
      color: colors.skyDark,
    } as TextStyle,
  },
  secondary: {
    component: {
      backgroundColor: colors.skyLight,
    } as ViewStyle,
    text: {
      color: colors.skyDark,
    } as TextStyle,
  },
  outlined: {
    component: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.skyBase,
    } as ViewStyle,
    text: {
      color: colors.skyBase,
    } as TextStyle,
  },
  transparent: {
    component: {
      backgroundColor: colors.white,
      borderWidth: 0,
    } as ViewStyle,
    text: {
      color: colors.skyBase,
    } as TextStyle,
  },
  dark: {
    component: {
      borderWidth: 0,
      backgroundColor: colors.inkDisabled,
    } as ViewStyle,
    text: {
      color: colors.white,
    } as TextStyle,
  },
};

const buttonTheme: ButtonTheme = {
  normal,
  pressed,
  disabled,
};

const determineStateIndex = (state: TStates) => {
  if (state.pressed) {
    return 'pressed';
  }
  if (state.disabled) {
    return 'disabled';
  }
  return 'normal';
};

export const getButtonTheme = (type: TTypesButton, state: TStates) => {
  const index = determineStateIndex(state);

  const styles = {
    ...buttonTheme[index][type],
  };

  return styles;
};
