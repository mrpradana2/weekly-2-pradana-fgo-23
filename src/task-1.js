import { consola } from "consola";

function fetchData(status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("Data berhasil diambil");
      } else {
        reject(new Error("Gagal mengambil data"));
      }
    }, 3000);
  });
}

// menggunakan then catch
// export function getResponseData(status) {
//   const responseData = fetchData(status);
//   responseData
//     .then((response) => console.log(response))
//     .catch((err) => {
//       if (err instanceof Error) console.log(err.message);
//     });
// }

// menggunakan async-await
export async function getResponseData(status) {
  try {
    const responseData = await fetchData(status);
    return console.log(responseData);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  } finally {
    consola.success("Proses selesai");
  }
}

// Promise
/* 
Promise merupakan sebuah object yang mewakili sebuah nilai yang masih dalam proses, promise ini akan mengembalikan sebuah nilai. terdapat tiga status proses yaitu:
1. pending => merupakan keadaan awal saat data masih di proses.
2. fulfilled => merupakan hasil setelah data diproses yang menandakan bahwa data yang diproses telah berhasil.
3. Reject => merupakan hasil setelah data diproses yang menandakan bahwa data gagal diproses. 
*/

// Then-catch
/*
Then-catch merupakan sebuah method dalam javascript yang digunakan untuk menangkap hasil dari sebuah promise.
terdapat dua methode yang sering digunakan yaitu:
1. then() => digunakan untuk menangkap response jika hasil status dari promise fulfilled.
2. catch() => digunakan untuk menangkap response jika hasil status dari promise reject, catch ini menerima parameter error yang digunakan untuk menampilkan sebuah error.
*/

// async-await
/*
async-await merupakan pasangan fitur yang digunakan untuk memproses sebuah promise namun function dalam hal ini bersifat asynchronous namun dengan gaya penulisan synchronous.
1. async => digunakan untuk menandakan bahwa function tersebut bersifat asynchronous, biasanya terletak sebelum function.
2. await => digunakan untuk menunggu proses hasil promise, sehingga fungsi tersebut dijalankan setelah promise selesai.    
*/

// try-catch
/*
try-catch digunakan untuk menangani sebuah proses dalam function yang menggunakan async-await.
1. try => digunakan untuk menangani sebuah proses yang kemungkinan terjadi error, sehingga jika terjadi error maka proses akan berhenti dan error tersebut akan ditangani oleh catch.
2. catch => jika try mengirimkan error, maka eeror tersebut akan dieksekusi di catch.  

*/
