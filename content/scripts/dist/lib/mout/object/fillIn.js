define(["../array/forEach","./forOwn"],function(e,t){function n(n,r){return e(Array.prototype.slice.call(arguments,1),function(e){t(e,function(e,t){n[t]==null&&(n[t]=e)})}),n}return n});