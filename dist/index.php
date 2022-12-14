<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/assets/favicon.bea834af.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Universo Arche</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&family=Raleway&display=swap" rel="stylesheet">
    
    <!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <script type="module" crossorigin src="/assets/index.435e084b.js"></script>
    <link rel="stylesheet" href="/assets/index.52eceb5e.css">
  </head>
  <body>

    <canvas id="bg"></canvas>   

    <main id="templateViewId">
      <div id="home"></div>
      <div id="mainModal" class="flex-wrap flex-align-start flex-justify-between w-100"
            style="position: fixed;z-index: 999; background: #000000cc;"
      >
        <div class="flex-1" style=" border-bottom: 1px solid white;">
          <a href="/" >
            <img src="data:image/png;base64,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" alt="" style="height: 40px; margin: 9px 0" class="show-xs_md">
            <img src="data:image/png;base64,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" alt="" style="height: 62px" class="show-md_x">
          </a>
        </div>
        
        <div class="flex" style="border-bottom: 1px solid white; ">
          <a href="https://api.whatsapp.com/send?phone=+5804166954150" class="aLink block pa-4" target="_blank">
            <i style="text-shadow: 1px 1px 5px #96D249; color: #96D249"  class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/universoarche/" class="aLink block pa-4" target="_blank">
            <i style="text-shadow: 1px 1px 3px #FC008F, -1px -1px 3px #F7B433" class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@universoarche" target="_blank" class="aLink block pa-4">
            <i style="text-shadow: 2px 2px #F20850, -2px -1px #5AC4C8" class="fa-brands fa-tiktok"></i>
          </a>
          <a href="#porti" class="aLink block pa-4 show-md_x">
            ??Qu?? hacemos por ti?
          </a>
          <div style="display: block; padding: 20px; cursor: pointer;" class="aLink" id="mainMenuModal">
            <i class="fa fa-bars"></i>
          </div>
        </div>
        <div id="mainMenuContent" class="displayNone w-100">
          <div class="flex-justify-between w-100">
            <p></p>
            <a href="/" > <img src="data:image/png;base64,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" alt="" style="height: 40px" > </a>

            <div class="flex-column flex-align-start">

              <a href="#somos" class="modalLinkButton aLink block pa-4">
                ??Qui??nes Somos?
              </a>
              <a href="#sede" class="modalLinkButton aLink block pa-4 show-xs_md">
                Nuestra Sede
              </a>
              <a href="#porti" class="modalLinkButton aLink block pa-4">
                ??Qu?? hacemos por ti?
              </a>
              <a href="#archenautas" class="modalLinkButton aLink block pa-4">
                Archenautas
              </a>
            </div>
            <p></p>
          </div>
        </div>
      </div>


      <div class="hidden block grid-column-12" style="height: 3800px;">  </div>


      <section class="textCard border-r-25 pa-8" style="background: #020226;" id="who-we"> </section>


      <div class="hidden block grid-column-12" style="height: 1000px;">  </div>


      <blockquote class="forTitles" style="background: transparent;">
        <p style="line-height: 1.5em; padding: 10px; font-size: 3em; background: transparent; color: white; text-shadow: 0 0 25px #ffffff77">
            Este proyecto despeg?? un <br> 03 de julio de 2017
        </p>
      </blockquote>


      <!-- <div class="hidden block grid-column-12 show-xl_lg" style="height: 500px;">  </div> -->
      <div class="hidden block grid-column-12 show-xs_sm" style="height: 500px;">  </div>
      <div class="hidden block grid-column-12 " style="height: 900px;"> </div>
      

      <section class="light left textCard border-r-25 pa-8" style="background: #020226;" id="where-we"> </section>


      <div class="hidden block grid-column-12" style="height: 1500px;"> . <div style="transform: translateY(200px)" id="porti"></div> </div>

      <section style="background: #020226;" class="right textCard mb-0 pa-8 border-r-25" id="ourwork-1"> </section>
      <section style="background: #020226;" class="right textCard pos-relative pa-8 mt-8 border-r-25" id="ourwork-2"> </section>


      <!-- <div class="hidden block grid-column-12 show-xs_sm" style="height: 500px;">  </div> -->

      <div class="hidden block grid-column-12 show-xl_x" style="height: 600px;"> . </div>

      <div class="hidden block grid-column-12" style="height: 1700px;">  </div>
      <section class="light wide" style="background: #020226;" >
        <div class="flex-column-r flex-lg2x-row   pb-8 " style="justify-content: center; align-items: center;">
          <input data-watch="testfield" type="text" style="display:none" />
          
          <div class="flex-wrap  flex-1" data-for-click="updatePerson" data-items="people" style="max-width: 700px"> 
            <div data-args="0" class="clickable pa-1 opacity-hover-75">
              name
            </div>
        </div>
        <div class="flex-column flex-1 personbox-wrapper" >
          <div data-ref="selectedperson" style="line-height: 1" class="personbox pos-relative">
            <div id="person_img" style="min-height: 200px;"></div>
            <div class="personinfo">

              <div class="flex-justify-start"  style="background: transparent; transform: translateY(-97%) ">
                <div style="background: #000014; clip-path: polygon(90% 0%, 100% 100%, 0 100%, 0 0);"  class=" pa-4 px-6 tx-lg tx-ls-3 ">ARCHENAUTA</div>
              </div>

              <div class="w-100 ">
                <div class="    flex-align-start flex-justify-between flex-between flex-column flex-md2x-row pa-6 pt-0">
                  <div style="border-left: 1px solid #94D048; font-size: 1.8em;" id="person_name"  class=" pl-2">?</div>
                  <div style="width: 200px" class="person_group show-xs_sm mr-5   ">?</div>
                  <div style="width: 200px; margin: auto" class="person_group show-sm_x     ">?</div>
                </div>

                <div class="flex flex-md2x-row flex-justify-between  tx-lg pa-6 pt-0">
                  <div class="flex-column flex-align-start flex-1 ">
                    <div class="flex-start ">
                      <div style="color: #94D048">CARGO</div>
                      <div class="mt-0  " id="person_job"></div>
                    </div>
                    <div class="flex-start mt-3">
                      <div style="color: #94D048">ANTIGUEDAD</div>
                      <div id="person_joblength"></div>
                    </div>
                  </div>
                  <div class="flex-column flex-justify-between">
                    <div class="flex-xs2md-column flex-md2x-between flex-1 tx-xs flex-1 w-100" style="align-items: stretch">
                      <div id="person_Creatividad" style="min-width:120px" class=" flex-1 tx-ls-1 "></div>
                      <div id="person_Diseno" style="min-width:120px" class=" flex-1 tx-ls-1 "></div>
                    </div>

                    <div class="flex-xs2md-column flex-md2x-between flex-1 tx-xs flex-1 w-100" style="align-items: stretch">
                      <div id="person_Liderazgo" style="min-width:120px" class=" flex-1 tx-ls-1 "></div>
                      <div id="person_Curiosidad" style="min-width:120px" class=" flex-1 tx-ls-1 "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
          
        </div>
        
      </section>

      <section class="light wide pa-0" style="background: #020226;">
        <div class="flex-xl2x-row flex-column  pos-relative ceobox">
          <div class="show-lg_x" style="width:80px" > </div>
          <div class="flex-column flex-1  flex-align-start">
            <p class="pa-3 tx-start pb-0" style="line-height: 1.5em;  background: transparent; color: white; text-shadow: 0 0 25px #ffffff77;
            font-size: clamp(1rem, -0.875rem + 8.333vw, 2.1rem)">
              <span style="font-weight: 600;">
                Hola, soy Marelis M??ndez <br>
              </span>
              <small style="font-weight: 100;">
                CEO de Universo Arch??
              </small>
            </p>
            <p class="px-3 tx-sm mt-0">
                  Egresada de la escuela de formaci??n Bootcampvero, avalada por Vero Ruiz del Vizo.
                  Tengo certificado del IESA Global en campa??as publicitarias y estrat??gicas de mercadeo digital. 
            </p>
            <p class="px-3 tx-sm mt-0">
              Tambi??n realic?? la formaci??n avalada por la Consultora Internacional de Marketing Digital, Dra. Vilma N????ez a trav??s de su escuela ???Convierte M??s???.
            </p>
            <p class="px-3 tx-sm mt-0">
              Hoy, dirijo las operaciones de Universo Arch??, desarrollando la comunicaci??n digital de nuestros clientes, asesor??ndolos y acompa????ndolos en cada una de las etapas, hacia el posicionamiento de sus marcas. 
            </p>
          </div>

          <img data-ref="ceoimg" src="/assets/MARE.80a0c620.png" alt="" style="max-width: 75%; width: 500px" class="pos-absolute bottom-0 ">

          <div style="width: 500px" class="flex-column flex-1 pos-relative block">
          </div>
          <div class="flex-column flex-1 ">
                <p class="pa-3 " style="font-size: 1.7rem; line-height: 0.9; font-weight: 100;">
                  ???No soy especialista ni experta en nada. Me he preocupado por formarme y constantemente, actualizarme??? 
                </p>
          </div>
          <div class="show-lg_x" style="width:80px" > </div>
          <div class="show-xs_xl" style="height:500px" > </div>

        </div>
      </section>
      
      <div class="hidden block grid-column-12" style="height: 400px;"> 
        <div id="end"></div>
      </div>

      
      <blockquote class="forTitles" style="background: transparent;">
        <p style="line-height: 1.5em; padding: 10px; font-size: 3em; background: transparent; color: white; text-shadow: 0 0 25px #ffffff77">
          Nuestro mejor plan: hacer las cosas bien
        </p>
      </blockquote>

      <section class="light wide pa-0" style="background: #020226;" id="contact-form"> </section>

    </main>


    

    
    <!-- <script type="module" src="./vuelike.js"></script> -->
  </body>
</html>
