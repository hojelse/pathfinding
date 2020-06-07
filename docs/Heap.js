"use strict";
// class Heap {
//   a:number[] = [];
//   N:number = 0;
//   insert(key:number) {
//   }
//   delMax():number {
//     return 0;
//   }
//   sink(k:number) {
//     while(2*k <= this.N) {
//       let j = 2*k;
//       if (j < this.N && j < j+1) j++;
//       if (!(k < j)) break;
//       this.swap(k, j);
//       k = j;
//     }
//   }
//   swap(p:number, q:number) {
//     [this.a[p],this.a[q]] = [this.a[q],this.a[p]] // one-line swap with destructuring
//   }
// }
