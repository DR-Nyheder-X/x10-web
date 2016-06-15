import React from 'react'
import classname from 'classname'
import './AudioControls.css'

export default function AudioControls ({ playing, onPlayPause, onPrev, onNext }) {
  const playButtonCls = classname('AudioControls-playButton', {
    'is-playing': playing
  })

  return <div className='AudioControls'>
    <div className='AudioControls-skipBack' onClick={onPrev}>
      <svg width='37px' height='20px' viewBox='0 0 37 20'>
        <path transform='translate(-91.000000, -149.000000)' fill='#000000' d='M94.4355798,153.211485 L115.791754,153.211485 C120.029733,153.211485 123.463013,156.639028 123.463013,160.869875 L123.463013,161.108136 C123.463013,165.339811 120.071032,168.684858 115.897289,168.541325 L115.966027,166.542507 C118.99956,166.646828 121.463013,164.217461 121.463013,161.108136 L121.463013,160.869875 C121.463013,157.744347 118.925911,155.211485 115.791754,155.211485 L94.4355798,155.211485 L97.2589513,158 L95.8535487,159.42297 L91.2972987,154.92297 C90.9009004,154.531466 90.9009004,153.891505 91.2972987,153.5 L95.8535487,149 L97.2589513,150.42297 L94.4355798,153.211485 Z M93,153.793628 L93,154.629342 L92.7027013,154.92297 L92.7027013,153.5 L93,153.793628 Z' id='Combined-Shape'></path>
      </svg>
      <label>10 sek</label>
    </div>

    <div className={playButtonCls} onClick={onPlayPause}>
      <svg className='play' width='26px' height='29px' viewBox='0 0 26 29'>
        <path d='M0,1.35036042 C0,0.245981764 0.770454521,-0.212251212 1.73167146,0.333002205 L24.9742265,13.5174167 C25.9306023,14.0599239 25.9354435,14.9367557 24.9742265,15.4820091 L1.73167146,28.6664236 C0.775295723,29.2089308 0,28.7583662 0,27.6490654 L0,1.35036042 Z' fill='#000000'></path>
      </svg>
      <svg className='pause' width='25px' height='28px' viewBox='0 0 25 28'>
        <path d='M15,0.996534824 C15,0.446163838 15.4556644,0 15.9953976,0 L24.0046024,0 C24.5543453,0 25,0.439813137 25,0.996534824 L25,27.0034652 C25,27.5538362 24.5443356,28 24.0046024,28 L15.9953976,28 C15.4456547,28 15,27.5601869 15,27.0034652 L15,0.996534824 Z M0,0.996534824 C0,0.446163838 0.455664396,0 0.995397568,0 L9.00460243,0 C9.55434533,0 10,0.439813137 10,0.996534824 L10,27.0034652 C10,27.5538362 9.5443356,28 9.00460243,28 L0.995397568,28 C0.445654671,28 0,27.5601869 0,27.0034652 L0,0.996534824 Z' id='pause' fill='#000000'></path>
      </svg>
    </div>

      <div className='AudioControls-next' onClick={onNext}>
      <svg width='22px' height='13px' viewBox='0 0 22 13'>
        <path d='M11.7681788,1.26063286 C11.7681788,0.157546133 12.5100176,-0.227799772 13.4165792,0.394078431 L20.669541,5.36942584 C21.5799274,5.99392777 21.5761026,7.00906919 20.669541,7.63094739 L13.4165792,12.6062948 C12.5061928,13.2307967 11.7681788,12.8316584 11.7681788,11.7397404 L11.7681788,1.26063286 Z M0.858838131,1.21045343 C0.858838131,0.108457756 1.59739618,-0.278404754 2.50703386,0.345398135 L9.83369098,5.36980511 C10.7439643,5.99404393 10.7433287,7.00657098 9.83369098,7.63037387 L2.50703386,12.6547808 C1.59676049,13.2790197 0.858838131,12.8955821 0.858838131,11.7897255 L0.858838131,1.21045343 Z' fill='#000000'></path>
      </svg>
    </div>
  </div>
}