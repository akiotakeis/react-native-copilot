// @flow
import { StyleSheet } from 'react-native';

export const STEP_NUMBER_RADIUS: number = 14;
export const STEP_NUMBER_DIAMETER: number = STEP_NUMBER_RADIUS * 2;
export const ZINDEX: number = 100;
export const MARGIN: number = 13;
export const OFFSET_WIDTH: number = 4;
export const ARROW_SIZE: number = 12;

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: ZINDEX,
  },
  arrow: {
    position: 'absolute',
    borderColor: 'transparent',
    borderWidth: ARROW_SIZE,
  },
  tooltip: {
    position: 'absolute',
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#7a9af7',
    borderRadius: 3,
    overflow: 'hidden',
  },
  tooltipText: {
    color: '#ffffff',
  },
  tooltipContainer: {
    flex: 1,
  },
  stepNumberContainer: {
    position: 'absolute',
    width: STEP_NUMBER_DIAMETER,
    height: STEP_NUMBER_DIAMETER,
    overflow: 'hidden',
    zIndex: ZINDEX + 1,
  },
  stepNumber: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: STEP_NUMBER_RADIUS,
    borderColor: '#FFFFFF',
    backgroundColor: '#7a9af7',
  },
  stepNumberText: {
    fontSize: 10,
    backgroundColor: 'transparent',
    color: '#FFFFFF',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#7a9af7',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ffffff',
    marginBottom: 10,
    marginLeft: 5,
  },
  buttonText: {
    color: '#ffffff',
  },
  bottomBar: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  overlayRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  overlayContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});
