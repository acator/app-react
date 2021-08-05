
const musicState ={
   music:[
      { title: "Кино - Группа крови", src: './musicFile/Кино - Группа крови.mp3'},
      { title: "Кино - Звезда по имени Солнце", src: './musicFile/Кино - Звезда по имени Солнце.mp3' },
      { title: "Кино - Красно-жёлтые дни", src: './musicFile/Кино - Красно-жёлтые дни.mp3' },
      { title: "Кино - Кукушка", src: './musicFile/Кино - Кукушка.mp3' },
      { title: "Кино - Муравейник", src: './musicFile/Кино - Муравейник.mp3' },
      { title: "Кино - Следи за собой", src: './musicFile/Кино - Следи за собой.mp3' },
      { title: "Кино - Спокойная ночь", src: './musicFile/Кино - Спокойная ночь.mp3' }


   ] ,  
   album:[
      {
         titles: "Кино",
        musicAlbum:  [{ title: "Кино - Группа крови", src: './musicFile/Кино - Группа крови.mp3' },
            { title: "Кино - Звезда по имени Солнце", src: './musicFile/Кино - Звезда по имени Солнце.mp3' },
            { title: "Кино - Красно-жёлтые дни", src: './musicFile/Кино - Красно-жёлтые дни.mp3' }
          ]
},
   {
      titles: "Нервы",
      musicAlbum:  [
      { title: "Нервы - Нервы", src: './musicFile/Кино - Группа крови.mp3' },
         { title: "Нервы - Привет, лови!", src: './musicFile/Кино - Звезда по имени Солнце.mp3' },
         { title: "Нервы - Укачу", src: './musicFile/Кино - Красно-жёлтые дни.mp3' }
   ]}
]  

}

const musicReducer = (state = musicState, action) => {
   return state;

}







export default musicReducer;