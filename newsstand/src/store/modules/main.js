const state={
  notifications:[],
  readingList:[],
  topAroundTheGlobe:[]
}

const mutations={
  'SET_topAroundTheGlobe'(state,payload)
  {

  },
 
  'SET_Notifications'(state,payload){

  },
  'Add_ReadLater'(state,payload){

  },
  'Delete_ReadLater'(state,payload){

  }
};

const getters={
  'GET_Notifications'(state,getters){

  },
  'GET_topAroundTheGlobe'(state,getters){

  },
  'GET_NumberReadingList'(state,getters){

  },
  'GET_NumberNotifications'(state,getters){

  }
};

const actions={
  AddToReadingList:(state,payload)=>{

  }
}
export default{
  state,mutations,getters,actions
}