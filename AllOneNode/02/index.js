// const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'starter.txt'),
      'utf-8'
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, 'starter.txt'));

    await fsPromises.writeFile(path.join(__dirname, 'promisesWrite.txt'), data);
    await fsPromises.appendFile(
      path.join(__dirname, 'promisesWrite.txt'),
      '\nThis is a new line'
    );
    await fsPromises.rename(
      path.join(__dirname, 'promisesWrite.txt'),
      path.join(__dirname, 'promiseComplete.txt')
    );
    const data2 = await fsPromises.readFile(
      path.join(__dirname, 'promiseComplete.txt'),
      'utf-8'
    );
    console.log(data2);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// exit on uncaught exception
// process.on('uncaughtException', (err) => {
//   console.error(`There was an unCaught exception: ${err}`);
//   process.exit(1);
// });

// fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('New file created');
//   fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\n Thanks!', (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('Append completed');

//     fs.rename(
//       path.join(__dirname, 'reply.txt'),
//       path.join(__dirname, 'newReply.txt'),
//       (err) => {
//         if (err) {
//           throw err;
//         }
//         console.log('Rename created');
//       }
//     );
//   });
// });
