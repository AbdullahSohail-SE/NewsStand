
export default async ({ Vue }) => {
  Vue.filter('formattedDate',function(value){
      
      value=new Date(value);      
      var day=value.toDateString().split(' ')[0];
      return value.toDateString().replace(day,`${day},`); 
    
  });
  Vue.filter('capitalizeFirst',function(value){
    return value.charAt(0).toUpperCase() + value.slice(1);
  });

  Vue.filter('truncateText',function(value){
    return value.replace(/^(.{1}[^\s]*).*/, "$1");
  });
}
