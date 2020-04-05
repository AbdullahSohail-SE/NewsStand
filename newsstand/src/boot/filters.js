// import something here

// "async" is optional
export default async ({ Vue }) => {
  Vue.filter('formattedDate',function(value){
      
      value=new Date(value);      
      var day=value.toDateString().split(' ')[0];
      return value.toDateString().replace(day,`${day},`); 
    
  });
}
