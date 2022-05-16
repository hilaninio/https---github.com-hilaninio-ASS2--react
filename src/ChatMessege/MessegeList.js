import audio1 from './audio.m4a';
import shabatShalom from './shabatShalom.jpeg';
import happyHanukka from './happyHanukka.mp4';
const MessegeList = {hemihemi: [
{ name:"orpaz", content: 'הי אורפז מה קורה?', time:'15:32',messege: true, file:false,audio:false,video:false, typeOfMessege:'sendMessege' },
{ name:"orpaz", content: 'אצלי טוב', time:'15:33',messege: true, file:false,audio:false,video:false, typeOfMessege:'recieveMessege' },
{ name:"orpaz", content: ' איך את?', time:'15:33',messege: true, file:false,audio:false,video:false, typeOfMessege:'recieveMessege' },
{ name:"orpaz", content: 'אני בסדר, את יכולה בבקשה לשלוח לי את הוידאו שצילמת?', time:'15:34',messege: true, file:false,audio:false,video:false, typeOfMessege:'sendMessege' },
{ name:"orpaz", content: happyHanukka , time:'15:40',messege:false , file:false, audio:false,video:true,typeOfMessege:'recieveVideo' },
{ name:"orpaz", content: 'תודה רבה וחנוכה שמח', time:'16:42',messege: true, file:false,audio:false,video:false, typeOfMessege:'sendMessege' },

{ name:"Shani", content:audio1, time:'15:56',messege:false , file:false, audio:true,video:false,typeOfMessege:'sendAudio' },
{ name:"Shani", content: 'אצלי הכל בסדר, איך היה היום בלימודים?', time:'15:57',messege: true, file:false,audio:false,video:false, typeOfMessege:'recieveMessege' },
{ name:"Shani", content: 'היה בסדר', time:'16:01',messege: true, file:false,audio:false,video:false, typeOfMessege:'sendMessege' },

{ name:"hila", content: 'איך את?', time:'12:32',messege: true, file:false,audio:false,video:false, typeOfMessege:'sendMessege' },
{ name:"hila", content: 'מה נשמע?', time:'12:45',messege: true, file:false,audio:false,video:false, typeOfMessege:'recieveMessege' },
{ name:"hila", content: 'https://images1.ynet.co.il/PicServer3/2013/03/24/4533872/45337750950100408257no.jpg', time:'12:46',messege:false , file:true,audio:false,video:false, typeOfMessege:'sendfile' },
{ name:"hila", content: 'תראי איפה היינו היום', time:'12:46',messege: true, file:false,audio:false,video:false, typeOfMessege:'sendMessege' },

{ name:"Avi", content: 'הי אבי, מצרפת לך את הסרטון. תודה ויום טוב', time:'12:30',messege: true, file:false, audio:false,video:false,typeOfMessege:'sendMessege' },
{ name:"Avi", content: happyHanukka , time:'12:31',messege:false , file:false, audio:false,video:true,typeOfMessege:'sendVideo' },

{ name:"Eli", content: 'הי אלי, תשלח לי בבקשה את התמונה מהיום', time:'11:32',messege: true, file:false,audio:false,video:false, typeOfMessege:'sendMessege' },
{ name:"Eli", content: 'https://images1.ynet.co.il/PicServer3/2013/03/24/4533872/45337750950100408257no.jpg', time:'11:35',messege:false , file:true,audio:false,video:false, typeOfMessege:'recievefile' },
{ name:"Eli", content: 'תודההה', time:'11:36',messege: true, file:false,audio:false,video:false, typeOfMessege:'sendMessege' },

],

orpazsond: [

    { name:"hila", content: 'שלום', time:'12:32',messege: true, file:false,audio:false,video:false, typeOfMessege:'sendMessege' },
    { name:"hila", content: 'מה שלומך?', time:'12:45',messege: true, file:false,audio:false,video:false, typeOfMessege:'recieveMessege' },
    { name:"hila", content: 'https://images1.ynet.co.il/PicServer3/2013/03/24/4533872/45337750950100408257no.jpg', time:'12:46',messege:false , file:true,audio:false,video:false, typeOfMessege:'sendfile' },
    { name:"hila", content: 'תראי איפה היינו היום', time:'12:46',messege: true, file:false,audio:false,video:false, typeOfMessege:'sendMessege' },
    
    { name:"Avi", content: 'שבת שלום', time:'12:30',messege: true, file:false, audio:false,video:false,typeOfMessege:'sendMessege' },
    { name:"Avi", content: 'https://images1.ynet.co.il/PicServer3/2013/03/24/4533872/45337750950100408257no.jpg' , time:'12:31',messege:false , file:true,audio:false,video:false, typeOfMessege:'sendfile' },
    ]};
export default MessegeList;

