'use client';

import '@/app/globals.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'


const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault
  }
  return (
    <section className='w-full'>
      <form class='flex_col_start gap-8 pt-[72px] w-full'>
        <div class='flex_col_start w-full'>
          <label for='email'>Email</label>
          <input id='email' type='email' class='input_field'></input>
        </div>
        <div class='flex_col_start w-full'>
          <label for='password'>Password</label>
          <input id='password' type='password' class='input_field'></input>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div class='flex items-center justify-center gap-1'>
              <input type='checkbox' id='checkbox' class='checkbox'/>
              <label class='small_text'>Remember Me</label>
          </div>
          <Link href='/pages/reset-password/'>
            <p class='font-Inter text-[14px] font-500 leading-[20px]'>Forgot Password?</p>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Form;