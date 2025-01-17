import React from 'react'

export default function Feedback() {

  const copyText = () =>{
    navigator.clipboard.writeText("m3-design-kit-feedback@google.com").then(() => {
        console.log("コピー成功");
      }).catch(err => {
        console.error("コピー失敗:", err);
      });
  }

  return (
    <div className="w-[655px] h-[192px] font-normal text-custom-gray "> 
        <p>Have feedback for the Material Design team?</p>
        <p>We’d love to hear what you think.</p>
        <a href="https://docs.google.com/forms/d/1AKqbaIz0oAC9VgLb_CseAP9RVekmgv_AQvlFrb5_79Y/viewform?edit_requested=true">Material Design Kit feedback form</a>        
        <br/>
        <p>Further suggestions and/or questions?</p>
        <p>Email <a href="javascript:void(0)" onClick={copyText}>m3-design-kit-feedback@google.com</a></p>
        <br/>
        <p>You can also <a href="https://x.com/materialdesign?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">materialdesign</a>@ on Twitter.</p>
        {/* <button onClick={copyText}>test</button>      */}
    </div>
  )
}


 
 








   

   


   

 