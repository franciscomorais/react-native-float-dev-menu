
/**
 * Module dependencies.
 */

import {
  NativeModules,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import Draggable from 'react-native-draggable';
import React from 'react';

/**
 * Styles.
 */

const styles = {
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    borderColor: 'white',
    borderRadius: 150,
    borderWidth: 1,
    height: 44,
    justifyContent: 'center',
    opacity: 0.4,
    width: 44
  },
  label: {
    color: '#ffffff',
    fontSize: 12
  }
};

/**
 * Handle debug menu.
 */

const handleDebugMenu = () => {
  NativeModules.DevMenu.show();
};

/**
 * `FloatDevMenu` component.
 */

const FloatDevMenu = props => {
  if (!__DEV__) {
    return props.children;
  }

  const { children, label, startX, startY } = props;

  return (
    <>
      {children}

      <Draggable
        x={startX}
        y={startY}
      >
        <TouchableWithoutFeedback onPress={handleDebugMenu}>
          <View style={styles.button}>
            <Text style={styles.label}>
              {label}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </Draggable>
    </>
  );
};

/**
 * Default props.
 */

FloatDevMenu.defaultProps = {
  label: 'DEV',
  startX: 50,
  startY: 50
};

/**
 * Export `FloatDevMenu`.
 */

export default FloatDevMenu;
