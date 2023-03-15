import React, {useState} from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

import LoginForm from "./Pages/LoginForm";


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-center px-2 py-3 bg-transparent mb-4">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="#pablo"
            >
              Bad Banana
            </a>
            <Button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            > <i className="fas fa-bars">
            </i>
             more
            </Button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex justify-centre flex-col lg:flex-row list-none lg:ml-auto ">
         
            <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="/">
                    <span className="ml-2">Search movies</span>
                </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                href="/saved">
                <span className="ml-2">saved movies</span>
              </a>
            </li>
  

              <div className="flex items-center gap-2">
              <React.Fragment>
                <Button onClick={handleOpen}>Sign In</Button>
                <Dialog
                  size="xs"
                  open={open}
                  handler={handleOpen}
                  className="bg-transparent shadow-none"
                >
                  <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader
                      variant="gradient"
                      color="blue"
                      className="mb-4 grid h-28 place-items-center"
                    >
                      <Typography variant="h3" color="white">
                        Sign In
                      </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                      <Input label="Email" size="lg" />
                      <Input label="Password" size="lg" />
                      <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                      </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Button variant="gradient" onClick={handleOpen} fullWidth>
                        Sign In
                      </Button>
                      <Typography variant="small" className="mt-6 flex justify-center">
                        Don&apos;t have an account?
                        <Typography
                          as="a"
                          href="#signup"
                          variant="small"
                          color="blue"
                          className="ml-1 font-bold"
                          onClick={handleOpen}
                        >
                          Sign up
                        </Typography>
                      </Typography>
                    </CardFooter>
                  </Card>
                </Dialog>
              </React.Fragment>
                   {/* <a href="/login">
                    <Button variant="gradient" color="brown" size="sm" className="hidden lg:inline-block" onClick={<LoginForm/>}>
                       <span>Login</span>
                    </Button>
                   </a>
                  <Button variant="gradient" color="brown" size="sm" className="hidden lg:inline-block">
                     <span>Log out</span>
                  </Button>  */}
               </div>
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


// import { useState, useEffect } from "react";
// import {
//     Navbar,
//     MobileNav,
//     Typography,
//     Button,
//     IconButton,
// } from "@material-tailwind/react";

// const NavBar = () => {
//     const [openNav, setOpenNav] = useState(false);

//     useEffect(() => {
//         window.addEventListener(
//             "resize",
//             () => window.innerWidth >= 960 && setOpenNav(false)
//         );
//     }, []);

//     const navList = (
//         <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center mb-20 lg:gap-6 text-white ">
//             <Typography
//                 as="li"
//                 variant="small"
//                 color="black"
//                 className="p-1 font-normal"
//             >
//                 <a href="#" className="flex items-center">
//                     Search for movie
//                 </a>
//             </Typography>
//             <Typography
//                 as="li"
//                 variant="small"
//                 color="black"
//                 className="p-1 font-normal"
//             >
//                 <a href="#" className="flex items-center">
//                     Saved movie
//                 </a>
//             </Typography>
//         </ul>
//     );

//     return (
//         <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-transparent ">
//             <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
//                 <Typography
//                     as="a"
//                     href="#"
//                     variant="small"
//                     className="mr-4 cursor-pointer py-1.5 font-normal"
//                     color="black"
//                 >



                    
//                     <span>🍌</span>
//                 </Typography>
//                 <div className="hidden lg:block">{navList}</div>
//                 <div className="flex items-center gap-2">
//                     <Button variant="gradient" color="brown" size="sm" className="hidden lg:inline-block">
//                         <span>Login</span>
//                     </Button>
//                     <Button variant="gradient" color="brown" size="sm" className="hidden lg:inline-block">
//                         <span>Sign up</span>
//                     </Button>
//                 </div>
//                 <IconButton
//                     variant="text"
//                     className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//                     ripple={false}
//                     onClick={() => setOpenNav(!openNav)}
//                 >
//                     {openNav ? (
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             className="h-6 w-6"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth={2}
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M6 18L18 6M6 6l12 12"
//                             />
//                         </svg>
//                     ) : (
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth={2}
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M4 6h16M4 12h16M4 18h16"
//                             />
//                         </svg>
//                     )}
//                 </IconButton>
//             </div>
//             <MobileNav open={openNav}>
//                 <div className="container mx-auto">
//                     {navList}
//                     <Button variant="gradient" size="sm" fullWidth className="mb-2">
//                         <span>Buy Now</span>
//                     </Button>
//                 </div>
//             </MobileNav>
//         </Navbar>
//     );
// }

// export default NavBar;