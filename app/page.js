"use client";
import { useEffect, useState } from "react";
import HeaderTwo from "./components/HeaderTwo";


export default function Home() {
  

  useEffect(() => {
    // Esperamos un breve tiempo para asegurar que los elementos existen en el DOM
    const timeout = setTimeout(() => {
      const boton = document.querySelector(".yourbasket-button");
      const sidebarVisible = document.getElementById("micro-basket-container");

      // Verificación de existencia
      if (!boton || !sidebarVisible) {
        console.warn("No se encontró el botón o el sidebar en el DOM");
        return;
      }

      const handleClick = () => {
        sidebarVisible.classList.remove("SidebarCoreBoxContainer-visible");
        sidebarVisible.classList.add("SidebarCoreBoxContainer");
      };

      boton.addEventListener("click", handleClick);

      // Limpieza al desmontar (muy importante)
      return () => boton.removeEventListener("click", handleClick);
    }, 200); // 200ms para dar tiempo a que el DOM se monte

    return () => clearTimeout(timeout);
  }, []);


  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // estado del usuario

  useEffect(()=>{
    const token = JSON.parse(sessionStorage.getItem('token'));

    const userActual = JSON.parse(sessionStorage.getItem('user'));

    if(token){
      setIsLoggedIn(true);

      setUserData(userActual);
    }

  }, [])

  //console.log(isLoggedIn);
  //console.log(userData.displayName);
  

  return (
    <>

      <div className="refTwo pb-[95px]"></div>
      <HeaderTwo isLoggedIn={isLoggedIn} datos={userData}/>

      <section id="SidebarCorestyles" className="SidebarCoreBox">

        <div className="SidebarOverlay" style={{display:'none'}}></div>

        <div id="micro-basket-container" className="SidebarCoreBoxContainer">
          <div className="yourbasket">
            <span className="yourbasket-span">Tu canasta</span>
            <button type="button" className="yourbasket-button" aria-label="Cerrar">
              <svg data-testid="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="#6A696E" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3a.996.996 0 01-1.41 0L12 13.41 9.11 16.3a.996.996 0 11-1.41-1.41L10.59 12 7.7 9.11A.996.996 0 119.11 7.7L12 10.59l2.89-2.89a.996.996 0 111.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"></path>
              </svg>
            </button>
          </div>

          <div className="SidebarCoreBox-address">
            <div className="SidebarCoreBox-address-css1">
              <div className="SidebarCoreBox-address-css2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="SidebarCoreBox-address-svg">
                  <path fill="#6A696E" d="M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                </svg>

                <div className="SidebarCoreBox-address-text">
                  <span className="SidebarCoreBox-address-span">Valledupar</span>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="SidebarCoreBox-address-svg1">
                  <path fill="#6A696E" d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                </svg>

              </div>
            </div>
          </div>

          <div className="basket-container">
            <div className="empty-basket-container">
              <div className="empty-basket-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24">
                  <path fill="#6A696E" d="M12 9c.55 0 1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1zm-5 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 00-.4-1.34.996.996 0 00-1.36.41L15.55 11H8.53L4.27 2H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2z"></path>
                </svg>
              </div>

              <p className="empty-basket-p">Aún no tienes productos en tu canasta</p>

              <div className="empty-basket-button">
                <button className="empty-basket-btn" data-testid="button">
                  <span className="empty-basket-btn-span">Comenzar a comprar</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="sectionMain" className="flex flex-col justify-center">
        <div id="sectionDos" className="address-capture">
          <div className="mb-[40px] w-full text-center lg:mb-[60px]">
            <span className="address-span">

              {!isLoggedIn ? (
                <>
                  <span>Si tienes</span>
                  <span id="address-capture-text"> Rappi, </span>
                  <span>tienes Todo.</span>
                </>
              ) : (
                <span>Hola, buenos días. {userData.displayName}</span>
              )}

              {/** 
              <span>Si tienes</span>
              <span id="address-capture-text"> Rappi, </span>
              <span>tienes Todo.</span>
              */}

            </span>
          </div>

          <div id="input-box-address-capture" className="address-capture-box">
            <div className="address-autocomplete">
              <div className="p-[14px] lg:py-[23px] lg:px-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="#6A696E" d="M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                </svg>
              </div>

              <input autoComplete="off" placeholder="¿Dónde quieres recibir tu compra?" width="100%" className="address-input"></input>
            </div>
          </div>

          <div className="address-capture-footer">
            <div className="address-capture-footer-content">
              <button className="address-capture-footer-btn">
                <span className="address-footer-btn-span">
                  <span id="location-logo" className="mr-[8px] ml-[-4px] " style={{display: 'inherit'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path fill="white" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V2c0-.55-.45-1-1-1s-1 .45-1 1v1.06A8.994 8.994 0 003.06 11H2c-.55 0-1 .45-1 1s.45 1 1 1h1.06A8.994 8.994 0 0011 20.94V22c0 .55.45 1 1 1s1-.45 1-1v-1.06A8.994 8.994 0 0020.94 13H22c.55 0 1-.45 1-1s-.45-1-1-1h-1.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
                    </svg>
                  </span>
                  Usa tu ubicación actual
                </span>
              </button>

              {!isLoggedIn ? (
                <span id="emphasis_text_login" className="login-span">
                  <strong className="font-[800] cursor-pointer underline">Iniciar sesión</strong> para ver tus direcciones <span className="hidden md:inline-block">recientes</span>
                </span>

              ) : (
                <></>
              )}

              {/** 
              <span id="emphasis_text_login" className="login-span">
                <strong className="font-[800] cursor-pointer underline">Iniciar sesión</strong> para ver tus direcciones <span className="hidden md:inline-block">recientes</span>
              </span>
              */}

            </div>
          </div>
        </div>

        <div id="sectionTres" className="pt-[24px] bg-white">
          <div className="ms-[20px] me-[20px]">
            <p className="font-[800] text-[20px] mb-[16px] leading-[1.5] text-[#2e2c36]">¿Necesitas algo más?</p>

            {/** 
            <div className="relative">
              <div className="meScroll">
                <div className="flex items-center flex-row gap-[16px]" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                  <a href="#">
                    <div className="animate-none rounded-[8px]">
                      <div className="meCard">
                        <div className="meCard-content">
                          <div className="meCard-content-logo">
                            <div>
                              <span className="spanLogo">
                                <span className="spanLogoIn"></span>
                                <img className="imgLogo" src="/restaurants_r8.png" alt="Restaurantes"></img>
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="meCard-footer">Restaurantes</span>
                      </div>
                    </div>
                  </a>

                  <a href="#">
                    <div className="animate-none rounded-[8px]">
                      <div className="meCard-green">
                        <div className="meCard-content">
                          <div className="meCard-content-logo-green">
                            <div>
                              <span className="spanLogo">
                                <span className="spanLogoIn"></span>
                                <img className="imgLogo" src="/shop_r8.png" alt="Mercados"></img>
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="meCard-footer-green">Mercados</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            */}

            {!isLoggedIn ? (
              <div className="relative">
                <div className="meScroll">
                  <div className="flex items-center flex-row gap-[16px]" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                    <a href="#">
                      <div className="animate-none rounded-[8px]">
                        <div className="meCard">
                          <div className="meCard-content">
                            <div className="meCard-content-logo">
                              <div>
                                <span className="spanLogo">
                                  <span className="spanLogoIn"></span>
                                  <img className="imgLogo" src="/restaurants_r8.png" alt="Restaurantes"></img>
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="meCard-footer">Restaurantes</span>
                        </div>
                      </div>
                    </a>

                    <a href="#">
                      <div className="animate-none rounded-[8px]">
                        <div className="meCard-green">
                          <div className="meCard-content">
                            <div className="meCard-content-logo-green">
                              <div>
                                <span className="spanLogo">
                                  <span className="spanLogoIn"></span>
                                  <img className="imgLogo" src="/shop_r8.png" alt="Mercados"></img>
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="meCard-footer-green">Mercados</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              ):(
              <></>
            )}

          </div>

          <div className="pt-[16px] pb-[20px]">
            <div className="w-full overflow-x-auto overflow-y-hidden outScroll">
              <div className="flex w-full">
                <div id="startItem" className="mr-[20px]"></div>

                <div className="mr-[5px]">
                  <div id="category-item" className="category-item">
                    <div className="animate-none w-[150px] rounded-[6px]">
                      <a href="#" className="itemLinks">
                        <div className="relative block w-[60px] h-[60px]">
                          <div>
                            <span className="spanLogo">
                              <span className="spanLogoIn"></span>
                              <img className="imgLogo" src="/restaurants_r8.png" alt="Restaurantes"></img>
                            </span>
                          </div>
                        </div>

                        <div id="text-item" className="flex justify-center items-center w-full max-w-[120px]">
                          <span className="text-item-span">
                            <h2>Restaurantes</h2>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mr-[5px]">
                  <div id="category-item" className="category-item">
                    <div className="animate-none w-[150px] rounded-[6px]">
                      <a href="#" className="itemLinks">
                        <div className="relative block w-[60px] h-[60px]">
                          <div>
                            <span className="spanLogo">
                              <span className="spanLogoIn"></span>
                              <img className="imgLogo" src="/shop_r8.png" alt="Mercados"></img>
                            </span>
                          </div>
                        </div>

                        <div id="text-item" className="flex justify-center items-center w-full max-w-[120px]">
                          <span className="text-item-span">
                            <h2>Mercados</h2>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mr-[5px]">
                  <div id="category-item" className="category-item">
                    <div className="animate-none w-[150px] rounded-[6px]">
                      <a href="#" className="itemLinks">
                        <div className="relative block w-[60px] h-[60px]">
                          <div>
                            <span className="spanLogo">
                              <span className="spanLogoIn"></span>
                              <img className="imgLogo" src="/pharmacy_r8.png" alt="Farmacia"></img>
                            </span>
                          </div>
                        </div>

                        <div id="text-item" className="flex justify-center items-center w-full max-w-[120px]">
                          <span className="text-item-span">
                            <h2>Farmacia</h2>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mr-[5px]">
                  <div id="category-item" className="category-item">
                    <div className="animate-none w-[150px] rounded-[6px]">
                      <a href="#" className="itemLinks">
                        <div className="relative block w-[60px] h-[60px]">
                          <div>
                            <span className="spanLogo">
                              <span className="spanLogoIn"></span>
                              <img className="imgLogo" src="/stores_r8.png" alt="Tiendas"></img>
                            </span>
                          </div>
                        </div>

                        <div id="text-item" className="flex justify-center items-center w-full max-w-[120px]">
                          <span className="text-item-span">
                            <h2>Tiendas</h2>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mr-[5px]">
                  <div id="category-item" className="category-item">
                    <div className="animate-none w-[150px] rounded-[6px]">
                      <a href="#" className="itemLinks">
                        <div className="relative block w-[60px] h-[60px]">
                          <div>
                            <span className="spanLogo">
                              <span className="spanLogoIn"></span>
                              <img className="imgLogo" src="/turbo_r8_offer.png" alt="Turbo"></img>
                            </span>
                          </div>
                        </div>

                        <div id="text-item" className="flex justify-center items-center w-full max-w-[120px]">
                          <span className="text-item-span">
                            <h2>Turbo</h2>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mr-[5px]">
                  <div id="category-item" className="category-item">
                    <div className="animate-none w-[150px] rounded-[6px]">
                      <a href="#" className="itemLinks">
                        <div className="relative block w-[60px] h-[60px]">
                          <div>
                            <span className="spanLogo">
                              <span className="spanLogoIn"></span>
                              <img className="imgLogo" src="/liquors_r8.png" alt="Licores"></img>
                            </span>
                          </div>
                        </div>

                        <div id="text-item" className="flex justify-center items-center w-full max-w-[120px]">
                          <span className="text-item-span">
                            <h2>Licores</h2>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mr-[5px]">
                  <div id="category-item" className="category-item">
                    <div className="animate-none w-[150px] rounded-[6px]">
                      <a href="#" className="itemLinks">
                        <div className="relative block w-[60px] h-[60px]">
                          <div>
                            <span className="spanLogo">
                              <span className="spanLogoIn"></span>
                              <img className="imgLogo" src="/rappi-travel.png" alt="Rappi Travel"></img>
                            </span>
                          </div>
                        </div>

                        <div id="text-item" className="flex justify-center items-center w-full max-w-[120px]">
                          <span className="text-item-span">
                            <h2>Rappi Travel</h2>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mr-[5px]">
                  <div id="category-item" className="category-item">
                    <div className="animate-none w-[150px] rounded-[6px]">
                      <a href="#" className="itemLinks">
                        <div className="relative block w-[60px] h-[60px]">
                          <div>
                            <span className="spanLogo">
                              <span className="spanLogoIn"></span>
                              <img className="imgLogo" src="/soat1000x1000.png" alt="SOAT"></img>
                            </span>
                          </div>
                        </div>

                        <div id="text-item" className="flex justify-center items-center w-full max-w-[120px]">
                          <span className="text-item-span">
                            <h2>SOAT</h2>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div id="sectionCuatro" className="section-Cuatro">
          <p className="text-section-Cuatro">Lo más buscado</p>

          <div className="relative">
            <div className="w-full overflow-x-auto overflow-y-hidden outScroll">
              <div className="flex items-center flex-row gap-[12px]">
                <a className="link-section-Cuatro" href="#">
                  <div className="animate-none rounded-[9999px]">
                    <div className="style-link-section-Cuatro">
                      <p className="text-link-section-Cuatro">Detergentes</p>
                    </div>
                  </div>
                </a>

                <a className="link-section-Cuatro" href="#">
                  <div className="animate-none rounded-[9999px]">
                    <div className="style-link-section-Cuatro">
                      <p className="text-link-section-Cuatro">Frutas</p>
                    </div>
                  </div>
                </a>

                <a className="link-section-Cuatro" href="#">
                  <div className="animate-none rounded-[9999px]">
                    <div className="style-link-section-Cuatro">
                      <p className="text-link-section-Cuatro">Gaseosas</p>
                    </div>
                  </div>
                </a>

                <a className="link-section-Cuatro" href="#">
                  <div className="animate-none rounded-[9999px]">
                    <div className="style-link-section-Cuatro">
                      <p className="text-link-section-Cuatro">Huevos</p>
                    </div>
                  </div>
                </a>

                <a className="link-section-Cuatro" href="#">
                  <div className="animate-none rounded-[9999px]">
                    <div className="style-link-section-Cuatro">
                      <p className="text-link-section-Cuatro">Agua</p>
                    </div>
                  </div>
                </a>

                <a className="link-section-Cuatro" href="#">
                  <div className="animate-none rounded-[9999px]">
                    <div className="style-link-section-Cuatro">
                      <p className="text-link-section-Cuatro">Pizza</p>
                    </div>
                  </div>
                </a>

                <a className="link-section-Cuatro" href="#">
                  <div className="animate-none rounded-[9999px]">
                    <div className="style-link-section-Cuatro">
                      <p className="text-link-section-Cuatro">Huevo</p>
                    </div>
                  </div>
                </a>

                <a className="link-section-Cuatro" href="#">
                  <div className="animate-none rounded-[9999px]">
                    <div className="style-link-section-Cuatro">
                      <p className="text-link-section-Cuatro">Leche</p>
                    </div>
                  </div>
                </a>

                <a className="link-section-Cuatro" href="#">
                  <div className="animate-none rounded-[9999px]">
                    <div className="style-link-section-Cuatro">
                      <p className="text-link-section-Cuatro">Queso</p>
                    </div>
                  </div>
                </a>

                <a className="link-section-Cuatro" href="#">
                  <div className="animate-none rounded-[9999px]">
                    <div className="style-link-section-Cuatro">
                      <p className="text-link-section-Cuatro">Helado</p>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>

        </div>

        <div id="sectionCinco" className="bg-white">
          <div className="py-[20px]">
            <div className="header-sectionCinco">
              <div className="header-sectionCinco-flex">
                <div className="header-sectionCinco-title">
                  <span className="header-sectionCinco-span">¡Los 10 más elegidos!</span>
                </div>
              </div>
            </div>

            <div className="w-full overflow-x-auto overflow-y-hidden outScroll">
              <div id="container-sectionCinco" className="w-full flex">
                <div className="start-item"></div>

                <div className="item-sectionCinco">
                  <a className="link-sectionCinco" href="#">
                    <div className="linkHeader-sectionCinco animate-none rounded-[9999px]">
                      <div className="linkHeaderBox-sectionCinco">
                        <div className="linkHeaderBoxIn-sectionCinco">
                          <span className="spanLogo">
                            <span className="spanLogoIn"></span>
                            <img className="imgLogo rounded-[50px]" src="/10-img1.png" alt="McDonald´s"></img>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="linkFooter-sectionCinco">
                      <div className="animate-none">
                        <div className="linkFooterText-sectionCinco">
                          <p className="font-[800] text-[12px] leading-[1.83] text-[#3870ff]">McDonald´s</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="item-sectionCinco">
                  <a className="link-sectionCinco" href="#">
                    <div className="linkHeader-sectionCinco animate-none rounded-[9999px]">
                      <div className="linkHeaderBox-sectionCinco">
                        <div className="linkHeaderBoxIn-sectionCinco">
                          <span className="spanLogo">
                            <span className="spanLogoIn"></span>
                            <img className="imgLogo rounded-[50px]" src="/10-kfc-logo1.png" alt="KFC"></img>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="linkFooter-sectionCinco">
                      <div className="animate-none">
                        <div className="linkFooterText-sectionCinco">
                          <p className="font-[800] text-[12px] leading-[1.83] text-[#3870ff]">KFC</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="item-sectionCinco">
                  <a className="link-sectionCinco" href="#">
                    <div className="linkHeader-sectionCinco animate-none rounded-[9999px]">
                      <div className="linkHeaderBox-sectionCinco">
                        <div className="linkHeaderBoxIn-sectionCinco">
                          <span className="spanLogo">
                            <span className="spanLogoIn"></span>
                            <img className="imgLogo rounded-[50px]" src="/10-img2.png" alt="El Corral - Hamburguesa"></img>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="linkFooter-sectionCinco">
                      <div className="animate-none">
                        <div className="linkFooterText-sectionCinco">
                          <p className="font-[800] text-[12px] leading-[1.83] text-[#3870ff]">El Corral - Hamburguesa</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="item-sectionCinco">
                  <a className="link-sectionCinco" href="#">
                    <div className="linkHeader-sectionCinco animate-none rounded-[9999px]">
                      <div className="linkHeaderBox-sectionCinco">
                        <div className="linkHeaderBoxIn-sectionCinco">
                          <span className="spanLogo">
                            <span className="spanLogoIn"></span>
                            <img className="imgLogo rounded-[50px]" src="/10-frisby-logo1.png" alt="Frisby"></img>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="linkFooter-sectionCinco">
                      <div className="animate-none">
                        <div className="linkFooterText-sectionCinco">
                          <p className="font-[800] text-[12px] leading-[1.83] text-[#3870ff]">Frisby</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="item-sectionCinco">
                  <a className="link-sectionCinco" href="#">
                    <div className="linkHeader-sectionCinco animate-none rounded-[9999px]">
                      <div className="linkHeaderBox-sectionCinco">
                        <div className="linkHeaderBoxIn-sectionCinco">
                          <span className="spanLogo">
                            <span className="spanLogoIn"></span>
                            <img className="imgLogo rounded-[50px]" src="/10-img3.png" alt="Sandwich Qbano"></img>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="linkFooter-sectionCinco">
                      <div className="animate-none">
                        <div className="linkFooterText-sectionCinco">
                          <p className="font-[800] text-[12px] leading-[1.83] text-[#3870ff]">Sandwich Qbano</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="item-sectionCinco">
                  <a className="link-sectionCinco" href="#">
                    <div className="linkHeader-sectionCinco animate-none rounded-[9999px]">
                      <div className="linkHeaderBox-sectionCinco">
                        <div className="linkHeaderBoxIn-sectionCinco">
                          <span className="spanLogo">
                            <span className="spanLogoIn"></span>
                            <img className="imgLogo rounded-[50px]" src="/10-img4.png" alt="Papa Johns"></img>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="linkFooter-sectionCinco">
                      <div className="animate-none">
                        <div className="linkFooterText-sectionCinco">
                          <p className="font-[800] text-[12px] leading-[1.83] text-[#3870ff]">Papa Johns</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="item-sectionCinco">
                  <a className="link-sectionCinco" href="#">
                    <div className="linkHeader-sectionCinco animate-none rounded-[9999px]">
                      <div className="linkHeaderBox-sectionCinco">
                        <div className="linkHeaderBoxIn-sectionCinco">
                          <span className="spanLogo">
                            <span className="spanLogoIn"></span>
                            <img className="imgLogo rounded-[50px]" src="/10-presto-logo1.png" alt="Presto"></img>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="linkFooter-sectionCinco">
                      <div className="animate-none">
                        <div className="linkFooterText-sectionCinco">
                          <p className="font-[800] text-[12px] leading-[1.83] text-[#3870ff]">Presto</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="item-sectionCinco">
                  <a className="link-sectionCinco" href="#">
                    <div className="linkHeader-sectionCinco animate-none rounded-[9999px]">
                      <div className="linkHeaderBox-sectionCinco">
                        <div className="linkHeaderBoxIn-sectionCinco">
                          <span className="spanLogo">
                            <span className="spanLogoIn"></span>
                            <img className="imgLogo rounded-[50px]" src="/10-img5.png" alt="Crepes &amp; Waffles"></img>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="linkFooter-sectionCinco">
                      <div className="animate-none">
                        <div className="linkFooterText-sectionCinco">
                          <p className="font-[800] text-[12px] leading-[1.83] text-[#3870ff]">Crepes &amp; Waffles</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="item-sectionCinco">
                  <a className="link-sectionCinco" href="#">
                    <div className="linkHeader-sectionCinco animate-none rounded-[9999px]">
                      <div className="linkHeaderBox-sectionCinco">
                        <div className="linkHeaderBoxIn-sectionCinco">
                          <span className="spanLogo">
                            <span className="spanLogoIn"></span>
                            <img className="imgLogo rounded-[50px]" src="/10-sr-wok-logo1.png" alt="Sr Wok"></img>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="linkFooter-sectionCinco">
                      <div className="animate-none">
                        <div className="linkFooterText-sectionCinco">
                          <p className="font-[800] text-[12px] leading-[1.83] text-[#3870ff]">Sr Wok</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="item-sectionCinco">
                  <a className="link-sectionCinco" href="#">
                    <div className="linkHeader-sectionCinco animate-none rounded-[9999px]">
                      <div className="linkHeaderBox-sectionCinco">
                        <div className="linkHeaderBoxIn-sectionCinco">
                          <span className="spanLogo">
                            <span className="spanLogoIn"></span>
                            <img className="imgLogo rounded-[50px]" src="/10-img6.png" alt="Juan Valdez Café"></img>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="linkFooter-sectionCinco">
                      <div className="animate-none">
                        <div className="linkFooterText-sectionCinco">
                          <p className="font-[800] text-[12px] leading-[1.83] text-[#3870ff]">Juan Valdez Café</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

        {!isLoggedIn ? (
          <div id="sectionSeis" className="section-Seis">
            <h3 className="section-Seis-h3">
              <span className="mr-[10px]">👉</span>
              <span className="section-Seis-h3-span">Rappi es mejor en la App</span>
            </h3>

            <a href="https://play.google.com/store/apps/details?id=com.grability.rappi" target="_blank">
              <button className="section-Seis-btn iKLRDb bZIist primary small" data-testid="button">
                <span className="w-full flex justify-center items-center font-stretch-normal not-italic">Descargar</span>
              </button>
            </a>
          </div>
        ):(
          <></>
        )}

        {/** 
        <div id="sectionSeis" className="section-Seis">
          <h3 className="section-Seis-h3">
            <span className="mr-[10px]">👉</span>
            <span className="section-Seis-h3-span">Rappi es mejor en la App</span>
          </h3>

          <a href="https://play.google.com/store/apps/details?id=com.grability.rappi" target="_blank">
            <button className="section-Seis-btn iKLRDb bZIist primary small" data-testid="button">
              <span className="w-full flex justify-center items-center font-stretch-normal not-italic">Descargar</span>
            </button>
          </a>
        </div>
        */}

        {!isLoggedIn ? (
        <div id="sectionSiete" className="bg-white w-full">
          <div id="sectionSiete-title" className="text-center my-[38px]">
            <span className="sectionSiete-span-title">
              <h2 className="sectionSiete-span-h2">
                Únete a <strong className="highlight_primary">Rappi</strong>
              </h2>
            </span>
          </div>

          <div id="sectionSiete-containerCard">
            <div className="sectionSiete-GridCard mb-[30px]">
              <div className="sectionSiete-Card">
                <div className="sectionSiete-CardHeader">
                  <div>
                    <span className="spanLogo">
                      <span className="sectionSiete-spanLogoIn"></span>
                      <img className="sectionSiete-imgLogo" src="/10-rappi-rest.png" alt="Registra tu restaurante"></img>
                    </span>
                  </div>
                </div>

                <div className="sectionSiete-CardContent">
                  <span className="sectionSiete-span">
                    <h3 className="sectionSiete-span-h3">Registra tu restaurante</h3>
                  </span>

                  <span className="sectionSiete-spanGray">
                    <p className="sectionSiete-spanGray-p">
                      Descubre los beneficios que tienen los +40.000 aliados en 9 países que ya trabajan con Rappi.
                    </p>
                  </span>

                  <a href="#" className="sectionSiete-link">
                    <button className="sectionSiete-linkBTN">
                      <span className="w-full flex justify-center items-center font-stretch-normal not-italic">Conocer más</span>
                    </button>
                  </a>
                </div>
              </div>

              <div className="sectionSiete-Card">
                <div className="sectionSiete-CardHeader">
                  <div>
                    <span className="spanLogo">
                      <span className="sectionSiete-spanLogoIn"></span>
                      <img className="sectionSiete-imgLogo" src="/10-img-join.png" alt="Registra tu comercio"></img>
                    </span>
                  </div>
                </div>

                <div className="sectionSiete-CardContent">
                  <span className="sectionSiete-span">
                    <h3 className="sectionSiete-span-h3">Registra tu comercio</h3>
                  </span>

                  <span className="sectionSiete-spanGray">
                    <p className="sectionSiete-spanGray-p">
                      Accede a millones de usuarios de Rappi y disfrute de una logística inmediata sin salir de tu tienda.
                    </p>
                  </span>

                  <a href="#" className="sectionSiete-link">
                    <button className="sectionSiete-linkBTN">
                      <span className="w-full flex justify-center items-center font-stretch-normal not-italic">Conocer más</span>
                    </button>
                  </a>
                </div>
              </div>

              <div className="sectionSiete-Card">
                <div className="sectionSiete-CardHeader">
                  <div>
                    <span className="spanLogo">
                      <span className="sectionSiete-spanLogoIn"></span>
                      <img className="sectionSiete-imgLogo" src="/10-img-rappi.png" alt="Únete como repartidor"></img>
                    </span>
                  </div>
                </div>

                <div className="sectionSiete-CardContent">
                  <span className="sectionSiete-span">
                    <h3 className="sectionSiete-span-h3">¡Únete como repartidor!</h3>
                  </span>

                  <span className="sectionSiete-spanGray">
                    <p className="sectionSiete-spanGray-p">
                      Gana dinero extra entregando domicilios, tenemos las mejores tarifas y beneficios.
                    </p>
                  </span>

                  <a href="#" className="sectionSiete-link">
                    <button className="sectionSiete-linkBTN">
                      <span className="w-full flex justify-center items-center font-stretch-normal not-italic">¡Regístrate ahora!</span>
                    </button>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
        ) : (
          <></>
        )}

      </section>

      <footer id="sectionFooter" className="w-full bg-white absolute pt-[16px] md:pt-[40px]">
        <div className="footerContainer">
          <div className="footerContainerGrid">
            <div>
              <section className="top-brands-footer">
                <div className="top-brands-footer-title">
                  <p className="top-brands-footer-p">Top Marcas y Cadenas de Restaurantes</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="#6A696E" d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z"></path>
                  </svg>
                </div>


                <ul className="footerItem-ul">
                  <div>
                    <li className="footerItem-li">
                      <a href="#">Cadenas de Restaurantes</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Cadenas de Tiendas</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Domino´s Pizza</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">KFC</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">La Mega Hamburguesa</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Starbucks</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Subway</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Crepes & Waffles</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Papa John´s</a>
                    </li>
                  </div>
                </ul>
              </section>
            </div>

            <div>
              <section id="country-links-footer" className="top-brands-footer">
                <div className="top-brands-footer-title">
                  <p className="top-brands-footer-p">Encuéntranos en estos países</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="#6A696E" d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z"></path>
                  </svg>
                </div>


                <ul className="footerItem-ul">
                  <div>
                    <li className="footerItem-li">
                      <a href="#">Argentina</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Brasil</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Chile</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Colombia</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Costa Rica</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Ecuador</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">México</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Perú</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Uruguay</a>
                    </li>
                  </div>
                </ul>
              </section>
            </div>

            <div>
              <div className="footerDiv">
                <section id="sectionFooterBtn" className="section-footer-Btn">
                  <a href="https://apps.apple.com/co/app/rappi-pide-todo-en-minutos/id984044296" target="_blank">
                    <button className="footerBtn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="white" fillRule="evenodd" d="M14.605 5.922c.61-.758 1.074-1.829.906-2.922-.998.067-2.165.68-2.846 1.48-.621.726-1.131 1.804-.932 2.85 1.092.034 2.218-.595 2.872-1.408zM20 16.206c-.437.936-.647 1.354-1.21 2.183-.785 1.157-1.892 2.597-3.264 2.608-1.219.012-1.533-.768-3.188-.758-1.654.008-1.999.773-3.22.76-1.371-.01-2.42-1.31-3.205-2.467-2.196-3.233-2.427-7.027-1.073-9.045.964-1.433 2.483-2.271 3.91-2.271 1.454 0 2.368.77 3.571.77 1.167 0 1.878-.773 3.558-.773 1.272 0 2.62.67 3.58 1.826-3.145 1.666-2.636 6.006.541 7.167z" clipRule="evenodd"></path>
                      </svg>
                      App Store
                    </button>
                  </a>

                  <a href="https://play.google.com/store/apps/details?id=com.grability.rappi" target="_blank">
                    <button className="footerBtn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="white" fillRule="evenodd" d="M2.653 22.965C2.257 22.86 2 22.472 2 21.872V2.067c0-.556.218-.93.563-1.067l9.853 11.037-9.763 10.928zm1.356-.42l11.86-6.64-2.889-3.236-8.971 9.876zM15.95 8.082L4.256 1.532l8.741 9.855 2.954-3.305zm.794.444l4.581 2.565c.868.486.876 1.269 0 1.76l-4.697 2.629-3.064-3.454 3.18-3.5z" clipRule="evenodd"></path>
                      </svg>
                      Google Play
                    </button>
                  </a>

                  <a href="https://appgallery.huawei.com/app/C107159007" target="_blank">
                    <button className="footerBtn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 30 30">
                        <path d="M13.3392 16.2334H12.2159L12.7756 14.9273L13.3392 16.2334Z" fill="white"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.8863 0H20.1251C25.898 0 28 2.10199 28 7.87488V20.1137C28 25.8866 25.8866 28 20.1251 28H7.8863C2.11342 28 0 25.8866 0 20.1137V7.87488C0 2.10199 2.11342 0 7.8863 0ZM11.6104 17.65L11.9493 16.896H13.6172L13.9447 17.65H14.7215L13.1145 13.9943H12.4634L10.8564 17.65H11.6104ZM24.885 13.9943H24.1424V17.65H24.885V13.9943ZM23.2666 16.9874H21.2293V16.0849H22.5812V15.4109H21.2293V14.6683H23.1866V13.9943H20.4982V17.65H23.2666V16.9874ZM19.9003 13.9943H19.1235L18.3162 16.5152L17.4823 13.9943H16.873L16.0505 16.5152L15.2394 13.9943H14.4397L15.723 17.6614H16.3323L17.1662 15.2547L18.0002 17.6614H18.6285L19.9003 13.9943ZM10.4756 13.9943H9.73307V16.0925C9.73307 16.6865 9.43986 17.014 8.89912 17.014C8.35839 17.014 8.06518 16.6865 8.06518 16.0696V13.9981H7.32263V16.0887C7.32263 17.1207 7.89763 17.7185 8.8877 17.7185C9.90062 17.7185 10.4756 17.113 10.4756 16.0658V13.9943ZM6.29066 13.9943H5.54811V15.468H3.87261V13.9943H3.13005V17.6614H3.87261V16.1648H5.54811V17.6614H6.29066V13.9943ZM9.34846 4.68001C9.34846 7.24658 11.4276 9.33716 14.0056 9.33716C16.5722 9.33716 18.6628 7.24277 18.6628 4.68001H18.0116C18.0116 6.88482 16.2104 8.67457 14.0056 8.67457C11.8008 8.67457 9.99963 6.88482 9.99963 4.68001H9.34846Z" fill="white"></path>
                      </svg>
                      AppGallery
                    </button>
                  </a>
                </section>
              </div>

              <section id="favorite-food-near-you" className="top-brands-footer">
                <div className="top-brands-footer-title">
                  <p className="top-brands-footer-p">Pide tu comida favorita cerca de ti</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="#6A696E" d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z"></path>
                  </svg>
                </div>


                <ul className="footerItem-ul">
                  <div>
                    <li className="footerItem-li">
                      <a href="#">Hamburguesa cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Pollo cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Pizza cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Café cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Sushi cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Comida Mexicana cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Postres cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Comida Saludable cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Comida Italiana cerca de mi</a>
                    </li>
                  </div>
                </ul>
              </section>
            </div>

            <div>
              <section id="category-selector" className="top-brands-footer">
                <div className="top-brands-footer-title">
                  <p className="top-brands-footer-p">Categorías</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="#6A696E" d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z"></path>
                  </svg>
                </div>


                <ul className="footerItem-ul">
                  <div>
                    <li className="footerItem-li">
                      <a href="#">Catálogo Productos</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Promociones y Ofertas</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Restaurantes</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Mercados cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Farmacia cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Express cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Tiendas cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Licores cerca de mi</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Rappi Travel</a>
                    </li>
                  </div>
                </ul>
              </section>
            </div>

            <div>
              <section id="join-rappi" className="top-brands-footer">
                <div className="top-brands-footer-title">
                  <p className="top-brands-footer-p">Únete a Rappi</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="#6A696E" d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z"></path>
                  </svg>
                </div>


                <ul className="footerItem-ul">
                  <div>
                    <li className="footerItem-li">
                      <a href="#">Registra tu restaurante</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Trabaja con nosotros</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Registra tu tienda</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Posiciones disponibles</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Quiero ser Rappitendero</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Haz crecer tu marca</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Incrementa tus ventas con</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Pide por Rappi</a>
                    </li>
                  </div>
                </ul>
              </section>
            </div>

            <div>
              <section id="about-rappi" className="top-brands-footer">
                <div className="top-brands-footer-title">
                  <p className="top-brands-footer-p">Sobre Rappi</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="#6A696E" d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z"></path>
                  </svg>
                </div>


                <ul className="footerItem-ul">
                  <div>
                    <li className="footerItem-li">
                      <a href="#">Blog</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Derecho de retracto</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">SIC</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Términos y Condiciones</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Rappi Card</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Políticas de Privacidad</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">Tratamiento de Datos</a>
                    </li>

                    <li className="footerItem-li">
                      <a href="#">PQRs</a>
                    </li>
                  </div>
                </ul>
              </section>
            </div>

          </div>

          <section className="sections-social-media-links">
            <section className="social-media-icon">
              <a id="facebook-link" href="https://www.facebook.com/RappiColombia/" target="_blank" rel="noreferrer">
                <span className="social-media-span">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="#6A696E" fillRule="evenodd" d="M12.82 24H1.324A1.325 1.325 0 010 22.675V1.325C0 .593.593 0 1.325 0h21.35C23.407 0 24 .593 24 1.325v21.35c0 .732-.593 1.325-1.325 1.325H16.56v-9.294h3.12l.466-3.622H16.56V8.77c0-1.048.29-1.763 1.795-1.763h1.918v-3.24c-.332-.045-1.47-.143-2.795-.143-2.766 0-4.659 1.688-4.659 4.788v2.67H9.692v3.623h3.127V24z" clipRule="evenodd"></path>
                </svg>
              </a>

              <a id="twitter-link" href="https://twitter.com/rappicolombia?lang=es" target="_blank" rel="noreferrer">
                <span className="social-media-span">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="#6A696E" fillRule="evenodd" d="M23.338 2.383a9.455 9.455 0 01-3.129 1.268C19.313 2.635 18.033 2 16.615 2c-2.717 0-4.922 2.343-4.922 5.232 0 .41.043.809.127 1.192-4.092-.219-7.72-2.3-10.15-5.469a5.483 5.483 0 00-.666 2.634c0 1.814.87 3.416 2.191 4.354a4.706 4.706 0 01-2.232-.652v.064c0 2.536 1.698 4.652 3.952 5.13a4.5 4.5 0 01-1.298.185c-.317 0-.626-.031-.926-.093.626 2.078 2.444 3.592 4.599 3.632-1.685 1.404-3.81 2.241-6.115 2.241-.398 0-.79-.024-1.175-.072 2.179 1.483 4.768 2.35 7.548 2.35 9.058 0 14.01-7.973 14.01-14.888 0-.228-.005-.455-.013-.678A10.34 10.34 0 0024 4.454a9.37 9.37 0 01-2.827.823 5.196 5.196 0 002.165-2.894z" clipRule="evenodd"></path>
                </svg>
              </a>

              <a id="instagram-link" href="https://www.instagram.com/rappicolombia/?hl=es" target="_blank" rel="noreferrer">
                <span className="social-media-span">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="#6A696E" fillRule="evenodd" d="M21.147 0H2.853A2.85 2.85 0 000 2.846v18.308A2.85 2.85 0 002.853 24h18.294A2.85 2.85 0 0024 21.154V2.846A2.85 2.85 0 0021.147 0zM17.25 3.75A.75.75 0 0118 3h2.25a.75.75 0 01.75.75V6a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V3.75zm-5.222 3.673a4.61 4.61 0 014.615 4.605 4.61 4.61 0 01-4.615 4.604c-2.549 0-4.615-2.061-4.615-4.604s2.066-4.605 4.615-4.605zM21.75 21a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75V9.75h3c-.39.562-.523 1.611-.523 2.278 0 4.016 3.276 7.284 7.3 7.284 4.027 0 7.302-3.268 7.302-7.284 0-.667-.095-1.7-.579-2.278h3V21z" clipRule="evenodd"></path>
                </svg>
              </a>
            </section>

            <img className="heart-hands" src="/10-heart-hands.png" alt="A heart for you" width="375" height="308"></img>

            <section className="section-hidden-btn">
              <a href="https://apps.apple.com/co/app/rappi/id984044296" target="_blank" rel="noreferrer" id="app-store-link">
                <span className="social-media-span">App Store</span>
                <button className="section-hiddenBTN">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="white" fillRule="evenodd" d="M14.605 5.922c.61-.758 1.074-1.829.906-2.922-.998.067-2.165.68-2.846 1.48-.621.726-1.131 1.804-.932 2.85 1.092.034 2.218-.595 2.872-1.408zM20 16.206c-.437.936-.647 1.354-1.21 2.183-.785 1.157-1.892 2.597-3.264 2.608-1.219.012-1.533-.768-3.188-.758-1.654.008-1.999.773-3.22.76-1.371-.01-2.42-1.31-3.205-2.467-2.196-3.233-2.427-7.027-1.073-9.045.964-1.433 2.483-2.271 3.91-2.271 1.454 0 2.368.77 3.571.77 1.167 0 1.878-.773 3.558-.773 1.272 0 2.62.67 3.58 1.826-3.145 1.666-2.636 6.006.541 7.167z" clipRule="evenodd"></path>
                  </svg>
                  App Store
                </button>
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.grability.rappi" target="_blank" rel="noreferrer" id="google-play-link">
                <span className="social-media-span">Play Store</span>
                <button className="section-hiddenBTN">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="white" fillRule="evenodd" d="M2.653 22.965C2.257 22.86 2 22.472 2 21.872V2.067c0-.556.218-.93.563-1.067l9.853 11.037-9.763 10.928zm1.356-.42l11.86-6.64-2.889-3.236-8.971 9.876zM15.95 8.082L4.256 1.532l8.741 9.855 2.954-3.305zm.794.444l4.581 2.565c.868.486.876 1.269 0 1.76l-4.697 2.629-3.064-3.454 3.18-3.5z" clipRule="evenodd"></path>
                  </svg>
                  Google play
                </button>
              </a>

              <a href="https://appgallery.huawei.com/app/C107159007" target="_blank" rel="noreferrer" id="huawei-store-link">
                <span className="social-media-span">AppGallery</span>
                <button className="section-hiddenBTN">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 30 30">
                    <path d="M13.3392 16.2334H12.2159L12.7756 14.9273L13.3392 16.2334Z" fill="white"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.8863 0H20.1251C25.898 0 28 2.10199 28 7.87488V20.1137C28 25.8866 25.8866 28 20.1251 28H7.8863C2.11342 28 0 25.8866 0 20.1137V7.87488C0 2.10199 2.11342 0 7.8863 0ZM11.6104 17.65L11.9493 16.896H13.6172L13.9447 17.65H14.7215L13.1145 13.9943H12.4634L10.8564 17.65H11.6104ZM24.885 13.9943H24.1424V17.65H24.885V13.9943ZM23.2666 16.9874H21.2293V16.0849H22.5812V15.4109H21.2293V14.6683H23.1866V13.9943H20.4982V17.65H23.2666V16.9874ZM19.9003 13.9943H19.1235L18.3162 16.5152L17.4823 13.9943H16.873L16.0505 16.5152L15.2394 13.9943H14.4397L15.723 17.6614H16.3323L17.1662 15.2547L18.0002 17.6614H18.6285L19.9003 13.9943ZM10.4756 13.9943H9.73307V16.0925C9.73307 16.6865 9.43986 17.014 8.89912 17.014C8.35839 17.014 8.06518 16.6865 8.06518 16.0696V13.9981H7.32263V16.0887C7.32263 17.1207 7.89763 17.7185 8.8877 17.7185C9.90062 17.7185 10.4756 17.113 10.4756 16.0658V13.9943ZM6.29066 13.9943H5.54811V15.468H3.87261V13.9943H3.13005V17.6614H3.87261V16.1648H5.54811V17.6614H6.29066V13.9943ZM9.34846 4.68001C9.34846 7.24658 11.4276 9.33716 14.0056 9.33716C16.5722 9.33716 18.6628 7.24277 18.6628 4.68001H18.0116C18.0116 6.88482 16.2104 8.67457 14.0056 8.67457C11.8008 8.67457 9.99963 6.88482 9.99963 4.68001H9.34846Z" fill="white"></path>
                  </svg>
                  AppGallery
                </button>
              </a>
            </section>

            <section className="section-copyRights">
              <p>© 2025 Rappi Inc. All rights reserved.</p>
            </section>

          </section>

          <div className="section-nit">
            <div className="section-nit-text">
              <span data-testid="typography" className="section-nit-span">Rappi S.A.S. --- NIT 900.843.898-9 --- Calle 63 # 16A-02 Bogotá D.C. --- notificacionesrappi@rappi.com</span>
            </div>
          </div>

        </div>
      </footer>

    </>
  );
}
