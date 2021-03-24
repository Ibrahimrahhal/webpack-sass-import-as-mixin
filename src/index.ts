import * as path from 'path';
import * as fs from 'fs';

const loader = function (content:string) :string {
    return content;
}
export default loader;
module.exports = loader;