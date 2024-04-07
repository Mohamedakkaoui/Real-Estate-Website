// customUuidGenerator.js
const uuid = require('uuid')

function generateCustomUUID() {
    const uuidBytes = uuid.v4(null, Buffer.alloc(8))
    const uuidString = uuidBytes.toString('hex')
    return uuidString
}

module.exports = generateCustomUUID