const INITIAL_STATE = {

    sections:[
        {
          title: 'Bags',
          imageUrl: 'https://imgur.com/L9weERc.jpg',
          id: 1,
          linkUrl: '/bags'
        },
        {
          title: 'Flats',
          imageUrl: 'https://i.imgur.com/AdPZNo1.jpg',
          id: 2,
          linkUrl: '/Flats'
        },
        {
          title: 'Heels',
          imageUrl: 'https://imgur.com/XSvgztQ.jpg',
          id: 3,
          linkUrl: '/heels'
        },
        {
          title: 'Sneakers',
          imageUrl: 'https://imgur.com/UPbt7EA.jpg',
          size: 'large',
          id: 4,
          linkUrl: '/sneakers'
        },
        ]
      
      
}



const directoryReducer = (state =INITIAL_STATE, action) => {
    switch(action.type){
default:
    return state;
    }
}

export default directoryReducer