import React from 'react'

export default function Title(props: {
    title: string
}) {
  return <>
    <h2 className='text-xl font-semibold mb-3'>{props.title}</h2>
    <hr className='border-slate-300 mb-6'/>
  </>
}
