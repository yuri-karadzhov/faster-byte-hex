This modules provides two methods ```parseByte16``` and ```toString16``` that are faster versions of parseInt and toString when working with bytes and hex strings.

#parseByte16
* str - string to read byte from
* offset - offset to start read with

equals to ```parseInt(str.substr(offset, 2), 16)```.

#toString16
* val - byte to convert to hex string
* uppercase - should string be uppercased

equals to ```val.toString(16)``` or ```val.toString(16).toUpperCase()```.
