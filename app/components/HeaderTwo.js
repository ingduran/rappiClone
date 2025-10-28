"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, logout } from "../config/firebase";
import Image from 'next/image';

export default function HeaderTwo(props) {

    const handleClick = () => {
        alert("¡Botón clickeado!");
    };

    const router = useRouter();

    const handleLogout = async () => {
        //await signOut(auth);
        await logout(); // Cierra sesión en Firebase
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        router.push("/");
    };

    useEffect(() => {
        const boton = document.querySelector('.btn-basket');
        const sidebar = document.querySelector('.SidebarCoreBoxContainer');

        boton.addEventListener('click',() => {
        // Cambiar clase directamente con JavaScript
        sidebar.classList.remove('SidebarCoreBoxContainer');
        sidebar.classList.add('SidebarCoreBoxContainer-visible');    
        });

        // Limpieza al desmontar (buena práctica)
        return () => boton.removeEventListener("click", () => {});
    }, []);


    const [visible, setVisible] = useState(false);

    const toggleDiv = () => {
        setVisible(!visible);
    };

    //console.log(props.isLoggedIn);
    //console.log(props.datos.email);
    //console.log(props.datos.photoURL);
    //console.log(props.datos.email);
    //console.log(props.datos);

    return (
        <header className="header-container">
            <div className="area-izq">
                <div className="burger-menu relative cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="#6A696E" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
                    </svg>
                </div>


                <a className="rappi-logo" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 72 31" className="rappiIcon">
                        <path fill="#ff441f" d="M58.554 7.052c.7-.017 1.382.228 1.91.688a3.6 3.6 0 0 1 1.077 1.874 7.91 7.91 0 0 1 .121 2.786c-.16 1.232-.466 2.441-.915 3.6-.412 1.14-.94 2.235-1.577 
                        3.266l-.868 1.256c-.015.022-.014.051.003.071s.046.026.07.014l.503-.306c.387-.252.76-.524 1.117-.816.97-.798 1.671-1.873 2.012-3.08l.681-2.16 1.292-3.25a22.49 22.49 0 0 1 
                        1.107-2.185c.29-.508.785-.869 1.358-.99.504-.115 1.029-.107 1.529.023a2.31 2.31 0 0 1 1.177.721c.32.337.4.836.201 1.256l-.445 1.028-.815 1.904-.915 2.319c-.278.728-.512 1.472-.7 
                        2.228a5.32 5.32 0 0 0-.185 1.623c.032.402.186.402.266.402.244-.031.47-.144.641-.32.341-.286.664-.594.966-.921a13.07 13.07 0 0 0 .956-1.146l.694-.965a.86.86 0 0 1 .719-.374c.301 0 
                        .583.149.754.397l-.045.015a.69.69 0 0 1-.012.771l-1.077 1.628a22.94 22.94 0 0 1-1.843 2.36c-.697.791-1.477 1.506-2.326 2.132-.746.594-1.665.931-2.618.962-.782 
                        0-1.363-.271-1.733-.811-.36-.59-.536-1.274-.503-1.965v-.128c.002-.045-.023-.086-.063-.106s-.088-.013-.123.016l-.503.394c-1.07.793-2.241 1.439-3.483 1.922-1.21.47-2.497.704-3.794.693-.181 
                        0-.367-.012-.553-.012-.926-.003-1.613-.297-2.043-.872a3.16 3.16 0 0 1-.208-.314c-.022-.04-.067-.064-.113-.058s-.084.038-.096.083l-.395 1.354-.689 2.465-.503 1.974-.281 1.354v.013a1.12 1.12 
                        0 0 1-.893.942c-.154.034-.31.05-.468.05a2.71 2.71 0 0 1-.9-.166c-.485-.179-.917-.476-1.258-.864a2.26 2.26 0 0 1-.57-1.565c.047-.477.14-.948.276-1.407l.73-2.763.699-2.387c.016-.046 
                        0-.098-.04-.127s-.094-.03-.134 0c-.943.642-1.955 1.177-3.018 1.594-1.209.47-2.497.705-3.794.694-.181 0-.367-.013-.553-.013-.926-.002-1.612-.296-2.042-.872a3.18 3.18 0 0 
                        1-.21-.314c-.021-.04-.066-.063-.112-.058s-.084.039-.096.083l-.395 1.355-.689 2.464-.515 1.977-.282 1.354v.013a1.12 1.12 0 0 1-.893.942 2.13 2.13 0 0 1-.465.05 2.71 2.71 0 0 
                        1-.9-.166c-.485-.179-.917-.476-1.258-.864a2.26 2.26 0 0 1-.57-1.565c.047-.477.14-.948.276-1.407l.73-2.763.598-2.058c.015-.049-.004-.102-.048-.13s-.1-.02-.138.015c-.373.344-.764.669-1.172.972-.734.597-1.644.938-2.59.972-.78 
                        0-1.363-.271-1.733-.811-.155-.232-.273-.486-.35-.754a.34.34 0 0 0-.575-.138c-.255.267-.534.51-.835.723a5.87 5.87 0 0 1-1.298.694 4.35 4.35 0 0 
                        1-1.564.279c-.709.013-1.398-.229-1.944-.681-.565-.484-.976-1.122-1.182-1.837-.249-.906-.334-1.85-.251-2.786.096-1.221.341-2.427.73-3.59.88-2.705 1.998-4.68 3.407-5.96s2.839-1.933 4.25-1.933c.526-.02 
                        1.048.105 1.508.36a2.38 2.38 0 0 1 .898.926 3.11 3.11 0 0 1 .297.82c.006.022.025.039.048.042a.06.06 0 0 0 .058-.027l.203-.35c.286-.503.772-.862 1.338-.987.504-.116 1.028-.109 1.529.02.465.112.884.365 
                        1.2.724.32.337.4.836.2 1.256l-.444 1.027-.82 1.907-.916 2.319a19.24 19.24 0 0 0-.699 2.228c-.145.528-.208 1.076-.186 1.623.033.402.186.402.267.402.244-.031.47-.144.641-.32l.546-.502c.705-.672 1.232-1.509 
                        1.536-2.434l1.35-3.73 1.444-3.432c.211-.487.621-.86 1.127-1.025.464-.155.96-.189 1.44-.098a2.73 2.73 0 0 1 1.245.57 1.7 1.7 0 0 1 .37.41c.025.027.053.032.088 0 .419-.39.872-.74 1.353-1.048.72-.46 1.558-.698 
                        2.412-.688a2.81 2.81 0 0 1 1.91.688c.541.5.915 1.155 1.072 1.874.205.914.246 1.858.12 2.786-.159 1.232-.466 2.441-.915 3.6a17.58 17.58 0 0 1-1.576 3.266l-.865 1.256c-.016.022-.015.051.003.071s.046.026.07.014l.502-.306.788-.568a6.15 
                        6.15 0 0 0 2.09-2.934l.15-.455 1.439-3.994 1.443-3.432c.211-.487.621-.86 1.127-1.025.464-.155.96-.189 1.44-.098a2.74 2.74 0 0 1 1.245.57 1.75 1.75 0 0 1 .383.423c.025.027.053.032.088 0a9.46 9.46 0 0 1 1.353-1.048 4.38 4.38 0 0 1 
                        2.409-.688zM11.72.62a13.83 13.83 0 0 1 3.198.371 9.9 9.9 0 0 1 2.834 1.126 6.61 6.61 0 0 1 2.047 1.881c.535.776.813 1.7.797 2.64.009 1.037-.23 2.06-.699 2.985a8.66 8.66 0 0 1-1.88 2.447 12.35 12.35 0 0 1-2.752 1.88 18.12 18.12 0 0 
                        1-2.728 1.107c-.026.004-.049.019-.064.04s-.021.047-.017.073l.1 1.392.212 1.507.307 1.362.302.972.216.573a10.77 10.77 0 0 0 .493 1.035 9.21 9.21 0 0 0 .55.9c.186.263.388.515.607.753a6.56 6.56 0 0 0 .651.618c.216.178.446.34.686.485a5.36 5.36 0 0 0 
                        .717.354c.245.097.497.174.755.23a4.83 4.83 0 0 0 .777.111c.27.02.54.02.81 0 .284-.024.566-.07.844-.135.298-.07.59-.16.875-.269a7.96 7.96 0 0 0 .903-.407l.345-.188c.373-.217.85-.114 1.1.236s.196.834-.13 1.118l-.477.404-1.145.867-1.078.68-.559.302c-.36.183-.73.347-1.109.49a9.34 9.34 0 0 
                        1-1.099.334 8.09 8.09 0 0 1-1.07.186l-.755.038h-.297c-.338-.015-.674-.055-1.006-.12l-.488-.116-.473-.154a6.29 6.29 0 0 1-.897-.407 6.76 6.76 0 0 1-.83-.537 7.5 7.5 0 0 
                        1-.626-.528c-.248-.236-.48-.488-.697-.754-.224-.27-.432-.554-.623-.849l-.551-.947-.478-1.04-.402-1.128-.33-1.21-.251-1.292-.156-1.198c-.002-.057-.046-.104-.103-.11s-.11.034-.121.09H7.95l-.402 1.542-.43 1.698-.252 1.186c-.082.498-.48.883-.98.95-.502.088-1.017.045-1.497-.126-.516-.172-.985-.463-1.368-.849-.421-.415-.653-.986-.639-1.578.047-.829.177-1.65.388-2.454.251-1.115.623-2.442 
                        1.096-3.937l1.69-4.86 1.87-4.485c.224-.486.686-.82 1.218-.882 1.043-.146 2.103-.11 3.133.103a.88.88 0 0 1 .582.462.87.87 0 0 1 .014.742l-1.566 3.783-1.09 2.957c-.015.043-.003.092.031.123s.084.038.126.018a11.35 11.35 0 0 0 1.355-.754c.725-.465 1.386-1.021 1.967-1.656.57-.625 1.04-1.334 1.393-2.102.354-.774.536-1.616.533-2.467 0-1.128-.312-1.96-.928-2.475s-1.504-.791-2.623-.791a6.29 6.29 0 0 0-3.209.831 9.59 9.59 0 0 0-2.502 2.07c-.668.774-1.214 1.645-1.62 2.583-.34.73-.534 1.521-.57 2.326a.94.94 0 0 1-.694.95 1.9 1.9 0 0 1-1.258-.058 2.71 2.71 0 0 1-1.176-.932c-.38-.541-.57-1.193-.539-1.854 0-.673.252-1.467.78-2.424.584-1.024 1.34-1.939 2.238-2.703a13.34 13.34 0 0 1 3.67-2.211 13 13 0 0 1 5.028-.923zm30.728 9.42l-.024.003a.7.7 0 0 0-.367.168c-.351.271-.665.588-.933.942a13.83 13.83 0 0 0-1.086 1.62 18.56 18.56 0 0 0-1.056 2.123 21.5 21.5 0 0 0-.803 2.241c-.194.635-.351 1.281-.47 1.934a4.68 4.68 0 0 0-.075 1.367c.05.384.168.465.203.48.017.004.034.004.05 0a.7.7 0 0 0 .368-.166c.353-.273.666-.594.93-.954a13.89 13.89 0 0 0 1.07-1.636l1.078-2.133a22.12 22.12 0 0 0 .81-2.233 17.74 17.74 0 0 0 .47-1.92l-.01-.004c.092-.444.117-.898.075-1.35-.052-.381-.17-.464-.206-.48-.016-.003-.032-.003-.048 0l.024-.002zm14.276-.002l-.024.002a.72.72 0 0 0-.367.168c-.349.27-.66.584-.925.935a13.67 13.67 0 0 0-1.087 1.62 18.82 18.82 0 0 0-1.053 2.143 21.39 21.39 0 0 0-.812 2.231c-.195.635-.352 1.28-.47 1.934a4.58 4.58 0 0 0-.076 1.367c.05.384.168.465.204.48.016.004.033.004.05 0a.7.7 0 0 0 .367-.166 4.83 4.83 0 0 0 .93-.954c.395-.52.75-1.066 1.067-1.636l1.081-2.133c.307-.73.574-1.478.8-2.238.192-.63.35-1.271.47-1.92a4.61 4.61 0 0 0 .073-1.351c-.05-.382-.169-.465-.204-.48-.015-.003-.032-.003-.048 0l.024-.002zM26.878 9.97l-.022.002c-.13.019-.25.076-.345.164a4.36 4.36 0 0 0-.872.952c-.366.518-.69 1.064-.971 1.633-.325.643-.644 1.361-.946 2.133-.287.725-.527 1.468-.716 2.225a12.88 12.88 0 0 0-.337 1.91 5.56 5.56 0 0 0 .017 1.364c.066.387.189.472.224.487.016.003.032.003.048 0 .129-.018.249-.075.344-.163.335-.27.63-.585.875-.937.368-.51.692-1.05.971-1.613.33-.653.646-1.38.946-2.133a18.14 18.14 0 0 0 .716-2.226 14.73 14.73 0 0 0 .352-1.922 4.47 4.47 0 0 0-.01-1.371c-.085-.4-.213-.485-.251-.503-.015-.003-.03-.003-.045 0l.022-.002zM68.811 0A3.19 3.19 0 0 1 72 3.185a3.19 3.19 0 0 1-3.189 3.186 3.19 3.19 0 0 1-3.188-3.186C65.623 1.426 67.05 0 68.81 0z"></path>
                    </svg>
                </a>

            </div>

            <div className="address-container area-address">
                <div className="area-center">
                    <div className="area-city-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-[4px] icon1">
                            <path fill="#6A696E" d="M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                        </svg>

                        <div className="address-text">
                            <span className="address-location">Valledupar</span>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="ml-[4px] icon2">
                            <path fill="#6A696E" d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="area-der">
                <div className="right-menu">
                    <div id="temp" className="refOne">
                        <div className="style-search">
                            <form className="style-form">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 56 18" className="style-bigotes">
                                    <path fill="#FF441F" fillRule="evenodd" d="M46.572 5.84c3.14 2.244 5.752 2.084 8.7-.42.244-.204.484-.413.728-.618-.438 2.36-1.385 4.469-2.78 6.389-1.781 2.443-4.118 4.204-7.05 5.161-6.858 2.254-15.518-.883-18.17-6.802-2.652 5.92-11.312 9.056-18.17 6.802-2.932-.957-5.269-2.718-7.05-5.161C1.385 9.27.433 7.16 0 4.802c.24.205.484.414.728.619 2.943 2.503 5.56 2.663 8.695.419 1.441-1.033 2.734-2.26 4.18-3.282 1.12-.793 2.311-1.58 3.584-2.07 2.21-.847 4.46-.563 6.47.629 1.375.813 2.622 1.82 3.895 2.778.178.134.31.204.448.2.132.004.265-.066.443-.2 1.273-.958 2.525-1.965 3.894-2.778 2.021-1.192 4.261-1.476 6.476-.628 1.278.488 2.459 1.276 3.579 2.07 1.446 1.022 2.739 2.248 4.18 3.28z" clipRule="evenodd"></path>
                                </svg>

                                <div className="w-full relative">
                                    <input width="100%" type="search" placeholder="Comida, restaurantes, tiendas, productos,..." data-qa="input" id="input" autoComplete="off" aria-label="Comida, restaurantes, tiendas, productos,..." role="searchbox" className="styleInput"></input>
                                </div>
                            </form>

                            <a role="button" className="icon-search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="#6A696E" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>


                {/* 👤 Login o Perfil, según estado */}
                {!props.isLoggedIn ? (
                    <Link href="/login" className="style-login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="#6A696E" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z"></path>
                        </svg>
                        <span className="hidden lg:block">Ingreso</span>
                    </Link>
                ) : (
                <div className="relative">
                    <div data-qa="user-icon" className="UserIcon" onClick={toggleDiv}>
                        
                        {/** 
                         **/}
                        {props.datos.photoURL ? (
                        <Image
                            src={props.datos.photoURL}
                            alt={props.datos.displayName}
                            width={36}
                            height={36}
                            className="rounded-full"
                        />
                        ) : (
                        <span className="UserIconSpan">
                            {props.datos.displayName?.charAt(0) || "?"}
                        </span>
                        )}
                        
                        {/** 
                         * 
                        <span data-testid="typography" className="UserIconSpan">J</span>
                        */}

                    </div>
                    
                    {visible && (
                       <div className="Toolbarstyles__OptionsContainer">
                            <p className="Toolbarstyles__OptionsContainer_items">👋 </p>
                            <a href="/account/profile" className="Toolbarstyles__OptionsContainer_items">Mi cuenta</a>
                            <a href="/account/orders" className="Toolbarstyles__OptionsContainer_items">Mis pedidos</a>
                            <span className="Toolbarstyles__OptionsContainer_items" onClick={handleLogout} style={{ cursor: "pointer" }}>
                                Cerrar sesión
                            </span>
                        </div> 
                    )}

                    {/** 
                    <div className="Toolbarstyles__OptionsContainer">
                        <p className="Toolbarstyles__OptionsContainer_items">👋 </p>
                        <a href="/account/profile" className="Toolbarstyles__OptionsContainer_items">Mi cuenta</a>
                        <a href="/account/orders" className="Toolbarstyles__OptionsContainer_items">Mis pedidos</a>
                        <span className="Toolbarstyles__OptionsContainer_items" onClick={handleLogout} style={{ cursor: "pointer" }}>
                            Cerrar sesión
                        </span>
                    </div>
                    */}

                </div>
                )}

                {/** 
                <Link href="/login" className="style-login">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="#6A696E" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z"></path>
                    </svg>
                    <span className="hidden lg:block">Ingreso</span>
                </Link>


                <div className=" relative">
                    <div data-qa="user-icon" className="UserIcon">
                        <span data-testid="typography" className="UserIconSpan">J</span>
                    </div>

                    <div className="Toolbarstyles__OptionsContainer">
                        <a color="graya80" data-testid="typography" href="/account/profile" className="Toolbarstyles__OptionsContainer_items">Mi cuenta</a>
                        <a color="graya80" data-testid="typography" href="/account/orders" className="Toolbarstyles__OptionsContainer_items">Mis pedidos</a>
                        <span onClick={handleLogout} className="Toolbarstyles__OptionsContainer_items">Cerrar sesión</span>
                    </div>
                </div>
                */}

                <div className="basket-button">
                    <div className="basket-button-container">
                        <button className="btn-basket">
                            <span className="styleSpan">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="shopping-card-icon">
                                    <path fill="#6a696e" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.67-1.43a.993.993 0 00-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}