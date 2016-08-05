'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const hex0 = [0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 0, 0, 0, 0, 0, 0, 0, 160, 176, 192, 208, 224, 240, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 176, 192, 208, 224, 240];

const hex1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12, 13, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12, 13, 14, 15];

const uintUp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const uintLow = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

const parseByte16 = exports.parseByte16 = (str, offset) => {
  return hex0[str.charCodeAt(offset) - 48] | hex1[str.charCodeAt(offset + 1) - 48];
};

const toString16 = exports.toString16 = (val, uppercase) => {
  const first = val >> 4;
  const second = val - (first << 4);
  return uppercase ? uintUp[first] + uintUp[second] : uintLow[first] + uintLow[second];
};

