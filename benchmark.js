import Benchmark from 'benchmark';

import {parseByte16, toString16} from './';

const readSuite = new Benchmark.Suite('parseByte');
const writeSuite = new Benchmark.Suite('toString');

const str = '017faedc';
const val0 = 231;
const val1 = 19;
const val2 = 155;
const val3 = 8;

readSuite.add('#parseByte16', () => {
  parseByte16(str, 0);
  parseByte16(str, 1);
  parseByte16(str, 2);
  parseByte16(str, 3);
  parseByte16(str, 4);
  parseByte16(str, 5);
  parseByte16(str, 6);
})
.add('#parseInt', () => {
  parseInt(str.substr(0, 2), 16);
  parseInt(str.substr(1, 2), 16);
  parseInt(str.substr(2, 2), 16);
  parseInt(str.substr(3, 2), 16);
  parseInt(str.substr(4, 2), 16);
  parseInt(str.substr(5, 2), 16);
  parseInt(str.substr(6, 2), 16);
})
.on('complete', () => {
  console.log('\n');
  for(const key of Object.keys(readSuite)) {
    const bench = readSuite[key];
    if(!bench || !bench.stats) return;
    console.log(bench.name);
    const {moe, rme, sem, deviation, mean} = bench.stats;
    console.log({moe, rme, sem, deviation, mean});
    console.log(`Fastest is ${readSuite.filter('fastest').map('name')}`);
    console.log('\n');
  };
})
.run({'async': true});

writeSuite.add('#toString16', () => {
  toString16(val0);
  toString16(val1);
  toString16(val2);
  toString16(val3);
})
.add('#toString16 UpperCase', () => {
  toString16(val0, true);
  toString16(val1, true);
  toString16(val2, true);
  toString16(val3, true);
})
.add('#toString', () => {
  val0.toString(16);
  val0.toString(16);
  val0.toString(16);
  val0.toString(16);
})
.add('#toString UpperCase', () => {
  val0.toString(16).toUpperCase();
  val0.toString(16).toUpperCase();
  val0.toString(16).toUpperCase();
  val0.toString(16).toUpperCase();
})
.on('complete', () => {
  console.log('\n');
  for(const key of Object.keys(writeSuite)) {
    const bench = writeSuite[key];
    if(!bench || !bench.stats) return;
    console.log(bench.name);
    const {moe, rme, sem, deviation, mean} = bench.stats;
    console.log({moe, rme, sem, deviation, mean});
    console.log(`Fastest is ${writeSuite.filter('fastest').map('name')}`);
    console.log(`Slowest is ${writeSuite.filter('slowest').map('name')}`);
    console.log('\n');
  };
})
.run({'async': true});