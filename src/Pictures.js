import img0 from './assets/Event2021.jpg';
// import img1 from './assets/TedxKIET2021.jpg';
import img2 from './assets/main.jpg';
// import img3 from './assets/crowd.jpg';
import img4 from './assets/speaker1.jpg';
import img5 from './assets/speaker2.jpg';
import img6 from './assets/speaker3.jpg';
import img7 from './assets/speaker4.jpg';
import img8 from './assets/speaker5.jpg';
import img9 from './assets/speaker6.jpg';
import img10 from './assets/speaker7.jpg';
import img11 from './assets/speaker8.jpg';

export default function Pictures(){
    return(
        <div className="pics bg-black">
            {/* <img src={img1} alt="img1" width='350' height='250'></img> */}
            <img src={img10} alt="img5" width='320' height='250' className='ml1'></img>
            {/* <img src={img3} alt="img3" width='300' height='200'></img> */}
            <img src={img4} alt="spk1" width='155' height='250'></img>
            <img src={img6} alt="img5" width='320' height='250'></img>
            <img src={img9} alt="spk6" width='155' height='250'></img>
            <img src={img5} alt="img5" width='320' height='250'></img>
            <img src={img7} alt="img5" width='310' height='250' className='ml1'></img>
            <img src={img8} alt="img5" width='320' height='250'></img>
            <img src={img2} alt="img2" width='320' height='250'></img>
            <img src={img11} alt="img5" width='320' height='250'></img>
        </div>
    )
}