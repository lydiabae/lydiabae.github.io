define([],function(){function e(e,n,r){return r=r||"ms",e*t(n)/t(r)}function t(e){switch(e){case"ms":case"millisecond":return 1;case"s":case"second":return 1e3;case"m":case"minute":return 6e4;case"h":case"hour":return 36e5;case"d":case"day":return 864e5;case"w":case"week":return 6048e5;default:throw new Error('"'+e+'" is not a valid unit')}}return e});