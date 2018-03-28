/// <reference path="fourslash.ts" />

//// type T = number;
//// var x;
//// var y = x as /**/

verify.completions({ at: "", contains: ["T"] });
