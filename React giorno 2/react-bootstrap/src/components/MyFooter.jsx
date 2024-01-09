import React, { Component } from 'react'

export default class MyFooter extends Component {
  render() {
    return (
      <footer className='bg-dark'> 
        <p className='text-white'>Mail to:<a href="#">Mypage@gmail.com</a></p>
        <p className='text-white'>Number: <a href="#">3331929237</a></p>
        <p className='text-white'>Contatti: Roma, Via delle Banane 17</p>
      </footer>
    )
  }
}
