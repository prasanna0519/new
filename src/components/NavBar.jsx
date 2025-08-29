

function NavBar() {
  const navContent =[
    {name:"Home",link:"/"},
    {name:"about",link:"/about"},
    {name:"Contact",link:"/contact"},
    {name:"Cart",link:"/cart"},
  ];
  return (
    <div className ="flex px-10 justify-between item-center bg-blue-200 py-3 fixed w-full">
      <h2>Title</h2>
      

      <div className ="flex gap-5 justify-between item-center">
        {navContent.map((navLink)=>
            (
            <p className="course-pointer"> {navLink.name}</p>))}
      </div>
      </div>
  )
}

export default NavBar;