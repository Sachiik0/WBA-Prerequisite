
const bs58 = require('bs58');
const fs = require('fs');
b = bs58.decode('4KXvjggpxf1jquaMePAjyfJDpqHdqVo9ZRiezFd1JRrDZbNWcaQJUAAW38n7Vx4MRRy3qgww7cmXKb3E6c8ELf4u');
j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
fs.writeFileSync('key.json', `[${j}]`);
