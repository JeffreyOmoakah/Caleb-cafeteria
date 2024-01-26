'use client';

import '@/app/globals.css'
import { useState, useEffect } from 'react'


const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault
  }
  return (
    <section>
      <form class='flex_col_start gap-8 pt-[72px]'>
        <div class='flex_col_start'>
          <label for='email'>Email</label>
          <input id='email' type='email' class='input_field'></input>
        </div>
        <div class='flex_col_start'>
          <label for='password'>Password</label>
          <input id='password' type='password' class='input_field'></input>
        </div>
        <div>
        <div class='flex items-center justify-center gap-1'>
          <input type='checkbox' id='checkbox' class='checkbox'/>
          <label class='small_text'>Remeber Me</label>
        </div>
        <p class='font-Inter text-[14px] font-500 leading-[20px]'>Forgot Password?</p>
      </div>
      </form>
    </section>
  )
}

export default Form;