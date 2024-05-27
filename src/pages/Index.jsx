import React from 'react';
import Slider from '../components/slider';
const Index = () => {
    return (
    <div>
      <Slider />

      <h1 className='titulo_conoce'>Conoce nuestros productos</h1>
      <div className='background'>
        <div className='CashAr_man'>
        <div className='cashAR_container'>
            <img src="/imgs/Splash.png" alt=""  className='cashAR_img'/>
            <p className='cashAR_txt'>Descubre y convierte divisas al instante con nuestra aplicación móvil, ideal
                para personas con discapacidad visual, comunica el valor de manera audible, además de realizar conversiones a múltiples divisas.
            </p>
          </div>
        </div>
      </div>

      <h1 className='txt_industrias'>Industrias</h1>
    
      <div class='cuerpo'>
        <div class="collage">
        <div class="item item_img_1"><span className= "item_txt">Automotriz</span></div>
        <div class="item item_img_2"><span className= "item_txt">Gobierno</span></div>
        <div class="item item_img_3"><span className= "item_txt">Industrial</span></div>
        <div class="item item_img_4"><span className= "item_txt">Telecomunicaciones</span>
        </div>
        </div>

    </div>
    </div>
    
    )
}

export default Index