const fs = require('fs');

const writeAndappend = function(){
    console.log('Writing and appending to file');
    fs.writeFileSync('nodepad.txt', 'I Live in Bhopal and i am a trainer at TWD.');
    fs.appendFileSync('nodepad.txt', ' I help experienced and fresher become web-app developer.');
}

module.exports = writeAndappend