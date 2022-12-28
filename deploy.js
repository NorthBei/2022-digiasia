/* eslint-disable @typescript-eslint/no-var-requires */
const Client = require('ssh2-sftp-client');
const sftp = new Client();

const {
  FTP_SERVER_HOST,
  FTP_SERVER_PORT,
  FTP_SERVER_USERNAME,
  FTP_SERVER_PASSWORD,
} = process.env;

if (
  !FTP_SERVER_HOST ||
  !FTP_SERVER_PORT ||
  !FTP_SERVER_USERNAME ||
  !FTP_SERVER_PASSWORD
) {
  console.error('login info not complete');
  return;
}

sftp
  .connect({
    host: FTP_SERVER_HOST,
    port: FTP_SERVER_PORT,
    username: FTP_SERVER_USERNAME,
    password: FTP_SERVER_PASSWORD,
  })
  .then(() => {
    return sftp.list('/html');
  })
  .then((data) => {
    console.log(data, 'the data info');
  })
  .then(async () => {
    console.log('uploadDir, ./out');
    await sftp.uploadDir('./out', '/html/out');
    console.log('delete /html/2022 folder');
    await sftp.rmdir('/html/2022', true);
    console.log('rename /html/out to /html/2022');
    await sftp.rename('/html/out', '/html/2022');
  })
  .then(() => {
    console.log('finished');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err, 'catch error');
  });
