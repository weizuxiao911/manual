// import * as iconv from 'iconv-lite'
const iconv = require('iconv-lite')

/**
 * HexDumper工具
 * @author weizuxiao
 */
class HexDumper {
    static len = 256
    static d = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

    static high = new Array(this.len)
    static low = new Array(this.len)

    static {
        for (let i = 0; i < this.len; i++) {
            this.high[i] = this.d[i >>> 4]
            this.low[i] = this.d[i & 0x0F]
        }
    }

    /**
     * 转成hex字符串
     * @param s 
     * @returns 
     */
    static encode(s, charset = 'utf-8') {
        const buff = iconv.encode(s, charset)
        let size = buff?.length
        const out = new Array(size * 2);
        let byte = buff?.[0] & 0xFF;
        out.push(this.high[byte])
        out.push(this.low[byte])
        size--
        for (; size > 0; size--) {
            byte = buff[buff.length - size] & 0xFF;
            out.push(this.high[byte]);
            out.push(this.low[byte]);
        }
        return out.join('')
    }

    /**
     * 解析hex字符串
     * @param hexString 
     * @param charset 
     * @returns 
     */
    static decode(hexString, charset = 'utf-8') {
        if (hexString.length % 2 !== 0) {
            throw new Error('Invalid hex string length');
        }
        const bytes = [];
        for (let i = 0; i < hexString.length; i += 2) {
            const high = this.d.indexOf(hexString[i]);
            const low = this.d.indexOf(hexString[i + 1]);
            bytes.push((high << 4) + low);
        }
        return iconv.decode(Buffer.from(bytes), charset);
    }

    /**
     * hex字符串转bytes字符串
     * @param tlv 
     * @param charset 
     * @returns 
     */
    static hexStringToBytesString(hex, charset = 'ISO-8859-1') {
        if (!hex) {
            return hex
        }
        let mod = 2
        hex = hex.toUpperCase()
        if (hex.length % 2 !== 0) {
            hex = `0${hex}`
        }
        let length = Math.floor(hex?.length / mod)
        let data = Buffer.alloc(length)
        let achar = hex?.split('')
        const toByte = (c) => {
            return "0123456789ABCDEF".indexOf(c?.toUpperCase())
        }
        for (let i = 0; i < length; i++) {
            let pos = i * 2
            data[i] = toByte(achar[pos]) << 4 | toByte(achar[pos + 1])
        }
        console.log(data)
        return iconv.decode(data, charset)
    }

    /**
     * bytes字符串转hex字符串
     * @param str 
     * @param charset 
     * @returns 
     */
    static bytesStringToHexString(str, charset = 'ISO-8859-1') {
        if (!str) {
            return str
        }
        let bytes = iconv.encode(str, charset)
        let s = ''
        for (let byte of bytes) {
            const hex = (byte & 0xFF)?.toString(16)?.padStart(2, '0')
            s += hex
        }
        return s?.toUpperCase()
    }

}

exports.HexDumper = HexDumper