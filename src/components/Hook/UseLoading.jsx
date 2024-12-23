import style from "../Products/Products.module.css"

export default function UseLoading(){
    return ( <div className='fixed top-0 left-0 flex items-center z-[1100000] justify-center right-0 bottom-0 bg-green-800/55'>
        <span class={style.loader}></span>
      </div>)
}