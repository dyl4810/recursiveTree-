const initState = {
  treeDataNested: [
    {
       id: 1,
        name: "A",
        children: [      
          {
            id: 2,
            name: "B",
            children: [
              {
                id: 3,
                name: "C",
                children: [
                  {
                    id: 4,
                    name: "D",
                    children: []
                  },
                  {
                    id: 5,
                    name: "E",
                    children: []
                  }
                ]
              },
            ]
          },
          {
            id: 6,
            name: "F",
            children: [
              {
                id: 7,
                name: "G",
                children: []
              },
              {
                id: 8,
                name: "H",
                children: []
              }
            ]
          },
          {
            id: 9,
            name: "I",
            children: [
              {
                id: 10,
                name: "J",
                children: []
              },
              {
                id: 11,
                name: "K",
                children: []
              }
            ]
          }  
        ]    
    },
  ],

  treeDataFlat:[
    {
      id: 6,
      name: "F",
      children:[7,8]
    },
    {
      id: 7,
      name: "G",
      children:[5]
    },
    {
      id: 8,
      name: "H",
      children:[]
    },
    {
      id: 9,
      name: "I",
      children:[10,11]
    },
    {
      id: 10,
      name: "J",
      children:[]
    },
    {
      id: 11,
      name: "K",
      children:[]
    },
    {
      id: 1,
      name: "A",
      children:[2,6,9]
    },
    {
      id: 2,
      name: "B",
      children:[3]
    },
    {
      id: 3,
      name: "C",
      children:[4]
    },
    {
      id: 4,
      name: "D",
      children:[]
    },
    {
      id: 5,
      name: "E",
      children:[]
    }
  ]
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DO_NOTHING":
      return state;
    default:
      return state;
  }
};
export default rootReducer;
