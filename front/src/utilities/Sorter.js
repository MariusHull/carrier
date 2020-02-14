export default function sort (services, sort, order) {
         return services.sort(function(a, b) {
          var fieldA = a[sort].toUpperCase(); // ignore upper and lowercase
          var fieldB = b[sort].toUpperCase(); // ignore upper and lowercase
          if (fieldA < fieldB) {
            return order*(-1);
          }
          if (fieldA > fieldB) {
            return order;
          }
          // names must be equal
          return order*0;
        })
  }