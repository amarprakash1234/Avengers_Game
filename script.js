let main = document.getElementById("main");

let arr = ["https://hips.hearstapps.com/hmg-prod/images/thor-infintywar-1556123529.jpg?crop=0.5272931907709623xw:1xh;center,top&resize=980:*", "https://images.indianexpress.com/2018/04/avengers-captain-america.jpg?w=350", "https://images.indianexpress.com/2018/04/avengers-iron-man.jpg?w=350", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOO9jwhuF9tGv2sU7MiYLFGr-6V3M9BHbbA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4V5_y43N6sy4RaF-EjAw_qF0TkhEVuklDQ&s", "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/30/Pictures/_19298b80-a255-11ea-b043-295af9ca78f2.jpg"];
let str = ``;

for(let i = 0; i <= 35; i++) {
    let r = Math.floor(Math.random() * 6);
    str += `<div class="box"><img src=${arr[r]}></div>`;
}
main.innerHTML = str;








